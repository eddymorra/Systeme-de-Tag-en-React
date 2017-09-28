import React, { Component } from 'react';
import './tags.css';

class Tags extends Component {
    
        render() {
            const listTags = this.props.tags.map((tag, i) => 
                <li key={i}>{tag} <button onClick={() => this.props.delete(i)}>x</button></li>
            );
            return (
                <div>
                    <ul>{listTags}</ul>
                </div>
            );
        };
    
    }
    
    export default Tags;