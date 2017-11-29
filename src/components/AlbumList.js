import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {

	componentWillMount() {
		this.state = { albums: [] };
		
		fetch('https://rallycoding.herokuapp.com/api/music_albums')
			.then(response => response.json())
			.then(data => this.setState({ albums: data }));
	}

	renderAlbums() {
		console.log('render album', this.state.albums);
		if (this.state.albums) {
			return this.state.albums.map(album => (
				<AlbumDetail key={album.title} album={album} />
			));
		}
	}

	render() {
		return (
			<ScrollView>
				{this.renderAlbums()}
			</ScrollView>
		);
	}
}

export default AlbumList;
