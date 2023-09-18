// icons
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from 'react-icons/hi2';

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

//next lliink
import Link from "next/link"

//next router 
import { useRouter } from "next/router"


const Nav = () => {
  const router = useRouter();
  const pathName = router.pathname;
  return <div className='xl:flex lg:flex items-center justify-between h-[80px] xl:h-max w-[40%] 
  backdrop-blur-sm text-3xl xl:text-2xl hidden'>
    {navData.map((link, index) => {
      return <Link className={`${link.path === pathName && 'text-accent'} 
            relative flex items-center flex-col-reverse group hover:text-accent transition-all duration-300 py-5 px-5`} href={link.path} key={`indexNav${index}`}>
        <div className='text-[14px] leading-none font-semibold capitalize '>{link.name}</div>
        <div className='py-1'>{link.icon}</div>
      </Link>
    })}
  </div>
}
export default Nav;
