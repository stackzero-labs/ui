import { source } from "@/lib/source";
import {
  DocsPage,
  DocsBody,
  DocsDescription,
  DocsTitle,
  DocsCategory,
} from "fumadocs-ui/page";
import { notFound } from "next/navigation";
import defaultMdxComponents from "fumadocs-ui/mdx";
import { getMDXComponents } from "@/components/docs/mdx-components";
import { metadataImage } from "@/lib/metadata";
const StackzeroApiCta = () => {
  return (
    <div className="mt-6 flex flex-col gap-4 rounded-md border p-2">
      <h1 className="text-lg font-bold">Power your apps with stackzero API</h1>
      <p className="text-sm">
        Create a fully functional commerce website or apps in minutes with the
        official API integration.
      </p>
      {/* <ShimmerButton className="shadow-2xl">
        <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
          Deploy now
        </span>
      </ShimmerButton> */}
    </div>
  );
};

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;

  return (
    <DocsPage
      tableOfContent={{
        style: "clerk",
        single: false,
        footer: <StackzeroApiCta />,
      }}
      toc={page.data.toc}
      full={page.data.full}
    >
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        {/* <MDX components={{ ...defaultMdxComponents }} /> */}
        <MDX components={getMDXComponents({})} />
        {/* {page.data.index ? <DocsCategory page={page} from={source} /> : null} */}
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  return metadataImage.withImage(page.slugs, {
    title: page.data.title,
    description: page.data.description,
  });
}
