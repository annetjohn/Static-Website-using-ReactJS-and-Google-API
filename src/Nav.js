
import React, { Component } from 'react';
import './Nav.css';
import axios from 'axios';

class Nav extends Component {
    //state - renders the component dynamically and interactively. 
    state = {
        quotes: [0],

    }
    intervalID;  // time interval Id used
    //Helps to fetch the external API and helps to update the page every 5secs.
    componentDidMount = () => {
        this.getquotes();
    }

    //helps to tidy up ComponentDidMount()
    componentWillUnmount() {

        clearTimeout(this.intervalID);
    }
    getquotes = () => {
        console.log("Quotes");
        //axios is a promise based HTTP client for the browser and Node.js. Client-Server arcitecture.
        axios.get('https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=f2e7542b10d841fabcb3a29e68bdca6c')
            .then(
                res => {
                    console.log(res.data.articles);
                    this.setState({ quotes: this.state.quotes.concat(res.data.articles).splice(1, 5) });   //1 to 5 is the no. of articles from the API
                    this.intervalID = setTimeout(this.getquotes.bind(this), 5000);   //the time intervals - 5 seconds div updates with help of ComponentDidMount()
                }
            )

    }


    render() {
        return (
            <div className="Nav">
                <h1>News...</h1>
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

