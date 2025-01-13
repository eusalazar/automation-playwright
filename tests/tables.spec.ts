import { test, expect } from '@playwright/test';
import { goToSandbox,
        navigateToSandbox,
        getStaticTableColumnValues, 
        getDynamicTableValues,
        reloadPage,
        validateCheckboxes,
        clickPopupButton,
        validatePopupText,
        closePopup} from './pageActions';

test.describe('Pruebas con tablas estáticas y dinámicas', () => {
  
  test('Validar columna "Nombre" en la tabla estática', async ({ page }) => {
    await test.step('Navego al Sandbox', async () => {
      await goToSandbox(page);
    });

    await test.step('Valido los valores de la columna "Nombre" en la tabla estática', async () => {
      const valoresColumnaNombres = await getStaticTableColumnValues(page, 2); // Índice 2 para la columna "Nombre"
      const nombresEsperados = ['Messi', 'Ronaldo', 'Mbappe'];

      await test.info().attach('screenshot', {
        body: await page.screenshot(),
        contentType: 'image/png',
      });

      expect(valoresColumnaNombres).toEqual(nombresEsperados);
    });
  });

  test('Valido que todos los valores cambian en la tabla dinámica luego de un reload', async ({ page }) => {
    await test.step('Dado que navego al Sandbox de Automation de Free Range Testers', async () => {
      await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');
    });

    await test.step('Valido que los valores cambiaron al hacer un reload a la web', async () => {
      const valoresTablaDinamica = await getDynamicTableValues(page);
      console.log('Valores antes del reload:', valoresTablaDinamica);

      await reloadPage(page);

      // Creamos un segundo arreglo con los valores luego de la recarga
      const valoresPostReload = await getDynamicTableValues(page);
      console.log('Valores después del reload:', valoresPostReload);

      // Validamos que todos los valores cambiaron para cada celda
      expect(valoresTablaDinamica).not.toEqual(valoresPostReload);
    });
  });

  test('Ejemplo de Soft Assertions', async ({ page }) => {
    await test.step('Dado que navego al Sandbox de Automation de Free Range Testers', async () => {
      await page.goto('');
    });

    await test.step('Valido que todos los elementos de los checkboxes son los correctos', async () => {
      await validateCheckboxes(page);
    });
  });

  test('Validando dentro de un popup', async ({ page }) => {
    await test.step('Dado que navego al sandbox', async () => {
        await navigateToSandbox(page);  // Llamamos a la función para navegar al sandbox
    });

    await test.step('Cuando hago click en el botón popup', async () => {
        await clickPopupButton(page);  
    });

    await test.step('Puedo validar un elemento dentro del popup', async () => {
        await validatePopupText(page);  
        await closePopup(page);  
    });
});
  

});
