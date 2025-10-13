# 🛍️ Entrega 1 - Crea tu Landing (React)

Este proyecto corresponde a la **Primera Entrega** del curso de React, donde se construyen los **primeros componentes base** para un e-commerce llamado **Ambar Nails**.  
El objetivo es comprender la estructura de componentes de React y crear la base visual de la homepage del proyecto.

---

## ✨ Objetivos del Proyecto

- Comprender los conceptos básicos de React y su estructura de componentes.
- Construir los primeros componentes reutilizables del e-commerce.
- Crear una barra de navegación con enlaces, logo y widget de carrito.
- Renderizar un contenedor principal que reciba props con un mensaje personalizado.

---

## 🧩 Componentes desarrollados

### 🔹 `NavBar.jsx`
- Muestra el **logo** de la tienda y los **enlaces de navegación**.
- Renderiza dentro de sí al componente `CartWidget`.
- Forma parte de la estructura principal de la aplicación.

### 🔹 `CartWidget.jsx`
- Representa el ícono del **carrito de compras**.
- Se integra dentro de `NavBar`.

### 🔹 `ItemListContainer.jsx`
- Es el **contenedor principal del catálogo de productos**.
- Recibe una **prop (mensaje)** desde `App.jsx` y la muestra en pantalla.
  ```jsx
  <ItemListContainer mensaje="¡Bienvenidos a Ambar Nails!" />
