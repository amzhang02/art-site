"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import NavItem from "./NavItem"

const pages = [{ title: 'Paintings', link: 'paintings' }, { title: 'Sculptures', link: 'sculptures' }, { title: 'Drawings', link: 'drawings' }, { title: 'Bio', link: 'bio' }, { title: 'Contact', link: 'contact' }]

export default function Nav(){
    return(
        <div className='w-[300px]'>
            <h1 className='w-[273px] h-[47px] text-black text-[40px] font-normal '>
              <Link href={'/'}>Alyssa Zhang</Link>
            </h1>
            <div className='w-[273px] text-black text-2xl font-normal mt-10'>
              {pages.map(page => <NavItem page = {page} key = {page.link}/>)}
            </div>
          </div>
    )
}