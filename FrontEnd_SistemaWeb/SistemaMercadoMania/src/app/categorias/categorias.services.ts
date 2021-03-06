import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Categorias } from "../Models/categoria.model";

@Injectable()
export class CategoriasServices {

    _http :HttpClient;
    categoria:Categorias = new Categorias();
    listaCategorias:Categorias[] = [];
    localhost:string = 'https://localhost:44340/categoria/';

    constructor(http : HttpClient, private router:Router){
        this._http = http;
    }

    GetCategorias():Categorias[]{
        this._http.get<Categorias[]>(this.localhost).subscribe(result => {
            this.listaCategorias = result;
        }, error => console.error(error));
        return this.listaCategorias;
    }

    AddCategorias(categoria: Categorias):void{
        this._http.post<Categorias>(this.localhost,categoria).subscribe( result => {
            alert("Sucesso!");
        }, error => console.error(error));
        
    }

    UpdateCategorias(categoria:Categorias):void{
        this._http.put<Categorias>(this.localhost, categoria).subscribe( result => {
            alert("Sucesso");
            this.router.navigate(['/categorias/']);
        }, error => console.error(error));
    }

    DeleteCategorias(id:number):void{
        this._http.delete<Categorias>(this.localhost + id).subscribe(result => {
            alert("Sucesso!");
        },error => console.error(error));
    }

    getById(id:any){
        this._http.get<Categorias>(this.localhost + id).subscribe(result =>{
          this.categoria = result;
        }, error => console.error(error));
        return this.categoria;
      }
}