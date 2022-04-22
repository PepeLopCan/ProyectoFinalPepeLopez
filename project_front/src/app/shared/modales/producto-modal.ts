
export class producto{
    constructor(   
        public id?: string,
       public nombre?:string,
       public descripcion?:string,
       public estado?: boolean,
       public valoracion?: number,
       public precio?: number,
       public usuarioId?:Array<any>,
        public imagen?:string
        ){}
    }
  

   