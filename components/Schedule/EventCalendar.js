import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const locales = {
  "en-US": require("date-fns/locale/en-US"),
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events = [
  {
    title: "Big Meeting",
    allDay: true,
    start: new Date(2021, 6, 0),
    end: new Date(2021, 6, 0),
  },
  {
    title: "Vacation",
    start: new Date(2021, 6, 7),
    end: new Date(2021, 6, 10),
  },
  {
    title: "Conference",
    start: new Date(2021, 6, 20),
    end: new Date(2021, 6, 23),
  },
];

function EventCalendar() {
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  const [allEvents, setAllEvents] = useState(events);

  function handleAddEvent() {
    setAllEvents([...allEvents, newEvent]);
  }

  return (
    <div className="bg-white px-10 py-8 shadow-lg ">
      <h1 className="my-5 text-2xl">EventCalendar</h1>
      <h2>Add New Event</h2>
      <div className="my-5 flex items-center gap-2">
        <input
          type="text"
          placeholder="Add Title"
          className="w-[200px] p-1 outline-none border border-slate-600 focus:border-slate-800"
          value={newEvent.title}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
        />

        <div className="z-20">
          <DatePicker
            placeholderText="Start Date"
            className="w-[120px] p-1 outline-none border border-slate-600 focus:border-slate-800"
            selected={newEvent.start}
            onChange={(start) => setNewEvent({ ...newEvent, start })}
          />
        </div>

        <div className="z-20">
          <DatePicker
            placeholderText="End Date"
            className="w-[120px] p-1 outline-none border border-slate-600 focus:border-slate-800"
            selected={newEvent.end}
            onChange={(end) => setNewEvent({ ...newEvent, end })}
          />
        </div>

        <button
          className=" bg-slate-500 text-white px-4 py-2 text-sm rounded-md"
          onClick={handleAddEvent}
        >
          Add Event
        </button>
      </div>

      <div className="h-[400px] w-[550px] ">
        <Calendar
          localizer={localizer}
          events={allEvents}
          startAccessor="start"
          endAccessor="end"
          // style={{ height: 300, width: 550 }}
        />
      </div>
    </div>
  );
}

export default EventCalendar;
