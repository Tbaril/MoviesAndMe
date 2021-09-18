import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { Image, StyleSheet } from 'react-native'
import React from 'react'
import Search from '../Component/Search'
import FilmDetail from '../Component/FilmDetail'
import Favorites from '../Component/Favorites'

const SearchStackNavigator = createStackNavigator({
	Search: {
		screen: Search,
		navigationOptions: {
			title: "Rechercher"
		}
	},
	FilmDetail: {
		screen: FilmDetail
	}
})

const FavoritesStackNavigator = createStackNavigator({
  Favorites: {
    screen: Favorites,
    navigationOptions: {
      title: 'Favoris'
    }
  },
  FilmDetail: {
    screen: FilmDetail
  }
})

const MoviesTabNavigator = createBottomTabNavigator ({
	Search: {
		screen: SearchStackNavigator,
		navigationOptions: {
        tabBarIcon: () => {
          return <Image
            source={require('../Images/ic_search.png')}
            style={styles.icon}/>
        }
      }
	},
	Favorites: {
			screen: FavoritesStackNavigator,
	    navigationOptions: {
        tabBarIcon: () => {
          return <Image
            source={require('../Images/ic_favorite.png')}
            style={styles.icon}/>
        }
      }
	}
},
{
	tabBarOptions: {
		activeBackgroundColor: '#DDDDDD',
    inactiveBackgroundColor: '#FFFFFF',
		showLabel: false,
		showIcon: true
	}
})

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30
  }
})

export default createAppContainer(MoviesTabNavigator)