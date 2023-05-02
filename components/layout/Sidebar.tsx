"use client";

import { signOut } from "next-auth/react";
import { BiLibrary, BiLogOut } from "react-icons/bi";
import { BsHouseFill, BsBellFill, BsFillEnvelopeFill, BsFillCupHotFill } from "react-icons/bs";
import { FaHandPointUp, FaRocket, FaUser } from "react-icons/fa";

import useCurrentUser from "@/hooks/useCurrentUser";

import SidebarItem from "./SidebarItem";
import SidebarLogo from "./SidebarLogo";
import SidebarTweetButton from "./SidebarTweetButton";
import { VscBlank } from "react-icons/vsc";

const Sidebar = () => {
  const { data: currentUser } = useCurrentUser();

  const items = [
    {
      icon: FaRocket,
      label: 'StudySpace',
    },
    {
      icon: VscBlank,
      label: '',
    },
    {
      icon: BsHouseFill,
      label: "Home",
      href: "/",
    },
    {
      icon: BsFillCupHotFill,
      label: 'Explore Cafe',
      href: '/ExploreCafe',
      auth: true
    },
    {
      icon: FaHandPointUp,
      label: 'Explore Users',
      href: '/ExploreUsers',
      auth: true
    },
    {
      icon: BsBellFill,
      label: 'Notifications',
      href: '/notifications',
      auth: true,
      alert: currentUser?.hasNotification,
    },
    {
      icon: BsFillEnvelopeFill,
      label: 'Messages',
      href:'https://study-space-chat-denisemarcelo.vercel.app/login',
      auth: true
    },
    {
      icon: BiLibrary,
      label: 'Library',
      auth: true,
      href: 'https://denisemarcelo.github.io/StudySpaceLibrary/'
    },
    {
      icon: FaUser,
      label: 'Profile',
      href: `/users/${currentUser?.id}`,
      auth: true
    },
  ];

  return (
    <div className="col-span-1 h-full pr-4 md:pr-6">
      <div className="flex flex-col items-end">
        <div className="space-y-2 lg:w-[230px]">
          
          {items.map((item) => (
            <SidebarItem
              key={item.href}
              alert={item.alert}
              auth={item.auth}
              href={item.href}
              icon={item.icon}
              label={item.label}
            />
          ))}
          {currentUser && (
            <SidebarItem
              onClick={() => signOut()}
              icon={BiLogOut}
              label="Logout"
            />
          )}
          <SidebarTweetButton />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
