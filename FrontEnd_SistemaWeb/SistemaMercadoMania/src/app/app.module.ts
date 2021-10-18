import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProdutosComponent } from './produtos/produtos.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { EstoqueComponent } from './estoque/estoque.component';
import { CategoriasServices } from './categorias/categorias.services';
import { ProdutosServices } from './produtos/produtos.services';
import { CategoriasAddComponent } from './categorias/categorias.add.component';
import { FormsModule } from '@angular/forms';
import { ProdutosAddComponent } from './produtos/produtos.add.component';
import { CategoriasFormComponent } from './categorias/categorias.form.component';
import { ProdutosFormComponent } from './produtos/produtos.form.component';
import { EstoqueFormComponent } from './estoque/estoque.form.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ProdutosComponent,
    ProdutosAddComponent,
    ProdutosFormComponent,
    CategoriasComponent,
    CategoriasAddComponent,
    CategoriasFormComponent,
    EstoqueComponent,
    EstoqueFormComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [
    CategoriasServices,
    ProdutosServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
