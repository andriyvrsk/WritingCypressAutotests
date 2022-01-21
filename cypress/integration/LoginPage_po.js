
var randomEmail = require('random-email');

let usernameLocator = '#txtUsername';
let passwordLocator = '#txtPassword'; 
let submitButtonLocator = '#btnLogin'; 
let errorMessageLocator ='#spanMessage'

class LoginPage{
    
  navigateTo (url = 'https://opensource-demo.orangehrmlive.com/') {                
      cy.visit(url);
    };
      

  logIn(username, password) {
      cy.get(usernameLocator).type(username);
      cy.get(passwordLocator).type(password);
      cy.get(submitButtonLocator).click();
  };  

  errorMsgCheck(msg) {
    cy.get(errorMessageLocator).should('contain', msg);
  };

  urlCheck(){
    cy.url().should('contain', 'index.php/auth/validateCredentials');
  };

  getRandEmail() {
    return randomEmail({ domain: 'test.com' });
  };
} 

export default new LoginPage;