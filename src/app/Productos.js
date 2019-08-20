export class Productos{
    constructor(){
        this.productos=["Manzanas","Peras","Bananas"]
        this.subcriptores=[]
    }
    agregarProducto(producto){
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
