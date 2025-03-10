import {
  BlogTitle,
  BlogTOC,
  Control,
} from "@/app/(home)/blog/[slug]/page.client";
import { getBlogMDXComponents } from "@/components/docs/mdx-components";
import { ScrollProgress } from "@/components/docs/scroll-progress";
import { siteConfig } from "@/config/site";
import { metadataImageBlog } from "@/lib/metadata";
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
      {" "}
      <ScrollProgress className="top-[56px] container" />
      <BlogTitle
        title={page.data.title}
        description={page.data.description}
        author={page.data.author}
        date={page.data.date}
        name={page.file.name}
      />
      <article className="container flex flex-col px-0 lg:flex-row lg:px-4 lg:py-8">
        <div className="min-w-0 flex-1 p-4">
          <InlineTOC items={page.data.toc} className="mb-4 block lg:hidden" />
          <div className="prose">
            <page.data.body components={getBlogMDXComponents({})} />
          </div>
        </div>

        <div className="flex max-w-[200px] flex-grow flex-col">
          <div className="sticky top-[150px] flex flex-col gap-4 p-4 text-sm lg:w-[250px]">
            <BlogTOC />
            <Control url={page.url} />
          </div>
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

  // return {
  //   description,
  //   title: page.data.title,
  // };
  return metadataImageBlog.withImage(page.slugs, {
    title: page.data.title,
    description: description,
  });
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
