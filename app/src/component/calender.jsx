import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import axios from 'axios';

function Calendar() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function fetchEvents() {
      const start = new Date();
      const end = new Date();
      end.setMonth(end.getMonth() + 1);
      const result = await axios.get(`"http://localhost:3001/getevent" ? start = ${start.toISOString()} & end = ${end.toISOString()}`);
      setEvents(result.data);
      console.log(result.data)
    }
    fetchEvents();
  }, []);

  const handleDateSelect = async (arg) => {
    const title = window.prompt('Enter event title:');
    if (title) {
      const newEvent = { title, start: arg.start, end: arg.end };
      console.log(newEvent)
      try {
        const result = await axios.post('http://localhost:3001/create', newEvent);
        setEvents([...events, result.data]);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div>
      <h1>Calendar</h1>
      <h4>.</h4>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        selectable={true}
        select={handleDateSelect}
        events={events.map((event) => ({
          title: event.title,
          start: new Date(event.start),
          end: new Date(event.end),
          description: event.description,
        }))}
      />
    </div>
  );
}

export default Calendar;