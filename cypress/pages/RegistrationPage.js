class RegistrationPage {

    visit() {
        cy.visit('http://way2automation.com/way2auto_jquery/index.php');
    }

    visitLifetimeMembership() {
        cy.visit('https://www.way2automation.com/lifetime-membership-club/');
    }

    enterNameValue() { 
        cy.get('input[name="name"]').type('Marc Abadines');
    }

    enterPhoneNumberValue() { 
        cy.get('input[name="phone"]').type('09053741553');
    }

    enterEmailValue(email) { 
        cy.get('input[name="email"]').type(email);
    }

    enterCityValue() { 
        cy.get('input[name="city"]').type('Laguna');
    }

    enterUsernameValue() { 
        cy.get('input[name="username"]').eq(1).type('marcabadines', { force: true });
    }  

    enterPasswordValue() { 
        cy.get('input[name="password"]').eq(1).type('*********', { force: true });
    }

    clickExploreMembership() {
        cy.contains('EXPLORE LIFETIME MEMBERSHIP').click({ force: true });
    }

    scrollToFreeAccessSection() {
        cy.contains('30+ Courses video library FREE ACCESS').scrollIntoView();
    }
}
  export default new RegistrationPage();
  