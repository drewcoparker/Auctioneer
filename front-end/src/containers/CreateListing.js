import React, { Component } from 'react';
import { Form, FormGroup, ControlLabel, FormControl, Button, InputGroup, HelpBlock } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CreateListingAction from '../actions/CreateListingAction';

class CreateListing extends Component {
    constructor(props) {
        super(props);
        this.handleCreateListingSubmit = this.handleCreateListingSubmit.bind(this)
    }

    handleCreateListingSubmit(event) {
        event.preventDefault();
        console.dir(event.target.elements);
        let title = event.target.elements[0].value;
        let img = event.target.elements[1].files[0];
        let description = event.target.elements[2].value;
        let usd = event.target.elements[3].valueAsNumber;
        let utc = event.target.elements[4].valueAsNumber;

        this.props.createListing({
            title: title,
            img: img,
            description: description,
            usd: usd,
            utc: utc
        });
    }

    render() {
        return(
            <div className='create-listing-wrapper'>
                <Form
                    encType='multipart/form-data'
                    onSubmit={this.handleCreateListingSubmit}>

                    <FormGroup id='listing-title-input' >
                        <ControlLabel>Title</ControlLabel>
                        <FormControl
                            type="text"
                            placeholder="Enter a title for your item" />
                    </FormGroup>

                    <FormGroup id='listing-img-input'>
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
                                <FormControl type="number" step="0.01"/>
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
