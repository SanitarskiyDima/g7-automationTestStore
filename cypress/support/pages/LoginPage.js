import BasePage from "./BasePage";

class LoginPage extends BasePage {

    visit() {
        cy.log('Open authorization form');
        cy.visit('/index.php?rt=account/login');
    }

    getLoginNameField() {
        return cy.get('#loginFrm_loginname');
    }

    getPasswordField() {
        return cy.get('#loginFrm_password');
    }

    getSubmitButton() {
        return cy.get('[title="Login"]');
    }

    getErrorMessageText() {
        return cy.get('.alert-error');
    }

    fillLoginFields(username = '', password = '') {
        cy.log('Fill in authorization fields');
        username ? this.getLoginNameField().type(username) : cy.log('Skip username field');
        password ? this.getPasswordField().type(password) : cy.log('Skip password field');
        this.getSubmitButton().click();
    }
}

export default new LoginPage()