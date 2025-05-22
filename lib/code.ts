import { promises as fs } from "fs";
import path from "path";
import { codeToHtml } from "@/lib/shiki";
import { getComponentByName } from "@/registry";
import "../registry/";
import { SourceCodes } from "@/types/component";

// Helper function to extract extension from component name
function extractExtension(componentName: string): {
  baseName: string;
  lang: string;
} {
  const match = componentName.match(/^(.+)\.([^.]+)$/);
  if (match) {
    return { baseName: match[1], lang: match[2] };
  }
  return { baseName: componentName, lang: "tsx" }; // Default to tsx if no extension found
}

export async function extractMultipleSourceCodes(
  componentNames: string[]
): Promise<SourceCodes> {
  const basePath = path.join(process.cwd());
  const results: SourceCodes = {};

  for (const componentName of componentNames) {
    const { baseName, lang } = extractExtension(componentName);
    const component = getComponentByName(baseName);

    if (!component) {
      const errorMsg = `// Component ${baseName} not found in registry`;
      results[componentName] = {
        code: errorMsg,
        highlightedCode: await codeToHtml({ code: errorMsg, lang }),
      };
      continue;
    }

    if (!component.files || component.files.length === 0) {
      const errorMsg = `// No source files defined for component ${baseName}`;
      results[componentName] = {
        code: errorMsg,
        highlightedCode: await codeToHtml({ code: errorMsg, lang }),
      };
      continue;
    }

    const componentFile = component.files[0];

    if (!componentFile || !componentFile.path) {
      const errorMsg = `// No valid source file found for component ${baseName}`;
      results[componentName] = {
        code: errorMsg,
        highlightedCode: await codeToHtml({ code: errorMsg, lang }),
      };
      continue;
    }

    // Remove the '@' from the path if it exists
    const sanitizedFilePath = componentFile.path.replace(/^@/, "");

    const fullPath = path.join(basePath, sanitizedFilePath);

    try {
      const code = await fs.readFile(fullPath, "utf8");
      const highlightedCode = await codeToHtml({ code, lang });
      results[componentName] = { code, highlightedCode };
    } catch (error) {
      const errorMsg = `// Failed to read source code for ${baseName}\n// Path attempted: ${fullPath}\n// Error: ${
        error instanceof Error ? error.message : "Unknown error"
      }`;
      results[componentName] = {
        code: errorMsg,
        highlightedCode: await codeToHtml({ code: errorMsg, lang }),
      };
    }
  }

  return results;
}

// Keep the original function for backward compatibility
export async function extractSourceCode(
  componentName: string
): Promise<{ code: string; highlightedCode: string }> {
  const results = await extractMultipleSourceCodes([componentName]);
  return results[componentName];
}
