import { Component, OnInit } from '@angular/core';
import { pregunta, pregunta_test } from '../../models/pregunta.model';
import { ApiPreguntaService } from '../../services/api.pregunta.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-preguntas-test',
  templateUrl: './preguntas-test.component.html',
  styleUrls: ['./preguntas-test.component.css']
})
export class PreguntasTestComponent implements OnInit{
  protected preguntasTest: pregunta_test[];
  private test: number;
  protected visible: boolean = false;
  protected pregunta: pregunta = {
    colegio: '',
    id: 0,
    pregunta: '',
    tipo_edad: 0,
    tipo_estructura: 0,
    tipo_pregunta: 0

  };

  constructor(private preguntasService: ApiPreguntaService, private route: ActivatedRoute){

  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.test = params['test'];
    }
  );
  this.preguntasService.getPreguntasTest(this.test).subscribe(response => {
    this.preguntasTest = response.preguntasTest
    console.log(this.preguntasTest);
  })
  
  }

  showDialog() {
    this.visible = true;
  }

  getPregunta(id: number){
    this.preguntasService.getById(id).subscribe(resp=>{
      
      this.pregunta = resp
     
      
    })
  }


  clearPregunta(){
    this.pregunta = {
      colegio: '',
      id: 0,
      pregunta: '',
      tipo_edad: 0,
      tipo_estructura: 0,
      tipo_pregunta: 0

    }
  }
}
