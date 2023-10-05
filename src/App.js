import CalendarHeatmap from 'react-calendar-heatmap';
import ReactTooltip from 'react-tooltip';
import data from './data.json'
import Legend from './Legend';

import './react-calendar-heatmap.css';
import './styles.css';

// Color palette generator: https://mycolor.space/?hex=%23BEAEF6&sub=1

const today = new Date();
const items = [
  { color: '#AEF6E2', label: 'Developing a sound aesthetic', link: '' },
  { color: '#F6AEC2', label: 'Developing a visual aesthetic', link: '' },
  { color: '#beaef6', label: 'Philosophy of Networks', link: '' },
  { color: '#484554', label: 'Writing Assignments', link: '' },
];

export default function App()
{
        
  return (
    <div>
      <Legend items={items} />
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
                    'data-tip': `Date: ${value.date} Focus: ${value.focus}`,
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