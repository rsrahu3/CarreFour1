import * as React from 'react'
import Header from './../common/Header'
import constants from './../common/constant'

const AboutComponent = ()=>{
  return (<div><Header active="about"/>{constants.aboutData}</div>)
}
export default AboutComponent

