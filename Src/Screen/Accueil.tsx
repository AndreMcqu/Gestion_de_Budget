import { ActivityIndicator, FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Button from '../Components/Button'
import DATA from '../Doc/data.json'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootParamList } from '../Components/types';
import UserPicker from '../Components/UserPicker';
import Balance from '../Components/Balance';
import InfoExpence from './info/InfoExpence';
import { useEffect } from 'react';
import { realm, GlobalSchema, schemadata } from '../Components/Realm';
import { User } from 'realm';
import moment from 'moment';
import Card from '../Components/Card';




const Accueil = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootParamList>>();
  const [user, setUser] = React.useState(DATA[0].user);
  const list: string[] = DATA.map(item => item.user)
  const Profile = DATA.filter(item => item.user === user);
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  const [updateUser, setUpdateUser] = useState<Realm.Results<schemadata & Realm.Object>>();

  useEffect(() => {
    realm
      .then(realm => {
        const TheOne = realm.objects<schemadata>('Global');
        const Allinfo = TheOne.filtered("user == 'Mayer Franklin'");
        console.log(TheOne);
        /** Récupérer les informations propres du premier user sélectionné  **/
     /*  Nom */
      const userName1 = Allinfo.filtered("user == 'Mayer Franklin'")[0].user;
      console.log(`userName1: ${userName1}`);
      /*  Incomes Amount */
      const userIncomesAmount = Allinfo.filtered("user == 'Mayer Franklin'")[0].expenses?.amount;
      console.log(`userIncomes: ${userIncomesAmount}`);
      /*  Incomes Amount */
      const userIncomesDate = Allinfo.filtered("user == 'Mayer Franklin'")[0].expenses?.date;
      console.log(`userIncomes: ${userIncomesDate}`);
        setUpdateUser(Allinfo);
        setIsLoading(false);
      })
  }, []);

  return (
    <View>
      <UserPicker values={list} selectedValue={user} onValueChange={setUser} />
      <Balance invalues={Profile[0].incomes} outvalues={Profile[0].expenses} />
      <Text style={styles.text}>Movements :</Text>
      <View>
      {isLoading ? <ActivityIndicator /> : <FlatList
            data={updateUser}
            renderItem={({ item }) =>
            {
              if(item.expenses !== undefined && item.expenses !== null){
                return (<Card type="expence" date={item.expenses.date} amount={item.expenses.amount} category={item.expenses.category} comments={item.expenses.comments} />)
              }else{
                return <></>
              }
            }
                
            } />}
        {isLoading ? <ActivityIndicator /> : <FlatList
            data={updateUser}
            renderItem={({ item }) =>
            {
              if(item.incomes !== undefined && item.incomes !== null){
                return (<Card type="income" date={item.incomes.date} amount={item.incomes.amount} category={item.incomes.category} comments={item.incomes.comments} />)
              }else{
                return <></>
              }
            }
                
            } />}
      </View>
      <Button title="Depense" type="primary" onPress={() => navigation.navigate('Depenses')} />
      <Button title="Revenu" type="primary" onPress={() => navigation.navigate('Revenus')} />
      <View>
        <InfoExpence  inArray={Profile[0].incomes} outArray={Profile[0].expenses}/>
      </View>
    </View>
  )
}

export default Accueil

const styles = StyleSheet.create({
  text: {
    color: "black",

  }
})
