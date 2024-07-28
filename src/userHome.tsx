import HomeIcon from "./icons/HomeIcon";
import MediaIcon from "./icons/MediaIcon";
import NotificationsIcon from "./icons/NotificationsIcon";
import ProfileIcon from "./icons/ProfileIcon";
import SearchIcon from "./icons/SearchIcon";
import React from "react";

const footerItems = [
  {
    icon: <HomeIcon />,
    text: "Home",
    href: "#",
  },
  {
    icon: <SearchIcon />,
    text: "Search",
    href: "#",
  },
  {
    icon: <ProfileIcon />,
    text: "Profile",
    href: "/profile",
  },
  {
    icon: <NotificationsIcon />,
    text: "Notifications",
    href: "#",
  },
  {
    icon: <MediaIcon />,
    text: "Upload",
    href: "/upload"
  },
];

const mock = {
  photos: [
    {
      href: "https://images.unsplash.com/photo-1576089073624-b5751a8f4de9?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      href: "https://images.unsplash.com/photo-1560066432-efb83eb5f272?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }, {
      href: "https://images.unsplash.com/photo-1570784654060-0f1c45ef51c0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    { href: "https://images.unsplash.com/photo-1576089073624-b5751a8f4de9?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { href: "https://images.unsplash.com/photo-1576089073624-b5751a8f4de9?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { href: "https://images.unsplash.com/photo-1576089073624-b5751a8f4de9?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },

  ],
  videos: [
    { href: "https://images.unsplash.com/photo-1570784654060-0f1c45ef51c0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { href: "https://images.unsplash.com/photo-1570784654060-0f1c45ef51c0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { href: "https://images.unsplash.com/photo-1570784654060-0f1c45ef51c0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  ]
};

export default function UserHomePage() {
  const [tab, setTab] = React.useState<"photos" | "videos">("photos");
  const [showSearch, setShowSearch] = React.useState(false);
  const showPhotos = tab === "photos";
  const showVideos = tab === "videos";

  return (
    <section className="bg-gray-900 text-white pt-3 grid grid-rows-[100px_50px_auto_100px] h-screen">
      <div className="px-2 flex gap-1 justify-around items-baseline">

        <h1 className="text-xl font-bold">Family Memories</h1>
        <SearchIcon onClick={() => setShowSearch(true)} />
        {showSearch && (
          <input
            type="text"
            name="search"
            id="search"
            className="p-2 rounded"
          />
        )}

      </div>

      {/* tabs */}
      <ul className="flex gap-10 px-4 border-b-2 border-b-gray-800">
        <li onClick={() => setTab("photos")}
          className={`font-bold py-2 ${showPhotos ? "border-b-blue-500 border-b-4" : "text-gray-400"}`}>
          Photos
        </li>

        <li onClick={() => setTab("videos")}
          className={`font-bold py-2 ${showVideos ? "border-b-blue-500 border-b-4" : "text-gray-400"}`}>
          Videos
        </li>
      </ul>

      {/* image/video grid */}
      <ul className="mt-4 grid grid-flow-col grid-cols-3 grid-rows-2 p-2 items-start h-fit gap-2 ">

        {showPhotos && mock.photos.map(({ href }) => (
          <a href="/media">
            <img
              src={href}
              width={100}
              className="rounded-xl bg-gray-500 h-[100px] object-cover" />
          </a>
        ))}

        {showVideos && mock.videos.map(({ href }) => (
          <a href="/media">
            <img
              src={href}
              width={100}
              className="rounded-xl bg-gray-500 h-[100px] object-cover" />
          </a>
        ))}

      </ul>

      <ul className="flex justify-between p-2 py-4 bg-gray-800 text-sm">
        {footerItems.map(({ text, href, icon }) => (
          <li key={text}>
            <a href={href} className="flex flex-col items-center gap-3">
              {icon}
              <span>{text}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
