export interface TodoList{
    id:number,
    title: string ,
    date:string,
    persons: []
}

export interface PersonInfo {
    id: number,
    name: string,
    number: string,
    image: string
}

export interface ChartData{
    id:number,
    day:string,
    deposit: string ,
    withdrawal: string 
}

export interface EmailData{
    id:number,
    name:string,
    subject: string ,
    date: string,
    image: string
}

export interface TodoItem{
    id:number,
    ntitleame:string,
    persons: PersonInfo[] ,
    date: string,
    icon: string
}
