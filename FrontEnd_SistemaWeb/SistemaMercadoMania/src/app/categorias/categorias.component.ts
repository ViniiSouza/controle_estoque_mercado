import { Component, OnInit } from '@angular/core';
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

  constructor(services:CategoriasServices) {
      this._service = services;
   }

  ngOnInit(): void {
    this.listaCategorias = this._service.GetCategorias();
  }

  atualizarListagem():void{
    this.listaCategorias = this._service.GetCategorias();
  }

}
