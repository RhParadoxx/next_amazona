import { APP_NAME } from "@/lib/constants";
// import Image from "next/image";
import Link from "next/link";
import Menu from "./menu";
import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";
import data from "@/lib/data";
import Search from "./search";

export default function Header() {
  return (
    <header className='bg-black text-white'>
      <div className='px-2'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center'>
            <Link
              href='/'
              className='flex items-center header_button font-extrabold text-2xl m-1'
            >
              {/* <Image src='/icons/logo.svg' width={40} height={40} alt='' /> */}
              {APP_NAME}
            </Link>
          </div>

          <div className=' hidden md:block flex-1  max-w-xl'>
            <Search />
          </div>

          <Menu />
        </div>

        <div className='md:hidden block py-2'>
          <Search />
        </div>
      </div>

      <div className='dark flex items-center px-3 mb-[1px] bg-gray-800'>
        <Button variant='ghost' className='header_button'>
          <MenuIcon  className="w-8 h-8"/>
          All
        </Button>

        <div className='flex items-center flex-wrap gap-4 overflow-hidden max-h-[42px]'>
          {data.headerMenus.map((menu) => (
            <Link key={menu.href} href={menu.href}>
              {menu.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
