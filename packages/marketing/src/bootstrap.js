import React from 'react'
import ReactDOM from 'react-dom'

//Mount funciton to start the app
const mount = (el) => {
    ReactDOM.render(
        <h1>Hi there!</h1>,
        el
    )
}
// In development and in Isolation
// Call mount immeadiately

if(process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_marketing-dev-root')

    if(devRoot) {
        mount(devRoot)
    }
}

// Running through container
// and we should export the mount funcion

export { mount }