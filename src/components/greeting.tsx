// A friendly, time-of-day-specific greeting shown above the visitor's name
// in the Hero section. Needs to be a Client Component because it depends
// on the visitor's local time — the server rendering this page has no
// idea what timezone they're in, only their own browser does.
"use client";

import { useEffect, useState } from "react";

// `new Date().getHours()` in the browser already returns the hour (0-23)
// in the visitor's own timezone, no timezone math needed — this just maps
// that hour to one of a set of specific greetings, each covering a small
// window of the day so it feels less like a generic "Good morning/
// afternoon/evening" and more like it's actually reacting to the time.
function greetingForHour(hour: number) {
  if (hour < 2) return "Hey, night owl! 🦉";
  if (hour < 4) return "At this hour? You must have an idea. 💡";
  if (hour < 6) return "Good morning, early bird!";
  if (hour < 10) return "Hey, good morning!";
  if (hour < 12) return "Hey, how's your morning going?";
  if (hour < 13) return "Good afternoon — let's make something cool.";
  if (hour < 17) return "Good afternoon! 👋";
  if (hour < 23) return "Hey, good evening!";
  return "Looks like it's a late one. 😄";
}

export function Greeting() {
  // Starts null so the server-rendered markup and the client's very first
  // render match exactly — the server can't know the visitor's local
  // time, so it can't render the real greeting. The actual greeting is
  // filled in right after mount instead, once the browser's clock is
  // available (same "start neutral, fill in after mount" pattern
  // ThemeProvider uses for the saved theme).
  const [greeting, setGreeting] = useState<string | null>(null);

  useEffect(() => {
    setGreeting(greetingForHour(new Date().getHours()));
  }, []);

  return <>{greeting ?? "Hi there!"}</>;
}
