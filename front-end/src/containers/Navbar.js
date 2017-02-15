import React, { Component } from 'react';
import { Form, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import logo from '../../public/images/ebay.png';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    }

    handleSearchSubmit() {
        console.log('form submit');
    }

    render() {
        return(
            <div className='navbar'>
                <div className='nav-container'>
                    <div className='brand'>
                        <img src={logo}/>
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
                        <Link to='/login'>Login </Link>|<Link to='/register'> Register</Link>
                    </div>
                </div>
                <div className='sub-menu'>
                    <div className='sub-menu-left'>
                        <span>Create listing</span>
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

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({FetchWeather: GetWeather}, dispatch);
// }
//
// export default connect(null, mapDispatchToProps)(Navbar);

export default Navbar;
