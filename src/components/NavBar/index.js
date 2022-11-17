import './index.css'

const NavBar = props => {
  const {currentScore, isGameInProgress, topScore} = props

  return (
    <nav className="navbar-section">
      <div className="title-score-container">
        <div className="logo-and-title-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
            className="emoji-logo"
          />
          <h1 className="heading">Emoji Game</h1>
        </div>
        {isGameInProgress && (
          <div className="scores-container">
            <p className="paragraph">Score: {currentScore}</p>
            <p className="paragraph">Top-Score: {topScore}</p>
          </div>
        )}
      </div>
    </nav>
  )
}

export default NavBar
