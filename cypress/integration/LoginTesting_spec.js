const { describe } = require("mocha");

let usernameLocator1 = '#txtUsername'; 
let usernameLocator2 = '[id="txtUsername"]'; 
 
let passwordLocator1 = '#txtPassword'; 
let passwordLocator2 = '[id="txtPassword"]'; 

let submtButtonLocator1 = '#Submit'; 
let submitButtonLocator2 = '[name="Submit"]';

describe('myTest', () => {
  it('diffScreenResolutions', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/');
    cy.viewport(1280, 1024);
    cy.wait(8000);
    cy.viewport(768, 1024);
    cy.wait(8000);
    cy.viewport(414, 896 ); 
  })
})

