import React from 'react'

function Header({onDarkModeClick, isDarkMode}) {
  return (
    <div>
        <header>
            <h2>Shopster</h2>
            <button onClick={onDarkModeClick}>
            {isDarkMode ? "Dark" : "Light"} Mode
            </button>
        </header>
    </div>
  )
}

export default Header

// [X] - Create a `Header` component by refactoring the `<header>` element out of the
// `App` component. Clicking on the `<button>` inside of the `Header` component
// should still toggle dark mode on and off.

// [X] - You will need to pass a _callback function_ as a prop called `onDarkModeClick`
// to the `Header` component in order for the test to pass.]