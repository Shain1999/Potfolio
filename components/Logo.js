import Image from "next/image";
import Link from "next/link"


const Logo = () => {
    return <div className="flex items-center justify-center w-[18%] ">
        <Link href={"/"} className="hover:text-accent" ><Image src={'/webSiteFavIcon.png'} width={100} height={100} className="hover:text-accent" alt="Logo Shai" /></Link>

    </div>
}

export default Logo