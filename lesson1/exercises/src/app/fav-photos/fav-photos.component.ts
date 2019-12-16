import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'My Favorite Photos';
  image1 = 'https://i.redd.it/j9erfsz3ps441.jpg';
  image2 = 'https://preview.redd.it/cn7uezlb6u441.jpg?width=640&crop=smart&auto=webp&s=16f7c3e49d3acb0c46d0d24cc24114bed9cb5a00';
  image3 = 'https://preview.redd.it/t8u1lqacvr441.jpg?width=640&crop=smart&auto=webp&s=5689e45285b19773d644db7640ce037f72537f2d';

  constructor() { }

  ngOnInit() {
  }

}