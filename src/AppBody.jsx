import React,{Component} from "react";
import "./AppStyle.css";
import axios from 'axios';

export default class Body extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            produtos: [],
            produtosTwo: false
        }
    }
    
    componentDidMount() {
        axios.get("https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1")
        .then(resposta =>{
            this.setState({produtos: resposta.data})
            
        })
      }

    maisProdutos = () =>{   
        if(!this.state.produtosTwo){
            axios.get("https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=2")
            .then(resposta =>{
                this.setState({produtosTwo: resposta.data})
            })

            this.setState(showState => ({
                produtosTwo: showState.produtosTwo 
            }));
        } else{
            this.setState({produtosTwo: false})
        }
    }

    enviarAgora = () =>{
        let nomeDoAmigo = document.querySelector("#inputNomeAmigo").value;
        let emailDoAmigo = document.querySelector("#inputEmailAmigo").value;

        if(nomeDoAmigo === ""){
            document.querySelector("#inputNomeAmigo").focus();
        }else if(emailDoAmigo === ""){
            document.querySelector("#inputEmailAmigo").focus();
        } else if( emailDoAmigo.indexOf('@') == -1 || emailDoAmigo.indexOf('.com') == -1){
            alert( "Por favor, informe um E-MAIL válido!" );
            return false;
        }else{
            window.location.reload();
        }
    }
    
    render(){
        return(
            <div className="container-body">
                <section className="algorithm-help">
                    <div className="divText-algorithm-help">
                        {/*Início da sessão Ajude o algorítimo a ser mais certeiro*/}
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
                        </div> {/*Final da sessão Ajude o algorítimo a ser mais certeiro*/}
                        {/*Início do formulário na sessão Ajude o algorítimo a ser mais certeiro*/}
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
                        </div> {/*Final do formulário na sessão Ajude o algorítimo a ser mais certeiro*/}
                    </div>
                </section>          
                {/*Início da sessão 'seleção especial' de produtos*/}
                <section className="special-selection">
                    <div className="paragrafo-selec-especial">
                        <p><span className="p-span">Sua seleção especial</span></p>
                    </div>
                    {/*Início da apresentação dos produtos - Parte I*/}
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
                    </div>{/*Final da apresentação dos produtos - Parte I*/}
                    {/*Início da apresentação dos produtos - Parte II*/}
                    <div className="container-produtos">
                        {this.state.produtosTwo.products?.map(item =>(
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
                    </div>{/*Final da apresentação dos produtos - Parte II*/}
                    <div className="div-maisProdutos">
                        <button onClick={this.maisProdutos}>{this.state.produtosTwo ? "Ver menos produtos." : "Mais produtos aqui!"}</button>
                    </div>
                </section>{/* Final - Sessão 'seleção especial' de produtos*/} 
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
                    {/*Início sessão formulário*/}
                        <div className="box-form-comp-novidades">
                            <div className="box-form-nome">
                                <div className="comp-novidades-form-nome">
                                    <label>Nome do seu amigo:</label>
                                </div>
                                <input type="text" id="inputNomeAmigo"/>
                            </div>
                            <div className="box-form-email">
                                <div className="comp-novidades-form-email">
                                    <label>E-mail:</label>
                                </div>
                                <input type="text" name="email" id="inputEmailAmigo"/>
                            </div>
                        </div>
                        <div className="div-enviarAgora">
                            <button onClick={this.enviarAgora}>Enviar agora</button>
                        </div>
                    {/*Final da sessão formulário*/}
                </section>{/*Final da sessão compartilhe a novidade*/} 
            </div>
        )
    }
}