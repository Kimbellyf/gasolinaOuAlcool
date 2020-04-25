import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public resultado: string = "Preencha todos os campos para saber qual o melhor";
  public precoAlcool;
  public precoGasolina;

  constructor() {}

  calcular(){
    //validar se os campos foram preenchidos
    if( this.precoAlcool && this.precoGasolina){
      var pAlcool = parseFloat(this.precoAlcool);
      var pGasolina = parseFloat(this.precoGasolina);

      /* faz cálculo (precoAlcool/precoGasolina)
      se: resultado >= 0.7 melhor utilizar gasolina
      se n : melhor utilizar álcool */
      var res = pAlcool/ pGasolina
      if(res>=0.7){
        this.resultado= "Melhor utilizar Gasolina";
      }else{
        this.resultado = "Melhor utilizar álcool";
      }
     
    }else{
      this.resultado = "Preencha corretamente os campos";
    }
  }

}
