import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Produtos } from "../Models/produtos.models";

@Injectable()
export class ProdutosServices {
    _http:HttpClient;
    listaProdutos:Produtos[] = []
    produto:Produtos = new Produtos();
    localhost:string= 'https://localhost:44340/produto';

    constructor(http:HttpClient){
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

    UpdateProdutos(produto:Produtos):void{
        this._http.put<Produtos>(this.localhost, produto).subscribe(result =>{
            alert("Sucesso!");
        }, error => console.error(error));
    }

    DeleteProdutos(id:number):void{
        this._http.delete<Produtos>(this.localhost +id).subscribe(result => {
            alert("Sucesso!");
        },error => console.error(error));
    }
}