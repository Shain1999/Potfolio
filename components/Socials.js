import Link from "next/link"

import { RiInstagramLine, RiFacebookBoxLine, RiLinkedinLine, RiGithubLine } from "react-icons/ri"

const Socials = () => {
  return <div className="xl:w-[40%] items-center mx-auto">
    <div className="flex items-center gap-x-5 text-2xl z-50 w-min mx-auto " >

      <Link href={''} className="hover:text-accent transition-all duration-300">
        <RiFacebookBoxLine />
      </Link>

      <Link href={''} className="hover:text-accent transition-all duration-300">
        <RiInstagramLine />
      </Link>

      <Link href={''} className="hover:text-accent transition-all duration-300">
        <RiLinkedinLine />
      </Link>

      <Link href={''} className="hover:text-accent transition-all duration-300">
        <RiGithubLine />
      </Link>
    </div>
  </div>

};

export default Socials;
