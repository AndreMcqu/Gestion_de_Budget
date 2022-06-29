import React, { useEffect, useState } from 'react'
import { View, Text } from "react-native";
import Realm, { open } from "realm";
import Revenus from '../Screen/Second/Revenus';


export type schemaincomes = {
  date:string,
  amount:string,
  category: string,
  comments: string,
  _id_income: string,
}

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

export type schemaexpenses = {
  date:string,
  amount:string,
  category: string,
  comments: string,
  _id_expense: string,
}

export const ExpenseSchema = {
  name: "Expense",
  embedded: true,
  properties: {
    date: "string?",
    amount: "string?",
    category: "string?",
    comments: "string?",
    _id_expense: "string?",
  },
};

export type schemadata ={
  _id: string,
  user: string,
  incomes?: schemaincomes,
  expenses? : schemaexpenses,
}

export const GlobalSchema = {
  name: "Global",
  primaryKey: "_id",
  properties: {
    _id: "string",
    user: "string",
    incomes: "Revenu",
    expenses: "Expense",
  },
};


export const  realm = Realm.open({
  path: "myrealm",
  schema: [GlobalSchema, ExpenseSchema, RevenuSchema],
  deleteRealmIfMigrationNeeded: true,
});

// const Expense1 = {
//   date: "06/06/2026",
//   amount: "1800€",
//   category: "Santé",
//   comments: "hello world",
//   _id_income: "25151616516",
// }
// const Revenu1 = {
//   date: "16/16/2016",
//   amount: "2600€",
//   category: "toto",
//   comments: "goodbye world",
//   _id_income: "25151616516",
// }


// export const RealmExpenseDB = () => {
//   useEffect(() => {
//     const id = new ObjectId();
//     Realm.open({
//       path: "myRealm",
//       schema: [GlobalSchema, ExpenseSchema, RevenuSchema],
//     }).then((Entey1) => {
//       Entey1.write(() => {
//         Entey1.create("Global", {
//           _id: id,
//           user: "Dave",
//           expenses: [Expense1],
//         });
//         console.log(Expense1);
//       })
//     }
//     )
//   }, [])
//   return (
//     <View>
//       <Text>hello</Text>
//     </View>
//   )
// }





// export const RealmIncomesDB = () => {
//   const [realm, setRealm] = useState<Realm | null>(null);
//   useEffect(() => {
//     const id = new ObjectId();
//     Realm.open({
//       path: "myRealm",
//       schema: [GlobalSchema, ExpenseSchema, RevenuSchema],
//     }).then((Entey1) => {
//       Entey1.write(() => {
//         Entey1.create("Global", {
//           _id: id,
//           user: "Dave",
//           incomes: [Revenu1],
//         });
//         console.log(RealmIncomesDB);
//       })
//     }
//     )
//   }, [])
//   return (
//     <View>
//       <Text>hello</Text>
//     </View>
//   )
// }

// export const ShowStuff = () => {
// const Globals = Realm.objects(Global)
//   return()}


    



// export const RealmProvider = ({children, config}: props) => {
//   const [realm, setRealm] = useState<Realm | null>(null);
//   useEffect(() => {
//     const openRealm = new Realm.open(config);
//     setRealm(openRealm);
//     return () => {
//       realm.close();
//     };
//   },[config]);
//   if (realm == null) {
//     return null;
//   }
//   return (
//     <RealmContext.Provider value={realm}>{children}</RealmContext.Provider>
//   );
// };

