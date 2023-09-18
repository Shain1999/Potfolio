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


const Header = () => {
  const router = useRouter();
  const pathName = router.pathname;
  return <header className="">
    <nav className='bg-white/10'>
      <div className="container mx-auto ">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
          {/* Logo */}
          <Link href={"/"} >Shai Nir</Link>
          <Socials />

        </div>
      </div>
    </nav>


  </header>
};

export default Header;
