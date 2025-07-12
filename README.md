# 🧪 Prueba Técnica: App de Autenticación con Next.js + React

## 📝 Objetivo

Construir una aplicación web de autenticación usando **Next.js** y **React**, conectándose a una API REST existente (basada en **FastAPI**).  
El objetivo es demostrar tu capacidad para consumir APIs, manejar autenticación, mantener el estado del usuario y estructurar una app frontend limpia y funcional.

---

## 🧰 Stack Requerido

- **Next.js (React)**
- `fetch` o `axios` para llamadas a la API
- Manejo de estado con **React Context**, **Zustand** o similar
- TailwindCSS

---

## 🔐 API de Autenticación

La API provee los siguientes endpoints:

- Registro de usuarios
- Login
- Obtener datos del usuario autenticado (`/me`)

> La API está documentada y lista para usarse. Incluye el link a la documentación o Postman Collection si aplica.

---

## 📌 Requisitos

### 1. Pantalla de Login
- Formulario con email y contraseña
- Guardar el token recibido de forma segura
- Redirigir al usuario a una vista protegida

### 2. Pantalla de Registro
- Formulario para crear una nueva cuenta
- Validaciones mínimas (campos requeridos, email válido)

### 3. Vista Protegida
- Solo accesible si el usuario está autenticado
- Mostrar mensaje o datos protegidos
- Si no está autenticado, redirigir al login

### 4. Manejo de Estado de Autenticación
- Persistencia del token (incluso al recargar la página)
- Logout funcional que limpie el estado

### 5. Estructura Clara del Proyecto
- Separación por componentes y páginas
- Buenas prácticas de organización

---

## ✅ Bonus (No obligatorio)

- Middleware o lógica en Next.js para proteger rutas
- Uso de cookies seguras (`httpOnly`) para guardar el token
- Tests básicos (unitarios o de integración)

---

## ⏱️ Entrega

- Pull request a este repositorio.
- Archivo `README.md` con instrucciones para correr el proyecto

---

## 🧠 ¿Qué Evaluamos?

- Claridad y organización del código
- Uso correcto de React/Next.js
- Manejo del estado y flujos de autenticación 
- Capacidad para trabajar con documentación externa
- Capacidad de investigación y resolución de problemas
---

## 🖼️ Anexos

API: http://3.21.37.135:8000/docs

A continuación se muestra un ejemplo de cómo debería verse el formulario de registro:

![Formulario de registro]([https://pruebatecnica-gruporq-frontend.s3.us-east-2.amazonaws.com/registro.jpg](https://pruebatecnica-gruporq-frontend.s3.us-east-2.amazonaws.com/registro.jpg))

A continuación se muestra un ejemplo de cómo debería verse el formulario de login:

![Formulario de login]([https://pruebatecnica-gruporq-frontend.s3.us-east-2.amazonaws.com/registro.jpg](https://pruebatecnica-gruporq-frontend.s3.us-east-2.amazonaws.com/login.png))

