import { Component } from "@angular/core";

@Component({
    selector: 'app-not-found',
    template: `
        <p>Not found, <a routerLink="/">Go home</a></p>
    `
})
export class NotFoundComponent {
    constructor() {}
}