import * as React from 'react';
import { useEffect, useState } from 'react';

import { Box } from '@mui/material';

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import Typography from '@mui/material/Typography';

const experience = [
    {
        "id": 1,
        "startDate": "2023-3-01",
        "image": "./images/Equator.jpg",
        "image_url": "https://equatorstudios.com/",
        "imageStyle": { "height": "5rem", "width": "auto", "borderRadius": "50%" },
        "header": "Equator Studios",
        "position": "Junior Software Developer", // Show only this and header on mobile, not timeline.
        "content": "As a Software Developer at Equator Studios, I've spent the past few months focusing on enhancing our mapping and design software. Our platform is used by professionals all over the world, and my goal is to make it as easy and intuitive as possible for them to create and share their maps. With Equator Studios, I've had the chance to use and deepen my knowledge in a range of technologies including React, JavaScript, Express.js, MongoDB, WSL, Linux/Ubuntu, Docker, GitLab, and CI. Some of the exciting projects I've worked on include the implementation of our new Site Selector and the development of our Segmentation AI product. I'm eager to continue expanding my skillset and contributing to the ongoing evolution of Equator Studios."
    },
    {
        "id": 2,
        "startDate": "2021-10-01",
        "image": "./images/TCS_Icon_SVG.svg",
        "image_url": "https://www.thiscozystudio.com/",
        "imageStyle": { "height": "5rem" },
        "header": "This Cozy Studio Inc.",
        "position": "Co-Founder, CEO, Lead Software Engineer and Web Developer",
        "content": "As the Co-Founder, CEO, and Lead Software Engineer of This Cozy Studio Inc, I've driven the company's growth through my diverse technical abilities, leadership, and management skills. My contributions include the development of 'Blend_My_NFTs', a popular 3D model NFT generator operating as a Blender add-on, and the creation of multiple NFT collections for our clients, among them Cozy Place, Vox Coodles, Omni Coin, Metapanda, and AKidCalledBeast. Additionally, I designed and developed our company's website, ThisCozyStudio.com, and implemented a cloud rendering, storage, and NFT minting platform, making it easier for 3D graphical artists to launch their own 3D NFT collections"
    },
    {
        "id": 3,
        "startDate": "2021-03-01",
        "endDate": "2022-05-01",
        "image": "./images/league.jpg",
        "image_url": "https://www.league.com/",
        "imageStyle": { "height": "5rem", "width": "auto", "borderRadius": "50%" },
        "header": "League",
        "position": "QA, Accessibility, and Automation Software Tester",
        "content": "As a Quality Assurance Engineer at League, I had the privilege of working on the development of President Choice's 'PC Health' app and League's Health OS website. I utilized my TypeScript/JavaScript skills to develop automated tests using TestCafe. I also conducted manual testing and accessibility testing to ensure that the app and website met the WCAG accessibility standards. I worked closely with the development team and my colleagues at worX4you Inc. to provide feedback and suggestions for improvements. This was an enriching experience where I could apply my skills in automated testing, accessibility testing, and teamwork."
    },
    {
        "id": 4,
        "startDate": "2013-06-01",
        "image": "./images/worx4you.jpg",
        "image_url": "https://www.worx4you.com/",
        "imageStyle": { "height": "5rem", "width": "auto", "borderRadius": "50%" },
        "header": "worX4you Inc.",
        "position": "QA, Accessibility, and Automation Software Tester",
        "content": "As a Software Assurance Engineer contractor at worx4You, I had the opportunity to work on multiple projects for companies such as THRILLWORKS, League, TunnelBear, Hubba, and Hopscotch. In this role, I was responsible for manual and automation testing using tools such as Jira, Slack, Visual Studio Code, Javascript, TypeScript, and TestCafe. Additionally, I conducted research on and implemented WCAG accessibility standards to ensure that the companies I worked with were following accessibility standards. Through my work at worx4You, I gained valuable experience in software testing and accessibility, and I am excited to continue to develop my skills in these areas."
    }
]

export const CustomizedTimeline = () => {
    const [data, setData] = useState([]);

    const calculatePeriod = (startDate, endDate) => {
        const start = new Date(startDate);
        const end = endDate ? new Date(endDate) : new Date();

        let years = end.getFullYear() - start.getFullYear();
        let months = end.getMonth() - start.getMonth();

        if (months < 0 || (months === 0 && end.getDate() < start.getDate())) {
            years--;
            months += 12;
        }

        if (endDate) {
            return `${start.toLocaleString('default', { month: 'long', year: 'numeric' })} - ${end.toLocaleString('default', { month: 'long', year: 'numeric' })} (${years} year${years !== 1 ? 's' : ''} ${months} month${months !== 1 ? 's' : ''})`;
        }

        return `${start.toLocaleString('default', { month: 'long', year: 'numeric' })} - Present (${years} year${years !== 1 ? 's' : ''} ${months} month${months !== 1 ? 's' : ''})`;
    };

    useEffect(() => {
        const enrichedData = experience.map(item => ({
            ...item,
            period: calculatePeriod(item.startDate, item.endDate),
        }));
        setData(enrichedData);
    }, []);

    return <Timeline position="alternate">
        {data.map((item) => (
            <TimelineItem key={item.id}>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    align="right"
                    variant="body2"
                    color="text.secondary"
                >
                    <Typography variant="body1">{item.period}</Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector />
                    <Box component="img" src={item.image} sx={item.imageStyle} />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h1">{item.header}</Typography>
                    <Typography variant="body1">{item.content}</Typography>
                </TimelineContent>
            </TimelineItem>
        ))}
    </Timeline>
};

export default CustomizedTimeline;