import React from 'react';
import { Typography } from '@material-ui/core';
import CustomTimeLine, {CustomTimeLineSeparator} from '../TimeLine/TimeLine';
import resumeData from '../../Utils/resumeData';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import GetAppIcon from '@mui/icons-material/GetApp';
import './styles.css';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineContent from '@mui/lab/TimelineContent';
import CustomButton from '../Button/Button';


const CustomTimelineItem = ({title, text, link}) => (
  <TimelineItem>
    <CustomTimeLineSeparator />
    <TimelineContent className='timeline_content'>
      {link ? (
      <Typography className='timelineItem_text'>
        <span>{title}:</span>{" "}
        <a href={link} target="_blank">
        </a>
      </Typography>
      ) : (
        <Typography className='timelineItem_text'>
          <span>{title}:</span>{text} 
          </Typography>
      )}
    </TimelineContent>
  </TimelineItem>
);


const Profile = () => {
  return (

    <div className='profile container_shadow'>
      <div className='profile_name'>
        <Typography className='name'>{resumeData.name}</Typography>
        <Typography className='title'>{resumeData.title}</Typography>
      </div>
      <figure className='profile_image'>
        <img src={require('../../assets/images/my_image.jpeg')} alt='' />
      </figure>
      <div className='profile_information'>
        <CustomTimeLine icon={<PersonOutlineIcon />} >
          < CustomTimelineItem title='Name' text={resumeData.name} />
          < CustomTimelineItem title='Email' text={resumeData.email} />
          < CustomTimelineItem title='Address' text={resumeData.address} />

          {Object.keys(resumeData.socials).map((key) => (
            <CustomTimelineItem title={key} text={resumeData.socials[key].text} link={resumeData.socials[key].link} />
          ))}

        </CustomTimeLine>

        <div className='button_container'>
          <a href={'https://drive.google.com/file/d/1HAYu7DpUXnAEEpGPyDDfjpCDPgMdR3mA/view?usp=sharing'} target="_blank" rel="noopener noreferrer" download>
            <CustomButton text={'Download Resume'} icon={<GetAppIcon />} /></a>
        </div>
      </div>
    </div>
  )
}

export default Profile