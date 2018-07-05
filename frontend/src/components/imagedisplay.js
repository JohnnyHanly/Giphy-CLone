import React from 'react';
class ImageDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasLoaded: false
        }
    }
    
    
    render() {
        return (
            <div>
                 
                   <img src={this.props.url} id="gif" className="img-fluid"  />:
                           

            </div>
        )
    }
}

export default ImageDisplay;