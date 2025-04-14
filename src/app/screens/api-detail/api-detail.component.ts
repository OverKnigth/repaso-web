import { Component } from '@angular/core';
import { Cerveza } from '../../types/cervezas';
import { ActivatedRoute } from '@angular/router';
import { CervezasService } from '../../services/cervezas/cervezas.service';

@Component({
  selector: 'app-api-detail',
  standalone: true,
  imports: [],
  templateUrl: './api-detail.component.html',
  styleUrl: './api-detail.component.css',
})
export class ApiDetailComponent {
  cerveza: Cerveza | undefined;
  cervezaId: number = 0;

  constructor(
    private activatedRute: ActivatedRoute,
    private carvezasService: CervezasService
  ) {}

  ngOnInit() {
    this.activatedRute.params.subscribe((params) => {
      const id = params['id'];
      this.carvezasService.getCervezaId(id).subscribe((cerveza) => {
        this.cerveza = cerveza;
      });
    });
  }
}
