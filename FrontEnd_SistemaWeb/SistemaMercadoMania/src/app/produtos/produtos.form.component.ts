import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterPreloader } from '@angular/router';
import { CategoriasServices } from '../categorias/categorias.services';
import { Categorias } from '../Models/categoria.model';
import { Produtos } from '../Models/produtos.models';
import { ProdutosServices } from './produtos.services';

@Component({
  selector: 'app-produtos-form',
  templateUrl: './produtos.form.component.html',
  styleUrls: ['./produtos.form.component.css']
})
export class ProdutosFormComponent implements OnInit {
    
    id!:any;
    produto:Produtos = new Produtos();
    _service:ProdutosServices;
    listaCategorias:Categorias[] = [];
    
    constructor(service:ProdutosServices, private activateRoute:ActivatedRoute, private router:Router, private categoriaService:CategoriasServices){
        this._service = service;   
    }
    ngOnInit(){
        this.id = this.activateRoute.snapshot.paramMap.get('id') ? this.activateRoute.snapshot.paramMap.get('id') : -1;
        this.id = parseInt(this.id)
        this.produto = this._service.getById(this.id);
        this.produto.descricao = "";
        this.produto.nome = "";
        this.produto.categoriaId =0;
        setTimeout(() => {
            this.carregarCategorias()
          },500);
        this.inserirInfoAlterar();
    }
    carregarCategorias(){
        this.listaCategorias = this.categoriaService.GetCategorias();
    }

    inserirInfoAlterar() :void {
        this.produto.id = this.id ? this.id : 0;
      }

    alterarProduto(produto:Produtos){
        this._service.UpdateProdutos(produto);
    }

    textoCategoria(id:any, nome:any){
        document.querySelector("#alterar-categoria")!.textContent = id + "-" + nome;
    }

}