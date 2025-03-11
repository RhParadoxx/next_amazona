import { ShoppingCart} from "lucide-react";

import Link from "next/link";

export default function Menu() {
  return (
    <div className='flex justify-end'>
      <nav className='flex gap-3 w-full'>
        <Link href='/cart' className='header_button'>
          <span className='font-bold'>Sign In</span>
        </Link>

        <Link href='/cart' className='header_button'>
          <ShoppingCart className='h-6 w-6' />
          {/* <span className='font-bold'>Cart</span> */}
        </Link>
      </nav>
    </div>
  );
}
