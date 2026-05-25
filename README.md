<div align="center">
  <img src="public/favicon.svg" alt="LoRaTerra Logo" width="120" />

  # LoRaTerra 🌍🛰️
  **Transferencia Tecnológica Vertical para la Agricultura de Precisión**

  [![Astro](https://img.shields.io/badge/Astro-4.0-FF5D01?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
  [![Firebase](https://img.shields.io/badge/Firebase-SSR-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)](https://firebase.google.com/)
  [![License](https://img.shields.io/badge/License-Proprietary-blue.svg?style=for-the-badge)](https://loraterra.com)

</div>

---

## 🚀 Sobre el Proyecto

**LoRaTerra** es un sistema integral de hardware y software diseñado para democratizar la agricultura de precisión. Transfiriendo tecnologías críticas del sector aeroespacial (como protocolos LoRa de largo alcance), LoRaTerra ofrece infraestructura robusta y en tiempo real para optimizar el consumo hídrico, predecir el estrés de cultivos y reducir drásticamente los costes operativos.

Esta plataforma web sirve como punto de captación principal (Landing Page B2B), presentación tecnológica y portal corporativo de la startup.

> [!TIP]
> **Dominio Oficial:** Puedes visitar la web desplegada en producción en [**loraterra.com**](https://loraterra.com)

---

## 🏗️ Stack Tecnológico

La web está construida con un enfoque obsesivo en el **rendimiento**, **SEO** y **seguridad**:

- **[Astro 4](https://astro.build/)**: Framework principal. Permite un envío casi nulo de JavaScript al cliente, garantizando tiempos de carga ultrarrápidos (Lighthouse 100/100).
- **[Tailwind CSS](https://tailwindcss.com/)**: Motor de estilos. Se ha creado un Design System a medida con paletas de color ecológicas (`eco-bg`, `brand-dark`, `brand-light`).
- **[Firebase](https://firebase.google.com/)**: Infraestructura Backend.
  - **Firestore**: Base de datos NoSQL para almacenar los *leads* (contactos) de agricultores e inversores.
  - **Cloud Functions / Cloud Run**: Sirve los Endpoints SSR de Astro mediante el adaptador oficial de Node.js.
  - **Hosting**: Alojamiento global en la red CDN de Google.

> [!IMPORTANT]  
> Este proyecto utiliza **Server-Side Rendering (SSR)** para gestionar las peticiones POST de los formularios de forma segura en el servidor, evitando exponer claves privadas de Firebase en el cliente.

---

## ⚙️ Instalación y Desarrollo Local

Sigue estos pasos para levantar el entorno de desarrollo en tu máquina.

### 1. Clonar el repositorio
```bash
git clone https://github.com/xXErDaniXx06/LoRaTerra.git
cd LoRaTerra
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Configurar Variables de Entorno
Crea un archivo `.env` en la raíz del proyecto. 

> [!WARNING]  
> **Seguridad Crítica:** Nunca subas el archivo `.env` a GitHub. Ya está excluido en el `.gitignore`, pero asegúrate de no forzar su subida.

```env
LORA_API_KEY=tu_api_key
LORA_AUTH_DOMAIN=loraterra-web.firebaseapp.com
LORA_PROJECT_ID=loraterra-web
LORA_STORAGE_BUCKET=loraterra-web.firebasestorage.app
LORA_MESSAGING_SENDER_ID=tu_sender_id
LORA_APP_ID=tu_app_id
```

### 4. Lanzar servidor de desarrollo
```bash
npm run dev
```
El servidor estará disponible en `http://localhost:4321`.

---

## 📡 Arquitectura de Rutas

El proyecto está diseñado bajo un modelo multipágina estructurado:

- `/` : Landing Page Principal (Hero, Beneficios, CTA).
- `/tecnologia` : Explicación técnica de la arquitectura de hardware (Módulos Tierra/Cielo).
- `/impacto` : Métricas de ahorro hídrico y planes de precios (Estándar / Corporativo).
- `/equipo` : Perfil de los fundadores e información corporativa.
- `/contacto` : Formulario SSR enlazado directamente a Firestore para Inversores y Clientes.
- `/aviso-legal`, `/politica-privacidad`, `/politica-cookies` : Páginas legales RGPD.

---

## 🔒 Hardening y Seguridad

Antes de producción, se aplicaron las siguientes capas de seguridad:
1. **Prefijos Personalizados**: Las variables de entorno evitan el uso del prefijo `FIREBASE_` (reservado por Google Cloud) para evitar conflictos en Cloud Functions.
2. **Validación de Endpoints**: El endpoint `/api/contact.json.js` bloquea peticiones que no sean `POST`, realiza `trim()` contra inyecciones de espacios en blanco y valida expresiones regulares (Regex) de emails.
3. **Ofuscación de API Keys**: Astro ejecuta el servidor en entorno Node (`output: 'server'`), lo que impide que las variables de inicialización de Firebase se envíen al navegador del cliente.

---

## ☁️ Despliegue en Firebase (Producción)

El despliegue está automatizado para utilizar **Firebase Web Frameworks**. 

> [!CAUTION]
> Para desplegar con éxito, la cuenta de servicio por defecto de Compute Engine (`*-compute@developer.gserviceaccount.com`) en Google Cloud **debe tener** los roles de: `Cuenta de servicio de Cloud Build` y `Administrador de Artifact Registry`.

Comando mágico de despliegue:
```bash
firebase deploy --non-interactive --force
```

---

## 👨‍💻 Equipo Fundador

**Daniel Carrasco** — CEO & Lead Engineer  
Estudiante de Ingeniería Informática en la UMA e investigador en sistemas de comunicación aeroespaciales. Arquitecto principal del sistema de comunicaciones LoRa y de la infraestructura Cloud.

<div align="center">
  <p>Construido con 💚 para el futuro del campo.</p>
</div>
