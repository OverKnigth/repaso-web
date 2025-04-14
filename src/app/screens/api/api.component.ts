import { Component } from '@angular/core';
import { Cerveza } from '../../types/cervezas';
import { Router } from '@angular/router';
import { CervezasService } from '../../services/cervezas/cervezas.service';

@Component({
  selector: 'app-api',
  standalone: true,
  imports: [],
  templateUrl: './api.component.html',
  styleUrl: './api.component.css'
})
export class ApiComponent {
  cervezas: Cerveza[] =[]

  constructor(private router: Router, private cervezasService: CervezasService){}

  ngOnInit(){
    this.getCervezas();
  }

  getCervezas(){
    this.cervezasService.getCerveza().subscribe(cervezas => {
      this.cervezas = cervezas;
    }
    );
  }

  verCerveza(id: number){
    this.router.navigate(["/api-detail", id]);
  }

}
