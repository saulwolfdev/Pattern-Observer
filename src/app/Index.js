
 import style from "../main.css"

 class Productos{
    constructor(){
        this.productos=["Manzanas","Peras","Bananas"]
        this.subcriptores=[]
    }
    agregarProductos(producto){
        this.productos.push(producto)
        this.notificarSubcriptores()
    }
    agregarSubcriptores(callback){
        this.subcriptores.push(callback)
    }
    notificarSubcriptores(){
        this.subcriptores.forEach((subcriptor)=>{
            subcriptor(this.productos)
        })
    }
}



 class Vista{
	constructor(){
			productos.agregarSubcriptores(this.render)
	}
	render(productos){
		document.querySelector(".ul").innerHTML= productos.map((producto)=>`<li>${producto}</li>`).join("")
	}
}


document.querySelector(".button").addEventListener("click",(e)=>{
    e.preventDefault()
    const input=document.querySelector(".input")
    const producto=input.value
    productos.agregarProductos(producto)
})
const productos= new Productos()
const vista= new Vista()

productos.agregarSubcriptores((productos)=>{
const producto=productos[productos.length-1]
document.querySelector(".message").innerHTML= `<span class="alert">${producto}</span>`

setTimeout(function () {
            document.querySelector('.message').remove()
        }, 1000)


})