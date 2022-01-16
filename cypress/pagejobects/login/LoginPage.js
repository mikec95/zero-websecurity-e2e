class LoginPage {
  LOGIN_FORM = cy.get(`#login_form`)
  checkLoginFormIsVisible() {
    return isElementDisplayed(this.LOGIN_FORM)
  }
}
