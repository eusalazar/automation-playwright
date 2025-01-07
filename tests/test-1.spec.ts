import { test, expect } from '@playwright/test';

test.describe('Navegar a https://www.freerangetesters.com/', () => {

  const sections = [
    { nombre : 'Cursos', url: '/cursos', ExpectedTitle: 'Cursos'},
    { nombre : 'Udemy', url: '/udemy', ExpectedTitle: 'Udemy'},
    { nombre : 'Recursos', url: '/recursos', ExpectedTitle: 'Recursos'},
    { nombre : 'Blog', url: '/blog', ExpectedTitle: 'Free Range Testers'},
  ];

  for (const section of sections) {

  // Navegar a la URL
  test(`Validar redicreccion a la seccion "${section.nombre}"`, async ({ page }) => {
    
    // Navegar a la página principal y esperar a que la carga se complete
    await test.step('Entrando en la web principal', async () => {
      await page.goto('https://www.freerangetesters.com');
      await page.waitForLoadState('load');  // Esperar a que la página se cargue completamente
      await expect(page).toHaveTitle('Free Range Testers');  // Asegurarse de que la página sea la correcta
    });
    
    // Validar que el link "Cursos" esté visible y hacer clic en él
    await test.step(`Cuando hago click en "${section.nombre}"`, async () => {
      await page.locator('#page_header').getByRole('link', {name: section.nombre, exact: true}).click();
      await page.waitForURL(`**${section.url}`);  // Espera a que la URL cambie
    
    });

    // Validar que estamos en la sección "Cursos"
    await test.step(`Soy redirigido a la sección de título "${section.ExpectedTitle}"`, async () => {
      await expect(page).toHaveTitle(section.ExpectedTitle);
    });
  });
}
});
