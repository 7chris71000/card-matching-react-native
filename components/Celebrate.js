import React from 'react'
import ConfettiCannon from 'react-native-confetti-cannon';

const Celebrate = ({ fire }) => {
  if(fire) {
    return(
      <>
        <ConfettiCannon
          count={100}
          origin={{x: 0, y: 0}}
          fadeOut={true}
          explosionSpeed={500}
        />
        <ConfettiCannon
          count={100}
          origin={{x: 200, y: 0}}
          fadeOut={true}
          explosionSpeed={500}
        />
        <ConfettiCannon
          count={100}
          origin={{x: 400, y: 0}}
          fadeOut={true}
          explosionSpeed={500}
        />
      </>
    );
  } else {
    return null;
  }
}

export default Celebrate;
