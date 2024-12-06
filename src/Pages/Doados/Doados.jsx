import s from "./doados.module.scss"
import livro from '../../assets/livro.png'

export default function Doados(){
    return(
        <section className={s.boxDoados} >
            <h2>Livros Doados</h2>
            <section className={s.boxcard} >
                <article>
                    <img src={livro} alt="Imagem do livro O protagonista" />
                    <h3>O protagonista</h3>
                    <p>Susanne Andrade</p>
                    <p>Ficção</p>
                </article>

                <article>
                    <img src={livro} alt="Imagem do livro O protagonista" />
                    <h3>O protagonista</h3>
                    <p>Susanne Andrade</p>
                    <p>Ficção</p>
                </article>
                
            </section>
        </section>
    )
}




