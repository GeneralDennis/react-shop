import React from 'react'

const Footer = () => {
  return (
    <footer className="page-footer green lighten-3">
      <div className="footer-copyright">
        <div className="container">
        © { new Date().getFullYear()} Copyright Text
        <a className="grey-text text-lighten-4 right" href="https://github.com/GeneralDennis/react-shop/" target="_blank" rel="norefferer">Repo</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer