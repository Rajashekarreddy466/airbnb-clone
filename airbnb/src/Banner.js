import { Button } from '@material-ui/core'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './Banner.css'
import Search from './Search'

function Banner() {

    const history = useHistory();
    const [showSearch, setshowSearch] = useState(false);

    return (
        <div className='banner'>
            <div className='banner__search'>
                <Button onClick={()=>setshowSearch(!showSearch)} variant='outlined' className='banner__searchButton'>{ showSearch ? "Hide" : "Search"}</Button>
                {showSearch && <Search />}
            </div>
            <div className='banner__info'>
                <h1>Get out and strecth your imagination</h1>
                <h5>Plan a different kind of a getaway to uncover the hidden gems near you</h5>
                <Button variant='outlined' onClick={() => history.push('./search')}>Explore Nearby</Button>
            </div>
        </div>
    )
}

export default Banner
