const { describe } = require("mocha");

describe('myTest', () => {
  it('diffScreenResolutions', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/');
    cy.viewport(1280, 1024);
    cy.wait(8000);
    cy.viewport(768, 1024);
    cy.wait(8000);
    cy.viewport(414, 900); 
  })
})

