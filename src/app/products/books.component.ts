import { Component } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-books',
  template: `<h1>Books!</h1>
    <p>You selected book with id {{id}}
  `
})
export class BooksComponent {
    id: string;

    constructor(private route: ActivatedRoute) {
        route.params.subscribe(params => { this.id = params['id']; });
    }
}
