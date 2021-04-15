import React from 'react' // biblioteca padrão do react
import ReactDom from 'react-dom' // classe para renderizar ao usuário

// importa o componente criado
import Jogo from './componentes/Jogo'
import Estadio from './componentes/Estadio'

// quando usamos dois ou mais componentes precisamos de um elemento pai
// ReactDom.render(
//     <div>
//         <Jogo/> <Estadio/>
//     </div>, document.getElementById("root"))

// caso não queiramos um componente html como pai, podemos utilizar React.Fragment

import {BomDia, BoaTarde, BoaNoite} from './componentes/Saudacoes'
import Saudacoes from './componentes/Saudacoes'

import Produto from './classes/Produto'

ReactDom.render(
    <React.Fragment>
        <Jogo timeA="Sesi Franca" timeB="Flamengo"/>
        <Estadio nome="Pedrocão"/>
        <BomDia timeA="Sesi Franca"/>
        <BoaTarde timeB="Flamengo"/>
        <BoaNoite nome="Pedrocão"/>
        <Saudacoes.BomDia timeA="Sesi Franca" />
        <Saudacoes.BoaTarde timeB="Flamengo" />
        <Saudacoes.BoaNoite nome="Pedrocao" />
        <Produto/>
    </React.Fragment>, document.getElementById("root")
)