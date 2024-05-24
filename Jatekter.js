import Elem from "./Lampa.js";

export default class JatekTer {
  #db = 0;
  #lista = [];
  #meret=9;
  #lepes=0;
  constructor() {

    /* $(window).on("lepes", (event)=>{
        console.log(event.detail)
        let id=event.detail;
        this.#lep(id)
      }) */
  }

  #setAllapotlista(){

  }

  #szomszedokKeresese(id){
    
  }

  #init(){

  }

  #ellenorzes(){

  }

  /* #lep(id){
    if(this.#korSzamlalo%2==0){
        this.#lista[id]="x";
    }else{
        this.#lista[id]="o";
    }
    this.#korSzamlalo++;
    this.#megjelenit();
  }
  #megjelenit() {
    const szuloElem = $(".foDiv");
    szuloElem.empty();
    this.#lista.forEach((ertek,index) => {
      const elem = new Elem(index, ertek, szuloElem);
    });
  } */
}