import {Component, signal} from '@angular/core';

@Component({
  selector: 'app-cat-facts',
  imports: [],
  templateUrl: './cat-facts.component.html',
  styleUrl: './cat-facts.component.css'
})
export class CatFactsComponent {
  catFact = signal('');

  tellMeACatFact() {
    fetch('https://catfact.ninja/fact').then(async (response) => {
      if (response.status === 200) {
        const data = await response.json();
        if (data.fact) {
          this.catFact.set(data.fact);
        }
      }
    })
  }
}
