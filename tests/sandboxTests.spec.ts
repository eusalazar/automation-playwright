import { test, expect } from '@playwright/test';
import { navigateToSandbox, 
        clickDynamicButton, 
        fillTextField, 
        selectCheckbox, 
        selectRadioButton, 
        selectDropdownOption, 
        selectDayDropdown } from './pageActions';

let fieldText = 'Aprendiendo Playwright';

test.describe('Acciones en el Automation Sandbox', () => {
  
  test('Click en Boton dinamico', async ({ page }) => {
    await test.step('Navego al Sandbox', async () => {
      await navigateToSandbox(page);
    }); 

    await test.step('Click en boton con ID dinamico', async () => {
      await clickDynamicButton(page);
    });  
  });

  test("Relleno campo de texto", async ({ page }) => {
    await test.step('Navego al Sandbox de Automation de Free Range Testers', async () => {
      await navigateToSandbox(page);
    });

    await test.step('Puedo ingresar texto en el campo de texto', async () => {
      await fillTextField(page, fieldText);
    }); 
  });

  test("Selecciono checkboxes", async ({ page }) => {
    await test.step('Navego al Sandbox de Automation de Free Range Testers', async () => {
      await navigateToSandbox(page);
    });

    await test.step('Puedo seleccionar el checkbox para Pasta', async () => {
      await selectCheckbox(page, 'Pasta 🍝');
    }); 
  });

  test("Puedo seleccionar radio Buttons", async ({ page }) => {
    await test.step('Navego al Sandbox de Automation de Free Range Testers', async () => {
      await navigateToSandbox(page);
    });

    await test.step('Puedo seleccionar el radio button para "No"', async () => {
      await selectRadioButton(page, 'No');
    }); 
  });

  test("Puedo seleccionar un deporte en el dropdown", async ({ page }) => {
    await test.step('Navego al Sandbox de Automation de Free Range Testers', async () => {
      await navigateToSandbox(page);
    });

    await test.step('Selecciono un deporte del dropdown', async () => {
      await selectDropdownOption(page, 'Dropdown', 'Fútbol');
    }); 
  });

  test("Puedo seleccionar un día de la semana en el dropdown", async ({ page }) => {
    await test.step('Navego al Sandbox de Automation de Free Range Testers', async () => {
      await navigateToSandbox(page);
    });

    await test.step('Selecciono un día de la semana', async () => {
      await selectDayDropdown(page, 'Día de la semana', 'Martes');
    }); 
  });
});
