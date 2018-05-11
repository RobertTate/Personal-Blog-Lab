import React from 'react';
import { CardElement } from 'react-stripe-elements';

let CardElementStyle = {
    base: {
        fontSize: '15px',
        color: 'white'
    }
}


class CardSection extends React.Component {
    render() {
        return (
            <div>
                <p className="lead"><u>Card information Below:</u></p>
                <CardElement id="InputElement" style={CardElementStyle} />
            </div>
        );
    }
};

export default CardSection;