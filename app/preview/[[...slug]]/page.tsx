import { ComponentLoader } from "@/components/docs/component-loader";
import { registry } from "@/registry";
import { notFound } from "next/navigation";
// Arrays to categorize components
const NOT_CENTERED_COMPONENTS: string[] = ["product-variant-02-block"];

export default async function PreviewPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  if (!slug.length) return notFound();
  const componentName = slug.join("/");

  try {
    // Check if component should not be centered
    const shouldNotCenter = NOT_CENTERED_COMPONENTS.some((component) =>
      componentName.startsWith(component)
    );

    return shouldNotCenter ? (
      <>
        <div>
          <div className="container my-12 flex h-full items-center justify-center">
            <ComponentLoader
              name={componentName}
              hasReTrigger={true}
              isPreview={true}
            />
          </div>
        </div>
      </>
    ) : (
      <>
        <>
          <div className="container flex h-screen items-center justify-center">
            <ComponentLoader
              name={componentName}
              hasReTrigger={true}
              isPreview={true}
            />
          </div>
        </>
      </>
    );
  } catch (error) {
    console.error("error", error);
    return notFound();
  }
}

export async function generateStaticParams() {
  // registry.forEach((component) => {
  //   console.log("component", component.name);
  // });

  const allComponents = registry.map((component) => {
    return { slug: [component.name] };
  });

  return allComponents;
}
