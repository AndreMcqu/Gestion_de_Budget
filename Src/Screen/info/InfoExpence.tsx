import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { incomes, expenses } from '../../Components/types';
import DATA from '../../Doc/data.json'
import Card from '../../Components/Card';
import moment from 'moment';

type Arrayprops = {
    inArray: incomes[];
    outArray: expenses[];
}

type GlobalArrayprops = {
    date: string,
    amount: string,
    category: string,
    comments: string,
    _id: string,
}
const InfoExpence = ({ inArray, outArray }: Arrayprops) => {
    const converDate = (date: string): string => moment(date).format("DD/MM/YYYY");
    const GlobalArray: GlobalArrayprops[] = inArray.map((list: incomes) => {
        return (
            {
                date: list.date,
                amount: list.amount,
                category: list.category,
                comments: list.comments,
                _id: list._id_income,
            }
        )
    }).concat(outArray.map((list: expenses) => {
        return (
            {
                date: list.date,
                amount: list.amount,
                category: list.category,
                comments: list.comments,
                _id: list._id_expense,
            }
        )
    }))
    console.log(GlobalArray)

    return (
            <FlatList
        data={GlobalArray.sort(function(a, b){
            const c = new Date(a)
            const d = new Date(b)
            
            return c -d;
        }).slice(5)}
        maxToRenderPerBatch={5}
        renderItem={({ item }) =>
          <Card type="home" date={converDate(item.date)} amount={item.amount} category={item.category} comments={item.comments} />
        } />
    )
}

export default InfoExpence;

const styles = StyleSheet.create({})