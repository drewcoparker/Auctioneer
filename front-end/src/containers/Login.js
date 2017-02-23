import React, { Component } from 'react';
import { Form, FormGroup, ControlLabel, FormControl, Button, Col } from 'react-bootstrap';
import { Link } from 'react-router';
import { browserHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import LoginAction from '../actions/LoginAction';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: 'Please login to start bidding!'
        }
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    }

    componentDidUpdate() {
        if (this.props.loginResponse.msg === 'badUsername') {
            this.setState({
                message: 'Wrong username and/or password.'
            });
        } else if (this.props.loginResponse.msg === 'wrongPassword') {
            this.setState({
                message: 'Wrong username and/or password.'
            });
        } else if (this.props.loginResponse.msg === 'loginSuccess') {
            browserHistory.push('/');
        }
    }

    handleLoginSubmit(event) {
        event.preventDefault();
        console.dir(event);
        // var username = event.target[0].value;
        // var password = event.target[1].value;
        // this.props.loginAction({
        //     username: username,
        //     password: password
        // });
    }

    render() {
        return(
            <div className='login-wrapper'>
                <div className='login-greeting'>
                    <h4>{this.state.message}</h4>
                </div>
                <Form horizontal onSubmit={this.handleLoginSubmit}>

                    <FormGroup>
                        <Col componentClass={ControlLabel} sm={2}>
                            User
                        </Col>
                        <Col sm={10}>
                            <FormControl type="text" placeholder="Username" />
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
                                Sign in
                            </Button>
                        </Col>
                    </FormGroup>
                </Form>
                
                <div className='register-link'>
                    New user? <Link to='/register'>Register here</Link>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        loginResponse: state.login
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        loginAction: LoginAction
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
