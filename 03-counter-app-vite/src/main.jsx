import React from 'react';
import ReactDOM from 'react-dom/client'; //Herramienta para renderizar React
import { HelloWorldApp } from './HelloWorldApp';
import { FirstApp } from './FirstApp';
import './styles.css';

ReactDOM.createRoot(document.getElementById("root")).render( //Renderizar compoennte en el DOM
    <React.StrictMode>
        <HelloWorldApp />
        <FirstApp />
    </React.StrictMode>
)