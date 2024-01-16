import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavItem({page, handleClick} : {page : {title : string, link : string}, handleClick : () => void}){
    const pathName = usePathname()
    let classes = "block"
    if (pathName.includes(page.link)) {
        classes = "block font-bold underline"
    }
    return (
        <Link onClick = {handleClick} className={classes} href={page.link}>{page.title}</Link>
    )
}