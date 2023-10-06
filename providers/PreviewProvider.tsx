// ./nextjs-app/app/_components/PreviewProvider.tsx

"use client";

import dynamic from "next/dynamic";
import { suspend } from "suspend-react";

const LiveQueryProvider = dynamic(() => import("next-sanity/preview"));

// suspend-react cache is global, so we use a unique key to avoid collisions
const UniqueKey = Symbol("../sanity/lib/client");

export default function PreviewProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { client } = suspend(() => import("../sanity/lib/client"), [UniqueKey]);

  return <LiveQueryProvider client={client}>{children}</LiveQueryProvider>;
}
