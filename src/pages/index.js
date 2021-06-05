import Css from '../../styles/Home.module.css'
import Image from 'next/image'
import { useState } from 'react'
import {MdRestaurantMenu} from 'react-icons/md'

function home() {
    

    return (

    <>
<header className={Css.HeaderRibbon}>

<a href='' className={Css.Logo}>RIBBON</a>
<nav className={Css.NavRibbon}>
    <MdRestaurantMenu className={Css.BtnMobile} size='40px' color='white'/>
    <ul className={Css.UlNav}>
        <li className={Css.LinNav}><a href='/contato' className={Css.Links}>Contato</a></li>
        <li className={Css.LinNav}><a href='/catalogo' className={Css.Links}>Catálogo</a></li>
        <li className={Css.LinNav}><a href='/carrinho' className={Css.Links}>Carrinho</a></li>
    </ul>
</nav> 
</header>
<div>
<body className={Css.BodyRibbon}>
    teste
</body>
</div>
</>
    )
}

export default home