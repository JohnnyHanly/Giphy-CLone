import React from 'react';
import axios from 'axios';
import img from './../assets/spin.gif';
import ImageDisplay from './imagedisplay'
class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
            currentCategory: "trending",
            gifs: []
        }
    }
    componentDidMount() {

        axios.get("http://localhost:5001/giphy/trending")
            .then((response) => {
                this.setState({ gifs: response.data.message.data })
            }) 
    }

    searchGifs() {
        let search = this.state.search;

        axios.get("http://localhost:5001/giphy/search?param1=" + this.state.search)
            .then((response) => {

                this.setState({
                    currentCategory: search,
                    gifs: response.data.message.data

                })


            })
    }

    render() {
        return (
            <div className="container">
                <h1 id="`title">GIPHY</h1>
                <div className="content">
                    <div className="inputContainer row">
                        <input id="input" type="text" placeholder="Search for GIFS  and stickers" value={this.state.search} onChange={(event) => { this.setState({ search: event.target.value }) }} />
                        <button onClick={this.searchGifs.bind(this)} id="inputButton" className="btn button btn-primary"> Search </button>
                    </div>

                    <div id="categoryDisplay">

                        <h2 className="categoryText"> {this.state.currentCategory} gifs </h2>

                    </div>
                    <div className="gifContainer">
                        <div className="row">
                            {this.state.gifs.map((gifs, index) => (
                                <div className="col-md-3" key={gifs.id}>

                                    <ImageDisplay width={400} height={400}url={gifs.images.original.url} />

                                </div>
                            ))}

                        </div>



                    </div>







                </div>





            </div>





        )
    }
}

export default Container;