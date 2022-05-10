# FoodSearch

FoodSearch es una página de búsqueda de recetas de la cual muestra lo popular de ella, su precio y su tiempo de preparación

## Instalación

1.- Descargar el proyecto desde el link de github facilitado al usuario final

2.- Agregar el archivo .env facilitado al usuario final, el cual contiene las variables de entorno para el correcto funcionamiento del sistema

3.- Ejecutar el comando npm install / yarn para descargar las dependencias

## Desarrollo

Este sistema está desarrollado en React.js.

Se usó styled-components para la agregación de CSS al sistema, por lo que cada componente contiene su referido de css en al misma carpeta utilizando el prefijo 'S' como referencia al componente estilizado

Tambien se generó un mapper en la carpeta functions para transformar la información obtenida por el endpoint, a información utilizada por el sistema

Con styled-components se estilizó de forma global los parametros básicos de diseño agregado en el archivo /styles/global.js

En el archivo /styles/colors se encuentran los colores globales utilizados en el sistema

Se utilizó axios para el fetch de datos

Se utilizó un customHook para la intersepción del DOM para lograr un lazyLoad al cargar las imagenes de las card

Se utilizó solamente mediaQuery para agregar responsive al sistema

Se creó una carpeta llamada layout dentro de component, la cual tiene la finalidad de juntar varios componente para armar un pequeño diseño funcional (simulando celula y molecula) ref: https://www.uifrommars.com/atomic-design-ventajas/
