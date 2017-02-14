import React, { Component } from 'react';
import { Form, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import GetWeather from '../actions/FetchWeatherAction.js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import logo from '../../public/images/ebay.png';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            zipCode: ''
        }
        this.changeZipCode = this.changeZipCode.bind(this);
        this.getWeather = this.getWeather.bind(this);
    }

    getWeather(event) {
        event.preventDefault();
        this.props.FetchWeather(this.state.zipCode);
    }

    changeZipCode(event) {
        this.setState({
            zipCode: event.target.value
        })
    }

    render() {
        return(
            <div className='navbar'>
                <div className='nav-container'>
                    <div className='brand'>
                        <img src={logo}/>
                    </div>
                    <div className='search-form'>

                        <Form inline onSubmit={this.getWeather}>
                            <FormGroup>
                                <FormControl className='input-box'
                                    placeholder="Enter zip code"
                                    value={this.state.zipCode}
                                    onChange={this.props.FetchWeather}/>
                            </FormGroup>
                            <Button id='search-btn' bsStyle="danger" bsSize="small" type="submit">
                                Search weather
                            </Button>
                        </Form>

                    </div>
                </div>
                <div className='sub-menu'>
                    <div className='sub-menu-left'>

                    </div>
                    <div className='sub-menu-right'>

                    </div>
                </div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({GetWeather: GetWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
