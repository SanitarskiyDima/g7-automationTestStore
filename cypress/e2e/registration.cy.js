import user from '../fixtures/user.json'
import {faker} from '@faker-js/faker'
import loginPage from "../support/pages/LoginPage";
import accountPage from "../support/pages/AccountPage";
import registrationPage from "../support/pages/RegistrationPage";

user.firstname = faker.person.firstName();
user.lastname = faker.person.lastName();
user.email = faker.internet.email({ firstName: 'Jeanne', lastName: 'Doe', provider: 'some.fakeMail.qa', allowSpecialCharacters: false });
user.loginname = faker.internet.userName();

describe('register with valid data', () => {

  it('Registration', () => {
    registrationPage.openRegistrationForm();
    registrationPage.getCustomerMenuTop().click();
    registrationPage.getContinueButton().click();

    cy.log('Fill in the fields Personal Details fields');
    registrationPage.getFirstNameField().type(user.firstname);
    registrationPage.getFirstNameField().should('have.prop', 'value', user.firstname);
    registrationPage.getLastNameField().type(user.lastname);
    registrationPage.getLastNameField().should('have.prop', 'value', user.lastname);
    registrationPage.getEmailField().type(user.email);
    registrationPage.getEmailField().should('have.prop', 'value', user.email);
    registrationPage.getTelephoneField().type(user.telephone);
    registrationPage.getTelephoneField().should('have.prop', 'value', user.telephone);
    registrationPage.getFaxField().type(user.fax);
    registrationPage.getFaxField().should('have.prop', 'value', user.fax);

    cy.log('Fill in the Your Address fields');
    registrationPage.getCompanyField().type(user.company);
    registrationPage.getCompanyField().should('have.prop', 'value', user.company);
    registrationPage.getAddress1Field().type(user.address_1);
    registrationPage.getAddress1Field().should('have.prop', 'value', user.address_1);
    registrationPage.getAddress2Field().type(user.address_2);
    registrationPage.getAddress2Field().should('have.prop', 'value', user.address_2);
    registrationPage.getCityField().type(user.city);
    registrationPage.getCityField().should('have.prop', 'value', user.city);
    registrationPage.getPostcodeField().type(user.postcode);
    registrationPage.getPostcodeField().should('have.prop', 'value', user.postcode);
    registrationPage.getCountryDropdown().select(user.country);
    registrationPage.getCountryDropdown().should('have.prop', 'value', user.country_id);
    registrationPage.getZoneDropdown().select(user.zone_name);
    registrationPage.getZoneDropdown().should('have.prop', 'value', user.zone_id);

    cy.log('Fill in the Login Details fields');
    registrationPage.getLoginNameField().type(user.loginname);
    registrationPage.getLoginNameField().should('have.prop', 'value', user.loginname);
    registrationPage.getPasswordField().type(user.password);
    registrationPage.getPasswordField().should('have.prop', 'value', user.password);
    registrationPage.getConfirmPasswordField().type(user.password);
    registrationPage.getConfirmPasswordField().should('have.prop', 'value', user.password);

    cy.log('Fill in the Newsletter');
    registrationPage.getNewsletterOption().click();
    registrationPage.getNewsletterOption().should('be.checked');
    registrationPage.getAgreeCheckbox().check();
    registrationPage.getAgreeCheckbox().should('be.checked');

    cy.log('Submit form and check results');
    registrationPage.getContinueButton().click();
    registrationPage.getFormSubmissionStatus().should('have.prop', 'textContent', ' Your Account Has Been Created!');
  });

  it('Authorization', () => {
    loginPage.visit();
    loginPage.fillLoginFields(user.loginname, user.password);

    cy.log('User first name should display on page');
    accountPage.getFirstNameText().should('contain', user.firstname);
  })

})
