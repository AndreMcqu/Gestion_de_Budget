import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Button from '../Components/Button'
import DATA from '../Doc/data.json'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootParamList } from '../Components/types';
import UserPicker from '../Components/UserPicker';
import Balance from '../Components/Balance';
import InfoExpence from './info/InfoExpence';


const Accueil = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootParamList>>();
  const [user, setUser] = React.useState(DATA[0].user);
  const list: string[] = DATA.map(item => item.user)
  const Profile = DATA.filter(item => item.user === user);

  return (
    <View>
      <UserPicker values={list} selectedValue={user} onValueChange={setUser} />
      <Balance invalues={Profile[0].incomes} outvalues={Profile[0].expenses} />
      <Text style={styles.text}>Movements :</Text>
      <View>
      <InfoExpence inArray={Profile[0].incomes} outArray={Profile[0].expenses} />
      </View>
      <Button title="Depense" type="primary" onPress={() => navigation.navigate('Depenses')} />
      <Button title="Revenu" type="primary" onPress={() => navigation.navigate('Revenus')} />
    </View>
  )
}

export default Accueil

const styles = StyleSheet.create({
  text: {
    color: "black",

  }
})
