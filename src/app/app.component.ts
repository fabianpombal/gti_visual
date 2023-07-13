import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gti_visual';

  colegioList: Array<string>;
  coleSelected: string;

  constructor(){
    this.colegioList = ["cc470f0b5f04e543889629a01218291f","f7ca7af3a97137f29d260c53bffa366e","fb4e617ae6b0169b6a89c56088ec3b4c"]
  }


  clickColegio(cole: string){
    this.coleSelected = cole;
  }
}
