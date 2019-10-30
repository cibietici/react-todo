import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class addTodo extends Component {
    state = {
        title: ''
    }
    onChange = (e) => this.setState({ [e.target.name]: e.target.value })
    onSubmit = (e) => {
        e.preventDefault()
        this.props.addTodo(this.state.title)
        this.setState({ title: '' })
    }
    render() {
        return (
            <form onSubmit ={this.onSubmit} style={{display: 'flex'}}>
                <input type="text" value={this.state.title} onChange={this.onChange} name="title" placeholder="Add todo ..." style={{flex: 10}}></input>
                <input type="submit" type="submit" style={{flex: 1, backgroundColor: '#ccc'}}></input>
            </form>
        )
    }
}

addTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
  }

export default addTodo
