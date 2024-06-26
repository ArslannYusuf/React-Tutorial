import React from 'react'
import {Link, Outlet} from "react-router-dom";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <hr />
      <Link className='about-link' to='employee'>Çalışanlar Hakkında</Link>
      <Link className='about-link' to='company'>Şirket Hakkında</Link>

      {/* to='employee' => /about/employee olarak defaultta '/' ekleniyor */}

      <Outlet/> {/* yukarida bulunan child component'leri render eder,  parent component'in alt kısmına yazılır */}
    </div>
  )
}

export default About
