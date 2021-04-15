import React, {Component} from 'react'
// criando uma classe
export default class Produto extends Component {

    // contrutor
    constructor(props){

        super(props) // chama o construtor de component

        this.state = {
            nome: "Vacina para Covid",
            qtde: 0,
            preco: 0,
            total: 0
        }

    }
    // e -> evento ocorrido
    setNome(e){
        // vamos alterar o nome
        this.setState({
            nome: e.target.value
        })
    }
    setQtde(e){
        this.setState({
            qtde: e.target.value
        })
    }
    setPreco(e){
        this.setState({
            preco: e.target.value
        })
    }

    // função que calcula o valor total
    calcular(){
        this.setState({
            total: this.state.preco * this.state.qtde
        })
    }

    // renderizar - mostrar - desenhar no browser
    render() {
        //declaração de uma variavel no react
        const nome = this.state.nome
        const preco = this.state.preco

        return (
            <div>
                <div>
                    <label>Nome do Produto {nome} </label>
                    <input type="text" value={nome} onChange={ e => this.setNome(e)}></input>
                </div>
                <div>
                    <label>Qtde do Produto {this.state.qtde} </label>
                    <input type="number" value={this.state.qtde} onChange={ e => this.setQtde(e)}></input>
                </div>
                <div>
                    <label>Preço do Produto {preco} </label>
                    <input type="number" value={preco} onChange={ e => this.setPreco(e)}></input>
                </div>
                <div>
                    <button onClick={() => this.calcular()}>Calcular</button>
                </div>
                <div>
                    <label>Total: {this.state.total}</label>
                </div>
            </div>
        )
    }

}