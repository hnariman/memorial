import HomeIcon from "./icons/HomeIcon";
import MediaIcon from "./icons/MediaIcon";
import NotificationsIcon from "./icons/NotificationsIcon";
import ProfileIcon from "./icons/ProfileIcon";
import SearchIcon from "./icons/SearchIcon";

export default function UserHomePage() {
  return (
    <section className="bg-gray-900 text-white pt-6">
      <div className="flex justify-end gap-10">
        <h1 className="text-center text-xl font-bold">Family Memories</h1>
        <label htmlFor="search" className="flex px-3 items-center">
          <input type="text" name="search" className="bg-gray-900 text-white" />
          <SearchIcon />
        </label>
      </div>

      {/* tabs */}
      <ul className="flex gap-10 px-6 border-b-2 border-b-gray-800">
        <li className="font-bold py-2 border-b-blue-500 border-b-4">Photos</li>
        <li className="font-bold py-2 ">Videos</li>
      </ul>

      {/* image/video grid */}
      <ul className="grid grid-flow-auto grid-cols-5 gap-4 p-6">
        <li className="h-[160px] w-[160px] rounded-xl bg-gray-500"></li>
        <li className="h-[160px] w-[160px] rounded-xl bg-gray-500"></li>
        <li className="h-[160px] w-[160px] rounded-xl bg-gray-500"></li>
        <li className="h-[160px] w-[160px] rounded-xl bg-gray-500"></li>
        <li className="h-[160px] w-[160px] rounded-xl bg-gray-500"></li>
        <li className="h-[160px] w-[160px] rounded-xl bg-gray-500"></li>
        <li className="h-[160px] w-[160px] rounded-xl bg-gray-500"></li>
      </ul>

      {/* bottom menu */}
      <ul className="flex justify-around p-6 bg-gray-800 text-sm">
        <li className="flex flex-col items-center gap-3">
          <a href="#">
            <HomeIcon />
            <span>Home</span>
          </a>
        </li>

        <li className="flex flex-col items-center gap-3">
          <a href="#">
            <SearchIcon />
            <span>Search</span>
          </a>
        </li>

        <li className="flex flex-col items-center gap-3">
          <a href="#">
            <ProfileIcon />
            <span>Profile</span>
          </a>
        </li>

        <li className="flex flex-col items-center gap-3">
          <a href="#">
            <NotificationsIcon />
            <span>Notifications</span>
          </a>
        </li>

        <li className="flex flex-col items-center gap-3">
          <a href="#">
            <MediaIcon />
            <span> Upload </span>
          </a>
        </li>
      </ul>

    </section>


  )
}
