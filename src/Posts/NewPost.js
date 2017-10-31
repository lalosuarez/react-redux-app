import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { createPost } from './Actions/Actions';

class NewPost extends Component {

  handleSubmit(event) {
    console.log(event);
    event.preventDefault();
  }

  render() {
    
    //const { handleSubmit } = this.props;
    //const handleSubmit = this.props.handleSubmit;
    console.log(this.props);

    return (
      <div>
        <h4>Create new Post</h4>
        <form onSubmit={ this.handleSubmit.bind(this) } >
          <div className="form-group">
            <label htmlFor="title">Title</label>
            {/* <input type="text" className="form-control" id="title" /> */}
            <Field name="title" component="input"
              type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="category">Category</label>
            {/* <input type="text" className="form-control" id="category" /> */}
            <Field name="category" component="input"
              type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="content">Content</label>
            {/* <textarea className="form-control" id="content" /> */}
            <Field name="content" component="textarea"
              type="text" className="form-control" />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>          
    );
  }
}

export default reduxForm({
  form: 'NewPostForm'
}, null, { createPost })(NewPost);