import React, { Component } from 'react';
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import logo from '../../public/images/ebay.png';
import Authorization from '../Authorization.js'

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    }

    componentDidMount() {
        if (this.props.loginResponse ===  'null') {

        }
    }

    handleSearchSubmit() {
        console.log('form submit');
    }

    render() {
        return(
            <div className='navbar'>
                <div className='nav-container'>
                    <div className='brand'>
                        <img src={logo} role="presentation"/>
                    </div>

                    <div className='search-form'>
                        <Form inline onSubmit={this.handleSearchSubmit}>
                            <FormGroup>
                                <FormControl className='input-box'
                                    placeholder="Enter item"
                                    />
                            </FormGroup>
                            <Button id='search-btn' bsStyle="danger" bsSize="small" type="submit">
                                Search
                            </Button>
                        </Form>
                    </div>

                    <div className='login'>
                        <Authorization />
                    </div>
                </div>
                <div className='sub-menu'>
                    <div className='sub-menu-left'>
                        <div>Create listing</div>
                        <div>My Listings</div>
                    </div>
                    <div className='sub-menu-right'>
                        <div className='category'>Sporting Goods</div>
                        <div className='category'>Backpacking Gear</div>
                        <div className='category'>Computing</div>
                        <div className='category'>Housewares</div>
                        <div className='category'>Entertainment</div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state.login);
    return {
        loginResponse: state.login
    }
}

export default connect(mapStateToProps, null)(Navbar);
