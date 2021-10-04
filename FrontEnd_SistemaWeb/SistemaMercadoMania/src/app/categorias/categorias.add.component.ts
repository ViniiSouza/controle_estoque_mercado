import { Component, OnInit } from "@angular/core";
import { Categorias } from "../Models/categoria.model";
import { CategoriasServices } from "./categorias.services";

@Component({
    selector: 'app-categorias-add',
    templateUrl: './categorias.add.component.html',
    styleUrls: ['./categorias.add.component.css']
  })
  export class CategoriasAddComponent implements OnInit {
    
    _service:CategoriasServices;
    categoria:Categorias = new Categorias;

    constructor(services:CategoriasServices) {
        this._service = services;
     }
    ngOnInit():void{
        
    }

    AdicionarCategoria(categoria:Categorias):void{
        this._service.AddCategorias(categoria);
        categoria.nome = "";
    }
  }