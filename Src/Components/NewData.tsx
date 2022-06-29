import { useEffect, useState } from "react"
import { realm } from "./Realm"
import { User } from 'realm';


// export type DBprop = {
//     newData : string[]
// }

// export const Expencetrans = ({newData} : DBprop) => {
//     const [Expence, setExpence] = useState(undefined);

//     useEffect(() => {
//     realm
//     .then(realm => {
//       const AllExpence =realm.objects("Expense")
//       return Profile[0].user.expenses
//       .concant(...Profile[0].user.expenses,...AllExpence )
//     })
//     .catch(err => { 
//       console.log(err);
//     })
//     // const AllExpence = Profile[0].expenses.concat(realm) 
//   },[Expence]);
// }