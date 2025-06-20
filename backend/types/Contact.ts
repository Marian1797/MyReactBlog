export interface BasicContact {
    id:number;
 }   

 export interface Contact extends BasicContact{
    [x: string]: any;
    nume: string,
    prenume: string,
    email:string,
    mesaj:string
    data_adaugare?:Date,

}
