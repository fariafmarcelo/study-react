import React from 'react'

export const BomDia = props => <h3> Bom dia {props.timeA} </h3>

export const BoaTarde = props => <h3> Boa tarde {props.timeB} </h3>

export const BoaNoite = props => <h3> Boa noite {props.nome} </h3>

// exportar as funções - um componente com múltiplas funções
export default {BomDia, BoaTarde, BoaNoite}