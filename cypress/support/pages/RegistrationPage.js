import BasePage from "./BasePage";

class RegistrationPage extends BasePage {

    openRegistrationForm() {
        cy.log('Open registration form');
        cy.visit('/');
    }

    getCustomerMenuTop() {
        return cy.get('#customer_menu_top');
    }

    getContinueButton() {
        return cy.get('[title=Continue]');
    }

    getFirstNameField() {
        return cy.get('#AccountFrm_firstname');
    }

    getLastNameField() {
        return cy.get('#AccountFrm_lastname');
    }

    getEmailField() {
        return cy.get('#AccountFrm_email');
    }

    getTelephoneField() {
        return cy.get('#AccountFrm_telephone');
    }

    getFaxField() {
        return cy.get('#AccountFrm_fax');
    }

    getCompanyField() {
        return cy.get('#AccountFrm_company');
    }

    getAddress1Field() {
        return cy.get('#AccountFrm_address_1');
    }

    getAddress2Field() {
        return cy.get('#AccountFrm_address_2');
    }

    getCityField() {
        return cy.get('#AccountFrm_city');
    }

    getPostcodeField() {
        return cy.get('#AccountFrm_postcode');
    }

    getCountryDropdown() {
        return cy.get('#AccountFrm_country_id');
    }

    getZoneDropdown() {
        return cy.get('#AccountFrm_zone_id');
    }

    getLoginNameField() {
        return cy.get('#AccountFrm_loginname');
    }

    getPasswordField() {
        return cy.get('#AccountFrm_password');
    }

    getConfirmPasswordField() {
        return cy.get('#AccountFrm_confirm');
    }

    getNewsletterOption() {
        return cy.get('#AccountFrm_newsletter0');
    }

    getAgreeCheckbox() {
        return cy.get('#AccountFrm_agree');
    }

    getFormSubmissionStatus() {
        return cy.get('.maintext');
    }
}

export default new RegistrationPage();
