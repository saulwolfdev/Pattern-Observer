

const { Productos } = require("./Productos")
const { Vista }=require("./Vista")

document.querySelector(".button").addEventListener("click",(e)=>{
    e.preventDefault()
    const input=document.querySelector(".input")
    const producto=input.value
    productos.agregarProducto(producto)
})

new Productos()
new Vista()