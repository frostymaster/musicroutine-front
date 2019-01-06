import React, {Component} from 'react';

class SignUpForm extends Component{

    constructor() {
      super();

      this.state = {
          email: '',
          password: '',
          name: ''
      }

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(e) {
    let target = e.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    this.setState({
        [name] : value
    });

}

  handleSubmit(e) {
    e.preventDefault();

    console.log("WOW SUBMITED");
      fetch('http://localhost:5000/api/v1/user', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin' : '*'
      },
      body: JSON.stringify({
        name: this.state.name,
        password: this.statepassword,
        email: this.state.email
      })
    });
}

    render(){
        return (
            <div className="FormCenter">
              <form className="FormFields" onSubmit={this.handleSubmit}>
                <div className="FormField">
                  <label className="FormField__Label" htmlFor="name">Full Name</label>
                  <input type="text" id="name" className="FormField__Input" placeholder="Enter your full name" 
                  name="name" value={this.state.name} onChange={this.handleChange}/>
                </div>

                <div className="FormField">
                  <label className="FormField__Label" htmlFor="password">Password</label>
                  <input type="text" id="password" className="FormField__Input" placeholder="Enter your password" 
                  name="password" value={this.state.password} onChange={this.handleChange}/>
                </div>

                <div className="FormField">
                  <label className="FormField__Label" htmlFor="email">E-mail</label>
                  <input type="text" id="email" className="FormField__Input" placeholder="Enter your e-mail" 
                  name="email" value={this.state.email} onChange={this.handleChange}/>
                </div>

                <div className="FormField">
                  <label className="FormField__CheckboxLabel">
                    <input className="FormField_CheckBox" type="checkbox" name="hasAgreed"/> I agree all statements in <a href="" className="FormField_TermsLink">terms of service</a>
                  </label>
                </div>
                
                <div className="FormField">
                  <button className="FormField__Button mr-20">Sign up</button> <a href="#" className="FormField__Link">I'm already a member</a>
                </div>
              </form>
            </div>
        )
    }
}

export default SignUpForm