import React from 'react'
/*import React, { useState } from 'react'*/
import { Header } from './Header'
import { Button } from './Button'
import { Drop } from './Drop'


/* Down below from Technigo
export const App = () => {
  return (
    <div>
      Find me in src/app.js!
    </div>
  
  )
} */

export const App = () => {
  return (
    <div>
        <Header />
        <Button />
        <Drop />

    </div>
  );
}; 