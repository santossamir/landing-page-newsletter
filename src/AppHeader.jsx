import React from "react";

export default class Header extends React.Component{
    render(){
        return(
            <div className="container-header">
                <div className="header-paragrafo-one">
                    <p>uma seleção de produtos</p>
                </div>
                <div className="header-paragrafo-two">
                    <p>especial para você</p>
                </div>
                <div className="header-paragrafo-three">
                    <p>Todos os produtos desta lista foram selecionados a partir da sua navegação. Aproveite!</p>
                </div>
                <div className="header-button-seccions">
                    <button>Conheça a Linx</button>
                    <button>Ajude o algorítimo</button>
                    <button>Seus produtos</button>
                    <button>Compartilhe</button>
                </div>
            </div>
        );
    }
}