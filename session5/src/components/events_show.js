import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {Field, reduxForm } from 'redux-form';

import { getEvents, deleteEvents, putEvents } from '../actions';

import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

class EventsShow extends Component {

  constructor(props){
    //console.log("EventShow")
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
    this.onDeleteClick = this.onDeleteClick.bind(this)
  }

  componentDidMount(){
    const { id } = this.props.match.params
    if (id) this.props.getEvents(id)

  }

  renderField(field){
    const { input, label, type, meta: {touched, error}} = field
    return (
      <TextField
        hintText={label}
        floatingLabelText={label}
        type={type}
        errorText={touched && error}
        {...input}
        fullWidth={true}
      />
    )
  }

  async onSubmit(values) {
    await this.props.putEvents(values)
    this.props.history.push('/')
  }

  async onDeleteClick() {
    //console.log(this.props.match)
    const { id } = this.props.match.params
    //console.log(id);
    await this.props.deleteEvents(id)
    this.props.history.push('/')
  }

  render() {

    const { handleSubmit, pristine, submitting, invalid } = this.props
    //console.log(submitting);
    const style = { margin: 12}
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <div>
          <Field label="Title" name="title" type="text" component={this.renderField}/>
        </div>
        <div>
          <Field label="Body" name="body" type="text" component={this.renderField}/>
        </div>
        <RaisedButton label="Submit" type="submit" style={style} disabled={pristine || submitting || invalid}></RaisedButton>
        <RaisedButton label="Cancel" style={style} containerElement={<Link to="/"></Link>}></RaisedButton>
        <RaisedButton label="Delete" style={style} onClick={this.onDeleteClick}></RaisedButton>
      </form>
    )
  }
}

const mapDispatchToProps = ({ deleteEvents, getEvents, putEvents })

const  mapStateToProps = (state, ownProps) => {
  const event = state.events[ownProps.match.params.id]
  return { initialValues: event, state }
}

const validate = values => {
  const errors = {}

  if (!values.title) errors.title = "Enter a title, please."
  if (!values.body) errors.body = "Enter a body, please."

  return errors
}

export default connect(mapStateToProps, mapDispatchToProps)(
  reduxForm({validate, form: 'eventShowForm', enableReinitialize: true})(EventsShow)
)