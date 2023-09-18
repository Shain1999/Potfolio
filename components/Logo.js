import Image from "next/image";
import Link from "next/link"


const Logo = () => {
    return <div className="flex items-center justify-center w-[18%]">
        <Link href={"/"} ><Image src={'/'} width={100} height={100} className="" alt="Logo Shai" /></Link>

    </div>
}

export default Logo