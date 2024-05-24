export default class Elem{

    //privát adattagok létrehozása:
    #allapot=true;
    #divElem;
    #id=0;
    constructor(id, allapot, szuloElem){
        //this mindig a konkrét objektumpéldányra mutat az EGO
        this.#allapot=allapot;
        this.#szuloElem=szuloElem;
        this.#id=id;

        /* 
        this.#divElem = this.#szuloElem.children("div:last-child");
        this.#divElem.on("click", ()=>{
            console.log(this.#id);
            if(this.#allapot==false){
                this.#kattintasTrigger("lepes");
            }
        }) */
    }
    setAllapot(){

    }
    #szinBeallit(){

    }
    #kattintasTrigger(){
        const e= new CustomEvent(kapcsolas, {detail:this.#id})
        window.dispatchEvent(e)
    }
    /* //EGy osztályban a this a konkrét objektumpéldányt jelenti, de egy eseménykezelőben function névtelen függvénnyel használva azt a html elemet jelenti, amelyik az eseményt kiváltotta(mint az event.target), nyílfüggvénnyel használva pedig, az objektumpéldányra mutat
    #megjelenit(){
        let txt=`<div><h1>${this.#ertek}</h1></div>`;
        this.#szuloElem.append(txt)
    } */

/*     //információ átadás esemény esetén másik osztálynak
    #esemenyTrigger(esemenyNev){
        //létrehoz saját eseményt eseményNév néven, és átad adatokat saját magáról {detail: }
        const e= new CustomEvent(esemenyNev, {detail:this.#id})
        window.dispatchEvent(e)
    } */
}