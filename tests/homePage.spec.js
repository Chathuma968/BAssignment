const { test, expect } = require('@playwright/test');
const fs = require('fs');
const path = require('path');
require('dotenv').config(); // Load environment variables

const HomepagePage = require('../pages/homePage'); // Correct path

// Correct the path to your JSON file
const dataPath = path.join(__dirname, '..', 'testdata', 'form1data.json');
const testData = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
test.describe('Homepage Form Tests', () => {
  let homePage;

  test.beforeEach(async ({ page }) => {
    // Initialize the page object
    homePage = new HomepagePage(page);
    // Navigate to the URL
    await homePage.navigate();
  });

  test('Test ID-1 should fill out the required fields and save details', async () => {
    // Use the page object methods to interact with the page
    await homePage.fillName(testData.name);

    // Optionally, verify that the value has been set correctly
    const nameValue = await homePage.getNameValue();
    expect(nameValue).toBe(testData.name);

    // Fill in the email field
    await homePage.fillEmail(testData.email);
    const emailValue = await homePage.getEmailValue();
    expect(emailValue).toBe(testData.email);

    // Click the submit button
    await homePage.clickSubmit();

    // Verify the submit button is disabled
    const isButtonDisabled = await homePage.isSubmitButtonDisabled();
    expect(isButtonDisabled).toBe(true);

    // Verify the result is displayed correctly
    const resultText = await homePage.getResultText();
    expect(resultText.name).toBe(`name: ${testData.name}`);
   // expect(resultText.switch).toBe('switch: false');
    //expect(resultText.email).toBe(`email: ${testData.email}`);

    // Verify the success message
  const messageText = await homePage.getMessageText();
  expect(messageText).toBe('cool, it is done');

  // Verify the check-circle icon is visible
  const isIconVisible = await homePage.isCheckCircleIconVisible();
  expect(isIconVisible).toBe(true);
  });
  // Add more tests if needed
  test('Test ID-2 should fill out the required fields and save details', async () => {
    // Use the page object methods to interact with the page
    await homePage.fillName(testData.name);

    // Optionally, verify that the value has been set correctly
    const nameValue = await homePage.getNameValue();
    expect(nameValue).toBe(testData.name);

    // Fill in the email field
    await homePage.fillEmail(testData.email);
    const emailValue = await homePage.getEmailValue();
    expect(emailValue).toBe(testData.email);

    // Click the submit button
    await homePage.clickSubmit();

    // Verify the submit button is disabled
    const isButtonDisabled = await homePage.isSubmitButtonDisabled();
    expect(isButtonDisabled).toBe(true);

    // Verify the result is displayed correctly
    const resultText = await homePage.getResultText();
    expect(resultText.name).toBe(`name: ${testData.name}`);
   // expect(resultText.switch).toBe('switch: false');
    //expect(resultText.email).toBe(`email: ${testData.email}`);

    // Verify the success message
  const messageText = await homePage.getMessageText();
  expect(messageText).toBe('cool, it is done');

  // Verify the check-circle icon is visible
  const isIconVisible = await homePage.isCheckCircleIconVisible();
  expect(isIconVisible).toBe(true);
  });
});


