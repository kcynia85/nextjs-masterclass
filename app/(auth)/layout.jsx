import Link from "next/link"

const AuthLayout = ({ children }) => {
  return (
    <>
      <nav>
        <Link href="/">
          <h1>
              Serwis Expert HD
          </h1>
        </Link>
        <Link href="/signup">Sign up</Link>
        <Link href="/login">Login</Link>
      </nav>
      {children}
    </>
  )
}

export default AuthLayout