import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesaListComponent } from './mesa-list.component';

describe('MesaListComponent', () => {
  let component: MesaListComponent;
  let fixture: ComponentFixture<MesaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesaListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MesaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
