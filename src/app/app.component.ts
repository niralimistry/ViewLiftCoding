import {Component} from '@angular/core';
import {AppService} from './app.service';
import {OnInit} from '@angular/core';
import {Ifilm} from './film';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  filmDataList: Ifilm[] = [];

  constructor(private appservice: AppService) {
  }

  ngOnInit(): void {
    this.appservice.getProducts().subscribe((resp) => {
      let filmList = resp['films'];
      filmList = filmList['film'];

      for (let i = 0; i < filmList.length; i++) {
        const filmData = filmList[i];
        const film: Ifilm = {
          title: filmData.title,
          imageUrl: filmData.images.image[0].src,
          permaLink: filmData.permaLink
        };
        this.filmDataList.push(film);
      }
    });
  }
}
