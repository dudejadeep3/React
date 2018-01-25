import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video-list';
import VideoDetail from './components/video-detail';
import _ from 'lodash';


const API_KEY = "AIzaSyDiiQnHQxdmh7RLC1EBa_7w1iupqyIfFgo";

//create the component that will generate some HTML
class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: '',
            searchTerm: ''
        }
        this.searchYouTube.bind(this);
        /*YTSearch({ key: API_KEY, term: 'javascript' }, function (data) {
            this.setState({vidoes:data});
        }.bind(this));*/
        this.searchYouTube();

    }
    selectVideo(video) {
        this.setState({ selectedVideo: video });
    }

    searchYouTube(term){
          YTSearch({ key: API_KEY, term: term }, (videos) => {//makes an asynchronous call
            //this.setState({vidoes:videos});
            this.setState({
                videos: videos,
                selectedVideo:videos[0]
            });//if key and value are same
        });
    }
    render() {
       const videoSearch = _.debounce((term)=>{this.searchYouTube(term)},300);
        return (
            <div>
                <SearchBar searchYoutube={videoSearch}></SearchBar>
                <VideoDetail selectedVideo={this.state.selectedVideo} />
                <VideoList videos={this.state.videos} selectVideo={this.selectVideo.bind(this)}></VideoList>
            </div>
        );
    }
}

//render the component on the page
//(add the generated HTML to the DOM)

ReactDOM.render(<App />, document.querySelector('.root'));