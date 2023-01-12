import CalendarHeatmap from 'react-calendar-heatmap';
import ReactTooltip from 'react-tooltip';
import data from './data.json'

import './react-calendar-heatmap.css';
import './styles.css';

const today = new Date();

export default function App()
{
        
  return (
    <div>
      <CalendarHeatmap
        startDate={shiftDate(today, -150)}
        endDate={today}
        values={data}
        classForValue={value => {
          if (!value) {
            return 'color-empty';
          }
          return `color-focus-${value.focus}`;
        }}
        tooltipDataAttrs={value => {
            if (value.focus != "no-focus" && value.focus != undefined) {
                return {
                    'data-tip': `On ${value.date} I focused on ${value.focus}`,
                };
            }
        }}
        showWeekdayLabels={true}
        onClick={value => value && window.open(value.path, '_blank')}    
      />     
      <ReactTooltip />
    </div>
  );
}

function shiftDate(date, numDays) {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + numDays);
  return newDate;
}