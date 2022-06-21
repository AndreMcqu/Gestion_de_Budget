import { StyleSheet, } from 'react-native'


export const AllStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imput: {
        justifyContent: 'space-around',
        width: '90%',
        borderWidth: 1,
        borderColor: 'blue',
        borderRadius: 6,
        padding: 10,
        fontSize: 18,
        height: 60,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',

        paddingLeft: 10,
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',

        borderColor: 'red',
        borderWidth: 3,
        backgroundColor: 'red',
        borderRadius: 15,

        height: 40,
        width: "90%",

        paddingBottom: 10
    },
    cardContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    flattext: {
        fontSize : 10,
    },
})
