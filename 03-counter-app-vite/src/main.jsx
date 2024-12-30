import React from 'react';
import ReactDOM from 'react-dom/client'; //Herramienta para renderizar React
import { FirstApp } from './FirstApp';
import './styles.css';
import { CounterApp } from './CounterApp';

ReactDOM.createRoot(document.getElementById("root")).render( //Renderizar compoennte en el DOM
    <React.StrictMode>
        <FirstApp />
        <CounterApp value={10} />
    </React.StrictMode>
)