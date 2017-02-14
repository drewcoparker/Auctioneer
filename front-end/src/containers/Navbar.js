import React, { Component } from 'react';
import { Form, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import logo from '../../public/images/ebay.png';

class Navbar extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return(
            <div className='navbar'>
                <div className='nav-container'>
                    <div className='brand'>
                        <img src={logo}/>
                    </div>

                    <div className='search-form'>
                        <Form inline onSubmit={this}>
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
                        Login | Register
                    </div>
                </div>
                <div className='sub-menu'>
                    <div className='sub-menu-left'>
                        <span>Create listing</span>
                    </div>
                    <div className='sub-menu-right'>
                        <div className='category'>Category 1</div>
                        <div className='category'>Category 2</div>
                        <div className='category'>Category 3</div>
                        <div className='category'>Category 4</div>
                        <div className='category'>Category 5</div>
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
