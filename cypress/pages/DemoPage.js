class DemoPage {

    visit() {
      cy.visit('https://www.way2automation.com/demo.html#');
    }

    getActionNamesLogs(result) {
      cy.get('.row .linkbox').each($categoryBox => {
          const category = $categoryBox.find('h1.heading').text().trim();
    
          const actions = [];
          $categoryBox.find('ul.boxed_style li h2').each((i, el) => {
            const action = Cypress.$(el).text().trim();
            if (action.length > 0) actions.push(action);
          });
    
          if (category && actions.length > 0) {
            result[category] = actions;
          }
      });
    
      cy.then(() => {
        cy.log('Extracted Actions by Category:', JSON.stringify(result, null, 2));
        console.log('Final JSON:', JSON.stringify(result, null, 2));
      });
    }
  
    clickDynamicElementsCategory() {
      cy.contains('Dynamic Elements').click();
    }
  
    getSubmitButtonHref() {
      cy.contains('h2', 'Submit Button Clicked') 
      .parents('a') 
      .invoke('attr', 'href') 
      .then((href) => {
        cy.log('Submit Button URL:', href); 
      });
    }
  
    clickLeftCarousel() {
      cy.get('.carousel-control-prev').click({ multiple: true, force: true });
    }
  
    clickGetStarted() {
      cy.contains('Get Started').click();
    }
  }
  
  export default new DemoPage();
  