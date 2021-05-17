// const reactDom = require("react-dom")
import React from "react"
import reactDom from "react-dom"


// const objeto1 = document.createElement('h2')
//   objeto1.innerText = "UTVT 2021"

const objeto1 = <h1>UTVT 2021</h1>

// Forma1 ------------------->>>>>>>><
const informacion = document.getElementById('root')
reactDom.render(objeto1, informacion)

// -----------------------

const carrera = 'IDGS'
const grupo = '91b'

const escuela = {
  dat1: 'IDGS',
  dat2: '91',
}

const objeto2 = <p>{carrera} - {escuela.dat2}</p>
const informacion2 = document.getElementById('info')
reactDom.render(objeto2, informacion2)

// -----------------------

const num1 = 10;
const num2 = 5;

const numero = {
  n1: 1,
  n2: 3,
  n3: 9
}

const objeto3 = <div>
    <br/>
    {/* <hr/> se cierran de esta manera los br, hr, img
    <img/> */}
    <h2>Operadores.matematicos</h2>
      {num1} + {num2} = {num1+num2}<br/>
      {numero.n1} * {numero.n2*numero.n3}<br/>
      <br/>

      {/* condicion de if */}
      { (numero.n2 < 100)? 'El número es menor':'El número es mayor' }
    
  </div>

const informacion3 = document.getElementById('mate')
reactDom.render(objeto3, informacion3)

// -----------------------

function datos1(){
  return <div><h2>Funcion N°1 (<b>sin datos</b>)</h2></div>
}

function datos2(nums, texto){
  // No hace operacion matematica solo concatena
  // return texto + ':' + nums.n1+nums.n2

  //Si hace la operacion matematica
  return texto + ':' + (nums.n1+nums.n2)
}

let ListNum = [];

const lista = () => {
    for(var x=0; x<10; x++){
      ListNum.push(<li key={x}>{x+1}</li>)
    }
    return ListNum;
  }
const text = "Datos Númericos";
const objeto4 = <div>
  { datos1() } <br/>
  { datos2(numero, text) } <br/>
  <ul>{ lista() }</ul> <br/>
</div>

// Forma2 --------------------><<<<>><<<<<<><<<<<<<>>
reactDom.render(objeto4, document.getElementById('funcion'))