import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Revenus from '../Screen/Second/Revenus';
import { incomes, expenses } from './types';




export type Balanceprops = {
    invalues: any;
    outvalues: any;
}

const Balance = ({ invalues, outvalues }: Balanceprops) => {
    console.log(invalues)
    // let revenu = values.amount
    // console.log(revenu)
    // let expense = values.expenses
    // console.log(expense)
    let openaccount = 0
    const increaseAmount = invalues.reduce((pV: number, cV: incomes) => pV + parseFloat(cV.amount.replace(/[€,]/g, '')), openaccount);
    const decreaseAmount = outvalues.reduce((pV: number, cV: expenses) => pV + parseFloat(cV.amount.replace(/[€,]/g, '')), openaccount);
    console.log(increaseAmount)
    console.log(decreaseAmount)

    const calculate = increaseAmount - decreaseAmount;
    console.log(typeof (calculate))
    const Format = calculate.toFixed(2);
    const FormatRevenu = increaseAmount.toFixed(2);
    const FormatExpenses = decreaseAmount.toFixed(2);


    return (
        <View>
            <View style={{ alignItems: 'center' }}>
                <Text style={styles.title}>Balance</Text>
                <Text style={styles.title}>{Format} €</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                <View>
                    <Text style={styles.title}>Revenu</Text>
                    <Text style={styles.inamount}>{FormatRevenu} €</Text>
                </View>
                <View>
                    <Text style={styles.title}>Expenses</Text>
                    <Text style={styles.outamount}>- {FormatExpenses} €</Text>
                </View>
            </View>
        </View>
    )
};

export default Balance

const styles = StyleSheet.create({
    title:{
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold'
    },
    inamount: {
        fontSize: 15,
        color: 'green'
    },
    outamount:{
        fontSize: 15,
        color: 'red'
    },
})





