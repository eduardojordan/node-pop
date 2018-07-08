
#nodePop!
Es una API la cual ofrece servicios de base de datos en **MongoDB** realizada en **Node.js & Express** , esta API es el corazon con el cual trabajar app moviles y páginas web. Esta diseñada para  venta y busqueda de articulos de segunda mano.

---

**Puesta en marcha**

##Normal Use

To start the application in mode normal use:

```
npm start

```



##Development

To start the application in mode development use:

```
npm run dev

```

##MongoDB

To start the DB in Mongo use:

```
./bin/mongod --dbpath ./data/db --directoryperdb

```

---

### Authentication

To obtain a token a POST to: /apiv1/usuarios/login with email and password
Use tat token in the res od request in : 
header: 'x-access-token'
body: token
query string : token

http:localhost:3000/apiv1/agentes


---
**Modo cluster**

```
npm run cluster
```



**Filtros de Busqueda Incluidos en la Plataforma**

start

limit

skip

precio

tags

*Combinaciones de filtros*

Paginación- Pueden usarse solo o combinado

start 

limit

skip

##Ruta y Clave de autenticacion 


http://localhost:3000/apiv1/anuncios?name&token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNWIzYmJhNjg4MjA1MDJhZGE0MmE5MDBkIiwiaWF0IjoxNTMxMDgyNTczLCJleHAiOjE1MzE3NzM3NzN9.NPCICvJCwoPwRPIICYAfiIi9zrSd8Q6JDVDTeMTkQKE