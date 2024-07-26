import HeartIcon from "./icons/HeartIcon";

export default function App() {
  return (
    <section className="bg-gray-900 text-white px-4">
      <div className="flex">
        <a href="#" className="text-2xl">&larr;</a>
        <h1 className="flex-1 text-center font-bold text-xl">Profile</h1>
      </div>
      <div className="rounded-full bg-gray-500 h-[176px] w-[176px]" />
      <h2 className="font-semibold text-lg">Megan Wong</h2>

      <h3 className="text-gray-400">
        Age 22, passed awaiy on 2/10/2020
      </h3>
      <p className="text-gray-400">View Profile</p>
      <div className="flex gap-4 my-6">
        <button className="bg-gray-700 capitalize rounded-xl p-2 px-4 font-bold">edit profile</button>
        <div className=" bg-blue-500 capitalize rounded-xl p-2 px-4 font-bold">Add Family</div>
      </div>


      <h3 className="text-lg font-bold my-4">Family</h3>
      <ul>
        <li className="flex items-center gap-4">
          <div className="p-3 bg-gray-700 w-10 h-10 rounded-lg" >
            <HeartIcon fill="#fff" />
          </div>
          <p className="font-semibold">Wife of James Wong</p>
        </li>
      </ul>

      <h3 className="my-6 text-xl font-bold">Photos and Videos</h3>

      <div className="grid gap-2 w-full h-[500px] grid-cols-4 grid-rows-3">
        <div className="bg-gray-300" />
        <div className="bg-gray-300" />
        <div className="bg-gray-300" />
        <div className="bg-gray-300" />
        <div className="bg-gray-300" />
      </div>

    </section>

  )
}


