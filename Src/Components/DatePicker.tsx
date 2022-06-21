import moment from "moment";
import React, { useState } from "react";
import { Button, TextInput, View } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { AllStyles } from "../../Styles/AllStyles";

interface DateTimePicker {
    onChange: any;
    date: any;
}

const DatePicker: React.FC<DateTimePicker> = ({ date, onChange }) => {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date: Date) => {
        hideDatePicker();
        onChange(moment(date).format("L"));
        console.log("date")
    };

    return (
        <View>
            <TextInput 
                style={AllStyles.imput}
                onPressIn={showDatePicker}
                value={date}
                placeholder="Date" />
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
                onChange={() => onChange}
            />
        </View>
    );
};

export default DatePicker;