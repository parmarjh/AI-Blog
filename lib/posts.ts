export interface Post {
  slug: string;
  title: string;
  contentHtml: string;
}

const examplePosts: Post[] = [
  { slug: "hello-world", title: "Hello World", contentHtml: "<p>This is a test post.</p>" },
];

export function getAllPosts(): Post[] {
  return examplePosts;
}

export function getPostBySlug(slug: string): Post | null {
  return examplePosts.find((p) => p.slug === slug) ?? null;
}