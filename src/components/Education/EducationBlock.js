import React from 'react'
import './EducationBlock.css'

const EducationBlock = ({school, image, degree, graduation_time, relevant_courses, activities}) =>
    <div className='p-4 row'>
      <div className='col-2'>
        <span class="helper"></span><img src={image} className="edu-image" alt=""/>
      </div>
      <div className="EducationText col-10">
        <div className="EduRow row align-items-center">
          <p className="School col-6">{school}</p>
          <p className="GradTime col-6 text-right">{graduation_time}</p>
        </div>
        <p className="Degree">{degree}</p>
        <div className='courses row'>
          <p className="Courses col-3">Relevant Courses</p>
          <p className="course-list col-9">{relevant_courses}</p>
        </div>
        <div className='activities row'>
          <p className="col-3">Activities</p>
          <p className="col-9">{activities}</p>
        </div>

      </div>
    </div>

export default EducationBlock
