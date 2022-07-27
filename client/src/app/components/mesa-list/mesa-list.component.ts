import { Component, OnInit } from '@angular/core';
import { Mesa } from '../../interfaces/mesa';
import { MesaService } from '../../services/mesa.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-mesa-list',
  templateUrl: './mesa-list.component.html',
  styleUrls: ['./mesa-list.component.css'],
})
export class MesaListComponent implements OnInit {
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

  deleteMesa(id: string): void {
    this.mesaService.deleteMesa(id).subscribe(
      (res) => {
        this.getMesas();
      },
      (err) => console.log(err),
    );
  }

  goBack(): void {
    this.location.back();
  }
}
