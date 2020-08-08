import { Injectable } from "@angular/core";
import { getJSON, request} from "tns-core-modules/http";

@Injectable()
export class NoticiasService {
  api: string = "https://303c446f.ngrok.io"
  constructor() {
    
  }

  agregar(n: string) {
    return request({
      url: this.api +"/favs",
      method: "POST",
      headers: {"Content-Type":"application/json"},
      content: JSON.stringify({ nuevo: n})
    })
  };

  favs(){
    return getJSON(this.api + "/favs");
  }

  buscar(s: string) {
    return getJSON(this.api + "/get?q" + s);
  }
}
