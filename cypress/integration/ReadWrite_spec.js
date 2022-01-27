/// <reference types = "Cypress" />

describe( 'a', function(){
    let allUsers;
    it('write', function(){
        // cy.writeFile('cypress/fixtures/invalidUsers.json', {
        //     "user1": 
        //     {name: 'Admin',
        //     password: 'admin12345',},
        //     "user2":
        //     {name: 'Admin',
        //     password: '12345'}
        // });
        cy.fixture('invalidUsers').then(invalidUsers => {
            expect(invalidUsers["user1"].name).to.eq('Admin');
            allUsers = invalidUsers;
        });

    });
    it('log', function(){
        cy.log(allUsers["user1"].password);
    }) 
    
});