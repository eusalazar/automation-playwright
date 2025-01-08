import { Page, expect  } from '@playwright/test';

export async function navigateToSandbox(page: Page) {
  await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');
}

export async function clickDynamicButton(page: Page) {
  await page.getByRole('button', { name: 'Hacé click para generar un ID' }).click();
}

export async function fillTextField(page: Page, text: string) {
  await page.getByPlaceholder('Ingresá texto').fill(text);
}

export async function selectCheckbox(page: Page, label: string) {
  const checkbox = await page.getByLabel(label);
  await checkbox.check();
  await checkbox.uncheck();
  
  const isChecked = await checkbox.isChecked();
  expect(isChecked).toBe(false);
}

export async function selectRadioButton(page: Page, label: string) {
  const radioButton = await page.getByLabel(label);
  await radioButton.check();
  
  const isChecked = await radioButton.isChecked();
  expect(isChecked).toBe(true);
}

export async function selectDropdownOption(page: Page, dropdownLabel: string, optionValue: string) {
  await page.getByLabel(dropdownLabel).selectOption(optionValue);
}

export async function selectDayDropdown(page: Page, buttonLabel: string, day: string) {
  await page.getByRole('button', { name: buttonLabel }).click();
  await page.getByRole('link', { name: day }).click();
}
