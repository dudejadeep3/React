import React,{Component} from 'react';

class VideoListItem extends Component {
    selectedVideo(){
        console.log(this.props)
        this.props.selectVideo(this.props.video);
    }

    render() {
        const url = this.props.video.snippet.thumbnails.default.url;
        return (
            <li className='video-list-item list-group-item media' onClick={this.selectedVideo.bind(this)}>
                <div className='media-left'>
                    <img className='media-object' src={url} alt='video' />
                </div>
                <div className='media-body'>
                    <div className='media-heading'>
                        {this.props.video.snippet.title}
                    </div>
                </div>
            </li>
        );
    }
}
/*const VideoListItem = ({ video , selectVideo}) => {
    const url = video.snippet.thumbnails.default.url;
    return (
        <li className='video-list-item list-group-item media' onClick={this.selecteVide}>
            <div className='media-left'>
                <img className='media-object' src={url} alt='video' />
            </div>
            <div className='media-body'>
                <div className='media-heading'>
                    {video.snippet.title}
                </div>
            </div>
        </li>
    );
}
*/
export default VideoListItem;