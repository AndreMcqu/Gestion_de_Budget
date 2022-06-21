import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AllStyles } from '../../Styles/AllStyles'
import { Cardprops } from '../Screen/Compte'

const Card = ({ date, amount, category, comments,type }: Cardprops) => {
    return (
        <View style={styles.cardContainer}>
            <View style={styles.flatbody}>
                <View style={{flexDirection:'row'}}>
                    <Text style={styles.flattitle}>{date.toLocaleString()}</Text>
                    <Text style={AllStyles.flattext}>{category}</Text>
                </View>
                <Text numberOfLines={2} style={styles.flattext}>{comments}</Text>
            </View>
            <View style={styles.flatamount}>
                <Text style={[AllStyles.flattext, type === 'income' ? styles.income : styles.expense ]}>{amount}</Text>
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    cardContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    flatbody: {
        flex:8,
        justifyContent: 'space-between',

    },
    flattitle:{
        fontWeight: 'bold',
        fontSize: 18,
        
    },
    flattext:{
        fontSize: 15,
    },
    flatamount:{
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',

    },
    income:{
        color: 'green'
    },
    expense:{
        color : 'red'
    }
})


export default Card;