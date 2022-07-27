import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlatoListComponent } from './components/plato-list/plato-list.component';
import { PlatoFormComponent } from './components/plato-form/plato-form.component';
import { MesaListComponent } from './components/mesa-list/mesa-list.component';
import { MesaFormComponent } from './components/mesa-form/mesa-form.component';
import { HomeComponent } from './components/home/home.component';
import { SupervisorMenuComponent } from './components/supervisor-menu/supervisor-menu.component';
import { GestionMesasComponent } from './components/gestion-mesas/gestion-mesas.component';
import { GestionMesaComponent } from './components/gestion-mesa/gestion-mesa.component';
import { GestionEliminarProductoComponent} from './components/gestion-eliminar-producto/gestion-eliminar-producto.component'

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'platos',
    component: PlatoListComponent,
  },
  {
    path: 'plato/create',
    component: PlatoFormComponent,
  },
  {
    path: 'plato/edit/:id',
    component: PlatoFormComponent,
  },
  {
    path: 'mesas',
    component: MesaListComponent,
  },
  {
    path: 'gestionMesas',
    component: GestionMesasComponent,
  },
  {
    path: 'gestionMesa/:id',
    component: GestionMesaComponent,
  },
  {
    path: 'gestionEliminarProducto/:id',
    component: GestionEliminarProductoComponent,
  },
  {
    path: 'mesa/create',
    component: MesaFormComponent,
  },
  {
    path: 'mesa/edit/:id',
    component: MesaFormComponent,
  },
  {
    path: 'menuSupervisor',
    component: SupervisorMenuComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
