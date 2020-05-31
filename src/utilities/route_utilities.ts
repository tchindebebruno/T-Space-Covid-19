import { Role } from "constants/roles"

export const parseRoles = (roles: Role[]) =>roles.map(role => role.name)

export const sortRoles = (roles: Role[]) =>roles.sort((roleA, roleB) => roleA.priority > roleB.priority ? 0:1)

