import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export const GET = async () => {
  const res = await fetch("http://localhost:4000/tickets");

  const tickets = await res.json();

  return NextResponse.json(tickets, {
    status: 200,
  });
};

export const POST = async (request) => {
  const ticket = await request.json();

  const res = await fetch("http://localhost:4000/tickets", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(ticket),
  });

  const newTicket = await res.json();

  return NextResponse.json(newTicket, {
    status: 201,
  });
};
