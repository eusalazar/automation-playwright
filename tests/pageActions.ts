import { Page, expect  } from '@playwright/test';

// Función para navegar al Sandbox
export async function navigateToSandbox(page: Page) {
  await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');
}

// Función para hacer clic en el botón dinámico
export async function clickDynamicButton(page: Page) {
  await page.getByRole('button', { name: 'Hacé click para generar un ID' }).click();
}

// Función para llenar el campo de texto
export async function fillTextField(page: Page, text: string) {
  await page.getByPlaceholder('Ingresá texto').fill(text);
}

// Función para seleccionar un checkbox
export async function selectCheckbox(page: Page, label: string) {
  const checkbox = await page.getByLabel(label);
  await checkbox.check();
  await checkbox.uncheck();
  
  // Verificamos que el checkbox esté desmarcado
  const isChecked = await checkbox.isChecked();
  expect(isChecked).toBe(false);
}

// Función para seleccionar un radio button
export async function selectRadioButton(page: Page, label: string) {
  const radioButton = await page.getByLabel(label);
  await radioButton.check();
  
  // Verificamos que el radio button esté marcado
  const isChecked = await radioButton.isChecked();
  expect(isChecked).toBe(true);
}

// Función para seleccionar una opción de un dropdown
export async function selectDropdownOption(page: Page, dropdownLabel: string, optionValue: string) {
  await page.getByLabel(dropdownLabel).selectOption(optionValue);
}

// Función para seleccionar un día de la semana en el dropdown
export async function selectDayDropdown(page: Page, buttonLabel: string, day: string) {
  await page.getByRole('button', { name: buttonLabel }).click();
  await page.getByRole('link', { name: day }).click();
}
