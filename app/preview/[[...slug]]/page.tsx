import { ComponentLoader } from "@/components/docs/component-loader";
import { registry } from "@/registry";
import { notFound } from "next/navigation";

export default async function PreviewPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  if (!slug.length) return notFound();
  const componentName = slug.join("/");

  try {
    const isPage = componentName.includes("page");
    return isPage ? (
      <div>
        <div className="container my-12 flex h-full items-center justify-center">
          <ComponentLoader
            name={componentName}
            hasReTrigger={true}
            isPreview={true}
          />
        </div>
      </div>
    ) : (
      <div className="container flex h-screen items-center justify-center">
        <ComponentLoader
          name={componentName}
          hasReTrigger={true}
          isPreview={true}
        />
      </div>
    );
  } catch (error) {
    console.error("error", error);
    return notFound();
  }
}

export async function generateStaticParams() {
  const allComponents = registry.map((component) => {
    return { slug: [component.name] };
  });

  return allComponents;
}
