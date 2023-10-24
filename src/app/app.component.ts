import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {
      title: 'Neat Tree',
      userName: 'nature',
      content: 'Saw this awesome tree today.',
      imageUrl: 'assets/images/tree.jpeg'
    },
    {
      title: 'Snowy Mountain',
      userName: 'mountainlover',
      content: 'Here is a picture of a snowy mountain.',
      imageUrl: 'assets/images/mountain.jpeg'
    },
    {
      title: 'Mountain Biking',
      userName: 'binkin12222',
      content: 'I did some biking today.',
      imageUrl: 'assets/images/biking.jpeg'
    }
  ]
}
