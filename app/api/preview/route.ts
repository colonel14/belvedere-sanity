// ./nextjs-app/app/api/preview/route.ts

import { draftMode } from "next/headers";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export async function GET(): Promise<Response> {
  draftMode().enable();

  redirect("/");
}
