import Css from '../../styles/Home.module.css'
import Image from 'next/image'
import { useState } from 'react'
import {MdRestaurantMenu} from 'react-icons/md'
import dynamic from 'next/dynamic'
import MobileNav from '../../components/MobileNav'

const Contato = () => {

const HomeNav = dynamic(() => import('../../components/HomeNav'), {ssr: false})

const [Menu, setMenu] = useState(false)

    return (
<>
<header className={Css.HeaderRibbon}>

<a href='/' className={Css.Logo}>RIBBON</a>
<nav className={Css.NavRibbon}>
    <MdRestaurantMenu className={Css.BtnMobile}  onClick={() => setMenu(!Menu)} size='40px' color='white'/>
    {Menu && <div className={Css.MobileNav}><MobileNav /></div>}
    <div className={Css.HomeNav}><HomeNav /></div>
        
</nav> 
</header>
<body className={Css.BodyRibbon}>
    contato
</body>
</>
    )
}
export default Contato;
