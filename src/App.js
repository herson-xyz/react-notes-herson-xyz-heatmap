import CalendarHeatmap from 'react-calendar-heatmap';
import ReactTooltip from 'react-tooltip';
import data from './data.json'
import Legend from './Legend';

import './react-calendar-heatmap.css';
import './styles.css';

const today = new Date();
const items = [
  { color: '#7eb5f4', label: 'Algorithmic Soundscape', link: 'https://notes.herson.xyz/Creative+Practice/2023/09/2023-09-04#_Algorithmic+Soundscape_+64f236' },
  { color: '#e2aef6', label: '(Simulated) Biological System', link: 'https://notes.herson.xyz/Creative+Practice/2023/09/2023-09-04#_(Simulated)+Biological+System_+a2998a' },
  { color: '#beaef6', label: 'The Network', link: 'https://notes.herson.xyz/Creative+Practice/2023/09/2023-09-04#~~_The+audiovisual+system_~~The+Network+8c0a94' },
  { color: '#e9e16d', label: 'Writing', link: '' },
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