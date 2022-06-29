export type RootParamList = {
    Accueil: undefined;
    Compte: undefined;
    Statistiques: undefined;
    Depenses: undefined;
    Revenus: undefined;
    nav: undefined;
};

export type data = {
    _id: string,
    user: string,
    incomes?: incomesprops[],
    expenses?: expensesprops[],
}

export type incomesprops = {
    date: string ,
    amount: string,
    category: string,
    comments: string,
    _id_income: string,
}

export type expensesprops = {
    date: string ,
    amount: string,
    category: string,
    comments: string,
    _id_expense: string,
}
