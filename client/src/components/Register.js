import React, { Component } from 'react'
import { register } from './UserFunctions'

const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
const mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");

class Register extends Component {


  constructor() {
    super()
    this.state = {
      first_name: '',
      last_name: '',
      contact_no: '',
      country: '',
      email: '',
      password: '',
      regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      errors: {}
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.analyze = this.analyze.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()
    
      const newUser = {
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        contact_no: this.state.contact_no,
        country: this.state.country,
        email: this.state.email,
        password: this.state.password
      } 
      register(newUser).then(res => {
        this.props.history.push(`/login`)
      })
    
  }
  analyze = e => {   
     this.setState({[e.target.name]: e.target.value})  
     let pwd = e.target.value;
      if( pwd !== this.state.regex.test(pwd))
   {
     alert("Wrong!!")
   }
};

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">Register</h1>
              <div className="form-group">
                <label htmlFor="name">First name</label>
                <input
                  type="text"
                  className="form-control"
                  name="first_name"
                  placeholder="Enter your first name"
                  value={this.state.first_name}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Last name</label>
                <input
                  type="text"
                  className="form-control"
                  name="last_name"
                  placeholder="Enter your lastname name"
                  value={this.state.last_name}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Contact Number</label>
                <input
                  type="text"
                  className="form-control"
                  name="contact_no"
                  placeholder="Enter Contact number"
                  value={this.state.contact_no}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Country</label>
                <input
                  type="text"
                  className="form-control"
                  name="country"
                  placeholder="Country"
                  value={this.state.country}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter email"
                  value={this.state.email}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^\*])(?=.{8,})" 
                  title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </div>
              
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
                
              >
                Register!
              </button>
            </form>
          </div>
         
        </div>
        
      </div>
      
    )
  }
}

export default Register