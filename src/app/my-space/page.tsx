// My Space page ("/my-space").
// A lightweight, Threads-style feed of posts from src/data/posts.ts —
// text (and optionally an image), no likes or comments, just a share
// button. Add new entries to the top of that array to post something.

import { PostCard } from "@/components/post-card";
import { posts } from "@/data/posts";

export default function MySpacePage() {
  return (
    <div className="flex-1 px-6 py-20 sm:px-16">
      <div className="mx-auto max-w-xl">
        <p className="text-sm font-medium tracking-wide text-red-600 dark:text-red-400">
          My Space
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-black dark:text-white">
          Updates &amp; Thoughts
        </h1>
        <p className="mt-4 text-base leading-7 text-zinc-500 dark:text-zinc-400">
          A running feed of whatever I&apos;m building, learning, or thinking about.
        </p>

        <div className="mt-8 divide-y divide-zinc-100 border-t border-zinc-100 dark:divide-zinc-900 dark:border-zinc-900">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
