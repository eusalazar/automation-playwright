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

//Funcion para trabajar con las tablas 
export async function goToSandbox(page) {
  await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');
}

export async function getStaticTableColumnValues(page, columnIndex) {
  const selector = `h2:has-text("Tabla estática") + table tbody tr td:nth-child(${columnIndex})`;
  return await page.$$eval(selector, elements => elements.map(element => element.textContent));
}

// Función para obtener todos los valores de la tabla dinámica
export async function getDynamicTableValues(page) {
  const selector = 'h2:has-text("Tabla dinámica") + table tbody tr td';
  return await page.$$eval(selector, elements => elements.map(element => element.textContent));
}

export async function reloadPage(page) {
  await page.reload();
}

export async function validateCheckboxes(page) {
  await expect.soft(page.getByText('Pizza 🍕'), 'No se encontró el elemento Pizza 🍕').toBeVisible();
  await expect.soft(page.getByText('Hamburguesa 🍔'), 'No se encontró el elemento Hamburguesa 🍔').toBeVisible();
  await expect.soft(page.getByText('Pasta 🍝'), 'No se encontró el elemento Pasta 🍝').toBeVisible();
  await expect.soft(page.getByText('Helado 🍧'), 'No se encontró el elemento Helado 🍧').toBeVisible();
  await expect.soft(page.getByText('Torta 🍰'), 'No se encontró el elemento Torta 🍰').toBeVisible();
}

export async function clickPopupButton(page) {
  await page.getByRole('button', { name: 'Mostrar popup' }).click();
}

// validar el texto
export async function validatePopupText(page) {
  await expect(page.getByText('¿Viste? ¡Apareció un Pop-up!')).toHaveText('¿Viste? ¡Apareció un Pop-up!');
}

// cerrar 
export async function closePopup(page) {
  await page.getByRole('button', { name: 'Cerrar' }).click();
}
