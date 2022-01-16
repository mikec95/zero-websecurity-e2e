class HomePage {
  LOGIN_FORM = cy.get(`#login_form`)

  isElementDisplayed(webElement) {
    let displayed = webElement.isDisplayed ? true : false
    return displayed
  }

  checkLoginFormIsVisible() {
    return isElementDisplayed(this.LOGIN_FORM)
  }
}
