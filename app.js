// FASE 5: Cargar el token desde el entorno local mediante dotenv
require('dotenv').config();

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

console.log("Conexión segura establecida mediante variable de entorno.");
