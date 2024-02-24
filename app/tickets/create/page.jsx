import CreateTicketForm from './CreateForm'

export default async function CreateTicket() {
  return (
    <main>
      <h2 className="text-center">Open a New Ticket</h2>
      <CreateTicketForm />
    </main>
  )
}