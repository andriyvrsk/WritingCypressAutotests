
let usernameLocator1 = '#txtUsername';
let usernameLocator2 = '[id="txtUsername"]';

let passwordLocator1 = '#txtPassword'; 
let passwordLocator2 = '[id="txtPassword"]'; 

let submitButtonLocator1 = '#btnLogin'; 
let submitButtonLocator2 = '[name="Submit"]';
let submitButtonLocator3 = '.button';

class loginPage{
    navigateTo (url = 'https://opensource-demo.orangehrmlive.com/') {                //why without 'function' at the beginning?
        cy.visit(url);
      };
      

    logIn(username = 'Admin', password = 'admin123') {
        cy.get(usernameLocator2).type(username);
        cy.get(passwordLocator1).type(password);
        cy.get(submitButtonLocator1).click();
      }  
} 

export default new loginPage();