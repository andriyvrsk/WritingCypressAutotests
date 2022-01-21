const { describe } = require("mocha");
const LoginPage = require ('./LoginPage_po');

beforeEach(() => {
  LoginPage.navigateTo();
})


describe('different screen resolutions', () => {
  it('diffScreenResolutions', () => {
    cy.viewport(1280, 1024);
    cy.wait(1000);
    cy.viewport(768, 1024);
    cy.wait(1000);
    cy.viewport(414, 896 ); 
  })
})

describe('positive login check', () => {
  it('loginCheckPos', () => {
    LoginPage.logIn();
    cy.url().should('contain', 'https://opensource-demo.orangehrmlive.com/index.php/dashboard');
    cy.get('[class="head"]').should('contain', 'Dashboard');
    cy.get('.panelTrigger').click();
    cy.get('[href="/index.php/auth/logout"]').click();
  })
})

describe('negative login check', () => {
  it('loginCheckWrongPass', () => {
    LoginPage.logIn('Admin', '123');
    LoginPage.errorMsgCheck('Invalid credentials');
    LoginPage.urlCheck();
  })
})

describe('negative login check', () => {
  it('loginCheckWrongUsername', () => {
    LoginPage.logIn(LoginPage.getRandEmail(), 'admin123');
    LoginPage.errorMsgCheck('Invalid credentials');
    LoginPage.urlCheck();
  })
})
