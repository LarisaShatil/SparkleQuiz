import Confetti from 'react-confetti'
import { useState, useEffect } from 'react'

const SmoothConfetti = () => {
      const [pieces, setPieces] = useState(300)
  
      useEffect(() => {
        const timer = setTimeout(() => {
          const interval = setInterval(() => {
            setPieces((p) => {
              if (p <= 0) {
                clearInterval(interval)
                return 0
              }
              return p - 40
            })
          }, 200)
        }, 6000)
  
        return () => clearTimeout(timer)
      }, [])
  
  return (
    <Confetti
      numberOfPieces={pieces}
      width={window.innerWidth}
      height={window.innerHeight}
    />
  )
}

export default SmoothConfetti