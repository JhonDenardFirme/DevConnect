
import Link from "next/link";
import Image from "next/image";
import ModeToggle from "./theme";
import MobileNavigation from "./MobileNavigation";


const Navbar = () => {
  return (
    <nav className='flex-between fixed z-50 h-[16vh] w-full dark:bg-neutral-950 dark:shadow-none xs:px-12 md:bg-transparent dark:md:bg-neutral-900'>
      
      <div className="logo -ml-12 bg-neutral-50 flex items-center justify-center dark:bg-neutral-950 md:bg-transparent dark:md:bg-neutral-950 w-72 h-full">
        <Link href="/" className="flex items-center gap-1">
          <Image 
            src="/images/DevConnectLogo.png"
            width={24} 
            height={18} 
            alt="DevConnect Logo"
            className="h-10 w-auto"
          />
          <p className="h2-bold">
            <span className="!text-slate-950 dark:!text-slate-50">Dev</span>
            <span className="text-[#f0842b]">Connect</span>
          </p>
        </Link>
      </div>


      <div className="flex flex-row items-center justify-center gap-4">
        <ModeToggle></ModeToggle>
        <MobileNavigation></MobileNavigation>
      </div>

      
    </nav>
  );
};

export default Navbar;