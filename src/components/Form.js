import React, { Component } from 'react';
import { Field, reduxForm, reset } from 'redux-form' 
import {connect} from 'react-redux';

import { fetchCommitsRequest } from '../actions'

class Form extends Component {

    renderInput({input, label,meta}) {

        const emptyInput = meta.error && meta.touched
        const invalidStr = meta.error && meta.dirty
        invalidStr ? input.value = input.value.slice(0, input.value.length-1) : null;

        const className = `field ${emptyInput ||  invalidStr? 'error' : ""}`;
        
        return (
            <div className={className}>
                <label className="ui header">{label}
                    <input type="text" {...input} autoComplete="off" />
                </label>
                {emptyInput || invalidStr ? 
                    <div className="ui pointing basic label error message">
                        <div className="ui header ">{meta.error} </div>
                    </div> : null} 
            </div>
        ) 
    }

    onSubmit(formValues) {
        this.props.fetchCommitsRequest(formValues.user, formValues.repo)
        this.props.clearInputs()
    }

    render() {
        return (
            <div className="ui inverted segment">
                <div className="ui form inverted error">
                    <form className="" onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))}>
                        <Field name="user" component={this.renderInput} label="Please provide username" />
                        <Field name="repo" component={this.renderInput} label="Please provide repository name" />
                        <button  className="ui fluid inverted button primary">Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}

const validate = (formValues) => {
    
    const errors = {}

    if(!formValues.user) {
        errors.user = "you must enter a username"
    }

    if(formValues.user && formValues.user.indexOf(" ") !== -1) {
        errors.user = "you must enter valid username"
    }

    if(!formValues.repo) {
        errors.repo = "you must enter a repository name"
    }
    
    if(formValues.repo &&  formValues.repo.indexOf(" ") !== -1) {
        errors.repo = "you must enter valid repository name"
    }
    return errors;
}

const formWrapped = reduxForm({
    form: 'commits',
    validate
})(Form);


const mapDispatchToProps = (dispatch) => {
    return {
        fetchCommitsRequest: (user, repo) => {
            dispatch(fetchCommitsRequest(user, repo))
            },
        clearInputs: () => {
            dispatch(reset('commits'))
        }
    }
  }


export default connect(null, mapDispatchToProps)(formWrapped);