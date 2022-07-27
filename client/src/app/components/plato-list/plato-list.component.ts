import { Component, OnInit } from '@angular/core';
import { Plato } from '../../interfaces/plato';
import { PlatoService } from '../../services/plato.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-plato-list',
  templateUrl: './plato-list.component.html',
  styleUrls: ['./plato-list.component.css']
})
export class PlatoListComponent implements OnInit {

  platos : Plato[] = [];

  constructor(private platoService: PlatoService, private location: Location) { }

  ngOnInit(): void {
    this.getPlatos();
  }

  getPlatos(){
    this.platoService.getPlatos().subscribe(
      res=> {
        this.platos = res;
      },
      err=> console.log(err)
    )
  }

  deletePlato(id: string): void {
    this.platoService.deletePlato(id).subscribe(
        res => {
          this.getPlatos();
        },
        err => console.log(err)
      )
   }

   goBack(): void {
    this.location.back();
  }
}
