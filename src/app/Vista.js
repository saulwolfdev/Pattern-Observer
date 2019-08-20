export class Vista{
	constructor(){
			productos.agregarSubcriptores(this.render)
	}
	render(productos){
		document.querySelector(".ul").innerHTML=productos.map((producto)=>`<li>${producto}</li>`).join("")
	}
}

