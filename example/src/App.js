import React from 'react'

import { ButtonComponent } from 'pokebtn'
import 'pokebtn/dist/index.css'

const App = () => {
  return (
    <>
      <ButtonComponent type='primary' text='Primary Button' />
      <br />
      <br />
      <ButtonComponent type='dashed' text='Dashed Button' />
      <br />
      <br />
      <ButtonComponent type='text' text='Text Button' />
      <br />
      <br />
      <ButtonComponent type='link' text='Link Button' />
      <br />
      <br />
      <ButtonComponent text='Default Button' />
    </>
  )
}

export default App
