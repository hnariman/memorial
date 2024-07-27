
import BookIcon from "./icons/BookIcon";
import MemoriesIcon from "./icons/MemoriesIcon";
import UploadIcon from "./icons/UploadIcon";

export default function Login() {
  return (
    <section className="p-2 bg-white min-w-[400px]">

      <img
        className="rounded-2xl h-[150px] md:h-[480px] w-full object-cover my-5"
        height="480px"
        src="https://cdn.usegalileo.ai/sdxl10/4b4e0f02-e9e1-4153-851e-1b6358464653.png" alt="family drawing" />

      <h1 className="text-center text-2xl font-bold">
        Your family's digital memory gallery
      </h1>

      <p className="text-center w-3/4 text-md mx-auto mt-4">
        Experience the memories of your loved ones with photos, videos and stories.
        Share with your family to keep the memories alive.
      </p>

      <aside className="p-4 select-none">
        <div className="flex gap-2">
          <div className="h-12 w-12 bg-slate-200 rounded-lg p-3 mb-2" >
            <MemoriesIcon />
          </div>
          <div>
            <h3 className="font-semibold">Upload</h3>
            <p className="text-cyan-900 text-sm">
              Add photos, videos and stories</p>
          </div>
        </div>

        <div className="flex gap-2 select-none ">
          <div className="h-12 w-12 bg-slate-200 rounded-lg p-3 mb-2">
            <UploadIcon />
          </div>
          <div>
            <h3 className="font-semibold">
              Memories
            </h3>
            <p className="text-cyan-900 text-sm">
              View and share memories
            </p>
          </div>
        </div>

        <div className="flex gap-2 select-none">
          <div className="h-12 w-12 bg-slate-200 rounded-lg p-3 mb-2">
            <BookIcon />
          </div>
          <div>
            <h3 className="font-semibold">
              Stories
            </h3>
            <p className="text-cyan-900 text-sm">
              Read and write stories
            </p>
          </div>
        </div>

        <button
          className="rounded-3xl bg-blue-500 text-white p-2 px-auto w-3/4 font-semibold">
          Sign Up
        </button>
      </aside>

    </section >


  )
}
