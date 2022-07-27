import { Component, OnInit } from '@angular/core';
import { Mesa } from '../../interfaces/mesa';
import { MesaService } from '../../services/mesa.service';
import { Plato } from '../../interfaces/plato';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-mesa-form',
  templateUrl: './mesa-form.component.html',
  styleUrls: ['./mesa-form.component.css'],
})
export class MesaFormComponent implements OnInit {
  mesa: Mesa = {
    ubicacion: '',
    numeroDeMesa: 0,
    total: 0,
    platos: [],
  };

  edit: boolean = false;

  constructor(
    private mesaService: MesaService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private location: Location,
  ) {}

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if (params) {
      this.mesaService.getMesa(params['id']).subscribe((res) => {
        console.log(res);
        this.mesa = res;
        this.edit = true;
      });
    }
  }

  submitMesa() {
    this.mesaService.createMesa(this.mesa).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate([`/mesas`]);
      },
      (err) => console.log(err),
    );
  }

  updateMesa() {
    delete this.mesa.createdAt;
    this.mesaService.updateMesa(this.mesa._id!, this.mesa).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate([`/mesas`]);
      },
      (err) => console.log(err),
    );
  }
  goBack(): void {
    this.location.back();
  }
}
