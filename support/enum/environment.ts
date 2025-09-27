// Debe contener todas las propiedades de .env.template
// Para definir una nueva propiedad, el key debe sebe ser igual al valor
export const Environment = {
    KEYCLOAK_CLIENT_ID: "KEYCLOAK_CLIENT_ID",
    KEYCLOAK_CLIENT_SECRET: "KEYCLOAK_CLIENT_SECRET",
    KEYCLOAK_REALM: "KEYCLOAK_REALM",
    KEYCLOAK_GRANT_TYPE: "KEYCLOAK_GRANT_TYPE",
    URL_FRONTEND_LOCAL: "URL_FRONTEND_LOCAL",
    URL_ROOT: "URL_ROOT",
} as const;
