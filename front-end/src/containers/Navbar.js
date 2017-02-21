import React, { Component } from 'react';
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import logo from '../../public/images/ebay.png';
import Authorization from './Authorization.js'

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginName: ''
        }
        this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    }

    componentDidMount() {
        if (this.props.authorization !==  null) {
            this.setState({
                loginName: this.props.authorization.name
            })
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
                                    placeholder="Search for stuff"
                                    />
                            </FormGroup>
                            <Button id='search-btn' bsStyle="danger" bsSize="small" type="submit">
                                Search
                            </Button>
                        </Form>
                    </div>

                    <div className='login'>
                        <Authorization name={this.state.loginName}/>
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
    return {
        authorization: state.login
    }
}

export default connect(mapStateToProps, null)(Navbar);
