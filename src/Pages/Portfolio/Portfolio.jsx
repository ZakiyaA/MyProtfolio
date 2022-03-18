import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Card from '@mui/material/Card';

import './styles.css';
import resumeData from '../../Utils/resumeData';
import { CardActionArea, CardContent, CardMedia, Dialog, DialogActions, DialogContent, DialogTitle, Grow, Typography } from '@mui/material';

const Portfolio = () => {
  const [tabValue, setTabValue] = useState('All');
  const [projectDialog, setProjectDialog] = useState(false);
 

  return (
    <Grid container className='section pt_45 pt_45' >
     {/* Title */}
     <Grid item className='section_title mb_30'>
          <span></span>
          <h6 className='section_title_text'>Portfolio</h6>
        </Grid>

     
     {/* Tabs */}
     <Grid item xs={12}>
        <Tabs 
        value={tabValue}  
        indicatorColor='white' 
        className='custom_tabs'
         onChange={(event, newValue) => setTabValue(newValue)}>
           <Tab label='All' value='All' className={tabValue === 'All' ? 'customTabs_item active' : 'customtabs_item'} />
          {[...new Set(resumeData.projects.map(item => item.tag))].map(
            tag => (
            <Tab 
            label={tag}
            value={tag}
            className={tabValue === tag
            ? 'customTabs_item active' 
            : 'customTabs_item'
          }
          />
            ))}
        </Tabs>
     </Grid>

      {/* Projects */}
      <Grid item xs={12}>
        <Grid container spacing={2} className='p_30'>
          {resumeData.projects.map((project) => (
            <>
              {tabValue == project.tag || tabValue == 'All' ? (
                <Grid item xs={12} sm={6} lg={3}>
                  <Grow in timeout={1000}>
                    <Card className='customCard' onClick={() => setProjectDialog(project)}>
                      <CardActionArea>
                        <CardMedia className='customCard_image' 
                        image={project.image}
                        // title={project.title} 
                        />
                        <CardContent>
                          <Typography variant='body2' className='customCard_title'>{project.title}</Typography>
                          <Typography variant='caption' className='customCard_description'>{project.description}</Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grow>
                </Grid>
              ) : null}
            </>
          ))}
        </Grid>
      </Grid>

      <Dialog open={projectDialog} className='projectDialog' onClose={() => setProjectDialog(false)}>
      <DialogTitle onClose={() => setProjectDialog(false)}> {projectDialog.title}</DialogTitle>
        <img src={projectDialog.image} alt="" className='projectDialog_image'/>
        <DialogContent>
          <Typography className='projectDialog_description'>
          {projectDialog.description}
          </Typography>
        </DialogContent>
        <DialogActions className='projectDialog_actions'>
          {projectDialog?.links?.map(link => (
           <a href={link.link} target='_blank' className='projectDialog_icon'>{link.icon}</a> 
            ))}
        </DialogActions>
    </Dialog>

    </Grid>
  )
}

export default Portfolio