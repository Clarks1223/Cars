# 🚗 APP CRUD de Automóviles

## Descripción
Esta es una aplicación de gestión de automóviles que permite a los usuarios realizar operaciones de CRUD (Crear, Leer, Actualizar y Eliminar) sobre una lista de automóviles. La app incluye autenticación.

---

## Características principales

- **Autenticación de usuarios**: Solo los usuarios autenticados pueden acceder y realizar operaciones de CRUD.
- **CRUD de automóviles**: Los usuarios pueden agregar nuevos autos, editar los existentes, ver detalles y eliminarlos de la lista.
- **Interfaz de usuario amigable**: Utiliza Material UI y DataGrid para una visualización atractiva y organizada de los datos.
- **Validación de formularios**: Validación en tiempo real en los campos del formulario para evitar errores de entrada.

---

## 📸 Capturas de Pantalla

### 1. Pantalla de Autenticación
Los usuarios deben iniciar sesión para acceder a las funciones de la aplicación.

![image](https://github.com/user-attachments/assets/cc2fc3ea-f769-4253-8519-500d546bb684)

---

### 2. Pantalla CRUD de Automóviles
Una interfaz simple y elegante que permite a los usuarios gestionar la lista de automóviles.

![image](https://github.com/user-attachments/assets/eae1bf31-35ff-4134-8284-259c082f8700)

---

## Tecnologías utilizadas

- **Frontend**: React con Material UI para el diseño de la interfaz de usuario.
- **Backend**: Spring Boot para manejar las operaciones de autenticación y CRUD.
- **Autenticación**: Utiliza JWT para la autenticación de usuarios.
- **Base de datos**: PostgreSQL para almacenar los datos de los automóviles y usuarios.

---

## Cómo ejecutar el proyecto

1. **Clonar el repositorio**:
    ```bash
    git clone https://github.com/usuario/app-crud-automoviles.git
    ```

2. **Instalar dependencias (Frontend)**:
    ```bash
    cd frontend
    npm install
    ```

3. **Instalar dependencias (Backend)**:
    ```bash
    cd backend
    mvn install
    ```

4. **Configurar las variables de entorno**:
    - Asegúrate de configurar las variables de entorno necesarias para la conexión a la base de datos y el servidor de autenticación.

5. **Ejecutar la aplicación**:
    - **Frontend**: 
      ```bash
      npm start
      ```
    - **Backend**: 
      ```bash
      mvn spring-boot:run
      ```

---

## Contribuir

Las contribuciones son bienvenidas. Si quieres colaborar, puedes:

- **Reportar bugs**: Crea un issue describiendo el problema.
- **Realizar un pull request**: Si tienes mejoras o nuevas funcionalidades, no dudes en proponerlas.

---

## Licencia

Este proyecto está bajo la licencia MIT. ¡Siéntete libre de usarlo y modificarlo!

---

## Contacto

- **Desarrollador**: [ Clarks1223 ](https://github.com/Clarks1223)
- **Correo**: gustavouchuarii@gmail.com
