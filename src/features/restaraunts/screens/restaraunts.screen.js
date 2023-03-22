import React, { useContext } from 'react'
import { SafeAreaView, StatusBar, View, FlatList } from 'react-native'
import { Searchbar } from 'react-native-paper'
import { RestarauntInfo } from '../components/restaraunt-info.components'
import { RestaurantContext } from '../../../services/restaurants/restaurants.context'

export const RestaurantsScreen = () => {
    
    const { isLoading, error, restaurants } = useContext(RestaurantContext);
    return (
        <SafeAreaView className="flex-1" style={{marginTop: StatusBar.currentHeight}}>
            <View className="bg-white p-2">
                <Searchbar placeholder='Search' placeholderTextColor="gray" />
            </View>
            <FlatList 
                data={restaurants}
                renderItem = {() => <RestarauntInfo />}
                keyExtractor = {(item) => item.name}
            />
        </SafeAreaView>
    );
};