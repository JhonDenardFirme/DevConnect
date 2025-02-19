
import Link from "next/link";
import Image from "next/image";
import ModeToggle from "./theme";

const Navbar = () => {
  return (
    <nav className='flex-between backgroud-light900_dark200 fixed z-50 w-full p-6 dark:shadow-none sm:px-12'>
    <Link href="/" className="flex-tiems flex gap-1">
        <Image src="/images/site-logo.svg"
        width={24}
        height={24}
        alt="LogiCode Logo">

        </Image>

        <p className="h2-bold">LogiCode</p>
    </Link>    
    <ModeToggle></ModeToggle>
    </nav>
  );
};

export default Navbar;