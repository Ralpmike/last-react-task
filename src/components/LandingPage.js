import React from 'react'
import {useRouteError } from 'react-router-dom'

const LandingPage = () => {

  const routeError = useRouteError()
  return (
    <div>
      <div>
        <h1> <i>Page Not Found</i> </h1>
       
      </div>
    </div>
  )
}

export default LandingPage