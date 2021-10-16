import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Produtos } from "../Models/produtos.models";

@Injectable()
export class ProdutosServices {
    _http:HttpClient;
    listaProdutos:Produtos[] = []
    produto:Produtos = new Produtos();
    localhost:string= 'https://localhost:44340/produto/';

    constructor(http:HttpClient, private router:Router){
        this._http = http;
    }

    GetProdutos():Produtos[]{
        this._http.get<Produtos[]>(this.localhost).subscribe(result =>{
            this.listaProdutos = result;
        }, error => console.error(error));
        return this.listaProdutos;
    }

    AddProdutos(produto:Produtos):void{
        this._http.post<Produtos>(this.localhost,produto).subscribe(result =>{
            alert("Sucesso!");
        },error =>console.error(error));
    }

    UpdateProdutos(produto:Produtos,rota:string):void{
        this._http.put<Produtos>(this.localhost, produto).subscribe(result =>{
            alert("Sucesso!");
            this.router.navigate([rota])
        }, error => console.error(error));
    }

    DeleteProdutos(id:number):void{
        this._http.delete<Produtos>(this.localhost +id).subscribe(result => {
            alert("Sucesso!");
        },error => console.error(error));
    }

    getById(id:any){
        this._http.get<Produtos>(this.localhost + id).subscribe(result =>{
          this.produto = result;
        }, error => console.error(error));
        return this.produto;
      }
}