import { Component, OnInit } from '@angular/core';
import { ApiColegioService } from '../../services/api.colegio.service';
import { Router } from '@angular/router';
import { colegio } from '../../models/colegio.model';

@Component({
  selector: 'app-colegios',
  templateUrl: './colegios.component.html',
  styleUrls: ['./colegios.component.css']
})
export class ColegiosComponent implements OnInit{
  protected colegioList: Array<colegio>;

  constructor(private colegioService: ApiColegioService, private router: Router){

  }

  ngOnInit(): void {
    this.colegioService.get().subscribe(response => {
      this.colegioList=response.colegios
    })
  }

  goToPreguntas(cole: colegio){
    
    this.router.navigate([`/preguntas`], { queryParams: { colegio: cole.hash } })
  }
  goToCuestionarios(cole: colegio){
    
    this.router.navigate([`/cuestionarios`], { queryParams: { colegio: cole.hash } })
  }

}
