 export class Quotes {
    id: number;
    name: string;               
    description : string;
    completeDate: Date;
    like: number;
    unlike: number;
    sname: string;
    showDescription: boolean;
    constructor( id: number,name: string,description: string,sname: string,completeDate: Date){
        this.id = id;
        this.name = name;
        this.completeDate = completeDate;
        this.like = 0;
        this.unlike = 0;
        this.sname = sname;
        this.description = description;
        this.showDescription = false;
    }
}





