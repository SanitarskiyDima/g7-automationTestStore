import user from '../fixtures/user.json'
import loginPage from "../support/pages/LoginPage";
import accountPage from "../support/pages/AccountPage";
import {headlessLogin} from "../support/helper";

describe('Authorization positive scenarios', () => {
    it('Authorization', () => {
        loginPage.visit();
        loginPage.fillLoginFields(user.loginname, user.password);

        cy.log('User first name should display on page');
        accountPage.getFirstNameText().should('contain', user.firstname);
    })
})

describe('Authorization negative scenarios', () => {

    it('Test auth helper', {retries: 2}, () => {
        headlessLogin(user.loginname, user.password);

        cy.visit('/index.php?rt=account/account');
        cy.log('User first name should display on page');
        accountPage.getFirstNameText().should('contain', user.firstname);
    })

    it('Authorization without entered username', {retries: 2}, () => {
        loginPage.visit();
        loginPage.fillLoginFields('', user.password);

        cy.log('User first name should display on page');
        loginPage.getErrorMessageText().should('contain', 'Error: Incorrect login or password provided.');
    })

    it('Authorization without entered password', () => {
        loginPage.visit();
        loginPage.fillLoginFields(user.loginname);

        cy.log('User first name should display on page');
        loginPage.getErrorMessageText().should('contain', 'Error: Incorrect login or password provided.');
    })

    it('Authorization with empty fields', () => {
        loginPage.visit();
        loginPage.fillLoginFields();

        cy.log('User first name should display on page');
        loginPage.getErrorMessageText().should('contain', 'Error: Incorrect login or password provided.');
    })
})
