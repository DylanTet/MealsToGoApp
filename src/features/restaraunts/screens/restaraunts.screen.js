import React from 'react'
import { SafeAreaView, StatusBar, View, StyleSheet } from 'react-native'
import { Searchbar } from 'react-native-paper'
import { RestarauntInfo } from '../components/restaraunt-info.components'
import { colors } from '../../../utils/colors'

export const RestaurantsScreen = () => (
    
    <SafeAreaView style={styles.container}>
        <View style={styles.search}>
            <Searchbar placeholder='Search' placeholderTextColor="gray" />
        </View>
        <View style={styles.list}>
            <RestarauntInfo />
        </View>
    </SafeAreaView>
)


const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight
    },
    list: {
      backgroundColor: colors.blue,
      flex: 1,
      padding: 16,
    },
    search: {
      backgroundColor: colors.white,
      padding: 15,
    }
});