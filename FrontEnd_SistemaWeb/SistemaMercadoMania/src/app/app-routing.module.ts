import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriasAddComponent } from './categorias/categorias.add.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { EstoqueComponent } from './estoque/estoque.component';
import { ProdutosAddComponent } from './produtos/produtos.add.component';
import { ProdutosComponent } from './produtos/produtos.component';

const routes: Routes = [
  {path: 'categorias', component: CategoriasComponent},
  {path: 'categorias/add', component: CategoriasAddComponent},
  {path: 'produtos', component: ProdutosComponent},
  {path: 'produtos/add', component: ProdutosAddComponent},
  {path: 'estoque', component: EstoqueComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
