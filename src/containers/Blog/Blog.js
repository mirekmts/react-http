import React, { Component } from 'react';
import axiosInstance from '../../axios';

import Posts from './Posts/Posts';

import './Blog.css';

class Blog extends Component {

  




    render () {

        
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/">New Post</a></li>
                        </ul>
                    </nav>
                </header>
                <Posts />
                

            </div>
        );
    }
}

export default Blog;