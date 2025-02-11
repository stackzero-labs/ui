import { BlogTitle, Control } from "@/app/(home)/blog/[slug]/page.client";
import { getBlogMDXComponents } from "@/components/docs/mdx-components";
import { ScrollProgress } from "@/components/docs/scroll-progress";
import { siteConfig } from "@/config/site";
// import { createMetadata } from "@/lib/metadata";
import { blog } from "@/lib/source";
import { InlineTOC } from "fumadocs-ui/components/inline-toc";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export default async function Page(props: {
  params: Promise<{ slug: string }>;
}): Promise<React.ReactElement> {
  const params = await props.params;
  const page = blog.getPage([params.slug]);

  if (!page) notFound();

  return (
    <>
      <ScrollProgress className="top-[56px] container" />
      <BlogTitle title={page.data.title} description={page.data.description} />
      <article className="container flex flex-col px-0 py-8 lg:flex-row lg:px-4">
        <div className="prose min-w-0 flex-1 p-4">
          <InlineTOC items={page.data.toc} />
          <page.data.body components={getBlogMDXComponents({})} />
        </div>
        <div className="flex flex-col gap-4 border-l p-4 text-sm lg:w-[250px]">
          <div>
            <p className="text-fd-muted-foreground mb-1">Written by</p>
            <p className="font-medium">{page.data.author}</p>
          </div>
          <div>
            <p className="text-fd-muted-foreground mb-1 text-sm">At</p>
            <p className="font-medium">
              {new Date(page.data.date ?? page.file.name).toDateString()}
            </p>
          </div>
          <Control url={page.url} />
        </div>
      </article>
    </>
  );
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const page = blog.getPage([params.slug]);

  if (!page) notFound();
  const description = page.data.description ?? siteConfig.description;

  // return createMetadata({
  //   title: page.data.title,
  //   description,
  // });

  return {
    description,
    title: page.data.title,
  };
}

export function generateStaticParams(): { slug: string }[] {
  return blog
    .getPages()
    .map((page) => page.slugs[0])
    .filter((slug): slug is string => slug !== undefined)
    .map((slug) => ({
      slug,
    }));
}
