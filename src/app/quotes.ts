// export class Quotes {
//   like : number;
//   unlike : number;
//     showDescription: boolean;
//     constructor(public id: number,public name: string,public description: string, public completeDate: Date){
//       this.showDescription=false;
//       this.like = 0;
//       this.unlike = 0;
//     }
//   }
  export class Quotes {
    id: number;
    name: string;
    // author: string;
    // submitter: string;
    description : string;
    completeDate: Date;
    like: number;
    unlike: number;
    showDescription: boolean;
    constructor( id: number,name: string,description: string,completeDate: Date){
        this.id = id;
        this.name = name;
        // this.author = author;
        this.completeDate = completeDate;
        this.like = 0;
        this.unlike = 0;
        this.description = description;
        // this.submitter = submitter;
        this.showDescription = false;
    }
}





