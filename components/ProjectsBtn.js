
//link

import Link from 'next/link';

import { HiArrowRight } from "react-icons/hi2"

const ProjectsBtn = () => {
  return <div className='flex flex-row justify-center items-center '>
    <Link className='relative=flex justify-center items-center text-2xl px-2' href={'/work'} >Projects</Link>
    <HiArrowRight className='text-2xl' />
  </div>
};

export default ProjectsBtn;
