# Crear una app para practicar preguntas tipo test sobre programación

En 2024 los alumnos del curso IFCD0210 crearon una API la cual dispone de una base de datos sobre preguntas tipo test de programación.
Usa adecuadamente los endpoints para crear una app que nos traiga una nueva pregunta sobre programación cada vez que el usuario hace click en el botón

## Iteración 1

Revisa la [documentación](https://codequestapi.onrender.com) y averigua cual es el endopint para poder hacer una petición GET y traerte una pregunta sobre programación de cualquier categoría. Ignora por tanto el selector de categorías de la solución. Fíjate que para simplificar la app simplemente vamos a rellenar nodos del DOM con la información de cada pregunta y la respuesta correcta.

## Iteración 2

Añade un selector para poder indicar la categoría de la pregutna tipo test tal y como se aprecia en la demo. Para ellos tienes dos endpoints interesantes

- https://codequestapi.onrender.com/api/v1/questions/categories - Devuelve un array con todas las categorías disonibles
- https://codequestapi.onrender.com/api/v1/questions/random?categories={category} - Permite indicar la categoría de la pregunta. Por ejemplo, https://codequestapi.onrender.com/api/v1/questions/random?categories=html nos traerá una pregutna de la base de datos en HTML

## Iteración 3 - BONUS

La API disone de un endpoint el cuál es capaz de generar preguntas tipo test dado un _prompt_ (internamente, la API se conecta a otra API, en este caso, a Gemini de Google). Implementa las estructuras necesarias para permitir al usuario escribir unas palabras claves y generar una pregunta tipo test basada en dichas palabras clave. ![Ejemplo uso](https://oscarm.tinytake.com/media/174c4c3?filename=1744178589153_TinyTake09-04-2025-08-03-01_638797753861259388.png&sub_type=thumbnail_preview&type=attachment&width=1200&height=721)

