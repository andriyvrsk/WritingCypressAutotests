


class DashboardPage {
    url = '/dashboard';
    headerLocator = '[class="head"]';
    dropdownPannelLocator = '.panelTrigger';
    logoutBtnLocator = '[href="/index.php/auth/logout"]';

    urlCheck(){
        cy.url().should('contain', this.url);
    };

    headerCheck(){
        cy.get(this.headerLocator).should('contain', 'Dashboard');
    };

    logOut(){
        cy.get(this.dropdownPannelLocator).click();
        cy.get(this.logoutBtnLocator).click();
    };
};

export default new DashboardPage;