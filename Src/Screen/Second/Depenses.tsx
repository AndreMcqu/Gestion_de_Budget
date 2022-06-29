import React, { useEffect, useRef, useState } from 'react';
import { Button, FlatList, PermissionsAndroid, Pressable, StyleSheet, Text, TextInput, TouchableNativeFeedbackBase, TouchableOpacity, View } from 'react-native';
import { Form, Formik } from 'formik';
import { AllStyles } from '../../../Styles/AllStyles'
import { Picker } from '@react-native-picker/picker';
import * as yup from 'yup';
import DateTimePicker from '@react-native-community/datetimepicker';
import DatePicker from '../../Components/DatePicker';
import { realm, schemadata, schemaexpenses } from '../../Components/Realm';
import { ObjectId } from 'bson'
import DATA from '../../Doc/data.json'
import { useNavigation } from '@react-navigation/native';
import { RootParamList,} from '../../Components/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import UserPicker from '../../Components/UserPicker';
import { User } from 'realm';
import moment from 'moment';
import Card from '../../Components/Card';

const Depenses = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootParamList>>();
  const [user, setUser] = React.useState(DATA[0].user);
  const list: string[] = DATA.map(item => item.user)
  const Profile = DATA.filter(item => item.user === user);
  const id = new ObjectId();
  const idExpence = new ObjectId();
  
  const Validations = yup.object({
    amount: yup.string()
      .required(),
    category: yup.string()
      .required(),
    date: yup.string()
  })

  // const Account = () => {
  //   const [newExpence, setNewExpence] = useState(undefined);
  
  //   useEffect(() => {
  //     const Expencetrans = () =>
  //       realm
  //         .then(realm => {
  //           realm.write(() => {
  //           const AllExpence = realm.objects<any>("Global")[0].expense;
  //           return AllExpence
  //             .concat(...Profile[0].expenses)
  //           });
  //         })
  //         .catch(err => {
  //           console.log(err);
  //         });
  
  //     Expencetrans().then(newExp => {
  //       setNewExpence(newExp);
  //     });
  
  //   }, [newExpence]);
  // }


  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ amount: '', category: '', commenatire: '', date: '' }}
        validationSchema={Validations}
        onSubmit={(values) => {
          realm
            .then(realm => {
              realm.write(() => {
                realm.create<schemadata>("Global", {
                  _id: id.toString(),
                  user: Profile[0].user,
                  expenses: {
                    date: values.date,
                    amount: values.amount,
                    category: values.category,
                    comments: values.commenatire,
                    _id_expense: idExpence.toString(),
                  }
                })
                // const AllUsers = realm.objects("Global")[0].expenses;
                // console.log(AllUsers);
                // const AllUser = realm.objects("Global");
                // console.log(AllUser.length);
              })
            })
            .catch(err => {
              console.log(err);
            })
        ;navigation.navigate('Accueil')}}>
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <View style={styles.container}>
            <Text style={AllStyles.title}>Last Name</Text>
            <UserPicker values={list} selectedValue={user} onValueChange={setUser} />
            {/* <TextInput
              style={AllStyles.imput}
              placeholder='Last Name'
              onChangeText={handleChange('Last_Name')}
              onBlur={handleBlur('Last_Name')}
              value={values.Last_Name} />
            <Text>{touched.Last_Name && errors.Last_Name}</Text>
            <Text style={AllStyles.title}>First Name</Text>
            <TextInput
              style={AllStyles.imput}
              placeholder='First Name'
              onChangeText={handleChange('First_Name')}
              onBlur={handleBlur('First_Name')}
              value={values.First_Name} />
            <Text>{touched.First_Name && errors.First_Name}</Text> */}
            <Text style={AllStyles.title}>Amount</Text>
            <TextInput
              style={AllStyles.imput}
              placeholder='Amount'
              onChangeText={handleChange('amount')}
              onBlur={handleBlur('amount')}
              value={values.amount}
              keyboardType='numeric' />
            <Text>{touched.amount && errors.amount}</Text>
            <Text style={AllStyles.title}>Date</Text>
            <DatePicker date={values.date} onChange={handleChange('date')} />
            <Text style={AllStyles.title}>Category</Text>
            <View style={AllStyles.imput}>
              <Picker
                selectedValue={values.category}
                onValueChange={handleChange('category')}>
                <Picker.Item label="Category " value="" />
                <Picker.Item label="Alimentaires" value="Alimentaires" />
                <Picker.Item label="Factures" value="Factures" />
                <Picker.Item label="Transport" value="Transport" />
                <Picker.Item label="Logement" value="Logement" />
                <Picker.Item label="Santé" value="Santé" />
                <Picker.Item label="Divertissement" value="Divertissement" />
                <Picker.Item label="Vacances" value="Vacances" />
                <Picker.Item label="Shopping" value="Shopping" />
                <Picker.Item label="Autres" value="Autres" />
              </Picker>
            </View>
            <Text style={AllStyles.title}>Commenatire</Text>
            <TextInput
              style={AllStyles.imput}
              multiline
              placeholder='Commenatire'
              onChangeText={handleChange('commenatire')}
              onBlur={handleBlur('commenatire')}
              value={values.commenatire} />
            <Pressable style={AllStyles.button} onPress={handleSubmit}>
              <Text>Submit</Text>
            </Pressable>
          </View>
        )}
      </Formik>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    paddingLeft: 15,
  }
})


export default Depenses;

//check if the user has already created
// const UserCheck = name == ${Global.user.name};
// let userResults = realm.objects("Global").filtered(UserCheck);

// if(!userResults.length) {}




