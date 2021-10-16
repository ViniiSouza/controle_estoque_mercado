import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produtos } from '../Models/produtos.models';
import { ProdutosServices } from '../produtos/produtos.services';

@Component({
    selector: 'app-estoque-form',
    templateUrl: './estoque.form.component.html',
    styleUrls: ['./estoque.form.component.css']
  })
  export class EstoqueFormComponent implements OnInit {
    id!:any;  
    produto:Produtos = new Produtos();
    constructor(private activateRoute:ActivatedRoute, private produtoService:ProdutosServices){
     }

    ngOnInit(){
        this.id = this.activateRoute.snapshot.paramMap.get('id') ? this.activateRoute.snapshot.paramMap.get('id') : -1;
        this.id = parseInt(this.id)
        this.produto = this.produtoService.getById(this.id);
        setTimeout(() => {
            this.inserirInfoAlterar();
        },500);
          
     }

    inserirInfoAlterar() :void {
        this.produto.id = this.id ? this.id : 0;
        this.produto.nome = this.produtoService.getById(this.id).nome;
        this.produto.quantidade = this.produtoService.getById(this.id).quantidade;
    }

    atualizarEstoque(produto:Produtos){
        this.produtoService.UpdateProdutos(produto, 'estoque/');
    }

    contabilizarEstoque():number{
        var x = parseInt((<HTMLInputElement>document.getElementById("produto-quantidade")).value);
        return x;
    }
    
  }