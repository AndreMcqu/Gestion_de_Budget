import React, { useEffect } from 'react'
import { View, Text } from "react-native";
import Realm from "realm";
import {ObjectId} from 'bson'




const RevenuSchema = {
  name: "Revenu",
  embedded: true,
  properties: {
    date: "string?",
    amount: "string?",
    category: "string?",
    comments: "string?",
    _id_income: "string?",
  },
};

const ExpenseSchema = {
  name: "Expense",
  embedded: true,
  properties: {
    date: "string?",
    amount: "string?",
    category: "string?",
    comments: "string?",
    _id_income: "string?",
  },
};


const GlobalSchema = {
  name: "Global",
  primaryKey: "_id",
  properties: {
    _id: "objectId",
    user: "string",
    incomes: { type:"list", objectType: "Revenu" },
    expenses: { type: "list", objectType: "Expense" },
  },
};


const Expense1 = {
  date: "06/06/2026",
  amount: "1800€",
  category: "Santé",
  comments: "hello world",
  _id_income: "25151616516",
}



export const RealmExpenseDB = () => {
  useEffect(() =>{
    const id = new ObjectId();
  Realm.open({
    path: "myRealm",
    schema: [GlobalSchema, ExpenseSchema, RevenuSchema],
  }).then((Entey1) => {
    Entey1.write(() => {
      Entey1.create("Global", {
        _id: id,
        user: "Dave",
        expenses:[Expense1],
      });
      console.log({Expense1});
    })
  }
)},[])
  return(
    <View>
      <Text>hello</Text>
    </View>
  )
}


export const RealmincomeDB = () => {
  useEffect(() =>{
    const id = new ObjectId();
  Realm.open({
    path: "myRealm",
    schema: [GlobalSchema, ExpenseSchema, RevenuSchema],
  }).then((Entey1) => {
    Entey1.write(() => {
      Entey1.create("Global", {
        _id: id,
        user: "Dave",
        expenses:[Expense1],
      });
      console.log({Expense1});
    })
  }
)},[])
  return(
    <View>
      <Text>hello</Text>
    </View>
  )
}

