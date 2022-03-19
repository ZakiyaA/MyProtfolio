import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WebIcon from '@mui/icons-material/Web';
import EditOffIcon from '@mui/icons-material/EditOff';
import NetworkCheckIcon from '@mui/icons-material/NetworkCheck';
import TelegramIcon from '@mui/icons-material/Telegram';
import BiotechRoundedIcon from '@mui/icons-material/BiotechRounded';
// import Behance from 'react-bootstrap-icons/Behance';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';

export default {
    name: 'Zakiya Alfughi',
    title: 'Full Stack Web Developer',
    email: 'zakiyaalfughi@gmail.com',
    address: 'Toronto',
    Phone: "289-8302107",
    about: 'Competent and committed Web Designer and Development graduate looking for a rewarding career in the Information Technology sector. Highly focused with a comprehensive knowledge of designing and developing the layout, visual appearance, and usability of a website. Possesses a proven track record of completing projects from the concept through to design, testing, and handover.  Also, having a passion for delivering valuable data through analytical functions and data retrieval methods.',

    socials: {
        GitHub: {
            link: 'https://github.com/ZakiyaA',
            text: 'gitHub',
            icon: <GitHubIcon />
        },

        LinkedIn: {
            link: 'https://www.linkedin.com/in/zakiya-alfughi/',
            text: 'LinkedInIcon',
            icon: <LinkedInIcon />
        },

        Telegram: {
            link: 'https://web.telegram.im',
            text: 'Telegram',
            icon: <TelegramIcon />
        },

        // GitHub: {
        //     link: 'https://github.com/ZakiyaA',
        //     text: 'gitHub',
        //     icon: <GitHubIcon />
        // },
    },

    // Work history
    experiences: [
    {
        title: 'Teaching assistant -  College of Electronic Technology, Bani Walid, Libya ' ,
        date: 'Mar. 2008​ - Dec. 2011​' ,
        description: 'Assist with classroom instruction and provide support and guideline to students' +

        'Fully responsible for creating lectures and delivering them to students' +
        
        'Mark assignments, testes, quizzes, and projects' +
        
        'Support employees to use computer software and hardware.' +
        
        'Organize and conduct training workshops (e,g, programming languages, MS Office, Micro-controller and micro-processor boards)'
    },

    {
        title: 'Computer Technician -  Bani Walid University, Bani Walid, Libya ' ,
        date: 'July 2003​ - Feb. 2008​​' ,
        description: 'Installing, configuring, troubleshooting and maintaining new and existing hardware and software issues' +

        'Install, modify, test, and repair computer peripherals (mouse, keyboards, monitors, printers, etc.).' +
        
        'Installing and configuring OS: Windows XP, Windows Vista, Windows 10 and Windows 7' +
        
        'Assist users with any user account issues they were facing from changing passwords to creating new accounts with Active Directory.' +
        
        'Assist employees in different departments and team members as needed (e.g. help desk, MS Office issues, etc.)'
    }
],
educations: [
    {
        university: 'Guelph University,  Guelph, Canada ' ,
        date: 'Nov. 2021​ - present​' ,
        degree: 'Data Science certificate'
    },

    {
        university: 'Lighthouse Labs,  Vancouver, Canada ' ,
        date: 'Nov. 2021​ - Mar. 2022​​' ,
        degree: 'ck Web Development'
    },

    {
        university: 'University of Ontario Institute of Technology (UOIT), Oshawa, Canada ' ,
        date: 'Jan. 2013​ - Apr. 2015' ,
        degree: 'MASc in Computer Engineering'
    },

    {
        university: 'College of Electronic Technology, Bani Walid, Libya ' ,
        date: 'Sept. 1999​ - June 2003​' ,
        degree: 'B.Sc. in Electrical and Computer Engineering'
    },
],
services: [
    {
        title: 'Web Developement',
        description: 'Builds, designs, and maintains all websites and software applications.',
        icon: <WebIcon/>,
    },
    {
        title: 'Graphic Design',
        description: 'Design logos, letterheads, brochures, presentations, and website elements.',
        icon: <EditOffIcon/>,

    },  {
        title: 'Web Testing',
        description: 'Creating and testing applications for the website',
        icon: <BiotechRoundedIcon/>,
    }
],
skills: [
    {
      title: 'FRONT-END' ,
      description:  [
          'ReactJS',
          'JavaScript',
          'SASS',
          'Bootstrap',
          'Material UI',
          'JQuery'
      ],
    },

    {
        title: 'BACK-END' ,
        description:  [
            'NodeJS',
            'Express',
             'Rails',
             
             
        ],
      },

      {
        title: 'DATABASES' ,
        description:  [
            'PostgreSQL',
            'MongoDB',
            'MySQL'
        ],
      },

      {
        title: 'VERSION CONTROL' ,
        description:  [
            'GIT',
            'GitHub',
        ],
      },

],

projects: [
    {
        tag: 'Express',
        image: 'https://raw.githubusercontent.com/ZakiyaA/tinyapp/main/docs/Tinyapp-urls-Page.jpg',
        description: 'RESTful URL Shortening service.\n' + 
        'Tech Stack: Express, Node' ,
        title: 'TinyApp',
        caption: 'A short ------',
        links: [
            {link: 'https://github.com/ZakiyaA/tinyapp', icon: <GitHubIcon />},
            {link: 'https://www.linkedin.com/in/zakiya-alfughi/', icon: <LinkedInIcon />},
        ],
    },

   {
       tag: 'Express',
       image: 'https://raw.githubusercontent.com/ZakiyaA/tweeter/master/docs/Tweeter.gif',
       description: 'Twitter clone powered by AJAX. Tech Stack: Express, jQuery, MongoDB, Node',
       title: 'Tweeter',
       caption: 'A short ------',
       links: [
           {link: 'https://github.com/ZakiyaA/tweeter', icon: <GitHubIcon />},
           {link: 'https://www.linkedin.com/in/zakiya-alfughi/', icon: <LinkedInIcon />},
       ],
   },

   {
    tag: 'React',
    image: 'https://raw.githubusercontent.com/ZakiyaA/schedule/master/docs/ezgif.com-gif-maker.gif',
    description: 'React based project to create meetings for students to connect with mentors in real-time. Tech Stack: React, Axios, Classnames, Normalize, Storybook' ,
    title: 'Scheduler',
    caption: 'A short ------',
    links: [
        {link: 'https://github.com/ZakiyaA/schedule', icon: <GitHubIcon />},
        {link: 'https://www.linkedin.com/in/zakiya-alfughi/', icon: <LinkedInIcon />},
    ],
},

{
    tag: 'Graphic Design',
    image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/123f09111640661.6005e2b878bcb.jpg',
    description: 'Using Illustrator to design logo, brochures and leeter for shoes company' ,
    title: 'Rose Shoes',
    caption: 'A short ------',
    links: [
        {link: 'https://www.behance.net/gallery/111640661/-2020', icon: <ArrowCircleDownIcon />},
        // {link: 'https://www.linkedin.com/in/zakiya-alfughi/', icon: <LinkedInIcon />},
    ],
},



]
};