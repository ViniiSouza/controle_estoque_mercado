import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produtos } from '../Models/produtos.models';
import { ProdutosServices } from './produtos.services';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  _service:ProdutosServices;
  listaProdutos:Produtos[] = [];

  constructor(service:ProdutosServices, private router:Router) {
    this._service = service;
   }

  ngOnInit(): void {
    this.listaProdutos = this._service.GetProdutos();
    setTimeout(() => {
      this.atualizarListagem()
    },500);
    
  }

  function(listaProdutos:any,_service:any) {
    listaProdutos = _service.GetProdutos();
  }
  
  atualizarListagem():void{
    this.listaProdutos = this._service.GetProdutos();
  }

  deletarProduto(id:number){
    this._service.DeleteProdutos(id);
  }

  redirecionarFormComId(item:any){
    this.router.navigate(['/produtos/form/', item.id]);
  }

}
