export interface Role {
    name: string
    default_route: string
    priority: number
}

const ROLE_ADMINISTRATOR: Role = {
    name: 'administrator',
    default_route: 'admin',
    priority: 1
}


export {
    ROLE_ADMINISTRATOR,
}