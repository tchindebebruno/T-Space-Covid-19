import {
    SettingsPage,
    AdminDashboardPage,
    AdministrationPage,
    GeneralPage,
} from 'pages';
import {
    parseRoles,
} from 'utilities';
import {
    ROLE_ADMINISTRATOR,
} from "constants/roles"

interface Route {
    to?: string;
    title?: string;
    component?: any;
    roles?: string[];
    title_type?: boolean;
    exact?: boolean;
}

type Routes = (url: string, roles: string[]) => Route[]

const getRoutesPerRoles: Routes = (baseRoute = '/dashboard', roles: string[]) => {
    const routes: Route[] = [
        {
            title_type: false,
            to: '/general',
            title: "routes.dashboard",
            roles: parseRoles([
                ROLE_ADMINISTRATOR,
            ]),
            component: GeneralPage,
        }, /* General section */
        {
            exact: true,
            to: '/sudo',
            title: "routes.dashboard",
            component: AdminDashboardPage,
            roles: parseRoles([
                ROLE_ADMINISTRATOR,
            ])
        },
        {
            exact: true,
            to: '/administration',
            title: "routes.administration",
            component: AdministrationPage,
            roles: parseRoles([
            ])
        },/* Ending general section */
        {
            title_type: false,
            title: "routes.settings",
            roles: parseRoles([
                ROLE_ADMINISTRATOR,
            ]),
            component: SettingsPage,
        }, /* Ending settings section */
    ]
    const parsedRoutes = routes.map(route => ({ ...route, to: `${baseRoute}${route.to}` }))

    const filteredRoutesPerRole = parsedRoutes.filter(
        route => roles.some(
            role => route.roles!.includes(role.toLocaleLowerCase())
        )
    )

    return filteredRoutesPerRole
}

export {
    getRoutesPerRoles as entryPageRoutes
}