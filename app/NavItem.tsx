import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavItem({page} : {page : {title : string, link : string}}){
    const pathName = usePathname()
    let classes = "block"
    if (pathName.includes(page.link)) {
        classes = "block font-bold underline"
    }
    return (
        <Link className={classes} href={page.link}>{page.title}</Link>
    )
}