import React from 'react'
import {Image} from '@chakra-ui/react'
import '../style/educationBanner.css'
const EducationBanner = ({imageSrc, schoolName, finished, time, degree}) => {
  return (
    <article className="article_wrapper">
      <div className="rounded_lg container_project">
          <Image src={imageSrc} objectFit={'cover'} w={'100%'} h={'100%'}/>
        </div>
        <div className="project_info">
          <div className="flex_pr">
            <div className="project_title text_nowrap">{schoolName}</div>
              <div className="project_hover"/>
            </div>
            <div className="types">
                <span  className={finished ? "project_type finished" : "project_type"}>{finished ? "• Finished" : "• In Progress"}
                </span>
                <span className="project_type">{time}</span>
                <span className="project_type">{degree}</span>
            </div>
        </div>
    </article>
  )
}

export default EducationBanner
