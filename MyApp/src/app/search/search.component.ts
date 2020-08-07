import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { NoticiasService } from "../domain/noticias.service";

@Component({
    selector: "Search",
    templateUrl: "./search.component.html"
})
export class SearchComponent implements OnInit {
    resultados: Array<string>;
    
    constructor(private news:NoticiasService) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
        this.news.agregar("hola!");
        this.news.agregar("hola 2!");
        this.news.agregar("hola 3!");
    }

    onPull(e) {
        console.log(e);
        const pullRefresh = e.object;
        setTimeout(() => {
            this.news.agregar("xxxxxxx");
            pullRefresh.refreshing = false;
        }, 2000);
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    onItemTap(x): void {
        console.dir(x);
    }

    buscarAhora(s: string){
        this.resultados=this.news.buscar().filter((x)=> x.indexOf(s)>=0);
    }
}
