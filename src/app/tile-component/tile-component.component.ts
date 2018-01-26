import {Component, Input, OnInit} from '@angular/core';
import {Ifilm} from '../film';

@Component({
  selector: 'app-tile-component',
  templateUrl: './tile-component.component.html',
  styleUrls: ['./tile-component.component.css']
})
export class TileComponentComponent implements OnInit {

  @Input() data: Ifilm;
  constructor() { }

  ngOnInit() {
  }

}
