import React, { Component } from 'react';


class Listings extends Component {
    render() {
        return(
            <div className='listings-wrapper'>
                <h3>Popular listings</h3>
                <div className='listings'>
                    <div className='listing-item'>
                        <div className='listing-img'>
                            <img src=''></img>
                        </div>
                        <div className='listing-content'>
                            <div className='title'></div>
                        </div>
                    </div>

                    <div className='listing-item'>
                        <div className='listing-img'>
                            <img src=''></img>
                        </div>
                        <div className='listing-content'>
                            <div className='title'></div>
                        </div>
                    </div>

                    <div className='listing-item'>
                        <div className='listing-img'>
                            <img src=''></img>
                        </div>
                        <div className='listing-content'>
                            <div className='title'></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Listings;
