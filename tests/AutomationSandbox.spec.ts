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
        await expect(page.getByRole('button', { name: 'Hacé click para generar un ID' })).toBeVisible();

      });  
    })

    test("Relleno campo de texto", async ({ page }) => {
     
      await test.step('Navego al Sandbox de Automation de Free Range Testers', async () => {
      await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/')
     });

     await test.step('Puedo ingresar texto en el campo en un Aburrido texto', async () => {
      await expect(page.getByPlaceholder('Ingresá texto'), `El campo de texto no admite ediciòn`).toBeEditable();
      await page.getByPlaceholder('Ingresá texto').fill(fieldText);
      await expect(page.getByPlaceholder('Ingresá texto'), `El campo de texto no admite ediciòn`).toHaveValue(fieldText);


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

      await test.step('Puedo ingresar texto en el campo en un Aburrido texto', async () => {
        const radioButton = await page.getByLabel('No')
        await radioButton.check();
        await expect(page.getByLabel('No'), `El radio button no se seleccionò`).toBeChecked();

        const isChecked = await radioButton.isChecked();
        expect(isChecked).toBe(true);
      
      }); 

     });

     test('Los items del dropdown son los esperados', async ({ page }) => {
      await test.step('Dado que navego al Sandbox de Automation de Free Range Testers', async () => {
          await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');
      })
      await test.step('Valido que la lista del dropdown contiene los deportes esperados', async () => {
          const deportes = ['Fútbol', 'Tennis', 'Basketball']

          for (let opcion of deportes) {
              const element = await page.$(`select#formBasicSelect > option:is(:text("${opcion}"))`);
              if (element) {
                  console.log(`La opción '${opcion}' está presente.`);
              } else {
                  throw new Error(`La opción '${opcion}' no está presente.`);
              }
          }

      })


  })


     test("Puedo seleccionar un dia de la semana en el dropdown Dias de la semana", async ({ page }) => {
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
