
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GalleryService {
    constructor(private http: HttpClient) { }
    giveImageData() {
        const imagesURL = 'https://api.themoviedb.org/3/trending/all/day?api_key=5a2cd80ddb89fe9f1c468418faac2316&page=1';
        const res = this.http.get(imagesURL);
        return res;
    }
}
