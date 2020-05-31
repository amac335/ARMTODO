import { writable, readable } from 'svelte/store'
import { sampleTasks } from './sampleData'
import { statusListDefaults, priorityListDefaults } from './defaultData'
// import clientList from './clientStore'

export const currentScreen = writable('Dashboard')

export const statusList = readable(statusListDefaults)

export const priorityList = readable(priorityListDefaults)

export const fakeTaskList = writable(sampleTasks)