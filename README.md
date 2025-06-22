# Prueba Técnica QA Backend - Cypress
Este proyecto contiene la automatización de pruebas para una aplicación web de ecommerce y pruebas sobre endpoints de una API utilizando Cypress.
---
## 🛠 Tecnologías utilizadas
- Cypress
- Node.js
- Visual Studio Code
- Git + GitHub
---
## 🔧 Instrucciones para correr los tests
1. Clonar este repositorio:
   git clone https://github.com/MarianoIzarriaga/Cypress-Toolbox.git
2. Acceder a la carpeta del proyecto:
   cd prueba-cypress
3. Instalar dependencias:
   npm install
4. Ejecutar Cypress:
   npx cypress open
5. Seleccionar un navegador y ejecutar los archivos de prueba ubicados en cypress/e2e/.

✅ Tests Implementados
Parte 1: Pruebas de UI - Automation Exercise
Caso Automatizado: Registro de nuevo usuario

Archivo: registro.cy.js

Flujo cubierto:
Accede a: https://automationexercise.com/

Ingresa al flujo de Signup/Login.
Completa todos los campos requeridos del formulario de registro.
Envía el formulario.
Valida que el mensaje "Account Created!" aparezca correctamente.

✅ Parte 2: Pruebas de API - Echo Server

#### Endpoint 1: `/qa/test1`
**Validaciones realizadas:**
- Status code: `200 OK`
- Tiempo de respuesta: menor a 3 segundos
- Header `Content-Type` debe contener `application/json`
- Estructura del body esperada: `{ ok: true, date: <string> }`
Archivo: `qa-test1.cy.js`
---
#### Endpoint 2: `/qa/test3`
**Test sin token (esperado 401)**  
- Verifica que al no enviar token, el status code sea `401`
- Body contiene campos `code` y `message`
**Test con token inválido (falla controlada)**  
- Se intenta enviar un token ficticio para evaluar el comportamiento.
- Actualmente devuelve `401 Unauthorized` debido a falta de API Key real.
- Se documenta como parte del análisis QA.
Archivo: `qa-test3.cy.js`
---