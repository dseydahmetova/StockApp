import React from 'react'

function About() {
  return (
    <div className='about'>
      <p> This version of the application uses hard-coded stocks data, which you can find in data.js file.</p>
      <p>This app lists all of the stocks that the user is tracking, specifically the name of the company and all details</p>
      <p>However if you want to leverage pulling data from an API you can sign up for an API key and use <a href = 'https://financialmodelingprep.com/Links'>https://financialmodelingprep.com/Links</a> to an external site.</p>
      <p>The application has Home, About, Dashboard and Stock pages</p>
      <p><h3>Navigation</h3>
        No matter what route the user is visiting, they should always see a navigation bar at the top of the window. It should contain links to "Home" and "About" pages.</p>
      <p><h3>Dashboard (/stocks)</h3>
        If a user visits /stocksor clicks "Home" in the navigation bar, they should be directed to a dashboard page. This page should list all of the stocks that the user is tracking, specifically their nameand symbol. These stocks should be pulled from the stock-data.js file.</p>
      <p><h3>Stock (/stocks/:symbol)</h3>
        If a user clicks on one of the stocks listed in the Dashboard view, they should be directed to an individual stock show view. This view should display all of a stock's attributes.
      </p>
      <p><h3>About (/about)</h3>
        If a user clicks on "About" in the navigation bar, they should be directed to an about page. This is just a static page that displays a description of your app.</p>
    </div>
  )
}

export default About
