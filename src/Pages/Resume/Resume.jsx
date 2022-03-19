import React from 'react'
import Grid from '@mui/material/Grid';
import { TextField, Typography } from '@mui/material';
import resumeData from '../../Utils/resumeData';
import './styles.css'
import CustomTimeLine, { CustomTimeLineSeparator } from '../../components/TimeLine/TimeLine';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineContent from '@mui/lab/TimelineContent';
import SchoolIcon from '@mui/icons-material/School';
import GitHub from '@mui/icons-material/GitHub';
import Icon from '@mui/material/Icon';
import Paper from '@mui/material/Paper';
import TimelineDot from '@mui/lab/TimelineDot';
import CustomButton from '../../components/Button/Button';

import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FormControl } from '@material-ui/core';

const Resume = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2xa61zo', 'template_lr0xaaz', form.current, 'iNIkmuuAxddsD7M4l')
      .then((result) => {
          alert("ddddd")
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <div>
      {/* About Me  ------- */}
      <Grid container className='section pb_45 p_50' >
        <Grid item className='section_title mb_30'>
          <span></span>
          <h6 className='section_title_text'>About Me</h6>
        </Grid>
        <Grid item xs={12} >
          <Typography variant='body2' className='aboutme_text'>{resumeData.about}</Typography>
        </Grid>
      </Grid>

      {/* Education & Work Experiences */}
      <Grid container className='section pb_45' >
        <Grid item className='section_title mb_30'>
          <span></span>
          <h6 className='section_title_text'>Resume</h6>
        </Grid>

        <Grid item xs={12}>
          <Grid container className='resume_timeline'>
            {/*  Work Experiences  */}
            <Grid item sm={12} md={6}>
              <CustomTimeLine title={'Work Experiences'} icon={<WorkHistoryIcon />}>
                {resumeData.experiences.map((experience) => (

                  <TimelineItem >
                    <CustomTimeLineSeparator />
                    <TimelineContent className='timeline_content'>
                      <Typography className='timeline_title'>
                        {experience.title}
                      </Typography>
                      <Typography variant='caption' className='timeline_date'>
                        {experience.date}
                      </Typography>
                      <Typography variant='body2' className='timeline_description'>
                        {experience.description}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>

                ))}
              </CustomTimeLine>
            </Grid>
            {/* Education */}
            <Grid item sm={12} md={6}>
              <CustomTimeLine title={'Education'} icon={<SchoolIcon />}>
                {resumeData.educations.map((educations) => (

                  <TimelineItem >
                    <CustomTimeLineSeparator />
                    <TimelineContent className='timeline_content'>
                      <Typography className='timeline_title'>
                        {educations.university}
                      </Typography>
                      <Typography variant='caption' className='timeline_date'>
                        {educations.date}
                      </Typography>
                      <Typography variant='body2' className='timeline_description'>
                        {educations.degree}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>

                ))}
              </CustomTimeLine>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* My Services */}
      <Grid container className='section pb_45' >
        <Grid item className='section_title mb_30'>
          <span></span>
          <h6 className='section_title_text'>My Services</h6>
        </Grid>

        <Grid item xs={12}>
          <Grid container spacing={3} justify='space-around'>
            {resumeData.services.map(service => (
              <Grid item xs={12} sm={6} md={3}>
                <div className='services'>
                  <Icon className='services_icon'>{service.icon}</Icon>
                  <Typography className='service_title' variant='h6'>
                    {service.title}
                  </Typography>
                  <Typography className='service_description' variant='body2'>
                    {service.description}
                  </Typography>
                </div>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>

      {/* Skills */}
      <Grid container className='section graybg pb_45 p_50' >

        <Grid item xs={12}>
          <Grid container
          justify='space-between' spacing={3}>
          {resumeData.skills.map(skill => (
          <Grid item xs={12} sm={6} md={6}>
            <Paper elevation={0} className='skill'>
              <Typography variant='h6' className='skill_title'>
                {skill.title}
              </Typography>
              {skill.description.map(element => (
                <Typography variant='body2' className='skill_description'>
                <TimelineDot variant={'outlined'} className='timeline_dot' />
                  {element}
               
                </Typography>
              ))}
            </Paper>
          </Grid>
        ))}
          </Grid>
        </Grid>
      </Grid>
      
      {/* Contact */}
      <Grid container className='section pt_45' >
        {/* Contact form */}
        <Grid  item xs={12} lg={12}>
          <Grid container>
            <Grid item className='section_title mb_30'>
              <span></span>
              <h6 className='section_title_text'>Contant Form</h6>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <form ref={form} onSubmit={sendEmail}>
                  <TextField label="Full Name" 
                  className='TextField'
                  fullWidth 
                  autocomplete="none" 
                  name="user_name"/>
                  <TextField 
                  label="Email" 
                  className='TextField'
                  fullWidth 
                  autocomplete="none" 
                  name="user_email" />
   
                  <TextField label="Message" 
                  className='TextField'
                  fullWidth 
                  multiline rows={5} 
                  autocomplete="none" 
                  name="message"/>
                  <button type="submit" 
                  value="Send" 
                  className='custom-btn'>
                    Submit
                    </button>
                </form>
       

              {/* <FormControl ref={form} onSubmit={sendEmail}>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth name='user_name' label='Name' variant="standard"/>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth name='user_email' label='E-mail' variant="standard"/>
                </Grid>
                <Grid item xs={12} >
                  <TextField fullWidth name='message' label='Message' variant="standard" multiline rows={4} />
                </Grid>
                <Grid item xs={12}>
                  <CustomButton text='submit'   />
                </Grid>
                </FormControl> */}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
       

      


    </div>
  )
}

export default Resume