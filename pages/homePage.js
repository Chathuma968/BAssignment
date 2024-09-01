class homePage {
  constructor(page) {
    this.page = page;
    // Define locators
    //this.nameInput = page.locator('div.ant-form-item-control-input-content input[data-test="form-name-input"]');
    this.nameInput = page.locator('id=form name_name');
    this.emailInput = page.locator('id=form name_email');
    this.numberInput = page.locator('id=form name_inputNumber');
    this.submitButton = page.locator('id=submit');
    this.resultDiv = page.locator('div[data-test="item-undefined"]');
    this.messageSpan = page.getByText('cool, it is done'); // Direct text match
    this.checkCircleIcon = page.locator('span.anticon-check-circle');
    this.validationMessage = page.getByText("email doesn't have @"); // Direct text match
    this.validationIcon = this.page.locator('div.ant-message-custom-content.ant-message-error svg[data-icon="close-circle"]');

  }

  async navigate() {
    const baseUrl = process.env.BASE_URL; // Get URL from environment variable
    if (!baseUrl) {
      throw new Error('BASE_URL is not defined in the environment variables.');
    }
    await this.page.goto(baseUrl); // Navigate to the base URL
  }

  async fillName(name) {
    await this.nameInput.fill(name);
  }

  async getNameValue() {
    return await this.nameInput.inputValue();
  }

  async fillEmail(email) {
    await this.emailInput.fill(email);
  }

  async fillinEmail(invalidemail) {
    await this.emailInput.fill(invalidemail);
    }

  async getEmailValue() {
    return await this.emailInput.inputValue();
  }

  // Method to click the submit button
async clickSubmit() {
  // Ensure the button is enabled before clicking
  await this.submitButton.waitFor({ state: 'visible' }); // Wait for the button to be visible
  await this.submitButton.click(); // Click the button
}

// Method to check if the submit button is disabled
async isSubmitButtonDisabled() {
  return await this.submitButton.evaluate(node => node.disabled); // Return the disabled state of the button
}

// Method to get the result text
async getResultText() {
  return {
    name: await this.resultDiv.locator('p[data-test="item-undefined-name"]').innerText(),
   // switch: await this.resultDiv.locator('p[data-test="item-undefined-switch"]').innerText(),
   // email: await this.resultDiv.locator('p[data-test="item-undefined-email"]').innerText(),
  };
}
async getMessageText() {
  return await this.messageSpan.innerText(); // Return the text content of the correct span
}

async getValidationMessageText() {
  return await this.validationMessage.innerText(); // Return the text content of the validation message span
  }

async isCheckCircleIconVisible() {
  return await this.checkCircleIcon.isVisible(); // Return true if the icon is visible
}

async verifyValidationIconVisible() {
  return await this.validationIcon.isVisible(); // Return true if the  icon is visible
}

async getPageTitle() {
  return await this.page.title(); // Method to return the page title
}


}

module.exports = homePage;