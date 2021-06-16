export interface MaterialFieldAttrs {
    name: string,
    factoryId: string,
    quantity: number,
    price: number
}

export interface MaterialDBAttrs extends MaterialFieldAttrs {
    id: number
}