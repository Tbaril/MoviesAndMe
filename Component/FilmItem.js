import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity, Dimensions, Animated } from 'react-native'
import { getImageFromApi } from '../API/TMDBApi'
import FadeIn from '../Animations/FadeIn'

class FilmItem extends React.Component {

	_displayFavoriteImage() {
    	if (this.props.isFilmFavorite) {
      		return (
        		<Image
          			style={styles.favorite_image}
          			source={require('../Images/ic_favorite.png')}
        		/>
      		)
    	}
 	 }

	render(){
		const { film, displayDetailForFilm } = this.props
		return(
			<FadeIn>
				<TouchableOpacity 
				onPress={ () => displayDetailForFilm(film.id)}
				style= {styles.globale}>
					<Image
						style= {styles.image}
						source={{uri: getImageFromApi(film.poster_path)}}
					/>
					<View style= {styles.Content}>
						<View style={styles.Header}>
							{this._displayFavoriteImage()}
							<Text style= {styles.Title}>{film.title}</Text>
							<Text style= {styles.Vote}>{film.vote_average}</Text>
						</View>
						<Text style= {styles.Description} numberOfLines={6}>{film.overview}</Text>
						<Text style= {styles.date}>{film.release_date}</Text>
					</View>
				</TouchableOpacity>
			</FadeIn>
			)
	}
}

const styles = StyleSheet.create({
	globale: {
		height: 190,
		flexDirection: 'row'
	},
	Content: {
		flex: 1,
		margin : 5,
		flexDirection: 'column'
	},
	Header: {
		flex: 3,
		flexDirection: 'row'
	},
	Title: {
		fontWeight: 'bold',
		fontSize: 20,
		flex: 1,
		flexWrap: 'wrap',
		paddingRight: 5
	},
	Vote: {
		fontWeight: 'bold',
		fontSize: 26,
		color: '#666666'
	},
	image: {
		width: 120,
		height:180,
		margin : 5,
		backgroundColor: 'grey'
	},
	Description: {
		flex: 7,
		fontStyle: 'italic',
		color: '#666666'
	},
	date: {
		flex: 1,
		textAlign: 'right',
		fontSize: 14
	},
	favorite_image: {
    width: 25,
    height: 25,
    marginRight: 5
	}
})

export default FilmItem