
interface chip{
    value: number;
    color : string;
}


export interface menu {
    name : string;
    icon : string;
    link : boolean | string ;
    open : boolean;
    chip ?: chip
    sub ?: menu

}

export const MENUS : menu[] = [

    {
        name : "Work/Learnership",
        icon : "work",
        link : false,
        open : false,
    },

    {
        name : "Bursary",
        icon : "payments",
        link : false,
        open : false
    },

    {
        name : "FET",
        icon : "school",
        link : false,
        open : false
    },

    {
        name : "Calendar",
        icon : "calendar_month",
        link : "calendar",
        open : false
    },

    {
        name : "Sports",
        icon : "sports",
        link : false,
        open : false
    },

    {
        name : "Volunteer",
        icon : "volunteer_activism",
        link : false,
        open : false
    },
]