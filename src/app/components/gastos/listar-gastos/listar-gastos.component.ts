import { PresupuestoService } from './../../../services/presupuesto.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-listar-gastos',
  templateUrl: './listar-gastos.component.html',
  styleUrls: ['./listar-gastos.component.css']
})
export class ListarGastosComponent implements OnInit, OnDestroy {
  suscription: Subscription;
  presupuesto: number;
  restante: number;
  listGastos: any[] = [];

  constructor(private _presupuestoService: PresupuestoService) {
    this.presupuesto = 0;
    this.restante = 0;
    this.suscription = this._presupuestoService.getGastos().subscribe(data =>{
      this.restante = this.restante - data.cantidad;
      this.listGastos.push(data);
    })
   }

  ngOnInit(): void {
    this.presupuesto = this._presupuestoService.presupuesto;
    this.restante = this._presupuestoService.restante;
  }

  ngOnDestroy(): void{
    this.suscription.unsubscribe();
  }

  aplicarColorRestante(){
    if (this.presupuesto / 4 > this.restante) {
      return 'alert alert-danger';
    }else if (this.presupuesto / 2 > this.restante) {
       return 'alert alert-warning';
    }else{
       return 'alert alert-secondary';
    }
}
}
