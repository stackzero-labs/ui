import { blog } from "@/lib/source";
import Link from "next/link";

export default function Page(): React.ReactElement {
  const posts = [...blog.getPages()].sort(
    (a, b) =>
      new Date(b.data.date ?? b.file.name).getTime() -
      new Date(a.data.date ?? a.file.name).getTime()
  );

  return (
    <main className="container py-2 max-sm:px-2 md:py-12">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-3 lg:grid-cols-4">
        {posts.map((post) => (
          <Link
            key={post.url}
            href={post.url}
            className="bg-fd-card hover:bg-fd-accent hover:text-fd-accent-foreground flex flex-col rounded-xl border p-4 transition-colors"
          >
            <p className="font-medium">{post.data.title}</p>
            <p className="text-fd-muted-foreground text-sm">
              {post.data.description}
            </p>

            <p className="text-fd-muted-foreground mt-auto pt-4 text-xs">
              {new Date(post.data.date ?? post.file.name).toDateString()}
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}
