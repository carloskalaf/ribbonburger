import Css from '../styles/Home.module.css'

const MobileNav = () => {
    return (
        <div className={Css.MobileMenu}>
        <nav className={Css.MobileNav}>
        <ul className={Css.UlNav}>
            <li className={Css.LinNav}><a href='/contato' className={Css.Links}>Contato</a></li>
            <li className={Css.LinNav}><a href='/catalogo' className={Css.Links}>Catálogo</a></li>
            <li className={Css.LinNav}><a href='/carrinho' className={Css.Links}>Carrinho</a></li>
        </ul>
        </nav>
        </div>
    )
}
export default MobileNav;