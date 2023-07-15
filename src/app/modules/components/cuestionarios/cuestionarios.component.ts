import { Component, OnInit } from '@angular/core';
import { cuestionario } from '../../models/cuestionario.model';
import { ApiCuestionarioService } from '../../services/api.cuestionario.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cuestionarios',
  templateUrl: './cuestionarios.component.html',
  styleUrls: ['./cuestionarios.component.css']
})
export class CuestionariosComponent implements OnInit{
  protected cuestionarioList: cuestionario[];
  protected cole: string;

  constructor(private cuestionarioService: ApiCuestionarioService, private route: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.cole = params['colegio'];
    }
  );
  this.cuestionarioService.getBySchool(this.cole).subscribe(response => {
    this.cuestionarioList = response.tests

  })
  }

  goToPreguntas(test: number): void {
   
    this.router.navigate([`/preguntasTest`], { queryParams: { test: test} })

  }
}
