

 import React from "react"
 import { Pressable, StyleSheet, Text } from "react-native"

 type Props = {
     title: string,
     type: "primary" | "secondary",
     onPress: () => void
 }
 
 const Button = ({ title, type, onPress }: Props) => {
     const { buttonStyle, textStyle } = styles
     return (
         <Pressable onPress={onPress} style={[buttonStyle, type === "primary" ? styles.primary : styles.secondary]}>
             <Text style={[textStyle, type === "primary" ? styles.primaryText : styles.secondaryText]}>{title}</Text>
         </Pressable>
     )
 }
 
 const styles = StyleSheet.create({
     buttonStyle: {
         padding: 10,        
         marginTop: 10,
     },
     textStyle: {
         alignSelf: "center",
         fontSize: 20,
     },
     primary: {
         backgroundColor: "#33058d",
     },
     primaryText: {
         color: "#fff",
     },
     secondary: {
         backgroundColor: "#fff",
         borderWidth: 1,
         borderColor: "#33058d",
     },
     secondaryText: {
         color: "#33058d",
     },
 })
 
 export default Button