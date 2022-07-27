import { Component, OnInit } from '@angular/core';
import { Plato } from '../../interfaces/plato';
import { PlatoService } from '../../services/plato.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-plato-form',
  templateUrl: './plato-form.component.html',
  styleUrls: ['./plato-form.component.css']
})
export class PlatoFormComponent implements OnInit {

  plato : Plato = {
    nombre :"",
    precio : 0,
    imagen : ""
  };

  edit: boolean=false;

  constructor(
    private platoService : PlatoService,
    private router : Router,
    private activatedRoute: ActivatedRoute,
    private location: Location
     ) { }

     ngOnInit() {
      const params = this.activatedRoute.snapshot.params;
      if (params){
        this.platoService.getPlato(params['id']).subscribe(
        res =>{
          console.log(res);
          this.plato = res;
          this.edit=true;
        }
        )
      }
    }

  submitPlato() {
    this.platoService.createPlato(this.plato).subscribe(
      res=>{
        console.log(res);
        this.router.navigate([`/platos`]);
      },
      err=> console.log(err)
    );
  }

  updatePlato(){
    delete this.plato.createdAt;
    this.platoService.updatePlato(this.plato._id!, this.plato).subscribe(
      res=>{console.log(res);
      this.router.navigate([`/platos`])
    },
      err =>console.log(err)
    )
  }
  goBack(): void {
    this.location.back();
  }
}
