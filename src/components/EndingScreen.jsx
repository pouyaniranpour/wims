function EndingScreen({restartGame, isGameOver}) {
  return (
      <div className={`${isGameOver?'opacity-100 z-10': 'opacity-0 -z-10'} transition-opacity duration-[2000ms] ease-in-out`}>
          {isGameOver &&
          <div className='z-10 border border-black rounded-lg'>
          <button onClick={restartGame}>Restart Game</button>
        </div> }
    </div>
  )
}
export default EndingScreen