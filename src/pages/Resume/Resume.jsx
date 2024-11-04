import React from 'react';
import { FaBookReader, FaRegBookmark } from "react-icons/fa";
import TimelineItem from './TimelineItem';
import SkillItem from './SkillItem';

const Resume = () => {
  return (
    <section>
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaBookReader />
          </div>
          <h3 className="h3">Education</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="Teerenstra Bilingual College"
            date="2014 — 2018"
            description="Ordinary Level Certificate"
          />
          <TimelineItem
           title="Teerenstra Bilingual College"
           date="2018 — 2020"
           description="Advanced Level Certificate"
           />
          <TimelineItem
            title="Parliamo Italiano"
            date="2021 — 2022"
            description="B2 in Italian Language."
          />
        </ol>
      </div>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaRegBookmark />
          </div>
          <h3 className="h3">Experience</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="Web design"
            date="2022 - 2023"
            description="Nemo enim ipsam voluptatem blanditiis praesentium voluptum delenit atque corrupti, quos dolores et qvuas molestias exceptur."
          />
          <TimelineItem
            title="Web development"
            date="2023 — 2025"
            description="RebaseCodeCamp."
          />
          <TimelineItem
            title="Graphic Designer"
            date="2022 — 2023"
            description="MetaDesign Awae."
          />
        </ol>
      </div>

      <div className="skill">
        <h3 className="h3 skills-title">My skills</h3>
        <ul className="skills-list content-card">
          <SkillItem title="Web design" value={80} />
          <SkillItem title="Web Development" value={50} />
          <SkillItem title="Graphic design" value={70} />
          <SkillItem title="Article writter" value={90} />
        </ul>
      </div>
    </section>
  );
};

export default Resume;
