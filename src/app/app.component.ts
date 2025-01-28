import {Component} from '@angular/core';
import {CatFactsComponent} from './components/cat-facts/cat-facts.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [
    CatFactsComponent,
    CatFactsComponent
  ],
  styleUrl: './app.component.css'
})
export class AppComponent {

}
