


import { ClientesI } from './../models/clientes.interface';
import { Injectable } from '@angular/core';
import{AngularFirestore,AngularFirestoreCollection}from '@angular/fire/firestore';
import{ identity, Observable}from'rxjs';
import{map}from'rxjs/operators';



export interface ClientesId extends ClientesI{id:any}

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
private customerCollection:AngularFirestoreCollection<ClientesI>;
clientes:Observable<ClientesId[]>;
public selected={
  id:null,
  establecimiento:'',
  sector: '',
  direccion:'',
  email:'',
  telefonofijo:'',
  celular:'',
  contacto:'',
  segmentacion:'',
  fechaDcontacto:'',
  canal:'',
  registro:'',
  comentario:'',


};



  constructor(private readonly afs:AngularFirestore) {
this.customerCollection= afs.collection<ClientesI>('clientes');
this.clientes=this.customerCollection.snapshotChanges().pipe(
  map(actions=>actions.map(a=>{
    const data= a.payload.doc.data()as ClientesI;
    const id=a.payload.doc.id;
    return {id,...data};
   } ))
)
}
  getAllCLientes(){

     return this.clientes;
  }
  editCliente(cliente: ClientesId){
//console.log(cliente);
   return this.customerCollection.doc(cliente.id).update(cliente);
  }
  deleteCliente(id:string){

    return this.customerCollection.doc(id).delete();
  }
  addCliente(cliente:ClientesI){
    return this.customerCollection.add(cliente);

  }
}
