class Portal{
    constructor(x,y,largura,altura,){
        this.corpo=Matter.rectangle(x,y,largura,altura,{isStatic:true})
 
        this.largura=largura
        this.altura=largura
        this.imagem=loadImage('Portal.png')
        Matter.World.add(mundo,this.corpo)
    }
}
