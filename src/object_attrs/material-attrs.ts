export interface MaterialFieldAttrs {
    name: string,
    factoryId: string,
    quantity: number,
    cost: number
}

export interface MaterialDBAttrs extends MaterialFieldAttrs {
    id: number
}