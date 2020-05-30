import { writable } from 'svelte/store'
import clientList from './clientStore'


export const statusList = writable(
    [
        {
            val: "completed",
            display: "Completed"
        },
        {
            val: "started",
            display: "Started"
        },
        {
            val: "pending",
            display: "Pending"
        },
        {
            val: "ongoing",
            display: "Ongoing"
        },
        {
            val: "archive",
            display: "Archive"
        },
    ]
)

export const priorityList = writable(
    [
        {
            val: 5,
            display: "Priority",
            contextColour: "danger"
        },
        {
            val: 4,
            display: "High",
            contextColour: "warning"
        },
        {
            val: 3,
            display: "Medium",
            contextColour: "info"
        },
        {
            val: 2,
            display: "Medium-Low",
            contextColour: "primary"
        },
        {
            val: 1,
            display: "Low",
            contextColour: "secondary"
        },
    ]
)

export const fakeTaskList = writable(
    [
        {
            id: "db4ab272-202c-472a-94d6-2484e0b66fe8", //UUID
            status: "", // complete, started, pending (waiting), on-going, archive
            title: "T2s",
            startDate: null,
            dueDate: null,
            completeDate: null,
            repeating: false,
            priority: 3, // priority scale 1 - 5 (1 being the lowest & 5 being the highest)
            tags: [],
            client: "TMG Tax Consulting",
            project: "", //
            memo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla maximus velit elit, a posuere leo ornare eget. Phasellus viverra in lacus vitae gravida. Maecenas nec tellus eros. Nam gravida massa id neque iaculis placerat id eget eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque pharetra, lorem quis finibus mollis, magna nisl interdum quam, vel blandit nunc est at libero. Phasellus sodales varius augue vel pulvinar. Cras sit amet aliquet leo, id mollis neque.",
            subTasks: [],
            relatedTasks:[],
            relatedNotes: [],
            billable: true,
            timeline:[]
        },
        {
            id: "69e62cdc-420b-45dc-834a-d7a3c6d1b2b9", 
            status: "", 
            title: "T1s",
            startDate: null,
            dueDate: null,
            completeDate: null,
            repeating: false,
            priority: 3,
            tags: [],
            client: "TMG Tax Consulting",
            project: "",
            memo: "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In sed dolor libero. Aliquam rhoncus in erat id molestie. Etiam elit ante, pulvinar quis lacus sit amet, hendrerit dapibus tellus. Fusce a condimentum ex. Curabitur eget odio viverra, tincidunt libero sit amet, cursus dui. Mauris tincidunt venenatis erat sed mollis. Nam pellentesque elit in augue ultricies, ut imperdiet lorem iaculis.",
            subTasks: [],
            relatedTasks:[],
            relatedNotes: [],
            billable: true,
            timeline:[]
        },
        {
            id: "10e594e9-8a93-400c-9679-655ff3d435a3", 
            status: "", 
            title: "T2 Post Assessment Reviews",
            startDate: null,
            dueDate: null,
            completeDate: null,
            repeating: false,
            priority: 3,
            tags: [],
            client: "TMG Tax Consulting",
            project: "",
            memo: "Aliquam nec ultrices dui. Phasellus a velit est. Etiam efficitur feugiat urna, vel bibendum arcu tincidunt nec. Vestibulum congue sapien in nibh pretium mattis. Mauris sodales quam non eleifend vestibulum. Phasellus sed facilisis risus. Nulla nunc enim, bibendum eu dui in, dignissim sodales eros. Nam interdum euismod metus pellentesque porta. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec lobortis urna eget velit ultrices, at lobortis ipsum tempor. Vivamus facilisis lacus ullamcorper, posuere purus eget, euismod nunc. Nam libero purus, mattis sit amet arcu sed, aliquet iaculis purus. Vestibulum eget arcu a lorem elementum ultrices. Mauris sapien ipsum, lacinia sit amet tincidunt nec, sagittis et risus. Aenean consequat nibh at tempus semper. Vestibulum lacinia tristique mauris nec condimentum.",
            subTasks: [],
            relatedTasks:[],
            relatedNotes: [],
            billable: true,
            timeline:[]
        },
        {
            id: "7bac337a-17be-4bb7-b655-0e0c87d85618", 
            status: "", 
            title: "T1 Post Assessment Reviews",
            startDate: null,
            dueDate: null,
            completeDate: null,
            repeating: false,
            priority: 3,
            tags: [],
            client: "TMG Tax Consulting",
            project: "",
            memo: "Suspendisse tempor, arcu dictum porta pretium, dui dolor molestie odio, id semper nulla nunc sit amet urna. Nullam bibendum efficitur leo vitae posuere. Morbi sit amet purus varius, euismod lectus ut, condimentum velit. Duis ac gravida mi. Quisque sollicitudin iaculis euismod. Sed sit amet imperdiet lectus, ut volutpat ante. Cras posuere libero id dignissim convallis. Phasellus ut lorem ac elit dignissim sodales.",
            subTasks: [],
            relatedTasks:[],
            relatedNotes: [],
            billable: true,
            timeline:[]
        },   
    ]
)