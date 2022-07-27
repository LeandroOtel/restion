import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PlatoListComponent } from './components/plato-list/plato-list.component';
import { PlatoFormComponent } from './components/plato-form/plato-form.component';
import { FormsModule } from '@angular/forms';
import { MesaListComponent } from './components/mesa-list/mesa-list.component';
import { MesaFormComponent } from './components/mesa-form/mesa-form.component';
import { HomeComponent } from './components/home/home.component';
import { SupervisorMenuComponent } from './components/supervisor-menu/supervisor-menu.component';
import { GestionMesasComponent } from './components/gestion-mesas/gestion-mesas.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import { GestionMesaComponent } from './components/gestion-mesa/gestion-mesa.component';
import { GestionEliminarProductoComponent } from './components/gestion-eliminar-producto/gestion-eliminar-producto.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PlatoListComponent,
    PlatoFormComponent,
    MesaListComponent,
    MesaFormComponent,
    HomeComponent,
    SupervisorMenuComponent,
    GestionMesasComponent,
    GestionMesaComponent,
    GestionEliminarProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
