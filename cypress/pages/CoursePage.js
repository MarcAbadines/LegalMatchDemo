class CoursePage {

    visit() {
        cy.visit('https://www.selenium-tutorial.com/p/automation-architect-in-selenium-7-live-projects', {
            timeout: 120000
        });
    }

    visitCheckoutPage() {
        cy.visit('https://checkout.teachable.com/secure/673/checkout/order_lwx1c1n2', {
            failOnStatusCode: false
          });
    }

    tapNextCourseButton () {
        cy.get('.swiper-button-next').first().click();
    }
    
    navigateToCourse(course) { 
        cy.get('a.pp-info-box-button[href="https://www.selenium-tutorial.com/p/automation-architect-in-selenium-7-live-projects"]')
        .scrollIntoView()
        .should('be.visible')
        .click({ force: true });
    }

    verifyCourseURL() {
        cy.get('h1.course-title', { timeout: 20000 })
          .should('be.visible')
          .invoke('text')
          .then((text) => {
          expect(text.trim()).to.eq('Automation Architect in Selenium - 7 Live Projects');
        });
    }
  
    clickBaseClassProject() {
        cy.contains('a.item', 'Creating Base class')
          .should('be.visible')           
          .scrollIntoView()             
          .within(() => {
            cy.get('.lecture-start')    
              .should('be.visible')
              .click({ force: true });   
        });
    }
  
    waitForCourseLoad() {
      cy.location('pathname').should('include', '/lectures');
    }
  
    clickEnroll() {
        cy.get('button#enroll-button')
        .should('be.visible')
        .and('contain', 'Enroll in Course')
        .click();
    }
  
    verifyProcessing() {
        cy.get('button#enroll-button')
        .should('be.disabled')
        .and('contain', 'Processing...');
    }
  }
  
  export default new CoursePage();
  