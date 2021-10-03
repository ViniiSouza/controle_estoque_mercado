import { Component, OnInit } from '@angular/core';
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

  constructor(service:ProdutosServices) {
    this._service = service;
   }

  ngOnInit(): void {
    this.listaProdutos = this._service.GetProdutos();
  }

  atualizarListagem():void{
    this.listaProdutos = this._service.GetProdutos();
  }

}
