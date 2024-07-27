export default function Registration1() {
  return (
    <section className="bg-gray-900 p-4 text-white h-screen" >
      <h1 className="font-bold text-xl text-center" >
        Welcome to the Family Room
      </h1>

      <p className="text-center">
        We're here to help you remember and celebrate your loved ones.
      </p>

      <form action="">
        <input type="text" name="first" id="first" placeholder="First name" />
        <input type="text" name="last" id="last" placeholder="Last name" />
      </form>
    </section>
  )
}
