import React, { Component } from 'react';
import { Form, FormGroup, ControlLabel, FormControl, Button, InputGroup, HelpBlock } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CreateListingAction from '../actions/CreateListingAction';

class CreateListing extends Component {
    constructor(props) {
        super(props);
    }

    handleCreateListingSubmit(event) {
        event.preventDefault();
        console.dir(event.target);
        // var username = event.target[0].value;
        // var password = event.target[1].value;
        // this.props.loginAction({
        //     username: username,
        //     password: password
        // });
    }

    render() {
        return(
            <div className='create-listing-wrapper'>
                <Form horizontal onSubmit={this.handleCreateListingSubmit}>

                    <FormGroup controlId="formControlsText" >
                        <ControlLabel>Title</ControlLabel>
                        <FormControl
                            type="text"
                            placeholder="Enter a title for your item" />
                    </FormGroup>

                    <FormGroup controlId="formControlsFile">
                        <ControlLabel>Image File</ControlLabel>
                        <FormControl
                            type="file" />
                        <HelpBlock>Choose an image of your item</HelpBlock>
                    </FormGroup>

                    <FormGroup controlId="formControlsTextarea">
                        <ControlLabel>Description</ControlLabel>
                        <FormControl
                            componentClass="textarea"
                            placeholder="Describe your item" />
                    </FormGroup>

                    <FormGroup>
                        <ControlLabel>Starting Bid Price</ControlLabel>
                        <InputGroup>
                            <InputGroup.Addon>$</InputGroup.Addon>
                                <FormControl type="number" />
                            <InputGroup.Addon>¢</InputGroup.Addon>
                                <FormControl type="number" maxLength="2" />
                        </InputGroup>
                    </FormGroup>

                    <FormGroup controlId="formControlsDate" >
                        <ControlLabel>Expiration Date</ControlLabel>
                        <FormControl
                            type="date" />
                    </FormGroup>

                    <FormGroup>
                        <Button bsStyle="danger" bsSize="small" type="submit">
                            Submit
                        </Button>
                    </FormGroup>
                </Form>

            </div>
        )
    }
}

// function mapStateToProps(state) {
//     return {
//
//     }
// }

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        createListing: CreateListingAction
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(CreateListing);
