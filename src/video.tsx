import { useNavigate } from "react-router-dom";
import HomeIcon from "./icons/HomeIcon";
import ProfileIcon from "./icons/ProfileIcon";
import HeartIcon from "./icons/HeartIcon";
import CommentIcon from "./icons/CommentIcon";
import ShareIcon from "./icons/ShareIcon";
import MediaIcon from "./icons/MediaIcon";

const mock = {
  title: "Memory of Grandpa",
  url: "https://videos.pexels.com/video-files/4482083/4482083-uhd_1440_2732_25fps.mp4",
  reactions: {
    likes: 30,
    // comments is aggretated length of comments array
    shares: 45
  },
  comments: [
    {
      text: "I remember when he used to take me fishing",
      author: "John Doe"
    },
    {
      text: "Grandpa was a great ",
      author: "Jane Doe"
    },
    {
      text: "Grandpa was awesome",
      author: "James Adams"
    },
    {
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique nulla asperiores delectus nisi, totam quae. Minima, temporibus libero dignissimos sapiente dolorum aliquid illum ad necessitatibus molestias. Quaerat neque in delectus!",
      author: "Megan Wong",
    }
  ]
}


export default function VideoPage() {
  const navigate = useNavigate();
  const back = () => navigate(-1);
  return (
    <section className="bg-gray-900 text-white grid grid-rows-[50px,auto,90px] min-h-screen">
      {/* Header */}
      <div className="flex p-2 gap-2 sticky top-0 bg-gray-900 ">
        <span onClick={back}>&larr;</span>
        <h1 className="flex-1 text-center">{mock.title}</h1>
      </div>

      {/* Media, Comments, Reactions */}

      <div>
        <video controls height="200" className="h-[200px] w-full">
          <source src={mock.url} type="video/webm" />
        </video>
        <div className="flex gap-4 px-3 mb-4">

          <div className="flex gap-2 items-center">
            <HeartIcon fill="#fff" />
            <span>{mock.reactions.likes}</span>
          </div>

          <div className="flex gap-2 items-center">
            <CommentIcon />
            <span>{mock.comments.length}</span>
          </div>

          <div className="flex gap-2 items-center">
            <ShareIcon />
            <span> {mock.reactions.shares} </span>
          </div>

        </div>

        <ul className="grid text-sm">
          {mock.comments.map((comment) => (
            <li className="p-2 border-t border-gray-500">
              <p> {comment.text} </p>
              <span className="italic text-xs text-gray-400">{comment.author}</span>
            </li>
          ))}
        </ul>
      </div>


      {/* Footer */}
      <ul className="flex gap-2 p-2 bg-gray-800 text-gray-300 text-sm justify-around items-end sticky bottom-0 w-full">
        <li className="flex flex-col items-center">
          <HomeIcon />
          <span>Home</span>
        </li>
        <li className="flex flex-col items-center">
          <MediaIcon />
          <span>Memories</span>
        </li>
        <li className="flex flex-col items-center">
          <ProfileIcon />
          <span>Profile</span>
        </li>
      </ul>
    </section>
  )
}
