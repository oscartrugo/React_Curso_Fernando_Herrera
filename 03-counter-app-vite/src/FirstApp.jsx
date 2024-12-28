import React from 'react'

const getSaludo = (nombre) => 'Hola, mi nombre es ' + nombre;

export const FirstApp = () => {
  return (
    <>
        <h1>{ getSaludo('Oscar') }</h1>
        <p>Full Stack Developer</p>
    </>
  )
}
