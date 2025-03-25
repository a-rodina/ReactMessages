export  interface IUser {
    id: number,
    name: string,
    username: string,
    email: string,
    address: IAddress,
    phone: string,
    website: string,
    company: {
        name: string,
        catchPhrase: string,
        bs: string
    }
}

export  interface IAddress {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
        lat: string,
        lng: string
    }
}

export  interface IPost {
    userId: number,
    id: number,
    title: string,
    body: string
}

export  interface IComment {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string
}

export  interface IUserList {
    users: IUser[],
    handleShowPosts: (id: number) => void,
    currentUserId: number | null;
}


