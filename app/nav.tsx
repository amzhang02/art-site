"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import NavItem from "./NavItem"

const pages = [{ title: 'Paintings', link: 'paintings' }, { title: 'Sculptures', link: 'sculptures' }, { title: 'Drawings', link: 'drawings' }, { title: 'Bio', link: 'bio' }, { title: 'Contact', link: 'contact' }]

export default function Nav({handleClick} : any) {
  return (
    <div className='text-black text-2xl font-normal mt-10 hidden sm:block'>
      {pages.map(page => <NavItem page={page} key={page.link} handleClick={handleClick}/>)}
    </div>
  )
}