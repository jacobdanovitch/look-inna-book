export type TUser = {
    id: string,
    avatar: string,
    email: string,
    name: string
}

type TAuth = any;

export type TAuthorizationView = {
    user: TUser | null,
    auth?: TAuth,
    loading?: boolean | null,
}

export type TUseAuth = {
    useAuth: () => TAuthorizationView
}


/*
export {
    TUser,
    // TAuth,
    TAuthorizationView,
    TUseAuth
}
*/