import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { createPost } from './Actions/Actions';

class NewPost extends Component {

  renderField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${ touched && error ? 'has-error' : ''}`;
    return (
      <div className={ className }>
        <label>{ field.label }</label>
        <input className="form-control" type={ field.type } { ...field.input } />
        <div className="help-block with-errors">
          { touched ? error : '' }
        </div>
      </div>  
    );
  }

  renderTextArea(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${ touched && error ? 'has-error' : ''}`;
    return (
      <div className={ className }>
        <label>{ field.label }</label>
        <textarea className="form-control" { ...field.input } />
        { touched ? error : '' }
      </div>      
    );
  }

  onSubmit(post) {
    this.props.createPost(post);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div>
        <h4>Create new Post</h4>
        <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>

          <Field label="Title" name="title"
            type="text" component={ this.renderField } />

          <Field label="Category" name="category"
            type="text" component={ this.renderField } />

          <Field label="Content" name="content"
            component={ this.renderTextArea } />            

          <button type="submit" className="btn btn-primary">Submit</button>
          <Link to="/posts" className="btn btn-danger">
              Cancel
          </Link>
        </form>
      </div>          
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = "Enter a title";
  }

  if (!values.category) {
    errors.category = "Enter a category";
  }

  if (!values.content) {
    errors.content = "Enter some content";
  }

  return errors;
}

export default reduxForm({
  form: 'NewPostForm',
  validate
})(connect(null, { createPost })(NewPost));