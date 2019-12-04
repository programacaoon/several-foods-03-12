import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'

import { hamburgers } from '../hamburgers';
import {JaponesService} from './japones.service';

@Component({
  selector: 'app-japones',
  templateUrl: './japones.component.html',
  styleUrls: ['./japones.component.css']
})
export class JaponesComponent implements OnInit {

  hamburgers= hamburgers;

 
  
  constructor() { }

  ngOnInit() {
  }

}
