import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

const YOUTUBE_API_KEY = 'AIzaSyAWLqCcfEXUOGjXpjciIQwxX9WcpSqd2aM';


class App extends Component {
  constructor(props) {
    super(props);

    this.state= {
      videos: [],
      selectedVideo: null
    };

    YTSearch({ key: YOUTUBE_API_KEY, term: 'surfboards'}, (videos) => {
      // this.setState({ videos });  ES6 syntactic sugar for this.setState({ videos: videos });
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})} // ES6, no need to write the function separately...
          videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));