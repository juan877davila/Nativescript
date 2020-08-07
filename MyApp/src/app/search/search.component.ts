import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { NoticiasService } from "../domain/noticias.service";
import { Color, View } from "tns-core-modules/ui/core/view/view";

@Component({
    selector: "Search",
    templateUrl: "./search.component.html"
})
export class SearchComponent implements OnInit {
    resultados: Array<string>;
    @ViewChild("layout") layout:ElementRef;
    
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
        
        const layout=<View>this.layout.nativeElement;
        layout.animate({
            backgroundColor: new Color("blue"),
            duration: 3000,
            delay: 1500
        }).then(()=>layout.animate({
            backgroundColor: new Color("white"),
            duration: 3000,
            delay: 1500
        }));
    }
}
