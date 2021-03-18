const showStars = (nbStars) => {
  for (let i = 1; i <= nbStars; i += 1) {
    console.log('A'.repeat(i))
  }
}

showStars(10)