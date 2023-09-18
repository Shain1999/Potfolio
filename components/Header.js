import Link from "next/link"
// icons
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from 'react-icons/hi2';

import Socials from "../components/Socials"
import { useRouter } from "next/router";
import Logo from "./Logo";
import Nav from "./Nav";

// nav data
export const navData = [
  { name: 'home', path: '/', icon: <HiHome /> },
  { name: 'about', path: '/about', icon: <HiUser /> },
  { name: 'services', path: '/services', icon: <HiRectangleGroup /> },
  { name: 'work', path: '/work', icon: <HiViewColumns /> },
  {
    name: 'contact',
    path: '/contact',
    icon: <HiEnvelope />,
  },
];

const Header = () => {

  return <header className="absolute z-30 w-full h-[130px]">
    <nav className='bg-primary/50 shadow-xl h-full relative'>
      <div className="container mx-auto ">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 ">
          <Nav />
          {/* Logo */}
          <Logo />
          <Socials />
        </div>
      </div>
    </nav>


  </header>
};

export default Header;
