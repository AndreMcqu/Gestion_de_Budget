import { Picker } from "@react-native-picker/picker";
import { StyleSheet, Text, View } from 'react-native'
import * as React from 'react'
import DATA from '../Doc/data.json'

interface pickerprops {
    selectedValue: string;
    onValueChange: (selectedValue:string) => void;
    values: string[];
  }

const UserPicker = ({values, selectedValue, onValueChange}:pickerprops) => {
    
    return (
        <View>
            <Picker
            
                selectedValue={selectedValue}
                onValueChange={(itemValue, itemIndex) =>
                    onValueChange(itemValue)}>
                {values.map((element, index) => { 
                    return(<Picker.Item label={values[index]} value={DATA[index].user} key={index} />
                    )
})}

            </Picker>
        </View>
    )
}

export default UserPicker

const styles = StyleSheet.create({})



