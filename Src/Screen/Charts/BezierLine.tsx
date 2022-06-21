import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DATA from '../../Doc/data.json'
import {LineChart,} from "react-native-chart-kit";
import { incomes } from '../../Components/types';
import moment from 'moment';

type Dateprops = {
  date: string;
}

const BezierLine = () => {
    const converDate = (date: string): string => moment(date).format("DD/MM/YYYY");
    const chartDate : Date = DATA[0].incomes.map((list: incomes) => {
        return (
            {
                date: list.date,

            }
        )
    })
    console.log(chartDate)
  return (
    <View>
  <Text>Bezier Line Chart</Text>
  <LineChart
    data={{
      labels: [converDate(chartDate)],
      datasets: [
        {
          data: [
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100
          ]
        }
      ]
    }}
    width={Dimensions.get("window").width} // from react-native
    height={220}
    yAxisLabel="$"
    yAxisSuffix="k"
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundColor: "#e26a00",
      backgroundGradientFrom: "#fb8c00",
      backgroundGradientTo: "#ffa726",
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#ffa726"
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
  />
</View>
  )
}

export default BezierLine

const styles = StyleSheet.create({})