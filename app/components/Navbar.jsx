import Link from 'next/link';
import {LogoutButton} from './LogoutButton';

const Navbar = ({ user }) => {  
  return (
    <nav>
      <Link href="/">
      <h1>
          Serwer Expert HD
       </h1>
      </Link>
      <Link href="/">Dashboard</Link>
      <Link href="/tickets" className="mr-auto">Tickets</Link>
      {user && <span>Hello, {user.email}</span>}
      <LogoutButton />
  </nav>
  )
};

export default Navbar;