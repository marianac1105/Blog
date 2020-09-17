import React from "react"
import {Link} from "gatsby"

function Header (){

    return <header><h1>Mariana Cerqueira</h1>

    <ul>
    <li><Link to = "/">HOME</Link> </li>
    <li><Link to = "/aboutus">ABOUT ME</Link> </li>
    <li><Link to = "/blog">BLOG</Link></li>
    <li><Link to = "/contact">CONTACT</Link></li>
    </ul>

</header>
}

export default Header;