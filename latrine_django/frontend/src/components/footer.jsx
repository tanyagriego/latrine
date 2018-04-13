import React, { Component } from 'react';

export default class Footer extends Component {
    computeYear () {
        return new Date().getFullYear()
    }
    
    render () {
        const copyrightSymbol = String.fromCharCode(169)
        const year = this.computeYear();

        // TODO: Update these links to be real
        return (
            <div className="footer">
                <ul>
                    <li><a href="https://github.com/eputnam/latrine" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                    <li><a href="https://sistersoftheroad.org/" target="_blank" rel="noopener noreferrer">Sisters of the Road</a></li>
                    <li><a href="javascript;">{`${copyrightSymbol}${year}`} </a></li>
                    <li><a href="javascript;">Terms of Service</a></li>
                </ul>
            </div>
        )}
}

