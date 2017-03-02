import React, { Component } from 'react';
import { Form, FormGroup, ControlLabel, FormControl, Button, InputGroup, HelpBlock } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CreateListingAction from '../actions/CreateListingAction';

class CreateListing extends Component {
    constructor(props) {
        super(props);
        this.handleCreateListingSubmit = this.handleCreateListingSubmit.bind(this);
    }

    componentDidMount() {

    }

    handleCreateListingSubmit(event) {
        event.preventDefault();
        let title = event.target.elements[0].value;
        let imgFile = event.target.elements[1].files[0];
        let description = event.target.elements[2].value;
        let usd = event.target.elements[3].valueAsNumber;
        let end = Math.floor((event.target.elements[4].valueAsNumber) / 1000);
        let start = Math.floor(Date.now() / 1000);
        this.props.createListing({
            token: this.props.loginData.token,
            title: title,
            imgFile: imgFile,
            description: description,
            usd: usd,
            end: end,
            start: start
        });
    }

    render() {
        return(
            <div className='create-listing-wrapper'>
                <Form
                    encType='multipart/form-data'
                    onSubmit={this.handleCreateListingSubmit}>

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

                    <FormGroup controlId="formControlsTextarea" >
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

function mapStateToProps(state) {
    return {
        loginData: state.login
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        createListing: CreateListingAction
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateListing);
