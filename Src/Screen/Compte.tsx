import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Card from '../Components/Card';
import DATA from '../Doc/data.json'
import { SafeAreaView } from 'react-native-safe-area-context';
import { AllStyles } from '../../Styles/AllStyles';
import { incomes, expenses } from '../Components/types';
import moment from 'moment';
import UserPicker from '../Components/UserPicker';
import Balance from '../Components/Balance';
import RealmExpenseDB from '../Components/Realm';




export interface Cardprops {
  date: string;
  amount: string;
  category: string;
  comments: string;
  type: string;
};


const Compte = () => {
  const converDate = (date: string): string => moment(date).format("DD/MM/YYYY");
  const [user, setUser] = React.useState(DATA[0].user);
  const list : string[] = DATA.map(item => item.user)
  const Profile = DATA.filter(item => item.user === user );
  // const User = DATA.filter(users => {
  //   return users._id === '18c79361-d05f-437b-9909-685db8d4910a'
  // });
console.log(Profile)
  return (
    <SafeAreaView style={AllStyles.container}>
      <Balance invalues={Profile[0].incomes} outvalues={Profile[0].expenses}/>
      <UserPicker values={list} selectedValue={user} onValueChange={setUser}/>
      <FlatList
        data={Profile[0].incomes}
        keyExtractor={(item: incomes) => item._id_income}
        renderItem={({ item }) =>
          <Card type="income" date={converDate(item.date)} amount={item.amount} category={item.category} comments={item.comments} />
        } />
      <FlatList
        data={Profile[0].expenses}
        keyExtractor={(item: expenses) => item._id_expense}
        renderItem={({ item }) =>
          <Card type="expense" date={converDate(item.date)} amount={item.amount} category={item.category} comments={item.comments} />
        } />
        <RealmExpenseDB/>
    </SafeAreaView>
    
  );
}

export default Compte

const styles = StyleSheet.create({})