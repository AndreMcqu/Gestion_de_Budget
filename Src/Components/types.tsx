export type RootParamList = {
    Accueil: undefined;
    Compte: undefined;
    Statistiques: undefined;
    Depenses: undefined;
    Revenus: undefined;
    nav: undefined;
};

export type data ={
    _id: string,
    user: string,
    incomes: incomes[],
    expenses : expenses[],
}

export type incomes = {
    date:string,
    amount:string,
    category: string,
    comments: string,
    _id_income: string,
}

export type expenses = {
    date:string,
    amount:string,
    category: string,
    comments: string,
    _id_expense: string,
}