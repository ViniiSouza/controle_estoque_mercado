import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriasComponent } from './categorias/categorias.component';
import { EstoqueComponent } from './estoque/estoque.component';
import { ProdutosComponent } from './produtos/produtos.component';

const routes: Routes = [
  {path: 'categorias', component: CategoriasComponent},
  {path: 'produtos', component: ProdutosComponent},
  {path: 'estoque', component: EstoqueComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
