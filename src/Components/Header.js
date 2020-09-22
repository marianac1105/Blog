import React from "react"
import {Link, useStaticQuery, graphql} from "gatsby"
import headerStyles from "./header.module.scss"

function Header (){
const data = useStaticQuery(graphql`
query{
    site{
        siteMetadata{
            title
        }
    }
}

`)
    return <header className={headerStyles.header}><h1 >
    <Link to = "/" className={headerStyles.title}>{data.site.siteMetadata.title}</Link></h1>

    <ul className={headerStyles.navList}>
    <li ><Link className={headerStyles.navItem} activeClassName={headerStyles.navItemActive} to = "/">HOME</Link> </li>
    <li><Link className={headerStyles.navItem} activeClassName={headerStyles.navItemActive} to = "/aboutus">ABOUT ME</Link> </li>
    <li><Link className={headerStyles.navItem} activeClassName={headerStyles.navItemActive} to = "/blog">BLOG</Link></li>
    <li><Link className={headerStyles.navItem} activeClassName={headerStyles.navItemActive} to = "/contact">CONTACT</Link></li>
    </ul>

</header>
}

export default Header;