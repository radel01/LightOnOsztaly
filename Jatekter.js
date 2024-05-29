import Lampa from "./Lampa.js";

export default class JatekTer {
  #db = 0; /* felkapcsolt lámpák száma */
  #allapotLista = []; /* melyik lámpa ég, melyik nem */
  #meret; /* játék mérete tábla = méret*méret */
  #lepes = 0; /* ennyi lépésben sikerült lekapcsolni az összes lámpát */

  constructor() {
    this.#meret=this.#setMeret();
    this.#setAllapotLista();
    this.#megjelenit();

    $(window).on("kapcsolas", (event) => {
      console.log(event.detail);
      let id = event.detail;
      this.#szomszedokKeresese(id);
      //this.lampa.#setAllapot();
    });
}

  #megjelenit() {
    const szuloElem = $(".foDiv");
    const divElem = $(".foDiv > div"); 
    szuloElem.empty();
    this.#allapotLista.forEach((allapot, index) => {
    const lampa = new Lampa(index, allapot, divElem ,szuloElem);
    lampa.setAllapot();
  });

}
#setMeret(){
  let NINPUTELEM = $(".meret");
  let N=5;
    NINPUTELEM.on("change", function () {
      N = NINPUTELEM.val();
      let inputMeret = $(":root");
      inputMeret.css("--meret", N);
    });
    return N;
}
#setAllapotLista() {
    /* beállítja a lista értékeit véletlenszerűen true/false, hossza méret*méret */
    this.#allapotLista = new Array(this.#meret * this.#meret);
    for (let index = 0; index < this.#allapotLista.length; index++) {
      let szam = Math.floor(Math.random() * 2);
      if (szam == 1) {
        this.#allapotLista[index] = true;
      } else if (szam == 0) {
        this.#allapotLista[index] = false;
      }
    }
    console.log(this.#allapotLista);
  }
  

  #szomszedokKeresese(id) {
    const elotteN = id - this.#meret;
    const elotte1 = id - 1;
    const utanaN = Number(id) + Number(this.#meret);
    const utana1 = Number(id) + 1;
    /* megkeresi az aktuális elem szomoszédait, és megváltoztatja az állapotukat*/
    if (id % 5 == 5) {
      this.#allapotLista[elotte1] = !this.#allapotLista[elotte1];
      this.#allapotLista[elotteN] = !this.#allapotLista[elotteN];
      this.#allapotLista[utanaN] = !this.#allapotLista[utanaN];
      this.#allapotLista[id] = !this.#allapotLista[id];
    }
    this.#allapotLista[elotte1] = !this.#allapotLista[elotte1];
    this.#allapotLista[elotteN] = !this.#allapotLista[elotteN];
    this.#allapotLista[utana1] = !this.#allapotLista[utana1];
    this.#allapotLista[utanaN] = !this.#allapotLista[utanaN];
    this.#allapotLista[id] = !this.#allapotLista[id];
    console.log(this.#allapotLista);
    console.log(id, utana1, utanaN);
    this.#megjelenit();
  }

}