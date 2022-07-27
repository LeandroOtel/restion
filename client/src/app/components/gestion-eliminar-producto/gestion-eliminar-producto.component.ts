import { Component, OnInit } from '@angular/core';
import { Plato } from '../../interfaces/plato';
import { PlatoService } from '../../services/plato.service';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { Mesa } from '../../interfaces/mesa';
import { MesaService } from '../../services/mesa.service';

@Component({
  selector: 'app-gestion-eliminar-producto',
  templateUrl: './gestion-eliminar-producto.component.html',
  styleUrls: ['./gestion-eliminar-producto.component.css']
})
export class GestionEliminarProductoComponent implements OnInit {

  mesa: Mesa = {
    ubicacion: '',
    numeroDeMesa: 0,
    total: 0,
    platos: [],
  };

  platos : Plato[] = [];

  constructor(private platoService: PlatoService, private mesaService: MesaService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private location: Location,) { }

  ngOnInit(): void {
    this.getPlatos();
    const params = this.activatedRoute.snapshot.params;
    if (params) {
      this.mesaService.getMesa(params['id']).subscribe((res) => {
        console.log(res);
        this.mesa = res;
      });
    }
  }

  getPlatos(){
    this.mesa.platos
  }

  updateMesa() {
    delete this.mesa.createdAt;
    this.mesaService.updateMesa(this.mesa._id!, this.mesa).subscribe(
      (res) => {
        console.log(res);
        //this.router.navigate([`/gestionMesas`]);
      },
      (err) => console.log(err),
    );
  }

  deletePlato(plato: Plato){
    let find = false;
    this.mesa.platos.forEach( (item, index) => {
      if(item._id === plato._id && find == false){
        this.mesa.platos.splice(index,1);
        this.mesa.total = this.mesa.total-plato.precio;
        find = true;
      }
    });

      window.alert("Se quito el plato "+plato.nombre+" por $"+plato.precio);

    this.updateMesa()
  }

  goBack(): void {
    this.location.back();
  }

}


 

