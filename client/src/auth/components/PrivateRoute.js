import React from 'react'
import {Redirect, Route} from 'react-router-dom'
import {connect} from 'react-redux'

const PrivateRoute = ({component: Component, ...rest}) => {
  return (
    <Route
      {...rest}
      render={props => rest.auth
        ? <Component {...props} />
        : <Redirect to={{
          pathname: '/login', 
          state: {from: props.location}
        }} />
      } />
  )
}

function mapStateToProps(state) {
  return {auth: state.auth.currentUser}
}

export default connect(mapStateToProps)(PrivateRoute)