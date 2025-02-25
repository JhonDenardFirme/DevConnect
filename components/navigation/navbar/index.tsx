
import Link from "next/link";
import Image from "next/image";
import ModeToggle from "./theme";
import MobileNavigation from "./MobileNavigation";


const Navbar = () => {
  return (
    <nav className='flex-between fixed z-50 h-[16vh] w-full bg-neutral-50 p-8 dark:bg-neutral-950 dark:shadow-none sm:px-12 md:bg-transparent dark:md:bg-transparent'>
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

      <div className="flex flex-row items-center justify-center gap-4">
        <ModeToggle></ModeToggle>
        <MobileNavigation></MobileNavigation>
      </div>

      
    </nav>
  );
};

export default Navbar;