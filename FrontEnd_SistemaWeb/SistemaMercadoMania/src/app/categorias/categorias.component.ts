import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categorias } from '../Models/categoria.model';
import { CategoriasServices } from './categorias.services';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  _service:CategoriasServices;
  listaCategorias:Categorias[] = [];
  

  constructor(services:CategoriasServices, private router:Router) {
      this._service = services;
      setTimeout(() => {
        this.atualizarListagem()
      },500);
   }

  ngOnInit(): void {
    this.listaCategorias = this._service.GetCategorias();
  }

  atualizarListagem():void{
    this.listaCategorias = this._service.GetCategorias();
  }

  deletarCategoria(id:number){
    this._service.DeleteCategorias(id);
  }

  redirecionarFormComId(item:any){
    this.router.navigate(['/categorias/form/', item.id]);
  }
}
