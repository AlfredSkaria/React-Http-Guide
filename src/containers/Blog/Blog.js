import React, { Component } from 'react';
// /import axios from 'axios';
import {Route, NavLink, Switch} from 'react-router-dom';
import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import FullPost from './FullPost/FullPost';
class Blog extends Component {

    render () {

        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink 
                                to = "/" 
                                exact
                                activeClassName="my-active"
                                activeStyle={{
                                    color: '#fa923f',
                                    textDecoration: 'underline'
                                }}>Posts</NavLink></li>
                            <li><NavLink to = {{
                                pathname:'/new-post',
                                hash: '#submit',
                                search:'?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path = "/" exact render={ () => <h1>Home1</h1>}/>
                <Route path = "/"  render={ () => <h1>Home2</h1>}/> */}
                <Route path="/" exact component={Posts}/>
                <Switch>
                    
                    <Route path="/new-post" component={NewPost}/>
                    <Route path="/:id" exact component={FullPost}/>
                </Switch>
                
                
            </div>
        );
    }
}

export default Blog;