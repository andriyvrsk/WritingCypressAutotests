
let usernameLocator = '#txtUsername';
let passwordLocator = '#txtPassword'; 
let submitButtonLocator = '#btnLogin'; 
let errorMessageLocator ='#spanMessage'

class LoginPage{
    
  navigateTo (url = 'https://opensource-demo.orangehrmlive.com/') {                
      cy.visit(url);
    };
      

  logIn(username = 'Admin', password = 'admin123') {
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
} 

export default new LoginPage;