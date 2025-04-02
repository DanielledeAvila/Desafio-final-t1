import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Inicio from '../../Pages/Inicio/Inicio'
import Doados from '../../Pages/Doados/Doados'
import QueroDoar from '../../Pages/QueroDoar/QueroDoar'
import Logo from '../../assets/Logo.png'
import Search from '../../assets/search.png'
import s from './header.module.scss'


export default function Header(){
    return(
        <BrowserRouter>
            <header className={s.header} >
                <section className={s.boxLogo} >
                    <img src={Logo} alt="Logo do vai na web" />
                    <h1>Livros Vai na Web</h1>
                </section>

                <nav className={s.boxMenu} >
                    <ul>
                        <li>
                            <Link to="/">Inicio</Link>
                        </li>
                        <li>
                            <Link to="/Doados">Doados</Link>
                        </li>
                        <li>
                            <Link to="/QueroDoar">Quero Doar</Link>
                        </li>
                    </ul>
                </nav>

                <div className={s.boxSearch} >
                    <input className={s.boxInput} type="text" placeholder="O que você procura?"/>
                    <img src={Search} alt="Imagem de uma lupa" />
                </div>
            </header>

            <Routes>
                <Route path="/" element={<Inicio/>}/>
                <Route path="/Doados" element={<Doados/>}/>
                <Route path="/QueroDoar" element={<QueroDoar/>}/>
            </Routes>
        </BrowserRouter>
    )
}
