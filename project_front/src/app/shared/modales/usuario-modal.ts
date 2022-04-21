export class Usuario{
    static _id: any;
    constructor(   
       public nombre:string,
       public email:string,
       public password?:string,
       public role?:'ADMIN_ROLE' | 'USER_ROLE',
       public _id?: string,
       public imagen?:string,
       public productoId?:Array<any>
        ){}
  }
  