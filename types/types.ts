export type IContact = {
    id: number,
    name: string,
    email: string,
    address: IAddress,
}

export type IAddress = {
    street: string,
    suite: string,
    city: string,
    zipcode: number,
}

export type IPosts = {
    id: number,
    title: string,
    body: string,
}

export type ISocials = {
    id: number,
    icon: string,
    path: string,
}