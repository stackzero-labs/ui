import { ComponentLoader } from "@/components/docs/component-loader";
import { Button } from "@/components/ui/button";
import { registry } from "@/registry";
import Link from "next/link";
import { notFound } from "next/navigation";
// Arrays to categorize components
const NOT_CENTERED_COMPONENTS: string[] = [];

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

    // Check if component should not be centered
    const shouldNotCenter = NOT_CENTERED_COMPONENTS.some((component) =>
      componentName.startsWith(component)
    );

    return shouldNotCenter ? (
      <ComponentLoader name={componentName} hasReTrigger={false} />
    ) : (
      <>
        <header className="fixed top-0 left-0 z-10 flex w-full items-center justify-between gap-4 border-b border-neutral-800 bg-neutral-950 p-4 shadow-md">
          <div>
            <Button asChild size="sm" variant="default">
              <Link href={`/docs`}>Back to Docs</Link>
            </Button>
          </div>

          <div className="grow-0">
            <p className="font-mono">{componentName}</p>
          </div>

          <p>Commerce UI</p>
        </header>
        <div className="h-screen bg-neutral-950" style={{ height: "100vh" }}>
          <div className="container flex h-full items-center justify-center">
            <ComponentLoader name={componentName} hasReTrigger={false} />
          </div>
        </div>
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
