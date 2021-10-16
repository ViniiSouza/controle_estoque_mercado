import { Component, OnInit } from "@angular/core";
import { CategoriasServices } from "../categorias/categorias.services";
import { Categorias } from "../Models/categoria.model";
import { Produtos } from "../Models/produtos.models";
import { ProdutosServices } from "./produtos.services";

@Component({
    selector: 'app-produtos-add',
    templateUrl: './produtos.add.component.html',
    styleUrls: ['./produtos.add.component.css']
  })
export class ProdutosAddComponent implements OnInit {
    
    id!:any;
    _service:ProdutosServices;
    produto:Produtos = new Produtos();
    listaCategorias:Categorias[] = [];


    constructor(service:ProdutosServices, private categoriaService:CategoriasServices){
        this._service = service;
    }

    ngOnInit():void{

    }

    AdicionarProduto(produto:Produtos){
        this._service.AddProdutos(produto);
        produto.nome = "";
        produto.descricao = "";
        produto.categoriaId = 0;
    }

    carregarCategorias(){
        this.listaCategorias = this.categoriaService.GetCategorias();
    }

    inserirInfoAlterar() :void {
        this.produto.id = this.id ? this.id : 0;
        this.produto.nome = this._service.getById(this.id).nome;
        this.produto.descricao = this._service.getById(this.id).descricao;
        this.produto.quantidade = this._service.getById(this.id).quantidade;
      }
    
    textoCategoria(id:any, nome:any){
        document.querySelector("#alterar-categoria")!.textContent = id + "-" + nome;
    }
}