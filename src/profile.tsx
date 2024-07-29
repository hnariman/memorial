import React, { Dispatch, SetStateAction } from "react";
import HeartIcon from "./icons/HeartIcon";

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
  const [showAddTribute, setShowAddTribute] = React.useState(false);

  return (
    <section className="bg-gray-900 text-white grid min-h-screen">
      <section className="p-2">
        <img
          className="rounded-full object-cover h-[176px] w-[176px] mx-auto"
          src={mock.imageUrl}
          height={176}
          width={176}
        />

        <h2 className="font-semibold text-lg text-center">
          {mock.first} {mock.last}
        </h2>

        <h3 className="text-gray-400">
          Age {mock.age}, passed away on {mock.passed}
        </h3>
        <p className="text-xs text-gray-300 mt-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat id sapiente alias ipsum nesciunt nam. Reprehenderit sint sit consequatur voluptatibus perferendis suscipit, odio in dolorem impedit accusamus, nam, at a?
        </p>
      </section>



      {/* Family section */}
      <section className="px-2">
        <h2 className="text-lg font-bold my-4">
          Family
        </h2>
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
      </section>

      {/* Media Section  */}
      <section className="p-2">
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
      </section>

      <section className="p-2 text-xs text-gray-400 grid gap-2">
        <h2 className="font-bold text-xl text-white">
          Tribute
        </h2>

        <div className="boder-b">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, sint molestias.
          </p>
          <p className="text-white italic">James</p>
        </div>

        <div className="boder-b">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam, neque!
          </p>
          <p className="text-white italic">James</p>
        </div>

        <div className="boder-b">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam, neque!
          </p>
          <p className="text-white italic">James</p>
        </div>


        {showAddTribute && (
          <form action=""
            className="p-2 bg-gray-900 rounded grid gap-2 border z-100w-full bottom-0"
          >
            <span
              className="text-xl text-white text-right"
              onClick={() => setShowAddTribute(false)}>X</span>
            <textarea
              name="tribute"
              id="tribute"
              placeholder="please enter text"
              className="bg-gray-800 p-2 px-3 rounded outline-none w-full h-32"
            />

            <input
              type="text"
              name="author"
              id="author"
              placeholder="author"
              className="bg-gray-800 p-2 px-3 rounded outline-none w-full"
            />
            <input
              type="submit"
              value="submit"
              className="bg-blue-500 text-white p-2 px-3 rounded hover:opacity-70 w-full"
            />
          </form>
        )}
        <button
          onClick={() => setShowAddTribute(true)}
          className="p-2 px-3 bg-blue-500 rounded-xl text-white ">
          add tribute
        </button>
      </section>

      {showAddFamily && <AddFamilyMemberForm {...{ setShowAddFamily }} />}
      <footer className="w-full bottom-0 bg-gray-700 flex justify-around text-xs">
        <a href="/support"> Support</a>
        <a href="/privacy"> Privacy</a>
        <span
          onClick={() => setShowAddFamily(true)}
          className="capitalize">
          add family member
        </span>
        <a href="/admin" className="capitalize">
          edit
        </a>
      </footer>

    </section>
  )
}

const AddFamilyMemberForm = ({
  setShowAddFamily
}: {
  setShowAddFamily: Dispatch<SetStateAction<boolean>>
}) => (
  <form action="" className="absolute z-100 bottom-0 p-4 bg-gray-900 rounded-xl grid gap-2 border border-white w-full" >
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
