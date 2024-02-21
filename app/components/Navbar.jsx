import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <h1>
        Serwer Expert Ticket
      </h1>
      <Link href="/">Dashboard</Link>
      <Link href="/tickets">Tickets</Link>
  </nav>
  )
};

export default Navbar;