import Link from 'next/link';
import { notFound } from "next/navigation";
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from "next/headers";
import DeleteButton from './DeleteButton';

export const dynamicParams = true;

export const generateMetadata = async ({params}) => {
 const supabase = createServerComponentClient({ cookies });

 const { data: ticket } = await supabase
 .from("tickets")
 .select()
 .eq("id", params.id)
 .single();

 return {
  title: `Serwis Expert  HD | ${ticket.title || "Ticket not found"}`
 };

};


const getTicket = async (id) => {
  const supabase = createServerComponentClient({ cookies });

  const { data } = await supabase
  .from("tickets")
  .select()
  .eq("id", id)
  .single()

  if (!data) {
    notFound();
  }

  return data
}

const TicketDetails = async ({ params }) => {
  const ticket = await getTicket(params.id);

  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.auth.getSession();
  
  return (
    <>

    <main>
      <nav>
        <h2>Ticket Details</h2>
        <div className="ml-auto">
          {data.session.user.email === ticket.user_email && (
            <DeleteButton id={ticket.id} />
          )}
        </div>
      </nav>
      <div className="card">  
      <h3>{ticket.title}</h3>
      <small>Created by {ticket.user_email} </small>
      <p>{ticket.body}</p>
      <div className={`pill ${ticket.priority}`}>
        {ticket.priority} priority
        </div>
        <div className="flex justify-center my-8">
          <Link href="/tickets">
            <button className="btn-primary">Back to Tickets</button>
          </Link>
        </div>
      </div>
    </main>
    </>
  );
};

export default TicketDetails;