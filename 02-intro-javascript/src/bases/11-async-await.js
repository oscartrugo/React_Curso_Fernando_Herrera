const getImagen = async() => {
    const apiKey = 'jIQtzSZXvr5olbl6SlGlA5uN88GvDiXI';
    const enlace = 'http://api.giphy.com/v1/gifs/random?api_key=';
    try {
        const response = await fetch(`${enlace}${apiKey}`);
        const { data } = await response.json();

        // Extraer la URL de la imagen (el nombre de la variable es imgUrl)
        const { url: imgUrl } = data.images.original;

        // Crear un elemento img y asignar la URL
        const img = document.createElement('img');
        img.src = imgUrl;

        // Agregar la imagen al body
        document.body.append(img);
    } catch (error) {
        console.error('Error fetching the image:', error);
    }
};

getImagen();
