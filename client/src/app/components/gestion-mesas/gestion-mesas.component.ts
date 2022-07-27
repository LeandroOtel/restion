import { Component, OnInit } from '@angular/core';
import { Mesa } from '../../interfaces/mesa';
import { MesaService } from '../../services/mesa.service';
import { Location } from '@angular/common';

@Component({
  templateUrl: './gestion-mesas.component.html',
  styleUrls: ['./gestion-mesas.component.css']
})
export class GestionMesasComponent implements OnInit {
  mesas: Mesa[] = [];
  
  constructor(private mesaService: MesaService, private location: Location) {}

  ngOnInit(): void {
    this.getMesas();
  }

  getMesas() {
    this.mesaService.getMesas().subscribe(
      (res) => {
        this.mesas = res;
      },
      (err) => console.log(err),
    );
  }

  cobrar(mesa : Mesa):void {

    if(mesa.platos.length==0){
      alert("La mesa no registra consumos.");
      return;
    }
    let mensaje=""
    mesa.platos.forEach( (item, index) => {
      mensaje += item.nombre + " --> $ " + item.precio
      mensaje += "\r"
    });
    
    alert("Platos consumidos: \r " + mensaje + "Tu monto total a pagar es de: $ " + mesa.total);
    mesa.total=0;
    mesa.platos= [];
    this.updateMesa(mesa);
  }

  updateMesa(mesa : Mesa) {
    delete mesa.createdAt;
    this.mesaService.updateMesa(mesa._id!, mesa).subscribe(
      (res) => {
        console.log(res);
        //this.router.navigate([`/gestionMesas`]);
      },
      (err) => console.log(err),
    );
  }
}
