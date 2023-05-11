const Cinema = function (films) {
  this.films = films;
};


Cinema.prototype.getFilmTitles = function() {
  
  const filmTitles = this.films.map((film) => {
    return film.title
  })

  return filmTitles
}

Cinema.prototype.getFilmByTitle = function(title) {

  const filmByTitle = this.films.filter((film) => {
    return film.title === title
  })

  return filmByTitle
}

Cinema.prototype.getFilmsByGenre = function(genre) {

  const filmsByGenre = this.films.filter((film) => {
    return film.genre === genre
  })

  return filmsByGenre
}

Cinema.prototype.getTotalRunningTime = function() {

  const runTimes = []
  for (const film of this.films) {
    runTimes.push(film.length)
  }
  const totalRunningTime = runTimes.reduce((total, runningTime) => {
    return total += runningTime
  })
  return totalRunningTime
}

Cinema.prototype.confirmFilmByYear = function(year) {

  const filmsByYear = this.films.filter((film) => {
    return film.year === year
  })
  if (filmsByYear.length > 0) {
    return true
  }
  else {
    return false
  }
}

Cinema.prototype.confirmFilmsByLength = function(length) {

  const filmsOfLength = this.films.filter((film) => {
    return film.length >= length
  })
  if (filmsOfLength.length === this.films.length) {
    return true
  }
  else {
    return false
  }

}
module.exports = Cinema;

