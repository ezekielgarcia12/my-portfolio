// The posts shown on the My Space page ("/my-space") — a Threads-style
// feed. It's a stand-in for a real database — see AGENTS.md, Phase 1 has
// no backend. Add a new object to the top of this array to post something
// new (newest first).

export type Post = {
  id: string;
  content: string;
  // Display text for when this was posted — just a plain string since
  // there's no backend to compute "3h ago" from a real timestamp yet.
  postedAt: string;
  // Optional image for the post. Path to a file under public/, e.g.
  // "/images/posts/my-photo.jpg" — drop the file there and point this at
  // it.
  image?: string;
};

export const posts: Post[] = [
  {
    id: "3",
    content:
      "Finally added a Projects page with real cards instead of a wall of text. Small win, but it feels good.",
    postedAt: "2h ago",
  },
  {
    id: "2",
    content:
      "Rebuilt this whole site's theme system today — light, dark, and system, all synced to localStorage. Little things like this are oddly satisfying to get right.",
    postedAt: "1d ago",
  },
  {
    id: "1",
    content: "Just set up this site. This is where I'll drop random updates, notes, and progress shots as I build things — think of it as a devlog.",
    postedAt: "3d ago",
  },
];
