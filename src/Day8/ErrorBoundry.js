import React, { Component } from 'react'

export default class ErrorBoundry extends Component {
    state={hasError:false}
    static getDerivedStateFromError(error)
    {
        return {
            hasError:true
        }
    }
    componentDidCatch(error,info)
    {
        console.log(error);
        console.log(info);
    }
  render() {
    if(this.state.hasError===true)
      {
         return <h1>Somthing wrong</h1>
      }
    return this.props.childern;
  }
}