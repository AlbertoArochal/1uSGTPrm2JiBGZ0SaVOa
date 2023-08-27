# Galería de Películas con Buscador - Comentarios

En este archivo, se describen las decisiones clave tomadas durante el desarrollo del proyecto de la "Galería de Películas con Buscador", realizado con React, TypeScript y Sass.

## Patrón Flux y Uso de Hooks

Se implementó el patrón Flux utilizando los hooks nativos de React, como `useState` y `useEffect`, para manejar el estado global. También creé un contexto global para compartir datos entre componentes. Los estados principales incluyeron el término de búsqueda y la lista de películas.

## Integración del Buscador

El componente de búsqueda actualiza dinámicamente el estado del término de búsqueda mientras los usuarios escriben. Este término se usa para solicitar datos a la API de películas y obtener una lista actualizada de resultados coincidentes.

## Estilización con Sass

Sass se empleó para estilizar el proyecto, centralizando los estilos en un solo archivo para una mejor organización y para evitar posibles conflictos.

---

Estas decisiones y enfoques llevaron al proyecto a cumplir su objetivo de crear una aplicación funcional y atractiva que permite a los usuarios buscar y explorar películas de manera eficiente.
