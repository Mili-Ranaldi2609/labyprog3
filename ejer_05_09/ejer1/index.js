async function fetchRandomUser() {
    try {
        //llamando a la api
        const response=await fetch("https://randomuser.me/api/")
        const data= await response.json();
        const user=data.results[0];
        //seleccionar el contenedor para mostrar la informacion del usuario
        const userInfoContainer=document.getElementById('userInfo');

        //crear el contenido html con la info del usuario
        userInfoContainer.innerHTML = `
        <img src="${user.picture.large}" alt="Imagen de usuario">
        <h2>${user.name.first} ${user.name.last}</h2>
        <p>Género: ${user.gender}</p>
        <p>Email: ${user.email}</p>
        <p>País: ${user.location.country}</p>
      `;
          // Ocultar el mensaje de "Cargando..."
        document.getElementById('loadingMessage').style.display = 'none';
    } catch (error) {
        console.error("Error al obtener el usuario:", error);
        document.getElementById('loadingMessage').textContent = 'Error al cargar el usuario.';
    }
}