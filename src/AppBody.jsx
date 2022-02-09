import React,{Component} from "react";
import "./AppStyle.css";
import axios from 'axios';

export default class Body extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            produtos: []
        }
    }
    
    componentDidMount() {
        axios.get("https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1")
        .then(resposta =>{
            this.setState({produtos: resposta.data})
            
        })
      }
    
    render(){
        return(
            <div className="container-body">
                <section className="algorithm-help">
                    <div className="divText-algorithm-help">
                        <div>
                            <div className="divTitle-algorithm-help">
                                <p>Ajude o algorítimo a ser mais certeiro</p>
                            </div>
                            <div className="divParagraphs-algorithm-help">
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and
                                    typesetting industry. Lorem Ipsum has been the industry's
                                    standard dummy text ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled it to make a
                                    type specimen book. It has survived not only five centuries,
                                    but also the leap into electronic typesetting, remaining
                                    essentially unchanged. It was popularised in the 1960s with
                                    the release of Letraset sheets containing Lorem Ipsum 
                                    passages, and more recently with desktop publishing software
                                    like Aldus PageMaker including versions of Lorem Ipsum.
                                </p>
                                <p> 
                                    It has survived not only five centuries,
                                    but also the leap into electronic typesetting, remaining
                                    essentially unchanged. It was popularised in the 1960s with
                                    the release of Letraset sheets containing Lorem Ipsum 
                                    passages, and more recently with desktop publishing software
                                    like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum 
                                    passages, and more recently with desktop publishing software
                                    like Aldus PageMaker including versions of Lorem Ipsum.
                                </p>
                            </div>
                        </div> 
                        <div className="divForm-algorithm-help">
                            <div className="inputs-texts">
                                <div className="input-nome">
                                    <div className="label-nome">
                                        <label>Seu nome:</label>
                                    </div>
                                    <input type="text"/>
                                </div>
                                <div className="input-email">
                                    <div className="label-email">
                                        <label className="label">E-mail:</label>
                                    </div>
                                    <input type="email"/>
                                </div>
                                <div className="input-cpf">
                                    <div className="label-cpf">
                                        <label className="label">CPF:</label>
                                    </div>
                                    <input type="text"/>
                                </div>
                            </div>
                            <div className="divRadio">
                                <div>
                                    <input type="radio"/>
                                    <label>Masculino</label>
                                </div>
                                <div className="radioFem">
                                    <input type="radio"/>
                                    <label>Feminino</label>
                                </div>
                            </div>
                            <button>Enviar</button>
                        </div>
                    </div>
                </section> 

                {/*Sessão 'seleção especial' de produtos*/} 
                
                {/*Início da sessão 'seleção especial' de produtos*/}
                <section className="special-selection">
                    <div className="paragrafo-selec-especial">
                        <p><span className="p-span">Sua seleção especial</span></p>
                    </div>
                    <div className="container-produtos">
                        {this.state.produtos.products?.map(item =>(
                            <div className="div-produtos" key={item.id}>
                                <div className="div-img">
                                    <img src={item.image}/>
                                </div>
                                <div className="div-nomeDoProduto">
                                    <p>{item.name}</p>
                                </div>
                                <div className="div-descricaoDoProduto">
                                    <p>
                                        {item.description}
                                    </p>
                                    <p style={{margin:"0"}}>De: R$ {item.oldPrice},00</p>
                                </div>
                                <div className="div-valorDoProduto">
                                    <p>Por: R$ {item.price},00</p>
                                </div>
                                <div className="div-valorDivido">
                                    <p>ou {item.installments.count}X de R$ {item.installments.value}0</p>
                                </div>
                                <button>Comprar</button>
                            </div>
                            ))
                        }
                    </div>  {/*Final da sessão 'seleção especial' de produtos*/}  
                    
                    <div className="div-maisProdutos">
                        <button>Ainda mais produtos aqui!</button>
                    </div>
                </section> {/* Final - Sessão 'seleção especial' de produtos*/} 

                {/*Início da sessão compartilhe a novidade*/} 
                <section className="compartilhe-novidade">
                    <div className="title-comp-novidades">
                        <p><span className="p-span">Compartilhe a novidade</span></p>
                    </div>
                    <div className="paragraph-comp-novidades">
                        <p>
                            Quer que seus amigos também ganhem a lista personalizada deles?
                            Preencha agora!
                        </p>
                    </div>
                    <div className="box-form-comp-novidades">
                        <div className="box-form-nome">
                            <div className="comp-novidades-form-nome">
                                <label>Nome do seu amigo:</label>
                            </div>
                            <input type="text"/>
                        </div>
                        <div className="box-form-email">
                            <div className="comp-novidades-form-email">
                                <label>E-mail:</label>
                            </div>
                            <input type="email"/>
                        </div>
                    </div>
                    <div className="div-enviarAgora">
                        <button>Enviar agora</button>
                    </div>
                </section>  {/*Final da sessão compartilhe a novidade*/} 
            </div>
        )
    }
}