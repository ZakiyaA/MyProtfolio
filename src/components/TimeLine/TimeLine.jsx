// npm install @mui/material @emotion/react @emotion/styled


import React from 'react'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Typography } from '@material-ui/core';

import './styles.css';

const CustomTimeLine = ({title, icon, children}) => {
  return (
   <div>
    <Timeline className='timeline'>
        {/* Header */}
      <TimelineItem className='timeline_firstitem'>
        <TimelineSeparator>
          <TimelineDot  className='timeline_dot_header'>{icon}</TimelineDot> 
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
            <Typography variant='h6' className='timeline_header'>
              {title}
            </Typography>
           </TimelineContent>
      </TimelineItem>
      {children}
    </Timeline>
    </div>
    
  );
};


export const CustomTimeLineSeparator = () => (
    <TimelineSeparator className='separator_padding'>
        <TimelineDot variant='outlined' className='timeline_dot' />
        <TimelineConnector />
  </TimelineSeparator>
);
export default CustomTimeLine