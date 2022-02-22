import React from 'react'
import './SkillBars.css'

const SkillBars = () =>
  <div className=''>
    <div class="container-skill">
      <div class="skills python"><div className='float-left title'>Python</div>90%</div>
    </div>

    <div class="container-skill">
      <div class="skills java"><div className='float-left title'>Java</div>80%</div>
    </div>

    <div class="container-skill">
      <div class="skills javascript"><div className='float-left title'>JavaScript</div>75%</div>
    </div>

    <div class="container-skill">
      <div class="skills c"><div className='float-left title'>C</div>70%</div>
    </div>
  </div>

export default SkillBars
