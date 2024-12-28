import React from 'react';
import ReactDOM from 'react-dom/client'; //Herramienta para renderizar React
import { HelloWorldApp } from './HelloWorldApp';

ReactDOM.createRoot(document.getElementById("root")).render( //Renderizar compoennte en el DOM
    <React.StrictMode>
        <HelloWorldApp />
    </React.StrictMode>
)