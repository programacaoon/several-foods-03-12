import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { hamburgers } from '../hamburgers';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-japonesa-detail',
  templateUrl: './japonesa-detail.component.html',
  styleUrls: ['./japonesa-detail.component.css']
})
export class JaponesaDetailComponent implements OnInit {

  hamburger;
   
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.hamburger = hamburgers[+params.get('hamburgerId')];
    });
  }

  addToCart(hamburger) {
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(hamburger);
  }

  }





