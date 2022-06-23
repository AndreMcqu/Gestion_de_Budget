import React, { useRef, useState } from 'react';
import { Button, Pressable, StyleSheet, Text, TextInput, TouchableNativeFeedbackBase, TouchableOpacity, View } from 'react-native';
import { Form, Formik } from 'formik';
import { AllStyles } from '../../../Styles/AllStyles'
import { Picker } from '@react-native-picker/picker';
import * as yup from 'yup';
import DateTimePicker from '@react-native-community/datetimepicker';
import DatePicker from '../../Components/DatePicker';


const Validations = yup.object({
  Last_Name: yup.string()
    .required(),
    First_Name: yup.string()
    .required(),
    amount: yup.string()
    .required(),
  category: yup.string()
    .required(),
    date: yup.string() 
})

const Depenses = () => {

  return (
    <View style={styles.container}>
    <Formik
      initialValues={{ Last_Name: '', First_Name: '', amount: '', category: '', commenatire: '', date: '' }}
      validationSchema={Validations}
      onSubmit={values => console.log(values)}>
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
        <View style={styles.container}>
          <Text style={AllStyles.title}>Last Name</Text>
          <TextInput
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
            <Text>{touched.First_Name && errors.First_Name}</Text>
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