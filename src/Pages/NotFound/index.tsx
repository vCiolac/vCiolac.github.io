import React, { Fragment } from 'react'
import CodeEditor from '../../components/CodeEditor/CodeEditor'
import { codeString } from './codeString'
import { Link } from 'react-router-dom'

function About() {
  return (
    <Fragment>
      <CodeEditor codeString={codeString} />
    </Fragment>
  )
}

export default About