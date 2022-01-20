const { describe } = require("mocha");
const loginPage = require ('../integration/LoginPage_po.js');

describe('different screen resolutions', () => {
  it('diffScreenResolutions', () => {
    loginPage.navigateTo();
    cy.viewport(1280, 1024);
    cy.wait(1000);
    cy.viewport(768, 1024);
    cy.wait(1000);
    cy.viewport(414, 896 ); 
  })
})

describe('positive login check', () => {
  it('loginCheckPos', () => {
    loginPage.navigateTo();
    loginPage.logIn();
    cy.url().should('contain', 'https://opensource-demo.orangehrmlive.com/index.php/dashboard');
    cy.get('[class="head"]').should('contain', 'Dashboard');
    cy.get('.panelTrigger').click();
    cy.get('[href="/index.php/auth/logout"]').click();
  })
})

describe('negative login check', () => {
  it('loginCheckWrongPass', () => {
    loginPage.navigateTo();
    loginPage.logIn('Admin', '123');
    cy.get('[id="spanMessage"]').should('contain', 'Invalid credentials');
  })
})

describe('negative login check', () => {
  it('loginCheckWrongUsername', () => {
    loginPage.navigateTo();
    loginPage.logIn('Administrator', 'admin123');
    cy.get('[id="spanMessage"]').should('contain', 'Invalid credentials');
  })
})
