import React, { Component } from 'react';
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
// import Modal from 'react-modal';
import logo from '../../public/images/ebay.png';
import Authorization from './Authorization.js'
import UserListingPanel from './UserListingPanel.js'
import { Link } from 'react-router';


class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginName: '',
            isLoggedIn: false,
            modalIsOpen: false
        }
        this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    componentDidMount() {
        var login = this.props.login;
        if (login !== null) {
            var msg = this.props.login.msg;
            if (msg === 'loginSuccess') {
                this.setState({
                    isLoggedIn: true,
                    loginName: this.props.login.name
                })
            }
        }
    }

    openModal() {

    }

    afterOpenModal() {

    }

    closeModal() {

    }

    handleSearchSubmit() {
        console.log('form submit');
    }

    render() {
        return(
            <div className='navbar'>
                <div className='nav-container'>
                    <div className='brand'>
                        <Link to='/'><img src={logo} role="presentation"/></Link>
                    </div>

                    <div className='search-form'>
                        <Form inline onSubmit={this.handleSearchSubmit}>
                            <FormGroup>
                                <FormControl
                                    className='input-box'
                                    placeholder="Search for stuff"
                                />
                            </FormGroup>
                            <Button
                                id='search-btn'
                                bsStyle="danger"
                                bsSize="small"
                                type="submit">
                                Search
                            </Button>
                        </Form>
                    </div>
                    <div className='login'>
                        <Authorization
                            loggedIn={this.state.isLoggedIn}
                            loginName={this.state.loginName}
                        />
                    </div>
                </div>
                <div className='sub-menu'>
                    <UserListingPanel
                        loggedIn={this.state.isLoggedIn} />
                    <div className='sub-menu-right'>
                        <div className='category'><Link to='/items/automotive'>Automotive</Link></div>
                        <div className='category'><Link to='/items/backpacking'>Backpacking Gear</Link></div>
                        <div className='category'><Link to='/items/computing'>Computing</Link></div>
                        <div className='category'><Link to='/items/music'>Music</Link></div>
                        <div className='category'><Link to='/items/books'>Books</Link></div>
                        <div className='category'><Link to='/items/stuff'>Stuff</Link></div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        login: state.login
    }
}

export default connect(mapStateToProps, null)(Navbar);
