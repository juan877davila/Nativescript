import { Component, OnInit } from "@angular/core";

@Component({
    selector: "News",
    templateUrl: "./news.component.html"
})
export class NewsComponent implements OnInit {
    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Use the "ngOnInit" handler to initialize data for the view.
    }
}
