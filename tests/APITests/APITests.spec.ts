import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';


dotenv.config();

const REPO = 'automation-playwright';
const USER = 'eusalazar';
const TOKEN = process.env.API_TOKEN;  

test('Puedo crear un bug en el repositorio', async ({ request }) => {
  const url = `https://api.github.com/repos/${USER}/${REPO}/issues`

    const bugIssueResponse = await request.post(url, {
        data: {
            title: '[Bug] Algo no está funcionando',
            body: 'Encontré un error en el sistema.',
        },
        headers: {
            "Authorization": `Bearer ${TOKEN}`,  // Usar el token en la cabecera para autenticación
            "Accept": "application/vnd.github+json",
            "X-GitHub-Api-Version": "2022-11-28"
        }
    });

    // Verificamos si la respuesta es exitosa
    if (!bugIssueResponse.ok()) {
        const errorBody = await bugIssueResponse.text();
        console.error('Error creando el bug:', errorBody);
    }
    console.log({url})
    expect(bugIssueResponse.ok()).toBeTruthy();  // Verificar si la respuesta fue exitosa

    const issuesResponse = await request.get(`https://api.github.com/repos/${USER}/${REPO}/issues`, {
        headers: {
            Authorization: `Bearer ${TOKEN}`,  // Usar el token en la cabecera para obtener los problemas
        }
    });
    expect(issuesResponse.ok()).toBeTruthy();  // Verificar si la respuesta fue exitosa

    const issues = await issuesResponse.json();
    expect(issues).toContainEqual(expect.objectContaining({
        title: '[Bug] Algo no está funcionando',
        body: 'Encontré un error en el sistema.',
    }));
});

test('Puedo crear una solicitud de característica en el repositorio', async ({ request }) => {
    const featureRequestResponse = await request.post(`https://api.github.com/repos/${USER}/${REPO}/issues`, {
        data: {
            title: '[Feature] Nueva funcionalidad',
            body: 'Sería genial agregar esta funcionalidad.',
        },
        headers: {
            Authorization: `Bearer ${TOKEN}`,  // Usar el token en la cabecera para autenticación
        }
    });

    // Verificamos si la respuesta es exitosa
    if (!featureRequestResponse.ok()) {
        const errorBody = await featureRequestResponse.text();
        console.error('Error creando la solicitud de característica:', errorBody);
    }

    expect(featureRequestResponse.ok()).toBeTruthy();  // Verificar si la respuesta fue exitosa

    const issuesResponse = await request.get(`https://api.github.com/repos/${USER}/${REPO}/issues`, {
        headers: {
            Authorization: `Bearer ${TOKEN}`,  // Usar el token en la cabecera para obtener los problemas
        }
    });
    expect(issuesResponse.ok()).toBeTruthy();  // Verificar si la respuesta fue exitosa

    const issues = await issuesResponse.json();
    expect(issues).toContainEqual(expect.objectContaining({
        title: '[Feature] Nueva funcionalidad',
        body: 'Sería genial agregar esta funcionalidad.',
    }));
});
