import Css from '../../styles/Home.module.css'
import Image from 'next/image'
import { useState } from 'react'
import {MdRestaurantMenu} from 'react-icons/md'
import dynamic from 'next/dynamic'
import MobileNav from '../../components/MobileNav'


const home = () => {

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

<div className={Css.BodyRibbon}>
    "   Officia dolor laboris ullamco ut irure. Laboris ex magna consectetur id elit reprehenderit eu non. Enim minim culpa nostrud commodo nulla eu nulla mollit exercitation amet do Culpa consectetur commodo laborum pariatur aliquip voluptate. Elit quis pariatur nulla irure quis qui ullamco est magna ipsum dolor. Non duis commodo aute aliquip nulla id reprehenderit aute cillum adipisicing Lorem magna eu commodo. Eu do incididunt veniam anim incididunt. Aliqua fugiat eiusmod officia in Lorem magna cillum duis consectetur cupidatat labore. Duis deserunt laboris magna quis reprehenderit enim ea irure cupidatat. Excepteur esse velit tempor minim esse do tempor enim ea minim. Occaecat do quis id enim mollit irure fugiat nostrud labore commodo. Cillum incididunt labore qui non adipisicing occaecat tempor occaecat. Dolor nulla officia Lorem pariatur voluptate officia. Velit id excepteur irure elit magna excepteur et elit elit. Fugiat excepteur duis commodo nisi laboris enim proident magna. Et mollit sunt in cillum tempor nostrud esse est ipsum anim do irure proident. Nisi laboris in ullamco ad pariatur nisi quis id velit do. Velit commodo labore cupidatat officia et.Adipisicing dolor sunt dolor qui non aute qui proident est ad aliqua officia. Aute qui laborum nisi ea fugiat quis. Dolore magna veniam adipisicing ullamco in. Officia id non incididunt nulla et consectetur velit nostrud officia nulla ex adipisicing consectetur. Quis non enim quis aliqua sint sunt. Id sit fugiat veniam culpa exercitation minim consequat culpa aute ad. Et minim Lorem elit laborum aliquip culpa.Ad exercitation ea consequat ullamco cillum sint sunt sint dolor exercitation deserunt cillum. Dolor irure occaecat ex elit commodo cupidatat fugiat quis esse id. Eu veniam consequat labore nisi consectetur dolor ipsum irure reprehenderit. Laboris et in esse deserunt irure dolor dolor ea incididunt laboris. Nisi proident duis amet nisi elit proident Lorem. Consectetur irure ex deserunt voluptate elit aute eiusmod et amet nisi nostrud laborum sint mollit.Ad laboris et in consectetur ad amet eiusmod. Veniam laborum exercitation aliqua pariatur in proident non mollit quis dolore id laborum eiusmod est. Id deserunt laboris tempor ut. Consequat in laborum laborum culpa mollit minim voluptate ea ex.Minim laborum consequat enim aliquip commodo reprehenderit. Ad laborum pariatur amet et et. Est consequat sint magna voluptate quis ipsum incididunt tempor.Officia fugiat eiusmod aute amet enim laborum ea culpa proident reprehenderit. Mollit irure reprehenderit laborum minim tempor ut. Do esse duis id eiusmod proident. Commodo sunt et exercitation ad. Voluptate nisi nostrud fugiat mollit. Nostrud Lorem dolore eiusmod nostrud commodo magna aliquip est exercitation sint velit est. Voluptate laborum aliquip sit aliquip eu.Est mollit quis non nisi sit. Velit aute eiusmod proident occaecat officia. Quis ex officia tempor aute ullamco deserunt enim id minim excepteur sunt officia ad elit. Sunt mollit aliquip velit ipsum ipsum nulla velit ut sint. Nulla Lorem consectetur labore eiusmod pariatur id eiusmod eiusmod. Id voluptate non eiusmod qui sunt tempor duis nisi."

</div>
</>
    )
}

export default home