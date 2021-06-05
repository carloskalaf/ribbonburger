import Css from '../styles/Home.module.css'

const MobileNav = () => {
    return (
        <nav>
        <ul className={Css.UlNav}>
            <li className={Css.LinNav}><a href='/contato' className={Css.Links}>Contato</a></li>
            <li className={Css.LinNav}><a href='/catalogo' className={Css.Links}>Catálogo</a></li>
            <li className={Css.LinNav}><a href='/carrinho' className={Css.Links}>Carrinho</a></li>
        </ul>
        </nav>
    )
}
export default MobileNav;