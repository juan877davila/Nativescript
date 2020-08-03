import { Injectable } from "@angular/core";

@Injectable()
export class NoticiasService {
  private news: Array<string>=[];
  constructor() {
    
  }

  agregar(n: string) {
    this.news.push(n);
  }

  buscar() {
    return this.news;
  }
}
