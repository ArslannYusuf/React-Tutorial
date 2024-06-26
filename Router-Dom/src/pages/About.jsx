import React from 'react'
import {Link, Outlet} from "react-router-dom";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <hr />
      <Link className='about-link' to='employee'>Çalışanlar Hakkında</Link>
      <Link className='about-link' to='company'>Şirket Hakkında</Link>

      <Outlet/> {/* yukarida buluan child component'leri render eder */}
    </div>
  )
}

export default About
