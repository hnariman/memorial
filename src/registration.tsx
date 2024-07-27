import EmailIcon from "./icons/EmailIcon";
import FirstNameIcon from "./icons/FirstNameIcon";
import LastNameIcon from "./icons/LastNameIcon";
import PasswordIcon from "./icons/PasswordIcon";

export default function Registration() {
  return (
    <section className="text-center p-4 bg-gray-900 h-screen">
      <img
        className="h-[120px] w-full object-cover rounded-xl"
        src="https://cdn.usegalileo.ai/sdxl10/38d92afb-14e5-46dd-97b0-69b3538a833c.png"
        alt="family drawn" />

      <h1 className="text-lg font-bold text-white my-4">
        Welcome to the Family Room
      </h1>

      <p className="text-white">
        We're here to help you remember and celebrate your loved ones.
      </p>

      <form action="" className="grid gap-4 my-4 md:w-7/12">
        <label htmlFor="first"
          className="flex relative rounded-xl px-3 bg-gray-700 items-center justify-between">
          <input
            type="text"
            name="first"
            placeholder="First name"
            id="first"
            className="rounded-xl p-4 bg-gray-700 text-white outline-none w-full"
          />
          <FirstNameIcon width={24} fill="#888" />
        </label>

        <label htmlFor="last"
          className="flex relative rounded-xl  px-3 bg-gray-700 items-center justify-between"
        >
          <input
            type="text"
            name="last"
            placeholder="Last name"
            id="last"
            className="rounded-xl p-4 bg-gray-700 text-white outline-none w-full"
          />
          <LastNameIcon width={24} fill="#888" />
        </label>

        <label htmlFor=""
          className="flex relative rounded-xl  px-3 bg-gray-700 items-center justify-between"
        >
          <input
            type="email"
            name="email"
            placeholder="Email address"
            id="email"
            className="rounded-xl p-4 bg-gray-700 text-white outline-none w-full"
          />
          <EmailIcon width={24} fill="#888" />
        </label>

        <label htmlFor=""
          className="flex relative rounded-xl  px-3 bg-gray-700 items-center justify-between"
        >
          <input
            type="password"
            name="pass"
            id="pass"
            placeholder="Password"
            className="rounded-xl p-4 bg-gray-700 text-white outline-none w-full "
          />
          <PasswordIcon width={24} fill="#888" />
        </label>

      </form>
      <button
        className="
          rounded-xl 
          block 
          bg-blue-500 
          text-white 
          font-bold 
          p-2 
          px-4 
          m-auto
          my-4
        w-full
          "
      >
        Next
      </button>

      <a href="/signin" className="font-bold text-sm underline text-gray-500 ">
        Sign-in instead
      </a>

    </section>
  )
}
