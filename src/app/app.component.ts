import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = '';
  age: number;

  get nameLabel() {
    return this.name ? `${this.name}: `: '';
  }
}
