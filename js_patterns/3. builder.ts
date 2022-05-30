class MilkTea{
    private type:string;

    private size:string;

    private pearl:boolean;

    private ice:boolean;

    private constructor(type:string,size:string,pearl:boolean,ice:boolean){
        this.type=type;
        this.size=size;
        this.pearl=pearl;
        this.ice=ice;
    }


    public getType(type:string){
        this.type=type;
    }
    public getSize(size:string){
        this.size=size;
    }
    public getPearl(pearl:boolean){
        this.pearl=pearl;
    }
    public getIce(ice:boolean){
        this.ice=ice;
    }

}

class Builder{

    constructor(){

}


}