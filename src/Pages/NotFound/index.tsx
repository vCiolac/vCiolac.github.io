import React, { Fragment } from 'react'
import CodeEditor from '../../components/CodeEditor/CodeEditor'
import { codeString } from './codeString'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <CodeEditor codeString={codeString} />
    </motion.div>
  )
}

export default About