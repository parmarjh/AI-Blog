import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function HomePage() {
  const posts = getAllPosts();
  return (
    <main className="space-y-8 py-8">
      <h1 className="text-3xl font-bold">My Blog</h1>
      <div className="grid gap-6">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <div className="block p-4 border rounded hover:shadow-lg">
              <h2 className="text-xl font-semibold">{post.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}