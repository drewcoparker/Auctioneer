import React, { Component } from 'react';


class Listings extends Component {
    render() {
        return(
            <div className='listings-wrapper'>
                <h3>Popular listings</h3>
                <div className='listings'>
                    <div className='listing-item'>
                        <div className='listing-img'>
                            <img src='http://placehold.it/271x150'></img>
                        </div>
                        <div className='listing-content'>
                            <div className='title'>Collection</div>
                            <div className='description'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit, sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua. Ut enim ad minim veniam, quis
                                nostrud exercitation ullamco laboris nisi ut aliquip
                                ex ea commodo consequat.
                            </div>
                        </div>
                    </div>

                    <div className='listing-item'>
                        <div className='listing-img'>
                            <img src='http://placehold.it/271x150'></img>
                        </div>
                        <div className='listing-content'>
                            <div className='title'>Collection</div>
                            <div className='description'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit, sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua. Ut enim ad minim veniam, quis
                                nostrud exercitation ullamco laboris nisi ut aliquip
                                ex ea commodo consequat.
                            </div>
                        </div>
                    </div>

                    <div className='listing-item'>
                        <div className='listing-img'>
                            <img src='http://placehold.it/271x150'></img>
                        </div>
                        <div className='listing-content'>
                            <div className='title'>Collection</div>
                            <div className='description'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit, sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua. Ut enim ad minim veniam, quis
                                nostrud exercitation ullamco laboris nisi ut aliquip
                                ex ea commodo consequat.
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}


export default Listings;
