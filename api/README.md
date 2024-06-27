# ENDPOINTS /api/

## JUEGOS

### Consulta

Recupera todos los juegos eurogames

```http
GET /juegos
```

Recupera un juego eurogame por id

```http
GET /juegos/{id}
```

Recupera uno o varios juegos eurogame por titulo del juego que coincidan con el query
(los guiones "-" representan espacios)

```http
GET /juegos/?titulo=love-letter
```

Recupera uno o varios juegos eurogame por nombre de categoria que coincidan con el query
(los guiones "-" representan espacios)

```http
GET /juegos/?categoria=estrategia
```

Recupera los juegos de la página especificada (se separan cada 10)

```http
GET /juegos/?pagina=2
```

Recupera los juegos ordenados por el criterio especificado (por ahora solo titulo del juego)

```http
GET /juegos/?ordenado=titulo
```

### Alta

Da de alta un nuevo juego eurogame, con el detalle especificado en el body del HTTP Request
(requiere autorización mediante token 'auth' en el header)

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

### Actualización

Actualiza datos de un juego eurogame existente, con el detalle especificado en el body del HTTP Request
(requiere autorización mediante token 'auth' en el header)

```http
PUT /juegos/
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

### Eliminación

Elimina un juego eurogame existente especificado por id
(requiere autorización mediante token 'auth' en el header)

```http
DELETE /juegos/
```

_header (ejemplo)_:

```json
{
  "auth": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjp7Il9pZCI6IjY2NzliZGIzYWYzODcwODJmZjg5MmJhMCIsImVtYWlsIjoia2FyaW5hQGdtYWlsLmNvbSJ9LCJpYXQiOjE3MTkyNTk1NDAsImV4cCI6MTcxOTI2MDE0MH0.HC5j33XWzavSXX_yZCxS0rgs7ajah4zT2z5yWZNsGf4"
}
```
