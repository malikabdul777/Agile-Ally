// React

// Thirdparty
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";

// Utils

// APISlices

// Slice
import useCalendar from "../../store/Calendar";

// CustomHooks

// Components

// Constants

// Enums

// Interfaces

// Styles
import "./Calendar.css";
import { createEventId } from "../../data";

// Local enums

// Local constants

// Local Interfaces

const Calendar = () => {
  const { currentEvents, setCurrentEvents } = useCalendar();
  const handleEvents = async (events) => {
    await Promise.resolve(setCurrentEvents(events));
  };

  const handleDateSelect = (selectInfo) => {
    const title = prompt("Please enter a title for the event");
    let calendarApi = selectInfo.view.calendar;

    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.start,
        end: selectInfo.end,
        allDay: selectInfo.allDay,
      });
    }
  };

  return (
    <div className="calendar-container">
      <div>
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth, timeGridWeek, timeGridDay",
          }}
          allDaySlot={false}
          initialView="timeGridWeek"
          slotDuration={"01:00:00"}
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          weekends={true}
          nowIndicator={true}
          initialEvents={currentEvents}
          eventsSet={handleEvents}
          select={handleDateSelect}
        />
      </div>
    </div>
  );
};

export default Calendar;
