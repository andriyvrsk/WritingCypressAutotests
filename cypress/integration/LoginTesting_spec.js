const { describe } = require("mocha");

let usernameLocator1 = '#txtUsername'; 
let usernameLocator2 = '[id="txtUsername"]'; 
 
let passwordLocator1 = '#txtPassword'; 
let passwordLocator2 = '[id="txtPassword"]'; 

let submitButtonLocator1 = '#btnLogin'; 
let submitButtonLocator2 = '[name="Submit"]';
let submitButtonLocator3 = '.button';

// describe('different screen resolutions', () => {
//   it('diffScreenResolutions', () => {
//     cy.visit('https://opensource-demo.orangehrmlive.com/');
//     //navigateTo();
//     cy.viewport(1280, 1024);
//     cy.wait(8000);
//     cy.viewport(768, 1024);
//     cy.wait(8000);
//     cy.viewport(414, 896 ); 
//   })
// })

describe('positive login check', () => {
  it('loginCheckPos', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/');
    //navigateTo();
    cy.get(usernameLocator1).type('Admin');
    cy.get(passwordLocator1).type('admin123');
    cy.get(submitButtonLocator3).click();
    cy.url().should('contain', 'https://opensource-demo.orangehrmlive.com/index.php/dashboard');
    cy.get('[class="head"]').should('contain', 'Dashboard');
    cy.get('.panelTrigger').click();
    cy.get('[href="/index.php/auth/logout"]').click();
  })
})

describe('negative login check', () => {
  it('loginCheckWrongPass', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/');
    cy.get(usernameLocator1).type('Admin');
    cy.get(passwordLocator1).type('12345');
    cy.get(submitButtonLocator3).click();
    //logIn('Admin', '123');
    cy.get('[id="spanMessage"]').should('contain', 'Invalid credentials');
  })
})

describe('negative login check', () => {
  it('loginCheckWrongUsername', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/');
    cy.get(usernameLocator1).type('Administrator');
    cy.get(passwordLocator1).type('admin123');
    cy.get(submitButtonLocator3).click();
    cy.get('[id="spanMessage"]').should('contain', 'Invalid credentials');
  })
})

function navigateTo (url = 'https://opensource-demo.orangehrmlive.com/') {
  cy.visit(url);
}

function logIn(username = 'Admin', password = 'admin123') {
  cy.get(usernameLocator1).type(username);
  cy.get(passwordLocator1).type(password);
  cy.get(submitButtonLocator3).click();
}