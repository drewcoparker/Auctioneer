import React, { Component } from 'react';
import { Form, FormGroup, ControlLabel, FormControl, Button, Col } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import RegisterAction from '../actions/RegisterAction';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            registrationResponse: ''
        }
        this.handleRegistrationSubmit = this.handleRegistrationSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps){
        console.log(this.props.registerResponse.msg);
        // if (this.props.cat !== nextProps.cat) {
        //     if (nextProps.cat === "my-listings") {
        //         // Get the user's listings
        //         this.props.getListingsData("my-listings", this.props.auth.token);
        //     } else if(nextProps.cat) {
        //         // Get the listings that match the category supplied by the router
        //         this.props.getListingsData(nextProps.cat);
        //     } else {
        //         // Get all listings
        //         this.props.getListingsData("Home");
        //     }
        // }
    }

    handleRegistrationSubmit(event) {
        event.preventDefault();
        var name = event.target[0].value;
        var username = event.target[1].value;
        var email = event.target[2].value;
        var password = event.target[3].value;
        this.props.registerAction({
            name: name,
            username: username,
            email: email,
            password: password
        });
    }

    render() {
        var message;
        if (this.props.registerResponse.msg === 'userNameTaken') {
            message = 'This user name is taken. Please try another.';
        } else if (this.props.registerResponse.msg === 'userInserted'){
            message = 'User was inserted!';
        } else {
            message = 'Please fill out the form to register.';
        }
        return(
            <div className='register-wrapper'>

                <div className='register-greeting'>
                    <h4>{message}</h4>
                </div>
                <Form horizontal onSubmit={this.handleRegistrationSubmit}>

                    <FormGroup controlId="formHorizontalName">
                        <Col componentClass={ControlLabel} sm={2}>
                            Name
                        </Col>
                        <Col sm={10}>
                            <FormControl type="text" placeholder="Full Name" />
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalUserName">
                        <Col componentClass={ControlLabel} sm={2}>
                            User
                        </Col>
                        <Col sm={10}>
                            <FormControl type="text" placeholder="User Name" />
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalEmail">
                        <Col componentClass={ControlLabel} sm={2}>
                            Email
                        </Col>
                        <Col sm={10}>
                            <FormControl type="email" placeholder="Email" />
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalPassword">
                        <Col componentClass={ControlLabel} sm={2}>
                            Password
                        </Col>
                        <Col sm={10}>
                            <FormControl type="password" placeholder="Password" />
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                            <Button bsStyle="danger" bsSize="small" type="submit">
                                Register
                            </Button>
                        </Col>
                    </FormGroup>

                </Form>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        registerResponse: state.register
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        registerAction: RegisterAction
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
