"use client"
import Link from "next/link";
import NavItem from "./NavItem";
import Hamburger from 'hamburger-react'
import { useState } from "react"

const pages = [{ title: 'Paintings', link: 'paintings' }, { title: 'Sculptures', link: 'sculptures' }, { title: 'Drawings', link: 'drawings' }, { title: 'Bio', link: 'bio' }, { title: 'Contact', link: 'contact' }]

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const handleClick = () => {
        setIsOpen(!isOpen)
    }
    function Hamburglar(isOpen: boolean) {
        if (isOpen) {
            return (
                <div className='w-[273px] text-black text-2xl font-normal mt-10 '>
                    {pages.map(page => <NavItem page={page} key={page.link} handleClick={handleClick}/>)}
                </div>
            )
        } else {
            return (
                <div>

                </div>
            )
        }
    }
    return (
        <div className="flex flex-row justify-between">
            <h1 className='w-[273px] h-[40px] text-black text-[40px] font-normal ml-10 mt-10'>
                <Link href={'/'}>Alyssa Zhang</Link>
            </h1>
            <div className="mr-10 mt-10 lg:hidden">
                <Hamburger onToggle={handleClick} />
                {Hamburglar(isOpen)}
            </div>
        </div>
    )
}