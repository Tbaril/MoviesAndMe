import React from 'react'
import { StyleSheet, Text } from 'react-native'
import FilmList from './FilmList'
import { connect } from 'react-redux'

class Favorites extends React.Component {

  render() {
    return (
      <FilmList
        style={styles.favorite_container}
        films={this.props.favoritesFilm}
        navigation={this.props.navigation}
        favoriteList={true}
      />
    )
  }
}

const styles = StyleSheet.create({
  favorite_container: {
    flex: 1
  }
})

const mapStateToProps = state => {
  return {
    favoritesFilm: state.favoritesFilm
  }
}

export default connect(mapStateToProps)(Favorites)