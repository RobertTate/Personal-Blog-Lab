import React, { Component, Fragment } from 'react';
import { sendContactEmail } from '../services/contactService';


class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        }
    }

    handleName(name) {
        this.setState({ name: name })
    }
    handleEmail(email) {
        this.setState({ email: email })
    }
    handleMessage(message) {
        this.setState({ message: message })
    }

    
    handleSubmit(e) {
        e.preventDefault();
        sendContactEmail(this.state.name, this.state.email, this.state.message)
        .then(() => {
            this.props.history.push('/')
        }).catch((err) => {
            console.log(err);
        })

    }


    render() {
        return (
            <Fragment>
            <div className="blog-page">
                <p className="lead">Contact Us</p>
                <form id="contact-form" className="blog-page" onSubmit={ (e) => this.handleSubmit(e) }>
                    <div className="form-group">
                        <input onChange={ (e) => this.handleName(e.target.value) } id="name" type="text" className="form-control" placeholder="Name:"/>
                    </div>
                    <div className="form-group">
                        <input onChange={ (e) => this.handleEmail(e.target.value) } id="email" type="email" className="form-control" placeholder="Email:"/>
                    </div>
                    <div className="form-group">
                       <textarea onChange={ (e) => this.handleMessage(e.target.value) } cols="60" rows="5" className="form-control" placeholder="Comments:"></textarea>
                    </div>
                    <input type="submit" className="btn btn-secondary" />
                </form>
            </div>
            {/* // Modal: Not Yet Implemented*/}
            <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  ...
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-primary">Save changes</button>
                </div>
              </div>
            </div>
          </div>
          </Fragment>
        );
    }




}


export default Contact;