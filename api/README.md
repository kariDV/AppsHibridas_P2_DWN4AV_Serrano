# ENDPOINTS /api/

## JUEGOS

### GET /juegos

. Recupera todos los juegos eurogames

### GET /juegos/{id}

. Recupera un juego eurogame por id

### GET Juegos/?titulo=love-letter

. Recupera uno o varios juegos eurogame por titulo del juego que coincidan con el query
(los guiones "-" representan espacios)

### GET Juegos/?categoria=estrategia

. Recupera uno o varios juegos eurogame por nombre de categoria que coincidan con el query
(los guiones "-" representan espacios)

### GET Juegos/?pagina=2

. Recupera los juegos de la página especificada (se separan cada 10)

### GET Juegos/?ordenado=titulo

. Recupera los juegos ordenados por el criterio especificado (por ahora solo titulo del juego)

### GET Juegos/?ordenado=titulo

. Recupera los juegos ordenados por el criterio especificado (por ahora solo titulo del juego)

### POST Juegos/

. Inserta un nuevo juego

Header (ejemplo):

```json
auth: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjp7Il9pZCI6IjY2NzliZGIzYWYzODcwODJmZjg5MmJhMCIsImVtYWlsIjoia2FyaW5hQGdtYWlsLmNvbSJ9LCJpYXQiOjE3MTkyNTk1NDAsImV4cCI6MTcxOTI2MDE0MH0.HC5j33XWzavSXX_yZCxS0rgs7ajah4zT2z5yWZNsGf4"
```

Body (ejemplo):

```json
[
  {
    "id": 1,
    "titulo": "7 Wonders",
    "categoria": {idCategoria},
    "descripcion": "es un juego de mesa estratégico donde los jugadores desarrollan una civilización a lo largo de tres eras, construyendo estructuras, comercializando recursos y erigiendo maravillas para obtener la mayor cantidad de puntos de victoria.",
    "editorial": "7 Wonders",
    "tiempoDeJuego": "90",
  }
]
```

---
