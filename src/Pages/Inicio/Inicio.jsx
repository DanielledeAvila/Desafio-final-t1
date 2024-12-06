import s from './inicio.module.scss'
import network from '../../assets/network.png'
import transform from '../../assets/transform.png'
import read from '../../assets/read.png'
import balance from '../../assets/balance.png'


export default function Inicio(){
    return(
        <main>

            <section className={s.Frase}>
                <h2>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h2>
            </section>

            <section classname={s.devoDoar}>
                <div className={s.divdevoDoar}>
                    <h2>Por que devo Doar?</h2>
                </div>            
            </section>

            <section className={s.boxCard}>
                    <article>
                        <img src={network} alt="imagem de 3 bonecos" />
                        <p> Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</p>
                    </article>

                    <article>
                        <img src={read} alt="imagem de um livro" />
                        <p>Estimula o hábito da leitura e o aprendizado contínuo.</p>
                    </article>

                    <article>
                        <img src={transform} alt="imagem de uma mão" />
                        <p>Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.</p>
                    </article>

                    <article>
                        <img src={balance} alt="imagem de uma balança" />
                        <p>Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.</p>
                    </article>                
            </section>
        </main>
    )
}



