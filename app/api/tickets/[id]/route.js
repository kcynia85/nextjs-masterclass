import { NextResponse } from "next/server";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const DELETE = async (_, { params }) => {
  const id = params.id;

  const supabase = createRouteHandlerClient({ cookies });

  const { error } = await supabase.from("tickets").delete().eq("id", id);

  return NextResponse.json({ error });
};

export { DELETE };
