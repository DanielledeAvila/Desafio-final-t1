import s from './querodoar.module.scss'
import livro from '../../assets/Vector.png'
import axios from 'axios'
import {useState} from 'react'

// Guardar os dados
export default function QueroDoar(){
    const [titulo, setTitulo] = useState("")
    const [categoria, setCategoria] = useState("")
    const [autor, setAutor] = useState("")
    const [imagem_url, setImagem_url] = useState("")

    // função async fica esperando para depois enviar
    const enviarDados = async()=>{
        // link da minha API abaixo, com barra doar:
        const urlApi = "https://api-livros-t1.onrender.com/doar"
        // abaixo um objeto, como os dados são enviados, tratados, formatados.
        const dadosEnviar = {
            titulo,
            categoria,
            autor,
            imagem_url
        }
        // axios é uma biblioteca que ajuda a consumir a Api
        await axios.post(urlApi,dadosEnviar)        
        // mensagem de alerta de envio
        alert('Livro enviado!')
        // Aqui limpa os campos após enviar
        setTitulo("")
        setCategoria("")
        setAutor("")
        setImagem_url("")        
    }

    // funções para pegar os dados e importar pro useState
    const capturaTitulo = (e) => {
        setTitulo(e.target.value)
    }
    const capturaCategoria = (e) => {
        setCategoria(e.target.value)
    }
    const capturaAutor = (e) => {
        setAutor(e.target.value)
    }
    const capturaImagem = (e) => {
        setImagem_url(e.target.value)
    }

    return(
        <section className={s.principal}>
            <section className={s.container} >
                <h2>Por favor, preencha o formulário com suas informações e as informações do Livro</h2>
                <form onSubmit={(e)=> e.preventDefault()}>
                    <div>
                        <img src={livro} alt="icone de um livro aberto"/>
                        <h3>Informações do Livro
                        </h3>                         
                    </div>
                    {/* onchange captura o que é digitado */}
                    <input type="text" placeholder='Título' onChange={capturaTitulo} value={titulo}/>
                    <input type="text" placeholder='Categoria' onChange={capturaCategoria} value={categoria}/>
                    <input type="text" placeholder='Autor' onChange={capturaAutor} value={autor}/>
                    <input type="text" placeholder='Link da imagem' onChange={capturaImagem} value={imagem_url}/>
                    <input type="submit" value="Doar" onClick={enviarDados}/>                
                </form>                
            </section>
        </section>
    )
}
