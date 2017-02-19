import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class Authorization extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false
        }
    }

    componentDidMount() {
        var login = this.props.login;
        if (login !== null) {
            var msg = this.props.login.msg;
            if (msg === 'loginSuccess') {
                this.setState({
                    isLoggedIn: true
                })
            } else {
                this.setState({
                    isLoggedIn: false
                })
            }
        } else {
            this.setState({
                isLoggedIn: false
            })
        }
    }

    render() {
        if (this.state.isLoggedIn === true) {
            return(
                <div>
                    Welcome {this.props.login.name}
                </div>
            )
        } else {
            return(
                <div>
                    <Link to='/login'>Login </Link>|<Link to='/register'> Register</Link>
                </div>
            )
        }
    }
}


function mapStateToProps(state) {
    return {
        login: state.login
    }
}

export default connect(mapStateToProps, null)(Authorization);
