import { Component, OnInit } from '@angular/core';
import { Plato } from '../../interfaces/plato';
import { PlatoService } from '../../services/plato.service';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { Mesa } from '../../interfaces/mesa';
import { MesaService } from '../../services/mesa.service';

@Component({
  templateUrl: './gestion-mesa.component.html',
  styleUrls: ['./gestion-mesa.component.css']
})
export class GestionMesaComponent implements OnInit {

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
    this.platoService.getPlatos().subscribe(
      res=> {
        this.platos = res;
      },
      err=> console.log(err)
    )
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

  selectPlato(plato: Plato){
    this.mesa.platos.push(plato)
    this.mesa.total = this.mesa.total + plato.precio;
    window.alert("Se agrego el plato "+plato.nombre+" por $"+plato.precio);
    this.updateMesa()
  }

  /*deletePlato(plato: Plato){
    let find = false;
    this.mesa.platos.forEach( (item, index) => {
      if(item.nombre === plato.nombre){
        this.mesa.platos.splice(index,1);
        this.mesa.total = this.mesa.total-plato.precio;
        find = true;
      }
    });

    if(find){
      window.alert("Se quito el plato "+plato.nombre+" por $"+plato.precio);
    }else{
      window.alert("La mesa no tiene un pedido del plato "+plato.nombre);
    }
    this.updateMesa()
  }
  */

  /*cobrar():void {
    let mensaje=""
    this.mesa.platos.forEach( (item, index) => {
      mensaje += item.nombre + " --> $ " + item.precio
      mensaje += "\r"
    });
    
    alert("Platos consumidos: \r " + mensaje + "Tu monto total a pagar es de: " + this.mesa.total);
    this.mesa.total=0;
    this.mesa.platos= [];
    this.updateMesa()
  }
  */
  goBack(): void {
    this.location.back();
  }

}
