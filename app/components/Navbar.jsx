import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <Link href="/">
      <h1>
          Serwer Expert HD
       </h1>
      </Link>
      <Link href="/">Dashboard</Link>
      <Link href="/tickets">Tickets</Link>
  </nav>
  )
};

export default Navbar;