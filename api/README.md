# BoardGame Kingdom /api/

## JUEGOS

### Consulta

Recupera todos los juegos eurogames

```http
GET /juegos
```

Recupera un juego eurogame por id

```http
GET /juegos/{idJuego}
```

Recupera uno o varios juegos eurogame por titulo del juego que coincidan con el query <br>
(los guiones "-" o "\_" representan espacios | no es case sensitive)

```http
GET /juegos/?titulo=love-letter
```

Recupera uno o varios juegos eurogame que coincidan con el id de categoria <br>

```http
GET /juegos/?idCategoria={idCategoria}
```

Recupera los juegos de la página especificada <br>
(se separan cada 10)

```http
GET /juegos/?pagina=2
```

Recupera los juegos ordenados por el criterio especificado <br>
(por ahora solo titulo del juego)

```http
GET /juegos/?ordenado=titulo
```

---

### Alta

Da de alta un nuevo juego eurogame, con el detalle especificado en el body del HTTP Request <br>
**(requiere autorización mediante token 'auth' en el header)**

```http
POST /juegos/
```

_header (ejemplo)_:

```json
{
  "auth": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjp7Il9pZCI6IjY2NzliZGIzYWYzODcwODJmZjg5MmJhMCIsImVtYWlsIjoia2FyaW5hQGdtYWlsLmNvbSJ9LCJpYXQiOjE3MTkyNTk1NDAsImV4cCI6MTcxOTI2MDE0MH0.HC5j33XWzavSXX_yZCxS0rgs7ajah4zT2z5yWZNsGf4"
}
```

_body (ejemplo)_:

```json
[
  {
    "idJuego": 1,
    "titulo": "7 Wonders",
    "idCategoria": 4,
    "descripcion": "es un juego de mesa estratégico donde los jugadores desarrollan una civilización a lo largo de tres eras, construyendo estructuras, comercializando recursos y erigiendo maravillas para obtener la mayor cantidad de puntos de victoria.",
    "editorial": "Days of Wonder",
    "tiempoDeJuego": "90"
  }
]
```

---

### Actualización

Actualiza datos de un juego eurogame existente, con el detalle especificado en el body del HTTP Request y el id en la URI<br>
**(requiere autorización mediante token 'auth' en el header)**

```http
PUT /juegos/{idJuego}
```

_header (ejemplo)_:

```json
{
  "auth": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjp7Il9pZCI6IjY2NzliZGIzYWYzODcwODJmZjg5MmJhMCIsImVtYWlsIjoia2FyaW5hQGdtYWlsLmNvbSJ9LCJpYXQiOjE3MTkyNTk1NDAsImV4cCI6MTcxOTI2MDE0MH0.HC5j33XWzavSXX_yZCxS0rgs7ajah4zT2z5yWZNsGf4"
}
```

_body (ejemplo)_:

```json
[
  {
    "idJuego": 3,
    "titulo": "Bunny Kingdom",
    "idCategoria": 4,
    "descripcion": "es un juego de mesa estratégico donde los jugadores controlan clanes de conejos para expandir su reino, construir ciudades y recolectar recursos para obtener la mayor cantidad de puntos de victoria.",
    "editorial": "Devir",
    "tiempoDeJuego": "45"
  }
]
```

---

### Eliminación

Elimina un juego eurogame existente especificado por id <br>
**(requiere autorización mediante token 'auth' en el header)**

```http
DELETE /juegos/{id}
```

_header (ejemplo)_:

```json
{
  "auth": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjp7Il9pZCI6IjY2NzliZGIzYWYzODcwODJmZjg5MmJhMCIsImVtYWlsIjoia2FyaW5hQGdtYWlsLmNvbSJ9LCJpYXQiOjE3MTkyNTk1NDAsImV4cCI6MTcxOTI2MDE0MH0.HC5j33XWzavSXX_yZCxS0rgs7ajah4zT2z5yWZNsGf4"
}
```

---

## CATEGORIAS

### Consulta

Recupera todas las categorias

```http
GET /categorias
```

Recupera una categoria por id

```http
GET /categorias/{id}
```

Recupera una o varias categorias por titulo de categoria que coincidan con el query <br>
(los guiones "-" o "\_" representan espacios | no es case sensitive)

```http
GET /categorias/?titulo=estrategia
```

---

### Alta

Da de alta una nueva categoría, con el detalle especificado en el body del HTTP Request <br>
**(requiere autorización mediante token 'auth' en el header)**

```http
POST /categorias/
```

_header (ejemplo)_:

```json
{
  "auth": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjp7Il9pZCI6IjY2NzliZGIzYWYzODcwODJmZjg5MmJhMCIsImVtYWlsIjoia2FyaW5hQGdtYWlsLmNvbSJ9LCJpYXQiOjE3MTkyNTk1NDAsImV4cCI6MTcxOTI2MDE0MH0.HC5j33XWzavSXX_yZCxS0rgs7ajah4zT2z5yWZNsGf4"
}
```

_body (ejemplo)_:

```json
[
  {
    "idCategoria": 1,
    "titulo": "Estrategia",
    "descripcion": "Los juegos de mesa de estrategia se centran en la planificación táctica y la toma de decisiones estratégicas para alcanzar objetivos específicos dentro de un contexto temático o competitivo."
  }
]
```

---

### Actualización

Actualiza datos de una categoria existente, con el detalle especificado en el body del HTTP Request <br>
**(requiere autorización mediante token 'auth' en el header)**

```http
PUT /categorias/
```

_header (ejemplo)_:

```json
{
  "auth": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjp7Il9pZCI6IjY2NzliZGIzYWYzODcwODJmZjg5MmJhMCIsImVtYWlsIjoia2FyaW5hQGdtYWlsLmNvbSJ9LCJpYXQiOjE3MTkyNTk1NDAsImV4cCI6MTcxOTI2MDE0MH0.HC5j33XWzavSXX_yZCxS0rgs7ajah4zT2z5yWZNsGf4"
}
```

_body (ejemplo)_:

```json
[
  {
    "idCategoria": 7,
    "titulo": "Party",
    "descripcion": "Los juegos de mesa party se enfocan en la diversión y la interacción social rápida entre los jugadores, a menudo incluyendo actividades lúdicas, trivia, o desafíos creativos que promueven el entretenimiento grupal."
  }
]
```

---

### Eliminación

Elimina una categoría especificada por id <br>
**(requiere autorización mediante token 'auth' en el header)**

```http
DELETE /categorias/{id}
```

_header (ejemplo)_:

```json
{
  "auth": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjp7Il9pZCI6IjY2NzliZGIzYWYzODcwODJmZjg5MmJhMCIsImVtYWlsIjoia2FyaW5hQGdtYWlsLmNvbSJ9LCJpYXQiOjE3MTkyNTk1NDAsImV4cCI6MTcxOTI2MDE0MH0.HC5j33XWzavSXX_yZCxS0rgs7ajah4zT2z5yWZNsGf4"
}
```

---

## USUARIOS

### Consulta

Recupera todos los usuarios
**(requiere autorización mediante token 'auth' en el header)**

```http
GET /usuarios/
```

_header (ejemplo)_:

```json
{
  "auth": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjp7Il9pZCI6IjY2NzliZGIzYWYzODcwODJmZjg5MmJhMCIsImVtYWlsIjoia2FyaW5hQGdtYWlsLmNvbSJ9LCJpYXQiOjE3MTkyNTk1NDAsImV4cCI6MTcxOTI2MDE0MH0.HC5j33XWzavSXX_yZCxS0rgs7ajah4zT2z5yWZNsGf4"
}
```

Recupera un usuario por id

```http
GET /usuarios/{id}
```

_header (ejemplo)_:

```json
{
  "auth": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjp7Il9pZCI6IjY2NzliZGIzYWYzODcwODJmZjg5MmJhMCIsImVtYWlsIjoia2FyaW5hQGdtYWlsLmNvbSJ9LCJpYXQiOjE3MTkyNTk1NDAsImV4cCI6MTcxOTI2MDE0MH0.HC5j33XWzavSXX_yZCxS0rgs7ajah4zT2z5yWZNsGf4"
}
```

---

### Alta

Da de alta un nuevo usuario, con el detalle especificado en el body del HTTP Request <br>
**(requiere autorización mediante token 'auth' en el header)**

```http
POST /usuarios/
```

_header (ejemplo)_:

```json
{
  "auth": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjp7Il9pZCI6IjY2NzliZGIzYWYzODcwODJmZjg5MmJhMCIsImVtYWlsIjoia2FyaW5hQGdtYWlsLmNvbSJ9LCJpYXQiOjE3MTkyNTk1NDAsImV4cCI6MTcxOTI2MDE0MH0.HC5j33XWzavSXX_yZCxS0rgs7ajah4zT2z5yWZNsGf4"
}
```

_body (ejemplo)_:

```json
[
  {
    "idUsuario": 1,
    "email": "karina@gmail.com",
    "contraseña": "$kari1234",
    "alias": "Karina Serrano"
  }
]
```

---

### Actualización

Actualiza datos de un usuario existente, con el detalle especificado en el body del HTTP Request <br>
**IMPORTANTE: solo se podrá actualizar el usuario que esté logueado** <br>
**(requiere autorización mediante token 'auth' en el header)**

```http
PUT /usuarios/
```

_header (ejemplo)_:

```json
{
  "auth": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjp7Il9pZCI6IjY2NzliZGIzYWYzODcwODJmZjg5MmJhMCIsImVtYWlsIjoia2FyaW5hQGdtYWlsLmNvbSJ9LCJpYXQiOjE3MTkyNTk1NDAsImV4cCI6MTcxOTI2MDE0MH0.HC5j33XWzavSXX_yZCxS0rgs7ajah4zT2z5yWZNsGf4"
}
```

_body (ejemplo)_:

```json
[
  {
    "idUsuario": 1,
    "email": "karina@google.com",
    "contraseña": "$kari5678",
    "alias": "Karina Guadalupe Serrano"
  }
]
```

---

### Eliminación

Elimina un usuario especificado por id <br>
**IMPORTANTE: solo se podrá actualizar el usuario que esté logueado** <br>
**una vez eliminado se vence la sesión** <br>
**(requiere autorización mediante token 'auth' en el header)**

```http
DELETE /usuarios/{id}
```

_header (ejemplo)_:

```json
{
  "auth": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjp7Il9pZCI6IjY2NzliZGIzYWYzODcwODJmZjg5MmJhMCIsImVtYWlsIjoia2FyaW5hQGdtYWlsLmNvbSJ9LCJpYXQiOjE3MTkyNTk1NDAsImV4cCI6MTcxOTI2MDE0MH0.HC5j33XWzavSXX_yZCxS0rgs7ajah4zT2z5yWZNsGf4"
}
```

---

## FAVORITOS

### Consulta

Recupera todos los favoritos de un usuario
**(requiere autorización mediante token 'auth' en el header)**

```http
GET /favoritos/{idUsuario}
```

_header (ejemplo)_:

```json
{
  "auth": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjp7Il9pZCI6IjY2NzliZGIzYWYzODcwODJmZjg5MmJhMCIsImVtYWlsIjoia2FyaW5hQGdtYWlsLmNvbSJ9LCJpYXQiOjE3MTkyNTk1NDAsImV4cCI6MTcxOTI2MDE0MH0.HC5j33XWzavSXX_yZCxS0rgs7ajah4zT2z5yWZNsGf4"
}
```

---

### Alta

Da de alta un nuevo favorito, con el detalle especificado en el body del HTTP Request <br>
**(requiere autorización mediante token 'auth' en el header)**

```http
POST /favoritos/
```

_header (ejemplo)_:

```json
{
  "auth": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjp7Il9pZCI6IjY2NzliZGIzYWYzODcwODJmZjg5MmJhMCIsImVtYWlsIjoia2FyaW5hQGdtYWlsLmNvbSJ9LCJpYXQiOjE3MTkyNTk1NDAsImV4cCI6MTcxOTI2MDE0MH0.HC5j33XWzavSXX_yZCxS0rgs7ajah4zT2z5yWZNsGf4"
}
```

_body (ejemplo)_:

```json
[
  {
    "idUsuario": 1,
    "idCategoria": 3
  }
]
```

---

### Eliminación

Elimina un favorito <br>
**IMPORTANTE: solo se podrá actualizar el usuario que esté logueado** <br>
**(requiere autorización mediante token 'auth' en el header)**

```http
DELETE /favoritos/
```

_header (ejemplo)_:

```json
{
  "auth": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjp7Il9pZCI6IjY2NzliZGIzYWYzODcwODJmZjg5MmJhMCIsImVtYWlsIjoia2FyaW5hQGdtYWlsLmNvbSJ9LCJpYXQiOjE3MTkyNTk1NDAsImV4cCI6MTcxOTI2MDE0MH0.HC5j33XWzavSXX_yZCxS0rgs7ajah4zT2z5yWZNsGf4"
}
```

_body (ejemplo)_:

```json
[
  {
    "idUsuario": 1,
    "idCategoria": 3
  }
]
```
