import React, {Component} from 'react';

class SignUpForm extends Component{
    render(){
        return (
            <div className="FormCenter">
              <form className="FormFields" onSubmit={this.handleSubmit}>
                <div className="FormField">
                  <label className="FormField__Label" htmlFor="name">Full Name</label>
                  <input type="text" id="name" className="FormField__Input" placeholder="Enter your full name" name="name"/>
                </div>

                <div className="FormField">
                  <label className="FormField__Label" htmlFor="password">Password</label>
                  <input type="text" id="password" className="FormField__Input" placeholder="Enter your password" name="password"/>
                </div>

                <div className="FormField">
                  <label className="FormField__Label" htmlFor="email">E-mail</label>
                  <input type="text" id="email" className="FormField__Input" placeholder="Enter your e-mail" name="email"/>
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