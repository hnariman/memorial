
const links = [
  { href: '/profile', label: 'profile' },
  { href: '/register', label: 'register' },
  { href: '/signin', label: 'Sign In' },
  { href: '/login', label: 'login' },
  { href: '/user', label: 'user' },
  { href: '/add-memory', label: 'add-memory' },
  { href: '/video', label: 'video page' },
]

export default function App() {
  return (
    <section className="bg-gray-900 h-screen text-white p-4">
      <h1 className="text-center font-bold text-xl">Pages list:</h1>

      <ul className="grid gap-2 ">
        {links.map(({ href, label }) => (
          <li
            key={`${href}${label}`}
            className="hover:opacity-70 capitalize">
            <a href={href}> {label} </a>
          </li>
        ))}
      </ul>
    </section>
  )
}


