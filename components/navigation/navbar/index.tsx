
import Link from "next/link";
import Image from "next/image";
import ModeToggle from "./theme";

const Navbar = () => {
  return (
    <nav className='flex-between backgroud-light900_dark200 z-50 w-full p-8 dark:shadow-none sm:px-12'>
      <Link href="/" className="flex items-center gap-1">
        <Image 
          src="/images/DevConnectLogo.png"
          width={24} 
          height={18} 
          alt="DevConnect Logo"
          className="h-10 w-auto"
        />
        <p className="h2-bold">
          <span>Dev</span>
          <span className="text-[#f0842b]">Connect</span>
        </p>
      </Link>
 
      <ModeToggle></ModeToggle>
    </nav>
  );
};

export default Navbar;