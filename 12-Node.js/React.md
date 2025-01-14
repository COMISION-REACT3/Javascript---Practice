# Introducción a React

## ¿Qué es React?

React es una biblioteca de JavaScript desarrollada por Facebook para construir interfaces de usuario interactivas. Es especialmente útil para desarrollar aplicaciones web de una sola página (Single Page Applications, SPA) donde el rendimiento y la experiencia del usuario son claves. React permite crear componentes reutilizables que gestionan su propio estado y se combinan para construir interfaces completas.

### Características clave de React:
- **Basado en componentes**: Divide la UI en pequeñas piezas reutilizables llamadas componentes.
- **Unidireccional**: Los datos fluyen en una sola dirección, lo que hace más predecible la administración del estado.
- **Declarativo**: Permite describir cómo debería verse la UI y React se encarga de actualizar y renderizar los elementos necesarios.

---

## ¿Qué es el Virtual DOM?

El Virtual DOM (Document Object Model virtual) es una representación ligera de la estructura del DOM real en memoria. Es una de las principales razones por las que React es tan rápido y eficiente.

### Cómo funciona:
1. **Cambio en el estado**: Cuando cambia el estado o las propiedades de un componente, React actualiza el Virtual DOM.
2. **Comparación (Diffing)**: React compara la nueva versión del Virtual DOM con la anterior para identificar qué partes han cambiado.
3. **Actualización eficiente**: React aplica solo los cambios necesarios al DOM real, minimizando las operaciones costosas.

### Ventajas del Virtual DOM:
- Mejora el rendimiento al reducir las interacciones directas con el DOM real.
- Garantiza una experiencia de usuario fluida incluso en aplicaciones grandes y complejas.

---

## ¿Qué es el formato JSX?

JSX (JavaScript XML) es una extensión de la sintaxis de JavaScript que permite escribir estructuras de UI de manera similar a HTML dentro del código JavaScript. Aunque opcional, JSX es ampliamente utilizado en React porque mejora la legibilidad y facilita la creación de interfaces.

## Características de JSX:

- Basado en JavaScript: Puedes usar expresiones de JavaScript dentro de JSX envolviéndolas en llaves { }.

- Transformado en JavaScript: En tiempo de compilación, JSX se convierte en funciones de JavaScript      
