import React, { Dispatch, SetStateAction } from "react";
import HeartIcon from "./icons/HeartIcon";
import { useNavigate } from "react-router-dom";

type TFamily = {
  relation: string;
  first: string;
  last: string;
};
type TMedia = {
  imageUrl: string;
  type: string;
};

type TProfile = {
  first: string;
  last: string;
  age: number;
  passed: string;
  imageUrl: string;
  family: TFamily[],
  photos: TMedia[],
  videos: TMedia[],
};

export default function Profile() {

  const mock: TProfile = {
    first: "Megan",
    last: "Wong",
    age: 22,
    passed: "2020-02-10",
    imageUrl:
      "https://images.unsplash.com/photo-1526413232644-8a40f03cc03b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    family: [
      {
        relation: "Wife",
        first: "James",
        last: "Wong",
      }
    ],
    photos: [
      {
        imageUrl: "https://images.unsplash.com/photo-1576089073624-b5751a8f4de9?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        type: "photo",
      },

      {
        imageUrl: "https://images.unsplash.com/photo-1570784654060-0f1c45ef51c0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        type: "photo",
      },
      {
        imageUrl: "https://images.unsplash.com/photo-1560066432-efb83eb5f272?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        type: "photo",
      },
      {
        imageUrl: "https://images.unsplash.com/photo-1560066432-efb83eb5f272?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        type: "photo",
      },
      {
        imageUrl: "https://images.unsplash.com/photo-1570784654060-0f1c45ef51c0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        type: "photo",
      },
      {
        imageUrl: "https://images.unsplash.com/photo-1576089073624-b5751a8f4de9?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        type: "photo",
      },
      {
        imageUrl: "https://images.unsplash.com/photo-1576089073624-b5751a8f4de9?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        type: "photo",
      },
      {
        imageUrl: "https://images.unsplash.com/photo-1560066432-efb83eb5f272?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        type: "photo",
      },
    ],
    videos: [
      {
        imageUrl: "https://randomuser.me/api/portraits",
        type: "video",
      },
      {
        imageUrl: "https://randomuser.me/api/portraits",
        type: "video",
      },
      {
        imageUrl: "https://randomuser.me/api/portraits",
        type: "video",
      }
    ]
  };

  const [showAddFamily, setShowAddFamily] = React.useState(false);
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <section className="bg-gray-900 text-white px-4 grid min-h-screen pb-6">
      <div className="flex">
        <span onClick={goBack} className="text-2xl hover:opacity-70">
          &larr;
        </span>
        <h1 className="flex-1 text-center font-bold text-xl">Profile</h1>
      </div>

      <img
        className="rounded-full object-cover h-[176px] w-[176px]"
        src={mock.imageUrl}
        height={176}
        width={176}
      />

      <h2 className="font-semibold text-lg">{mock.first} {mock.last}</h2>

      <h3 className="text-gray-400">
        Age {mock.age}, passed away on {mock.passed}
      </h3>

      <p className="text-gray-400">View Profile</p>

      <div className="flex gap-4 my-6">

        <button className="bg-gray-700 capitalize rounded-xl p-2 px-4 font-bold">
          edit profile
        </button>

        <div
          onClick={() => setShowAddFamily(!showAddFamily)}
          className=" bg-blue-500 capitalize rounded-xl p-2 px-4 font-bold ">
          Add Family
        </div>

        {showAddFamily && <AddFamilyMemberForm {...{ setShowAddFamily }} />}
      </div>

      <h3 className="text-lg font-bold my-4">Family</h3>
      <ul>
        <li className="flex items-center gap-4">
          <div className="p-3 bg-gray-700 w-10 h-10 rounded-lg" >
            {/* TODO: icons change based on relation */}
            <HeartIcon fill="#fff" />
          </div>
          {mock?.family?.map((member) => (
            <p className="font-semibold">
              {member.relation} of {member.first} {member.last}
            </p>
          ))}
        </li>
      </ul>
      <a href="/user">
        <h3 className="my-6 text-xl font-bold">
          Photos and Videos
        </h3>

        <div className="grid gap-1 grid-cols-[1fr,1fr,1fr] md:grid-cols-[1fr,1fr,1fr,1fr] my-2">
          {mock?.photos?.map((photo) => (
            <img src={photo.imageUrl}
              className="bg-gray-300 h-[100px] w-[100px] rounded object-cover"
            />
          ))}
        </div>
      </a>
      <a
        href="/privacy"
        className="flex justify-between my-4"
      >
        <span>Privacy</span>
        <span>&rarr;</span>
      </a>
      <a
        href="/support"
        className="flex justify-between"
      >
        <span>Help & Support </span>
        <span>&rarr;</span>
      </a>

    </section>
  )
}

const AddFamilyMemberForm = ({
  setShowAddFamily
}: {
  setShowAddFamily: Dispatch<SetStateAction<boolean>>
}) => (
  <form action="" className="absolute z-100 p-4 bg-gray-900 rounded-xl grid gap-2 border border-white" >
    <div className="flex items-center">
      <h3 className="flex-1">Please fill in the form</h3>
      <button
        onClick={(e) => { e.preventDefault(); setShowAddFamily(false) }}
        className="text-2xl hover:opacity-70">&#10005;</button>
    </div>
    <label htmlFor="relation">
      <input
        className="bg-gray-800 p-2 px-3 rounded-xl outline-none"
        type="text"
        name="relation"
        id="relation"
        placeholder="Relation"
      />
    </label>
    <label htmlFor="first">
      <input
        className="bg-gray-800 p-2 px-3 rounded-xl outline-none"
        type="text"
        name="first"
        id="first"
        placeholder="First Name"
      />
    </label>
    <label htmlFor="last">
      <input
        className="bg-gray-800 p-2 px-3 rounded-xl outline-none"
        type="text"
        name="last"
        id="last"
        placeholder="Last Name"
      />
    </label>
    <input
      type="submit"
      value="Submit"
      className="p-2 px-3 text-white bg-blue-600 rounded-xl hover:opacity-70"
    />
  </form>

)
