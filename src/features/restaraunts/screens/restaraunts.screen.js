import React from 'react'
import { SafeAreaView, StatusBar, View, FlatList } from 'react-native'
import { Searchbar } from 'react-native-paper'
import { RestarauntInfo } from '../components/restaraunt-info.components'

export const RestaurantsScreen = () => (
    
    <SafeAreaView className="flex-1" style={{marginTop: StatusBar.currentHeight}}>
        <View className="bg-white p-2">
            <Searchbar placeholder='Search' placeholderTextColor="gray" />
        </View>
        <FlatList 
            data={[
                {name: 1},
                {name: 2},
                {name: 3},
                {name: 4},
                {name: 5},
                {name: 6},
                {name: 7},
                {name: 8},
                {name: 9},
                {name: 10},
                {name: 11}
            ]}
            renderItem = {() => <RestarauntInfo />}
            keyExtractor = {(item) => item.name}
        />
    </SafeAreaView>
)