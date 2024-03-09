import Link from 'next/link';
import { cookies } from "next/headers";
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';

const getTickets = async () => {
  const supabase = createServerComponentClient({ cookies });

  const { data, error } = await supabase
  .from("tickets")
  .select()

  if (error) {
    console.log(error);
  } else {
    return data;
  }
};

const TicketList = async () => {
  const tickets = await getTickets();

  return (
    <>
      {tickets.map(({ id, title, body, priority }) => (
        <div key={id} className="card my-5">
          <h3>{title}</h3>
          <p>{body.slice(0, 200)}...</p>
          <Link href={`/tickets/${id}`}>
            <button className="btn-primary">View Ticket</button>
          </Link>
          <div className={`pill ${priority}`}>
            {priority} priority
          </div>
        </div>
      ))}
      {tickets.length === 0 && (
        <p className="text-center">There are no open tickets, yay!</p>
      )}
    </>
  );
};

export default TicketList;