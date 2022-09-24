import {BusinessHoursInput, CalendarOptions, PluginDef, ToolbarInput} from '@fullcalendar/angular'; // useful for typechecking
import interactionPlugin from '@fullcalendar/interaction';
import bootstra5Plugin from '@fullcalendar/bootstrap5'
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';
import listPlugin from '@fullcalendar/list';
import timeGridPlugin from '@fullcalendar/timegrid';
import dayGridPlugin from '@fullcalendar/daygrid';

const PLUGINS: PluginDef[] = [
    interactionPlugin,
    bootstra5Plugin,
    resourceTimelinePlugin,
    listPlugin,
    listPlugin,
    timeGridPlugin,
    dayGridPlugin,
]

const HeaderToolBar:  ToolbarInput =  {
    left: 'prevYear,prev,next,nextYear',
    center: 'title',
    right: 'timeGridDay,timeGridWeek,dayGridMonth'
}

const BUSINESS_HOURS : BusinessHoursInput = {
    daysOfWeek: [1, 2, 3, 4, 5],

}

export const calendarOptions : CalendarOptions = {

    plugins: PLUGINS,
    initialView: 'dayGridMonth',
    height: "auto",
    themeSystem: "boostrap5",
    selectable: true,
    editable: true,
    headerToolbar: HeaderToolBar,
    contentHeight: 'auto'
    //businessHours: BUSINESS_HOURS

}