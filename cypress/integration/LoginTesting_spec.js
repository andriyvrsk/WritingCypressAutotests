const { describe } = require("mocha");
const LoginPage = require ('./LoginPage_po');
const DashboardPage = require ('./DashboardPage_po');
/// <reference types = "Cypress" />
let invUsers;
beforeEach(() => {
  LoginPage.navigateTo();
});

before(function() {
  cy.fixture('users').then(function (data) {
    this.data = data; 
  });
  return this.data;
});

describe('different screen resolutions', () => {
  it('diffScreenResolutions', () => {
    cy.viewport(1280, 1024);
    cy.wait(1000);
    cy.viewport(768, 1024);
    cy.wait(1000);
    cy.viewport(414, 896 ); 
  })
})

describe('positive login check', function () {
  it('loginCheckPos', function() {
    LoginPage.logIn(this.data[0].username, this.data[0].password);
    DashboardPage.urlCheck();
    DashboardPage.headerCheck();
    DashboardPage.logOut();
  })
})

describe('negative login check', () => {
  it('fixture', function(){
    cy.fixture('invalidUsers').then(invalidUsers => {
      invUsers = invalidUsers;
    });
  });
  it('loginCheckWrongPass', () => {
    LoginPage.logIn(invUsers["user1"].name, invUsers["user1"].password);
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
