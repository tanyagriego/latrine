import React, { Component } from 'react';

export default class Footer extends Component {
    computeYear () {
        return new Date().getFullYear()
    }
    
    render () {
        const copyright = String.fromCharCode(169)
        const year = this.computeYear();
        return ( 
        <div className="footer">
            <ul>
                <li><a href="https://github.com/eputnam/latrine" target="_blank">GitHub</a></li>
                <li><a href="https://sistersoftheroad.org/" target="_blank">Sisters of the Road</a></li>
                <li><a href="javascript;">{`${copyright}${year}`} </a></li>
                <li><a href="javascript;">Terms of Service</a></li>
            </ul>
        </div>
        )}

}

