import React from 'react';
import ReactDOM from 'react-dom/client'; //Herramienta para renderizar React
import { FirstApp } from './FirstApp';
import './styles.css';

ReactDOM.createRoot(document.getElementById("root")).render( //Renderizar compoennte en el DOM
    <React.StrictMode>
        <FirstApp title={"Hola, soy Oscar"} subTitle={124} />
    </React.StrictMode>
)