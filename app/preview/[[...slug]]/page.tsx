import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import { ComponentLoader } from "@/components/docs/component-loader";
import { source } from "@/lib/source";
import { registry } from "@/registry";
import { Button } from "@/components/ui/button";
import Link from "next/link";
// Arrays to categorize components
const CENTERED_COMPONENTS = [
  "face-rating",
  "upvote-downvote-rating",
  "star-rating",
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
      <>
        <header className="fixed left-0 top-0 z-10 flex w-full items-center justify-between gap-4 border-b border-neutral-800 bg-neutral-950 p-4 shadow-md">
          <div>
            <Button asChild size="sm" variant="default">
              <Link href={`/docs`}>Back to Docs</Link>
            </Button>
          </div>

          <div className="grow-0">
            <p className="font-mono">{componentName}</p>
          </div>

          <p>Stackzero UI</p>
        </header>
        <div className="h-screen bg-neutral-950" style={{ height: "100vh" }}>
          <div className="flex h-full items-center justify-center">
            <ComponentLoader name={componentName} hasReTrigger={false} />
          </div>
        </div>
      </>
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
