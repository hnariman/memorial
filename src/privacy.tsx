import { useNavigate } from "react-router-dom";

export default function Privacy() {
  const navigate = useNavigate();
  const back = () => navigate(-1);
  return (
    <section className="bg-gray-900 text-white p-4 min-h-screen">
      <div className="flex items-center justify-between">
        <span onClick={back} className="text-xl">&larr;</span>
        <h1 className="text-center flex-1 font-bold text-xl">
          Privacy Policy
        </h1>
      </div>
      <p className="text-xs">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta magni eveniet illo, maiores sint doloribus. Consectetur, nobis porro! Nulla explicabo rem rerum cumque libero quia possimus in ipsum a impedit, iusto repudiandae voluptatum esse omnis, recusandae porro accusantium aspernatur voluptatibus et. Ex incidunt doloremque autem dignissimos odio ab dolore. Atque deserunt autem ex earum asperiores libero facere doloribus. Tempora obcaecati odit eos distinctio nobis repellat praesentium sunt, quibusdam pariatur doloribus, unde laudantium sapiente illo est voluptas autem laboriosam, numquam expedita incidunt quam voluptatum dolores minus! Illum distinctio at explicabo adipisci exercitationem ex beatae cum temporibus voluptatem hic harum fuga expedita laudantium quibusdam vitae perspiciatis, facere reiciendis, ratione culpa aliquam non. Perferendis eum deserunt corrupti exercitationem dolorem. Et voluptate exercitationem reiciendis laboriosam ea suscipit eos, deleniti magni odio ratione iusto officiis voluptatum ducimus aliquid delectus molestias sint dolorem voluptates perferendis ad nobis? Quos quae tempore soluta et! Enim, alias aliquid tenetur, quaerat libero labore deserunt accusantium facilis sapiente eos quisquam nam consequuntur reiciendis aliquam fugit excepturi culpa perferendis pariatur error ratione! Cumque mollitia, nihil eius necessitatibus ea nostrum sequi iure consequatur. Beatae sint minus tempora tenetur ipsa incidunt animi magnam eveniet ipsam recusandae eius iusto, similique dignissimos modi doloremque sapiente hic.
      </p>
    </section>
  )
}
