import { ClientesService } from './../../service/clientes.service';
import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(public cliente:ClientesService,
private dialogRef:MatDialogRef<FormComponent>,
@Inject(MAT_DIALOG_DATA) public data:any)

{  }

  ngOnInit(): void {
  }
onSaveForm(){
  if(this.cliente.selected.id==null){
let newCliente={
  establecimiento:this.cliente.selected.establecimiento,
  sector:this.cliente.selected.sector,
  direccion:this.cliente.selected.direccion,
  email:this.cliente.selected.email,
  telefonofijo:this.cliente.selected.telefonofijo,
  celular:this.cliente.selected.celular,
  contacto:this.cliente.selected.contacto,
  segmentacion:this.cliente.selected.segmentacion,
  fechaDcontacto:this.cliente.selected.fechaDcontacto,
  canal:this.cliente.selected.canal,
  registro:this.cliente.selected.registro,
  comentario:this.cliente.selected.comentario,
}

this.cliente.addCliente(newCliente);
  }else{
this.cliente.editCliente(this.cliente.selected);
}
this.close();
}
close():void{
  this.dialogRef.close();
}

}
