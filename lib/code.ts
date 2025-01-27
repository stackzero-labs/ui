import { promises as fs } from "fs";
import path from "path";
import { codeToHtml } from "@/lib/shiki";
import { getComponentByName } from "@/registry";
import "../registry/";
export async function extractSourceCode(
  componentName: string
): Promise<{ code: string; highlightedCode: string }> {
  //   const basePath = path.join(
  //     process.cwd(),
  //     "..",
  //     "..",
  //     "packages",
  //     "ui",
  //     "src"
  //   );
  const basePath = path.join(process.cwd());

  const component = getComponentByName(componentName);

  if (!component) {
    const errorMsg = "// Component not found in registry";
    return {
      code: errorMsg,
      highlightedCode: await codeToHtml({ code: errorMsg, lang: "tsx" }),
    };
  }

  if (!component.files || component.files.length === 0) {
    const errorMsg = "// No source files defined for this component";
    return {
      code: errorMsg,
      highlightedCode: await codeToHtml({ code: errorMsg, lang: "tsx" }),
    };
  }

  const componentFile = component.files[0];

  if (!componentFile || !componentFile.path) {
    const errorMsg = "// No valid source file found for this component";
    return {
      code: errorMsg,
      highlightedCode: await codeToHtml({ code: errorMsg, lang: "tsx" }),
    };
  }

  // Remove the '@' from the path if it exists
  const sanitizedFilePath = componentFile.path.replace(/^@/, "");

  const fullPath = path.join(basePath, sanitizedFilePath);

  try {
    const code = await fs.readFile(fullPath, "utf8");
    const highlightedCode = await codeToHtml({ code, lang: "tsx" });
    return { code, highlightedCode };
  } catch (error) {
    const errorMsg = `// Failed to read source code for ${componentName}\n// Path attempted: ${fullPath}\n// Error: ${
      error instanceof Error ? error.message : "Unknown error"
    }`;
    return {
      code: errorMsg,
      highlightedCode: await codeToHtml({ code: errorMsg, lang: "tsx" }),
    };
  }
}
