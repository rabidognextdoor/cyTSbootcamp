const url = 'http://the-internet.herokuapp.com/basic_auth';
const appendedUrl = 'http://admin:admin@the-internet.herokuapp.com/basic_auth';

class BasicAuthPage {
    static visitAppended() {
        cy.visit(appendedUrl);
    }

    static visitHeader() {
        cy.visit(url, {
            headers: {
                authorization: 'Basic YWRtaW46YWRtaW4=',
            },
            failOnStatusCode: false,
        });
    }

    static validateLogin() {
        cy.get('p').should(
            'include.text',
            'Congratulations! You must have the proper credentials.'
        );
    }
}

export default BasicAuthPage;
