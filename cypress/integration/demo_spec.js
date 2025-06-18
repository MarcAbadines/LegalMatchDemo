import DemoPage from '../pages/DemoPage';
import CoursePage from '../pages/CoursePage';
import RegistrationPage from '../pages/RegistrationPage';

const URL = '';

describe('Way2Automation Test Demo', () => {

  it('1: Navigate to demo page', () => {
    DemoPage.visit();
  });

  it('2: Collects and saves actions as JSON', () => {
    const result = {};

    DemoPage.visit();
    DemoPage.getActionNamesLogs(result);    
  });

  it('3-4: Extracts href for Submit Button (Not supported in Cypress v9', () => {
    DemoPage.visit();
    DemoPage.clickDynamicElementsCategory();
    DemoPage.getSubmitButtonHref();
  });

  it('5: Fills email field with dummy email', () => {
    const email = `test${Date.now()}@getnada.com`;
    
    RegistrationPage.visit()

    RegistrationPage.enterNameValue();
    RegistrationPage.enterPhoneNumberValue();
    RegistrationPage.enterEmailValue(email);
    RegistrationPage.enterCityValue();
    RegistrationPage.enterUsernameValue();
    RegistrationPage.enterPasswordValue();
  });

  it('6: Click "Explore Membership"', () => {
    RegistrationPage.visit()

    RegistrationPage.clickExploreMembership();
  });

  it('7: Scroll to Free Courses Section', () => {
    RegistrationPage.visitLifetimeMembership()
    
    RegistrationPage.scrollToFreeAccessSection();
  });

  it('8-9: Navigate carousel and Get Started', () => {
    const courseName = 'Automation Architect Selenium with 7 live projects'

    RegistrationPage.visitLifetimeMembership()

    for (let i = 0; i <= 4; i++) {
      CoursePage.tapNextCourseButton();
      cy.wait(1000);
    }
    cy.wait(3000);
    CoursePage.navigateToCourse(courseName);

    // CoursePage.verifyCourseURL();
  });

  it('10: Verify course URL', () => {
    CoursePage.visit();
    
    CoursePage.verifyCourseURL();    
  });

  it('11-13: Click Base Class Project and wait', () => {
    CoursePage.visit();
      
    CoursePage.clickBaseClassProject();
    CoursePage.waitForCourseLoad();
  });

  it('14: Return to course main page', () => {
    CoursePage.visit();
  });

  it('15-18: Complete checkout validations', () => {
    CoursePage.visit();

    CoursePage.clickPayInUSD();
    CoursePage.verifyUSDValue();
    CoursePage.clickEnroll();
    CoursePage.verifyProcessing();
  });
  
});
