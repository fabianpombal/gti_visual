import { Component, OnInit, ViewChild } from '@angular/core';
import { pregunta, tipo_edad, tipo_estructura, tipo_pregunta } from '../../models/pregunta.model';
import { ApiPreguntaService } from '../../services/api.pregunta.service';
import { ActivatedRoute } from '@angular/router';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css']
})
export class PreguntasComponent implements OnInit{
  protected preguntasList: Array<pregunta>;
  protected cole: string;
  @ViewChild('preguntasTable') preguntasTable: Table;
 



  constructor(private preguntasService: ApiPreguntaService, private route: ActivatedRoute){

  }

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
        this.cole = params['colegio'];
      }
    );
      this.preguntasService.getByColegio(this.cole).subscribe(response => {
        this.preguntasList = response.preguntas
      })
 
  }

  applyFilterGlobal($event, stringVal) {
    this.preguntasTable.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }


}
