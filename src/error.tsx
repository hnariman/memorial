import { useNavigate, useRouteError } from "react-router-dom";

type Err = { statusText: string; } | { message: string; };

export default function ErrorPage() {
  const error: Err = useRouteError();
  const navigate = useNavigate();
  console.error(error);

  return (
    <div id="error-page" className="bg-gray-900 text-white h-screen flex flex-col p-8">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <button
        onClick={() => navigate(-1)}
        className="rounded-full mt-10 bg-blue-500 p-2 px-4 text-white">
        Back
      </button>
    </div>
  );
}
