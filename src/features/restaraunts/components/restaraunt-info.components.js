import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { colors } from '../../../utils/colors';

export const RestarauntInfo = ({ restaraunt = {} }) => {
    
    const {
        name = "Buddy V's", 
        icon,
        photos = [
            "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
        ],
        address = "100 random street",
        isOpen = true,
        rating = 4,
        isClosed
    } = restaraunt

    return(
        <Card style={styles.card}>
            <Card.Cover source={photos[0]} style={styles.cardCover} />
            <Card.Content style={styles.cardContent}>
                <Title>{name}</Title>
            </Card.Content>
        </Card>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.white,
        borderRadius: 5,
    },
    cardContent: {
        padding: 10,
    },
    cardCover: {
        backgroundColor: colors.white,
        borderRadius: 10,
        padding: 10,
    }
})