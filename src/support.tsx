import { useNavigate } from "react-router-dom";

export default function Support() {

  const navigate = useNavigate();
  const back = () => navigate(-1);
  return (
    <section className="bg-gray-900 text-white p-4 min-h-screen">
      <div className="flex items-center justify-between">
        <span onClick={back} className="text-xl">&larr;</span>
        <h1 className="text-center flex-1 font-bold text-xl">
          Support Information:
        </h1>
      </div>
      <p className="text-sm">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio ad ipsa voluptates veniam dolore? Sit natus atque possimus aliquid ullam pariatur assumenda harum accusantium suscipit minima laudantium repellat ducimus nesciunt impedit, reprehenderit fugiat quam repudiandae! Deleniti, corrupti, unde ducimus, iusto excepturi molestias cupiditate incidunt nobis perferendis voluptate ab. Officiis ipsam, suscipit adipisci rem molestias facilis distinctio, perferendis tempore voluptate similique debitis magnam porro saepe quis ipsum perspiciatis exercitationem. Repudiandae nobis, aspernatur mollitia possimus deleniti voluptatibus delectus ipsum. Corporis optio modi, iusto nam harum eum expedita inventore odit dicta. Cupiditate aliquid recusandae cum nam nostrum accusamus vel ab ad voluptatum sed?</p>
    </section>
  )
}
