import React, { Component } from 'react';

import { injectStripe } from 'react-stripe-elements';
import { postCharge } from '../services/stripeService';

import CardSection from './cardSection';

class CheckoutForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            customerName: ''
        }
    }

    async handleSubmit(e) {
        e.preventDefault();
        try {
            let token = await this.props.stripe.createToken({name: this.state.customerName });
            console.log(token);
            await postCharge({ id: token.token.id, amount: 10 });
        } catch (e) {
            console.log(e);
        }
    }

    handleNameInput(e) {
        this.setState({ customerName: e.target.value });
    }

    render() {
        return (
            <form className="blog-page" onSubmit={(e) => this.handleSubmit(e)}>
                <input onChange={(e) => this.handleNameInput(e)} placeholder="Enter Name" className="form-control-center" htmlFor="name" id="name" />
                <CardSection />
                <br />
                <button id="donate-button" className="btn btn-secondary">SUBMIT</button>
            </form>
        );
    }
}

export default injectStripe(CheckoutForm);
