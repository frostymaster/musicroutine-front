import React, {Component} from 'react';

class SignInForm extends Component{

    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
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
        console.log(this.state);
    }

    render(){
        return (
            <div className="FormCenter">
              <form className="FormFields" onSubmit={this.handleSubmit}>
                <div className="FormField">
                  <label className="FormField__Label" htmlFor="email">E-mail</label>
                  <input type="text" id="email" className="FormField__Input" placeholder="Enter your e-mail" 
                  name="email" value={this.state.email} onChange={this.handleChange}/>
                </div>

                <div className="FormField">
                  <label className="FormField__Label" htmlFor="password">Password</label>
                  <input type="text" id="password" className="FormField__Input" placeholder="Enter your password" 
                  name="password" value={this.state.password} onChange={this.handleChange}/>
                </div>

                <div className="FormField">
                  <button className="FormField__Button mr-20">Sign in</button> 
                </div>
              </form>
            </div>
        )
    }
}

export default SignInForm