import React, { Component } from 'react'

export default class Login extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            city: '',
            province: '',
            address1: '',
            address2: '',
            postalCode: '',
            country: '',
            submitted: false
        }

        this.countries = ['Viet Nam', 'Canada', 'United States', 'United Kingdom']
        this.provinces = ['Ha Noi', 'Alberta', 'Ontario', 'Quebec']
    }

    handleClick(e) {
        alert(`Hello World! : ${e.target.name}`)
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({ submitted: true })
    }

    handleInput = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div>
                <h2>Login</h2>
                <form onSubmit={this.handleSubmit}>
                    First Name: <input type='text' name='firstName' placeholder='Enter First Name' value={this.state.firstName} onChange={this.handleInput} /><br />
                    Last Name: <input type='text' name='lastName' placeholder='Enter Last Name' value={this.state.lastName} onChange={this.handleInput} /><br />
                    Address 1: <input type='text' name='address1' placeholder='Enter Address 1' value={this.state.address1} onChange={this.handleInput} /><br />
                    Address 2: <input type='text' name='address2' placeholder='Enter Address 2' value={this.state.address2} onChange={this.handleInput} /><br />
                    
                    Country: <select name='country' onChange={this.handleInput}>
                        <option value=''>Select Country</option>
                        {this.countries.map((cnm) => (
                            <option key={cnm} value={cnm}>{cnm}</option>
                        ))}
                    </select><br />
                    
                    Province: <select name='province' onChange={this.handleInput}>
                        <option value=''>Select Province</option>
                        {this.provinces.map((pm) => (
                            <option key={pm} value={pm}>{pm}</option>
                        ))}
                    </select><br />
                    
                    <input type='submit' value='LOGIN' /><br />
                    <input type="checkbox" /> Agree to Terms & Conditions
                </form>

                <button value='TEST' name='btnSubmit' onClick={this.handleClick}>Click</button>

                {this.state.submitted && (
                    <div>
                        <h3>Submitted Information</h3>
                        <p>First Name: {this.state.firstName}</p>
                        <p>Last Name: {this.state.lastName}</p>
                        <p>Address 1: {this.state.address1}</p>
                        <p>Address 2: {this.state.address2}</p>
                        <p>Country: {this.state.country}</p>
                        <p>Province: {this.state.province}</p>
                    </div>
                )}
            </div>
        )
    }
}
