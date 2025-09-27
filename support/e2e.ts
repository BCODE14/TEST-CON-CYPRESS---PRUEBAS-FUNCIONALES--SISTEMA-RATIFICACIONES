// ***********************************************************
// This example support/e2e.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import { Environment } from './enum/environment';
import { login, generarUrlToken } from './utils/fetchTokenUrl';
 /*
before(async () => {

    const urlRoot = Cypress.env(Environment.URL_ROOT);

  if (!urlRoot) {
    const { accessToken } = await login({
      clientId: Cypress.env(Environment.KEYCLOAK_CLIENT_ID),
      clientSecret: Cypress.env(Environment.KEYCLOAK_CLIENT_SECRET),
      realm: Cypress.env(Environment.KEYCLOAK_REALM),
      granType: Cypress.env(Environment.KEYCLOAK_GRANT_TYPE),
    });

    const urlToken = await generarUrlToken(accessToken);

    const urlParts = urlToken.split("?");

    const urlFrontendLocal = `http://${Cypress.env(
      Environment.URL_FRONTEND_LOCAL
    )}`;
    const urlFinal = `${urlFrontendLocal}?${urlParts[1]}`;

    Cypress.env(Environment.URL_ROOT, urlFinal);
  }


   });

*/