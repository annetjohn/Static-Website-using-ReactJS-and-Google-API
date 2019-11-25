
import React, { Component } from 'react';
import './Nav.css';
import axios from 'axios';

class Nav extends Component {

    state = {
        quotes: [0],

    }
    intervalID;
    componentDidMount = () => {
        this.getquotes();
    }
    componentWillUnmount() {
       
        clearTimeout(this.intervalID);
    }
    getquotes = () => {
        console.log("Quotes");
        axios.get('https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=d5c6c3054f4647b485edf14e00946a20')
            .then(
                res => {
                    console.log(res.data.articles);
                    this.setState({ quotes: this.state.quotes.concat(res.data.articles).splice(1, 5) });
                    this.intervalID = setTimeout(this.getquotes.bind(this), 5000);
                }
            )
            
    }


    render() {
        return (
            <div className="Nav">
                <h1>Google Headline</h1>
                {this.state.quotes.map((article, i) =>
                    <div>
                        <p>{i + 1}) {article.title}</p>
                    </div>
                )}

            </div>



        )
    }
}

export default Nav;

