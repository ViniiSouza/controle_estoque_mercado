import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produtos } from '../Models/produtos.models';
import { ProdutosServices } from '../produtos/produtos.services';

@Component({
  selector: 'app-estoque',
  templateUrl: './estoque.component.html',
  styleUrls: ['./estoque.component.css']
})
export class EstoqueComponent implements OnInit {
  listaProdutos:Produtos[] = [];
  id!:any;

  constructor(private produtoService:ProdutosServices, private router:Router) {

   }

  ngOnInit(): void {
    this.listaProdutos = this.produtoService.GetProdutos();
    
    setTimeout(() => {
      this.atualizarListagem()
    },500);
  }

  atualizarListagem(){
    this.listaProdutos = this.produtoService.GetProdutos();
  }

  redirecionarFormComId(item:any){
    this.router.navigate(['/estoque/form/', item.id]);
  }

}
