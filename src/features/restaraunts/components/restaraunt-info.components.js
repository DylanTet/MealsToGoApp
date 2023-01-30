import React from 'react'
import { View, Text, Image } from 'react-native';
import { SvgXml } from 'react-native-svg'
import star from '../../../../assets/star';
import openIcon from '../../../../assets/openIcon'
import { Card, Title } from 'react-native-paper';

export const RestarauntInfo = ({ restaraunt = {} }) => {
    
    const {
        name = "Buddy V's", 
        icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
        photos = [
            "https://www.venetianlasvegas.com/content/dam/venetian/restaurants/buddy-v/thumb-1_1200x800.jpg",
        ],
        address = "100 random street",
        isOpen = true,
        rating = 4,
        isClosedTemporarily = true,
    } = restaraunt;

    const ratingArray = Array.from(new Array(Math.floor(rating)));

    return(
        <Card className="bg-white rounded-[12px] my-3" elevation={5}>
            <Card.Cover className="bg-white object-contain p-3" source={{uri: photos[0]}}/>
            <Card.Content className="p-5">
                <View className="">
                    <Title className="font-heading text-title">{name}</Title>
                    <View className="flex-row justify-between">
                        <View className="flex-row pt-1">
                            {ratingArray.map(() => (
                                <SvgXml xml={star} width={20} height={20} key={name}/>
                            ))}
                        </View>
                        <View className="flex-row">
                            {isClosedTemporarily && 
                                <Text className="font-body text-red-700 mr-3">CLOSED TEMPORARILY</Text>
                            }
                            {isOpen &&
                                <SvgXml xml={openIcon} width={20} height={20}/>
                            }
                            <Image className="ml-3" style={{ width: 15, height: 15 }} source={{ uri:icon }} />
                        </View>
                    </View>
                    <Text className="font-body text-caption pt-1">{address}</Text>

                </View>
            </Card.Content>
        </Card>
    )
}