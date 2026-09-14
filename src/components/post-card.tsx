// A single post in the My Space feed: avatar, name, when it was posted,
// the text (and optional image), and a share button. No likes or
// comments — just a lightweight devlog-style feed.
import { ShareButton } from "@/components/share-button";
import { profile } from "@/data/profile";
import type { Post } from "@/data/posts";

// "Kiel Garcia" -> "KG", used as the avatar until a real photo exists
// (see profile.avatarUrl).
function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export function PostCard({ post }: { post: Post }) {
  return (
    <article id={post.id} className="flex gap-3 py-6">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-zinc-900 text-sm font-medium text-white dark:bg-zinc-100 dark:text-zinc-900">
        {getInitials(profile.name)}
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-baseline gap-2">
          <span className="font-semibold text-black dark:text-white">
            {profile.name}
          </span>
          <span className="text-sm text-zinc-400 dark:text-zinc-500">
            {post.postedAt}
          </span>
        </div>

        <p className="mt-1 whitespace-pre-wrap text-[15px] leading-6 text-zinc-700 dark:text-zinc-300">
          {post.content}
        </p>

        {post.image && (
          // eslint-disable-next-line @next/next/no-img-element -- plain
          // img is fine here: these are content images from data/posts.ts,
          // not build-time-known assets next/image needs to optimize.
          <img
            src={post.image}
            alt=""
            className="mt-3 max-h-96 w-full rounded-xl border border-zinc-100 object-cover dark:border-zinc-800"
          />
        )}

        <div className="mt-3">
          <ShareButton postId={post.id} text={post.content} />
        </div>
      </div>
    </article>
  );
}
