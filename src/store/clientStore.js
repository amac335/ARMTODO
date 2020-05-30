import { writable } from 'svelte/store'

export const clientList = writable(
    [
        {
            name: "Personal",
            defaultBillable: false
        },
        {
            name: "TMG",
            defaultBillable: false
        },
        {
            name: "Sandra Franklin",
            defaultBillable: false
        },
    ]
)