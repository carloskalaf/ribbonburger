import Css from '../styles/Home.module.css'
const HomeNav = () => {
    
    return (
        <nav className={Css.HomeNav}>
        <ul className={Css.UlNav}>
            <li className={Css.LinNav}><a href='/contato' className={Css.Links}>Contato</a></li>
            <li className={Css.LinNav}><a href='/catalogo' className={Css.Links}>Catálogo</a></li>
            <li className={Css.LinNav}><a href='/carrinho' className={Css.Links}>Carrinho</a></li>
        </ul>
        </nav>
    )
}
export default HomeNav;