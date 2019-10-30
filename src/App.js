import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Todos from  './components/Todos';
import Header from './components/Header';
import AddTodo from './components/addTodo';
import uuid from 'uuid';
import About from './components/About';
import axios from 'axios';

class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'cast trash',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'cast trash again',
        completed: true
      },
      {
        id: uuid.v4(),
        title: 'cast trash nottt',
        completed: false
      }
    ]
  }
  componentDidMount() {
    //make here a http request with axios
    //axios.get('link to api')
    //  .then(res => this.setState({ todos: res.data }))
  }
  markComplete = (id) => {
      this.setState({ todos: this.state.todos.map(todo => {
        if(todo.id === id){
          todo.completed = !todo.completed
        }
        return todo
      })})
  }
  delTodo = (id) => {
    this.setState({ 
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    })
    // with axios
    //axios.delete(`link to api/${id}`)
    //  .then(res => this.setState({ 
    //  todos: [...this.state.todos.filter(todo => todo.id !== id)]
    //    })
    //  )
  }
  addTodo = (title) => {
    const newtodo = {
      id: uuid.v4(),
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newtodo] })
    // with axios
    //axios.post('link to api', {
      //title,
      //completed: false
    //})
    //.then(res => this.setState({ todos: [...this.state.todos, res.data]}))
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
            <Route exact path="/" render={
              props => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
                </React.Fragment>
              )} />
            <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
