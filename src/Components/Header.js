import React from "react"
import {Link} from "gatsby"
import headerStyles from "./header.module.scss"

function Header (){

    return <header className={headerStyles.header}><h1 >
    <Link to = "/" className={headerStyles.title}>Mariana Cerqueira</Link></h1>

    <ul className={headerStyles.navList}>
    <li ><Link className={headerStyles.navItem} activeClassName={headerStyles.navItemActive} to = "/">HOME</Link> </li>
    <li><Link className={headerStyles.navItem} activeClassName={headerStyles.navItemActive} to = "/aboutus">ABOUT ME</Link> </li>
    <li><Link className={headerStyles.navItem} activeClassName={headerStyles.navItemActive} to = "/blog">BLOG</Link></li>
    <li><Link className={headerStyles.navItem} activeClassName={headerStyles.navItemActive} to = "/contact">CONTACT</Link></li>
    </ul>

</header>
}

export default Header;