import { FormComponent } from './../form/form.component';

import { MatSort } from '@angular/material/sort';
import { ClientesService } from './../../service/clientes.service';
import { ClientesI } from './../../models/clientes.interface';
import { Component, OnInit,ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import{MatDialog,MatDialogConfig, MatDialogRef}from '@angular/material/dialog';



@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent implements OnInit {
  displayedColumns: string[] = ['establecimiento', 'sector', 'direccion','email','telefonofijo','celular','contacto','segmentacion','fechaDcontacto','canal','registro','comentario','actions','new',];
  dataSource = new MatTableDataSource();
  @ViewChild(MatSort)sort: MatSort = new MatSort;

  constructor(
    private clientesService:ClientesService,
    private dialog:MatDialog
    ) { }

  ngOnInit() {
this.clientesService.getAllCLientes().subscribe(res=>this.dataSource.data=res);
  }



filtrar(event: Event) {
  const filtro = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filtro.trim().toLowerCase();
}
ngAfterViewInit(){
  this.dataSource.sort=this.sort;
}
onEdit(element:any){
  this.restForm();
  this.openModal();
  if(element){
this.clientesService.selected=element;}
}
onDelete(id:string){
this.clientesService.deleteCliente(id);
}
openModal():void{
const dialogConfig=new MatDialogConfig();
dialogConfig.data={
  title:'Modal'
}
dialogConfig.autoFocus=true;
this.dialog.open(FormComponent, dialogConfig);
}
restForm():void{
this.clientesService.selected.establecimiento='';
this.clientesService.selected.sector='';
this.clientesService.selected.direccion='';
this.clientesService.selected.email='';
this.clientesService.selected.telefonofijo='';
this.clientesService.selected.celular='';
this.clientesService.selected.contacto='';
this.clientesService.selected.segmentacion='';
this.clientesService.selected.fechaDcontacto='';
this.clientesService.selected.canal='';
this.clientesService.selected.registro='';
this.clientesService.selected.comentario='';
this.clientesService.selected.id=null;

}

}
