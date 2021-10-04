import { Component, OnInit } from "@angular/core";
import { Produtos } from "../Models/produtos.models";
import { ProdutosServices } from "./produtos.services";

@Component({
    selector: 'app-produtos-add',
    templateUrl: './produtos.add.component.html',
    styleUrls: ['./produtos.add.component.css']
  })
export class ProdutosAddComponent implements OnInit {
    _service:ProdutosServices;
    produto:Produtos = new Produtos();


    constructor(service:ProdutosServices){
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
}