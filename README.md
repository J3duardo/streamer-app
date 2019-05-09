# Streamer App
Aplicación para visualización y administración de streams. Utiliza una organización semejante a [Twitch](https://www.twitch.tv/) donde los usuarios registrados pueden crear, editar y eliminar sus streams. Los usuarios no registrados están limitados sólo a visualización de streams.

### Tecnología
La aplicación está desarrollada con **React** y **Redux** y utiliza **Semantic UI** para los estilos. Además, utiliza varias librerías open source para funcionar correctamente:

- [React Router DOM](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)
- [Redux Form](https://github.com/erikras/redux-form) 
- [Redux Devtools Extension](https://github.com/zalmoxisus/redux-devtools-extension)
- [JSON Server](https://github.com/typicode/json-server)
- [Redux Promise](https://github.com/redux-utilities/redux-promise)

### Autenticación de usuarios
La aplicación utiliza **Google OAuth 2.0** para autenticación de usuarios mediante sus cuentas [Gmail](https://www.google.com/intl/es/gmail/about/#).

### Cómo usar
1. Clonar el proyecto: `git clone https://github.com/J3duardo/streamer-app.git`

2. Instalar las dependencias del servidor: Ejecutar `npm install` en el directorio `/api`. Una vez instaladas las dependencias, ejecutar `npm start` en dicho directorio para inicializar el servidor.

3. Instalar las dependencias del proyecto: En otra ventana de comandos ejecutar `npm install` en el directorio raíz. Una vez instaladas las dependencias, ejecutar `npm start` para inicializar el proyecto en el navegador.

# Nota
Esta es una aplicación de prueba, y aunque cuenta con toda la funcionalidad aún no se ha implementado el servidor RTMP para la emisión de los streams, pero esto se considerará en futuras versiones del proyecto.