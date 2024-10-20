import * as React from 'react'
import { createRoot } from 'react-dom/client'

const elm = document.querySelector('#app')

if(elm) {
  createRoot(elm).render(
    <div>
      <h1>Hello World from React!</h1>
    </div>
  )
}