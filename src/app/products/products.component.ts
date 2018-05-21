import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  goToBookWithId(id:string): void {
    this.router.navigate(['books/', id], {relativeTo: this.route});
  }

  ngOnInit() {
  }
}
