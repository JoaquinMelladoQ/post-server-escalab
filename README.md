# Node challenge for Escalab Academy

### OBJETIVOS: 

- Aplicar los conocimientos obtenidos hasta ahora
- Obtención de 3 décimas para el proyecto final
- Construir un api con express.js y node.js
- Utilizar el patrón de arquitectura por capas para Clean Architecture
- Inicializar y configurar el servidor y la conexión con bdd mongo
- Buenas prácticas para lecturas de directorios de rutas para definición de root path. Ejemplo: /api
- Habilitación de CORS Protocol
- Utilizar Mongoose como ORM
- Manejo de querys como Mongoose
- Creación de servicios rest
- Definiciones de models, routes, middlewares y controllers
- Para los models hacer algún uso de una referencia de otro Schema mediante ObjectId
- Para los middlewares de autenticidad y seguridad por JWT, pueden utilizar firebase admin y nutrirse de la captura de estos por los headers del request desde el cliente

## Screenshots after action was executed at Postman (just some examples):
### Status 200 indicate a successful response

Create a post:
- Endpoint: /api/post
![image](/assets/createpost.png)

List all posts:
- Endpoint: /api/posts
![image](/assets/listposts.png)

Update a post:
- Endpoint: /api/post/:slug
![image](/assets/updateapost.png)

----------------------------------------------------------------
Comment a post:
- Endpoint: /api/:slug/comment
![image](/assets/comment.png)

List all comments from one post:
- Endpoint: /api/:slug/comments
![image](/assets/listcomments.png)

Update a comment:
- Endpoint: /api/:slug/comment/:slug
![image](/assets/updateacomment.png)

Delete a comment:
- Endpoint: /api/:slug/comment/:slug
![image](/assets/deleteacomment.png)
