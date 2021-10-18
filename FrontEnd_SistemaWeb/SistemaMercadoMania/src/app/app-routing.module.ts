import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriasAddComponent } from './categorias/categorias.add.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { CategoriasFormComponent } from './categorias/categorias.form.component';
import { EstoqueComponent } from './estoque/estoque.component';
import { EstoqueFormComponent } from './estoque/estoque.form.component';
import { HomeComponent } from './home/home.component';
import { ProdutosAddComponent } from './produtos/produtos.add.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { ProdutosFormComponent } from './produtos/produtos.form.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent, pathMatch: 'full'},
  {path: 'categorias', component: CategoriasComponent},
  {path: 'categorias/add', component: CategoriasAddComponent},
  {path: 'categorias/form/:id', component: CategoriasFormComponent},
  {path: 'produtos', component: ProdutosComponent},
  {path: 'produtos/add', component: ProdutosAddComponent},
  {path: 'produtos/form/:id', component: ProdutosFormComponent},
  {path: 'estoque', component: EstoqueComponent},
  {path: 'estoque/form/:id', component: EstoqueFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
