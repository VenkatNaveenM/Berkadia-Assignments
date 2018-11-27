import { Component, OnInit } from '@angular/core';
import { GalleryService } from './gallery.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private galleryData;
  private fullMovieDetials;
  constructor(private galleryService: GalleryService) { }
  ngOnInit() {
    this.galleryService.giveImageData().subscribe((res) => {
      this.galleryData = this.addBaseURL(res['results']);
      console.log(this.galleryData);
    });

  }
  addBaseURL(response) {
    if (Array.isArray(response)) {
      response.forEach(element => {
        if (element.backdrop_path) {
          element.backdrop_path = 'http://image.tmdb.org/t/p/w300_and_h450_bestv2/' + element.backdrop_path;

        } else {
          element.backdrop_path = 'http://image.tmdb.org/t/p/w300_and_h450_bestv2/' + '/xgbeBCjmFpRYHDF7tQ7U98EREWp.jpg';
        }
      });
    } else {
      response.backdrop_path = 'http://image.tmdb.org/t/p/w1280/' + response.backdrop_path;

    }

    return response;
  }
}
