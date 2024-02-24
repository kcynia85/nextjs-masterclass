import Link from 'next/link';
import { notFound } from "next/navigation"

export const dynamicParams = true;

export const generateStaticParams = async () => {
  const res = await fetch("http://localhost:4000/tickets");

  const tickets = await res.json();

  return tickets.map((ticket) => ({
    id: ticket.id,
  }));
};

const getTicket = async (id) => {
  
  const res = await fetch(`http://localhost:4000/tickets/${id}`, {
    next: {
      revalidate: 60 // use 0 to opt out of using cache
    }
  });

  if (!res.ok) {
    notFound();
  }

  return res.json();
}

const TicketDeatils = async ({ params }) => {
  const ticket = await getTicket(params.id);

  return (
    <main>
      <nav>
        <h2>Ticket Details</h2>
      </nav>
      <div className="card">  
      <h3>{ticket.title}</h3>
      <p>{ticket.body}</p>
      <div className={`pill ${ticket.priority}`}>
        {ticket.priority} priority
        </div>
        <div className="flex justify-center my-8">
          <Link href={`/tickets/${ticket.id}/edit`}>
            <button className="btn-primary">Edit Ticket</button>
          </Link>
          <Link href="/tickets">
            <button className="btn-primary">Back to Tickets</button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default TicketDeatils;