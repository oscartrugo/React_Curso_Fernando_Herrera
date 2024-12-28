import React from 'react';
import ReactDOM from 'react-dom/client'; //Herramienta para renderizar React

function App() { //Functional component
    //document.createElement...
    return <h1>Hola mundo!!!</h1>;
}

ReactDOM.createRoot(document.getElementById("root")).render( //Renderizar compoennte en el DOM
    <React.StrictMode>
        <App />
    </React.StrictMode>
)