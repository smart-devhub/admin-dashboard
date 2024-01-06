import moment from 'moment';
import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';


const MyCalendar = () => {
  const localizer = momentLocalizer(moment);

  const events = [
    {
      title: 'Meeting 1',
      start: new Date(2024, 0, 10, 10, 0), // January 10, 2024, 10:00 AM
      end: new Date(2024, 0, 10, 12, 0), // January 10, 2024, 12:00 PM
    },
    {
      title: 'Meeting 2',
      start: new Date(2024, 0, 12, 14, 0), // January 12, 2024, 2:00 PM
      end: new Date(2024, 0, 12, 16, 0), // January 12, 2024, 4:00 PM
    },
    // Add more events as needed
  ];

  return (
    <div style={{ height: '500px' }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        titleAccessor="title"
      />
    </div>
  );
};

export default MyCalendar;
