import { useNavigate } from "react-router-dom";

export default function AddMemory() {
  const navigate = useNavigate();
  return (
    <section className="bg-gray-900 p-4 text-white">
      <div className="py-8 flex justify-center">
        <button
          className="text-xl"
          onClick={() => navigate(-1)}
        >
          &#10005;
        </button>
        <h1 className="text-xl flex-1 font-bold text-center">Add a new memory</h1>
      </div>
      <img
        className="h-[400px] w-full object-cover rounded-xl"
        src="https://cdn.usegalileo.ai/sdxl10/cdeab347-08a9-48b6-b5e2-ae515473d98e.png"
        alt="family on the beach"
      />

      {/* form */}

      <form action="" className="grid py-8 gap-6">
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Title"
          className="rounded-xl p-4 bg-gray-700 text-white outline-none w-full"
        />
        <textarea
          name="description"
          id="description"
          placeholder="Description"
          className="rounded-xl p-4 bg-gray-700 text-white outline-none w-full h-48"
        />

        <p className="text-gray-500">
          By uploading, you confirm that you have the right to share this content with us and to use it for all purposes. You also agree to our Terms of Service.
        </p>


      </form>
      <p className="text-lg">Uploading</p>
      <Loading percent={50} />
      <p className="text-gray-500">50%</p>
      <button className="rounded-xl bg-blue-500 text-white font-bold text-xl p-3 w-1/2 mt-6">
        Upload
      </button>

    </section>

  )
}

const Loading = ({ percent }: { percent: number }) => (
  <div className="h-2 my-3 relative bg-gray-700 rounded-full w-10/12">
    <div className="h-2 rounded-full bg-gray-500 w-1/2" />
  </div>
)
