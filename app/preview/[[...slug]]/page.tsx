import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import { ComponentLoader } from "@/components/docs/component-loader";
import { source } from "@/lib/source";
import { registry } from "@/registry";
// Arrays to categorize components
const CENTERED_COMPONENTS = [
  "face-rating",
  // Add more small components here
];

// const FULL_WIDTH_COMPONENTS = ["hero"];

export default async function PreviewPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  if (!slug.length) return notFound();
  const componentName = slug.join("/");

  try {
    // const Component = dynamic(
    //   () =>
    //     import(`@/components/commerceui/${componentName}`).catch(() =>
    //       notFound()
    //     ),
    //   { ssr: true }
    // );

    // Check if component should be centered
    const shouldCenter = CENTERED_COMPONENTS.some((component) =>
      componentName.startsWith(component)
    );

    return shouldCenter ? (
      <div className="flex min-h-screen items-center justify-center">
        <ComponentLoader name={componentName} hasReTrigger={false} />
      </div>
    ) : (
      <ComponentLoader name={componentName} hasReTrigger={false} />
    );
  } catch (error) {
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
