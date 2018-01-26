import {Component, Input} from '@angular/core';
import {Ifilm} from '../film';


@Component({
  selector: 'app-tile-component',
  templateUrl: './tile-component.component.html',
  styleUrls: ['./tile-component.component.css']
})
export class TileComponentComponent {

  @Input() data: Ifilm;
  constructor() { }
}
