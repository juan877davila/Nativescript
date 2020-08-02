import { Component, OnInit } from "@angular/core";

@Component({
    selector: "Search",
    templateUrl: "./search.component.html"
})
export class SearchComponent implements OnInit {
    constructor() {
        // Use the constructor to inject services.
    }

    ngOnInit(): void {
        console.log("asd");
        console.log({nombre:{nombre:{nombre:"pepe"}}});
        console.dir({nombre:{nombre:{nombre:"pepe"}}});
        console.log([1,2,3]);
        console.dir([4,5,6]);
        // Use the "ngOnInit" handler to initialize data for the view.
    }
}
