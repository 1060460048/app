/**
 * ramroll on 16/8/15.
 */


import React, {Component} from 'react'

import {Form} from "./Form"

import {form_connector} from "./form_connector"


export class FormConnector extends Component{

  constructor(props){
    super()
    this.form = new Form(props.validate, props.submit)
    this.state = {
      fields : this.form.createFields(props.fields)
    }
  }


  componentDidMount(){
    this.form.registerChangeEventHandler(this._changeHandler.bind(this))
    this.form.registerErrorHandler(this._errorHandler.bind(this))
    this.form.registerResetEventHandler(this._resetHandler.bind(this))
    if(this.props.onChange) {
      this.props.onChange(this.form.getData())
    }
    
  }


  componentWillUnmount(){
    this.form.removeChangeEventHandler(this._changeHandler.bind(this))
    this.form.removeResetEventHandler(this._resetHandler.bind(this))
    this.form.removeErrorHandler(this._errorHandler.bind(this))
  }
   _resetHandler(fields) {
    this.setState({
      children : this.nextChildren(this.props.children, fields)
    })
  }

  _errorHandler(fields){
    this.setState({
      fields
    })
  }


  _changeHandler(name, value, fields){
    this.setState({
      fields
    }, (() => {

      if(this.props.onChange) {
        this.props.onChange(this.form.getData())
      }

    }).bind(this))
  }
  
  getForm(){
    return this.form
  }


  render() {
    const {children, ...others} = this.props
    const {fields} = this.state
    return React.cloneElement(children, {...others, fields, form : this.form})
  }


}

const assert = (prop, predicate, errorMessage) => {
  return data => {
    if(!predicate(data[prop])){
      return errorMessage
    } else {
      return null
    }
  }
}