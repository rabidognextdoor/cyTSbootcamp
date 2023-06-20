/// <reference types="cypress" />
const apiUrl = `${Cypress.env('apiUrl')}`;

describe('simple API', () => {
    it('Logs the API', () => {
        cy.request(`${apiUrl}users/2`).then(res => {
            cy.log(JSON.stringify(res.body.data.email));
            cy.log(JSON.stringify(res.headers));
        });
    });

    it('Validates headers', () => {
        // Call the endpoint and alias the response to use in multiple assertions
        cy.request(`${apiUrl}users/2`).as('users');
        cy.get('@users')
            .its('headers')
            .its('content-type')
            .should('include', 'application/json');
        cy.get('@users')
            .its('headers')
            .its('connection')
            .should('include', 'keep-alive');
    });

    it('Validates status codes', () => {
        // Call the API correctly and validate the status code
        cy.request(`${apiUrl}users/2`).as('existingUser');
        cy.get('@existingUser').its('status').should('equal', 200);

        // Call the API incorrectly to ensure successful failure
        cy.request({
            url: `${apiUrl}users/non-exist`,
            failOnStatusCode: false,
        }).as('nonExistingUser');
        cy.get('@nonExistingUser').its('status').should('equal', 404);
    });

    it('GET request', () => {
        // Make the GET request and alias the response
        cy.request({
            url: `${apiUrl}users/2`,
            method: 'GET',
        }).as('user');
        // Get the response and manipulate it to validate the User ID and Email fields of the response
        cy.get('@user').then(res => {
            const { body } = res;
            cy.log(JSON.stringify(body));
            // Validate the User ID
            expect(body.data.id).to.equal(2);
            // Validate the email
            expect(body.data.email).to.contain('janet.weaver@reqres.in');
            // Validate the last name field
            expect(body.data.last_name).not.to.contain('SomeFunnyName');
        });
    });
    it('POST request', () => {
        // Make the POST request
        cy.request({
            url: `${apiUrl}login`,
            method: 'POST',
            body: { email: 'eve.holt@reqres.in', password: 'cityslicka' },
        }).as('loginRequest');
        cy.get('@loginRequest').its('status').should('equal', 200);
        cy.get('@loginRequest').then(res => {
            const { body } = res;
            expect(body.token).to.equal('QpwL5tke4Pnpja7X4');
        });
    });
    it('POST Request with invalid data', () => {
        // Make the POST request
        cy.request({
            url: `${apiUrl}login`,
            method: 'POST',
            failOnStatusCode: false,
            body: { email: 'eve.holt@reqres.in' },
        }).as('loginRequest');

        cy.get('@loginRequest').its('status').should('equal', 400);
        cy.get('@loginRequest').then(res => {
            const { body } = res;
            expect(body.error).to.equal('Missing password');
        });
    });
    it('DELETE request', () => {
        // Make the DELETE request
        cy.request({
            url: `${apiUrl}users/2`,
            method: 'DELETE',
        }).as('delRequest');
        cy.get('@delRequest').its('status').should('equal', 204);
    });
    it('PUT Request', () => {
        // Make the put request and alias the response
        cy.request({
            url: `${apiUrl}users/2`,
            method: 'PUT',
            body: { name: 'name-update' },
        }).as('putRequest');
        cy.get('@putRequest').its('status').should('equal', 200);
        cy.get('@putRequest').then(res => {
            const { body } = res;
            expect(body.name).to.equal('name-update');
        });
    });
});
