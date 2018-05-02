import React, {Component} from 'react';
import ReactStars from 'react-stars'

class Result extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = { places: null };
    }

    componentDidMount() {
        this.fetchSuggestions();
    }

    handleClick(event){
      event.preventDefault();
      window.location.reload(true);
    }

    fetchSuggestions = () => {
        navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
            const { arts } = this.props;
            // const lat = 37.773972;
            // const lon = -122.431297;

            const lat = latitude;
            const lon = longitude;
            const url = `http://localhost:9000/?term=${arts[0].title}&latitude=${lat}&longitude=${lon}`.replace(/ /g, '%20');
            console.log(url);
            fetch(url)
                .then(res => res.json())
                .then(res => this.setState({ places: res.businesses }));
        });
    }

    renderPlaces = () => {
        let msg = 'Sorry, couldn\'t find any place near your location';
        if (this.state.places === null) {
            msg = 'Loading...';
        } else if (this.state.places.length) {
            msg = 'Here are some suggestions';
        }
        return (
            <div className="row">
                <h3>{msg}</h3>
                {
                    this.state.places !== null && this.state.places.map((place) => {
                        return (
                            <div className="col-sm-12 well">
                                <p className="buss-name">{place.name}</p>
                                <div className="stars">
                                    <ReactStars
                                        count={place.rating}
                                        edit={false}
                                        size={24}
                                        color1={'#ffd700'}
                                    />
                                </div>
                                <p>{place.phone}</p>
                                <p>{place.location.display_address.join(', ')}</p>
                            </div>
                        )
                    })
                }
            </div>
        );
    }

    render() {
        let points,message;

        let arts = this.props.arts;
        arts.sort(function(a,b){
            if(a.score > b.score) return -1;
            if(a.score < b.score) return 1;
            return 0;
        });

        return (
            <div>
                <div className="well">
                    <p>We have selected the perfect Marital Art based on your answers.</p>
                    <h1>{arts[0].title} - with a score of {arts[0].score}</h1>
                    <hr/>
                    <a href="#" onClick={this.handleClick}>Try again for another decision-making!!!</a>
                </div>
                {this.renderPlaces()}
            </div>
        )
    }
}

export default Result;
