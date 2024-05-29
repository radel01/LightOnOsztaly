export default class Lampa {
    #allapot; /* boolean, ég a lámpa, vagay nem */
    #id; /* a lápa sorszáma */
    #divElem; /* html elem, ez jeleníti meg a lámpát */
    #szuloElem;
  
    constructor(id, allapot, divElem, szuloElem) {
      this.#id = id;
      this.#allapot = allapot;
      this.#szuloElem = szuloElem;
  
      this.#megjelenit();
      /* HA RÁKATTINTUNK AZ ELEMRE */
      this.#divElem = this.#szuloElem.children("div:last-child");
      this.#divElem.on("click", () => {
        this.#kattintasTrigger("kapcsolas");
        console.log(this.#id);
      });
    }
  
    #megjelenit() {
      let txt = `<div></div>`;
      this.#szuloElem.append(txt);
    }
  
    setAllapot() {
      /* a lápa állapotát az ellenkezőre váltja, meghívja a szinBeallit metódust */
      if (this.#allapot == true) {
        this.#szinBeallit();
        this.#allapot = false;
      } else {
        this.#szinBeallit();
        this.#allapot = true;
      }
    }
  
    #szinBeallit() {
      if (this.#allapot == true) {
        this.#divElem.addClass("sarga");
      } else {
        this.#divElem.addClass("fekete");
      }
    }
  
    #kattintasTrigger(esemenyNev) {
      const e = new CustomEvent(esemenyNev, { detail: this.#id });
      window.dispatchEvent(e);
    }
  }