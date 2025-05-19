import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

//Mount funciton to start the app
const mount = (el) => {
    ReactDOM.render(<App />, el
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