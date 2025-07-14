import { Component } from '@angular/core';
import { Hero } from '@acme/ui';

@Component({
  imports: [Hero],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'demo';
}
