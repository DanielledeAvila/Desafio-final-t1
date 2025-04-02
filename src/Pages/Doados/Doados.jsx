import s from "./doados.module.scss"
//import livro from '../../assets/livro.png'
import axios from 'axios'
import {useState,useEffect} from 'react'


export default function Doados(){
    // Guardar os dados com useState no front
    const [livros, setLivros] = useState([])
    const getLivros = async () => {
        const response = await axios.get("https://api-livros-t1.onrender.com/livros")
        // Variável response recebe os dados da linha acima filtrada por dados e põe no useState
        setLivros(response.data)
        console.log
    }

    // Precisa de aero function porque ele não faz sozinho
    useEffect(()=>{
        getLivros()
    },[])
    // o colchete observa uma vez só, quando troca de página


    return(
        <section className={s.boxDoados} >
            <h2>Livros Doados</h2>
            <section className={s.boxcard} >
                {/* <article>
                    <img src={livro} alt="Imagem do livro O protagonista" />
                    <h3>O protagonista</h3>
                    <p>Susanne Andrade</p>
                    <p>Ficção</p>
                </article> */}
                {/* Mapeia os dados e ordena*/}
                {livros.map((item)=>(
                    <article>
                        <img src={item.imagem_url} alt= {`Imagem do livro: ${item.titulo}`}/>
                        <h3>{item.titulo}</h3>
                        <p>{item.categoria}</p>
                        <p>{item.autor}</p>
                    </article>
                ))}
                        
            </section>
        </section>
    )
}




