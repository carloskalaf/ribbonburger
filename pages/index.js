import sstyles from '../styles/Home.module.css'
import Image from 'next/image'
//import  '../styles/normalize.css'

function home() {
    return (

    
<div className={sstyles.bg}>
<div className={sstyles.header}>
<Image src='/img/navbar.png' alt='Logo' width={160} height={90}></Image>
<Image src='/img/menu.png' className={sstyles.Images} alt='Menu' width={90} height={45}></Image>
</div>


    

<div className={sstyles.burgers}>
Ribbon Burger

</div>
</div>

    )
}

export default home