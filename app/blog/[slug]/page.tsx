import { getPostBySlug } from "@/lib/posts";
import ShareButtons from "@/components/ShareButtons";

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) return <div>Post not found</div>;
  return (
    <article className="prose max-w-none py-8">
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
      <ShareButtons title={post.title} />
    </article>
  );
}