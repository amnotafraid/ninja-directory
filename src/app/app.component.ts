import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!, woop woop';
  name = 'ninja';
  ninja = {
    name: "Ryu",
    belt: "Red"
  };

  yell(e) {
    alert("I am yelling");
    console.log(e); // I didn't see as much as he did in the console.
  }
}
