# PEC 3 - FEA (Front End Avanzado)

Se debe arrancar el API con el puerto 3000
En mi caso (nota interna) esta en: **/Users/isaacblanco/Sites/FEADV/PEC1/blog-uoc-project-api** (nota interna)
Y lanzar: **npm run start:dev**

Recordatorio para mí:
User: ibp@mail.com
Pass: demodemo

Al tratar de iniciar todo, y como siempre sale la mierda del CORS al acceder al servicio de posts

```
GET
http://localhost:3000/posts
[HTTP/1.1 401 Unauthorized 4ms]

Solicitud desde otro origen bloqueada: la política de mismo origen impide leer el recurso remoto en http://localhost:3000/posts (razón: falta la cabecera CORS 'Access-Control-Allow-Origin'). Código de estado: 401.
```

Deje el Firefox for developer por el Edge, que si bien no me gusta, funciona (las extensiones del CORS de firefox no me resolvieron el problema).

## Ejercicio 1

Agregando material: ref https://material.angular.io/

```
sudo ng add @angular/material
```

Ejemplos: https://material.angular.io/components/form-field/overview

Dejan algo bastante que desear, pero se ha aplicado el Material design a las paginas solicitadas: login, register, profile, categoriesForm y postForm

## Ejercicio 2

Estilos aplicados a categoriesList y postList, se usaron variables de relleno de datos para que funcionará correctamente.
Las cabeceras e iconos dieron cierta guerra, pero por tratar de usar el font-awesome en lugar del mat-icon.

## Ejercicio 3

TODO: no se ha hecho

## Ejercicio 4

Footer eliminado. Incluido el Toolbar

## Ejercicio 5

Las cards de la home convertidas a mat-card
Animación: realizada en la home

## Ejercicio 6

El problema de usar la versión 15 de angular es que esta obsoleta.
Y hay que especificar versiones concretas para que los gráficos funciones.

## Ejercicio 7

Se ha creado el componente para que acepte las cards como referencia.
Se han dejado las viejas para mostrar el trabajo solicitado en el punto 5

## Conclusiones

Se tarda mucho en configurar los temas de angular y nada en hacer lo que se pide.
P. ej. configurar el gráfico, horas, pintarlo, minutos.

O mejor explicado, no se, y como no se (no tengo suficiente base, estoy a la vez en la asignatura previa) se me hace un poco cuesta arriba, bueno, le echaría más horas si no estuviera trabajando y con otras cuantas asignaturas mas (ninguna queja, me metí en estos lios yo solo y voluntaríamente).

He trabajado con Ionic (con angular) en el pasado y eso me salva algo.
