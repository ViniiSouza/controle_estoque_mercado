import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorias } from '../Models/categoria.model';
import { CategoriasServices } from './categorias.services';

@Component({
  selector: 'app-categorias-form',
  templateUrl: './categorias.form.component.html',
  styleUrls: ['./categorias.form.component.css']
})
export class CategoriasFormComponent implements OnInit {

    id!:any;
    _service:CategoriasServices;
    categoria :Categorias = new Categorias();

    constructor(private activateRoute:ActivatedRoute, private router:Router, service:CategoriasServices){
        this._service = service;
    }

    ngOnInit(){
        this.id = this.activateRoute.snapshot.paramMap.get('id') ? this.activateRoute.snapshot.paramMap.get('id') : '';
        this.id = parseInt(this.id);
        this.categoria = this._service.getById(this.id);
        this.categoria.nome = "";
        this.inserirInfoAlterar();
    }

    inserirInfoAlterar() :void {
        this.categoria.id = this.id ? this.id : 0;
      }

    alterarCategoria(){
        this._service.UpdateCategorias(this.categoria);
        this.router.navigate(['/categorias/']);
    }

}