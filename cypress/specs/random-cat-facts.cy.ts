import {dataTest} from '../utils/data-test';

describe('random cat facts', () => {
  it('should show a random cat facts on "Tell me a cat fact" boutton', () => {
    cy.intercept('GET', 'https://catfact.ninja/fact', {fixture: 'lincoln-loved-cats'})
    cy.visit('http://localhost:4200');
    cy.get(dataTest('tell-me-a-cat-fact-btn')).click();
    cy.get(dataTest('cat-fact')).should('contain', 'Abraham Lincoln loved cats. He had four of them while he lived in the White House.');
  });
});
