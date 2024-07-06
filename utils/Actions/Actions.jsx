'use server'

import { cookies } from "next/headers"

export const getUsername = async () => {
    const cookieStore = cookies();
    let username = cookieStore.get('name')?.value;

    return username;
}