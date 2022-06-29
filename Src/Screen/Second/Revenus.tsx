import React from 'react';
import { Button, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { Formik, } from 'formik';
import { Picker } from '@react-native-picker/picker';
import { AllStyles } from '../../../Styles/AllStyles'
import * as yup from 'yup';
import DatePicker from '../../Components/DatePicker';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootParamList } from '../../Components/types';
import { Screen } from 'react-native-screens';




const Revenus = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootParamList>>();

  const Validations = yup.object({
    nom: yup.string()
      .required(),
    prenom: yup.string()
      .required(),
    montant: yup.string()
      .required(),
    categorie: yup.string()
      .required(),
    date: yup.string()
  })

  return (

    <Formik
      validationSchema={Validations}
      initialValues={{ nom: '', premon: '', montant: '', categorie: '', commenatire: '', date: '' }}
      onSubmit={(values) => { navigation.navigate('Accueil') }}>
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
        <View style={styles.container}>
          <Text style={AllStyles.title}>Nom</Text>
          <TextInput
            style={AllStyles.imput}
            placeholder='Nom'
            onChangeText={handleChange('nom')}
            onBlur={handleBlur('Nom')}
            value={values.nom} />
          <Text>{touched.nom && errors.nom}</Text>
          <Text style={AllStyles.title}>Premon</Text>
          <TextInput
            style={AllStyles.imput}
            placeholder='Premon'
            onChangeText={handleChange('premon')}
            onBlur={handleBlur('premon')}
            value={values.premon} />
          <Text>{touched.premon && errors.premon}</Text>
          <Text style={AllStyles.title}>Montant</Text>
          <TextInput
            style={AllStyles.imput}
            placeholder='Montant'
            onChangeText={handleChange('montant')}
            onBlur={handleBlur('montant')}
            value={values.montant} />
          <Text>{touched.montant && errors.montant}</Text>
          <Text style={AllStyles.title}>Nom</Text>
          <DatePicker date={values.date} onChange={handleChange('date')} />
          <Text style={AllStyles.title}>Categorie</Text>
          <View style={AllStyles.imput}>
            <Picker
              selectedValue={values.categorie}
              onValueChange={handleChange('categorie')}>
              <Picker.Item label="Salaire et assimilé" value="Salaire et assimilé" />
              <Picker.Item label="Revenu financier" value="Revenu financier" />
              <Picker.Item label="Rente" value="Rente" />
              <Picker.Item label="Pension alimentaire" value="Pension alimentaire" />
              <Picker.Item label="Allocation chômage" value="Allocation chômage" />
              <Picker.Item label="Prestations sociales" value="Prestations sociales" />
              <Picker.Item label="Revenu foncier" value="Revenu foncier" />
              <Picker.Item label="Revenu exceptionnel" value="Revenu exceptionnel" />
              <Picker.Item label="Autre revenu" value="Autre revenu" />
            </Picker>
          </View>
          <Text>{touched.categorie && errors.categorie}</Text>
          <Text style={AllStyles.title}>Commenatire</Text>
          <TextInput
            style={AllStyles.imput}
            multiline
            placeholder='Commenatire'
            onChangeText={handleChange('commenatire')}
            onBlur={handleBlur('commenatire')}
            value={values.commenatire} />
          <Pressable style={AllStyles.button} onPress={handleSubmit} >
            <Text>Submit</Text>
          </Pressable>
        </View>
      )}
    </Formik>

  );
}


const styles = StyleSheet.create({
  container: {
    paddingLeft: 15,
  }
})


export default Revenus;