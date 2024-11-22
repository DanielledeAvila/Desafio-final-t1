import Logo from '../../assets/Logo.png'
import Search from '../../assets/search.png'
import {BrowserRouter, Route, Routes, Link} from "react-router-dom"
import Inicio from '../../Pages/Inicio/Inicio'
import Doados from '../../Pages/Doados/Doados'
import QueroDoar from '../../Pages/QueroDoar/QueroDoar'
import S from './header.module.scss'


export default function header(){
    return(
        <BrowserRouter>
        <header className={S.header}>
            <section className={S.boxLogo}>
                <img src={Logo} alt=""/>
                <h1>Livros Vai na Web</h1>
            </section>

            <nav className={S.boxMenu} >
                <ul>
                    <li><Link to="/" >Início</Link></li>
                    <li><Link to="/doados" >Livros doados</Link></li>
                    <li><Link to="/queroDoar" >Quero doar</Link></li>
                </ul>
            </nav>       

            <div className={S.boxSearch}>
                <input className={S.boxInput}  type="text" placeholder='O que você procura'/>
                <img src={Search} alt="lupa" />
            </div>            

        </header>

        <Routes>
            <Route patch="/" element={<Inicio/>}/>
            <Route patch="/doados" element={<Doados/>}/>
            <Route patch="/queroDoar" element={<QueroDoar/>}/>
        </Routes>

        </BrowserRouter>
    )
}




