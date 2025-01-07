import { test, expect, Browser, Page } from '@playwright/test';

(async () => {
  let browser: Browser;
  let page: Page;
  let fieldText= 'Aprendiendo Playwright'
  
  
  test.describe('Acciones en el Automation Sandbox', () => {
    
    test('Click en Boton dinamico', async ({ page }) => {
      await test.step('Navego al Sandbox', async () => {
        await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/')   

      }); 

      await test.step('Click en boton con ID dinamico', async () => {
        await page.getByRole('button', { name: 'Hacé click para generar un ID' }).click()

      });  
    })

    test("Relleno campo de texto", async ({ page }) => {
     
      await test.step('Navego al Sandbox de Automation de Free Range Testers', async () => {
      await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/')
     });

     await test.step('Puedo ingresar tetxo en el campo en un Aburrido texto', async () => {
      await page.getByPlaceholder('Ingresá texto').fill(fieldText);

     }); 

    });

    test("Selecciono checkboxes", async ({ page }) => {

      await test.step('Navego al Sandbox de Automation de Free Range Testers', async () => {
       await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/')
      });

      await test.step('Puedo seleccionar el checkbox para Pasta', async () => {
        const pastaCheckbox = await page.getByLabel('Pasta 🍝');
        await pastaCheckbox.check();
        await pastaCheckbox.uncheck();

        // Verificamos que esté seleccionado
        const isChecked = await pastaCheckbox.isChecked();
        expect(isChecked).toBe(false);

      }); 

     });

     test("Puedo seleccionar radio Buttons", async ({ page }) => {
      await test.step('Navego al Sandbox de Automation de Free Range Testers', async () => {
       await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/')
      });

      await test.step('Puedo ingresar tetxo en el campo en un Aburrido texto', async () => {
        const radioButton = await page.getByLabel('No')
        await radioButton.check();

        const isChecked = await radioButton.isChecked();
        expect(isChecked).toBe(true);
      
      }); 

     });

     test("Puedo seleccionar un deporte en el dropdwn ", async ({ page }) => {
      await test.step('Navego al Sandbox de Automation de Free Range Testers', async () => {
       await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/')
      });

      await test.step('Selecciona un deporte del dropdwn', async () => {
        await page.getByLabel('Dropdown').selectOption('Fútbol');
      
      }); 

     });

     test("Puedo seleccionar un dia de la semana en el dropdwn Dias de la seman", async ({ page }) => {
      await test.step('Navego al Sandbox de Automation de Free Range Testers', async () => {
        await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/')

       });

       await test.step('Selecciona un dia de la semana', async () => {
        await page.getByRole('button', { name: 'Día de la semana' }).click();
        await page.getByRole('link', { name: 'Martes' }).click()

      }); 
       
      
     });


  })
  
})()
