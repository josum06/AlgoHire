import Link from 'next/link';
import { CiMenuKebab } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { IoDocument } from "react-icons/io5";
import { GrScorecard } from "react-icons/gr";
import { FaCode } from "react-icons/fa";
import { MdVideoCameraFront } from "react-icons/md";
import { FaDiagramProject } from "react-icons/fa6";
import { FaBriefcase } from "react-icons/fa";
import { AiOutlineLogout } from "react-icons/ai";
import {useRouter} from "next/navigation"
import { useState } from "react";
import { signOut } from "next-auth/react";

export default function Sidebar({ userData }) {
  const [isActive, setIsActive] = useState(false);
  const router = useRouter();

  return (
    <div className={`fixed top-0 left-0 h-screen z-10 flex transition-all duration-500 ease-in-out ${
      isActive ? "translate-x-0" : "-translate-x-64"
    }`}>
      {/* Sidebar */}
      <aside className="w-64 h-screen px-5 py-8 overflow-y-auto bg-white shadow-lg dark:bg-gray-900">
        
          <div className="flex items-center  space-x-4">
            <img className="w-14 h-14 rounded-full" src="https://c.ndtvimg.com/2024-06/tjptft6_virat-kohli-twitter_625x300_19_June_24.jpg?im=FeatureCrop,algorithm=dnn,width=806,height=605" alt="User Profile" />
            <div>
              <h1 className="text-lg font-semibold text-white">Virat Kohli</h1>
              <Link href="/profile">
                <span className="text-sm text-white cursor-pointer hover:underline">
                  Edit Profile
                </span>
              </Link>
            </div>
          </div>
        

        <div className="flex flex-col justify-between flex-1 mt-6">
          <div className="-mx-3 space-y-3">
          {[
  { name: 'Portfolio', icon: <GrScorecard />, href: "/Portfolio" },
  { name: 'Reports', icon: <IoDocument />, href: "/Reports" },
  { name: 'Practice Mode', icon: <FaCode />, href: "/PracticeMode" },
  { name: 'Meeting Room', icon: <MdVideoCameraFront />, href: "/MeetingRoom" },
  { name: 'Projects', icon: <FaDiagramProject />, href: "/Projects" },
  { name: 'Application Status', icon: <FaBriefcase />, href: "/ApplicationStatus" },
].map((item, index) => (
  <Link key={index} href={item.href} passHref>
    <button 
      onClick={() => {
        setIsActive(false); // Close sidebar
        router.push(item.href); // Navigate to the page
      }} 
      className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-700"
    >
      {item.icon}
      <span className="mx-2 text-sm font-medium">{item.name}</span>
    </button>
  </Link>
))}

            <h2 className="text-lg px-3 font-semibold text-gray-900 dark:text-white">Skills :</h2>
            <ul className="max-w-md px-3 -mt-4 mb-4 space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
              <li>React.js</li>
              <li>Next.js</li>
              <li>Tailwind</li>
            </ul>

            <button 
             onClick={() => signOut({ callbackUrl: "/auth/Login" })}
            className="flex items-center w-full justify-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 bg-red-600 hover:bg-red-700">
              <AiOutlineLogout />
              <span className="mx-2 text-sm font-medium">Logout</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Toggle Button */}
      <div className="h-screen w-11 flex justify-start items-center">
        <button
          onClick={() => setIsActive(!isActive)}
          className="w-[90%] bg-gray-900 text-white flex justify-center items-center text-2xl py-10 rounded-e-2xl transition-transform duration-500 ease-in-out"
        >
          {isActive ? <IoClose /> : <CiMenuKebab />}
        </button>
      </div>
    </div>
  );
}
