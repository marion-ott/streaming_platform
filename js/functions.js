function movies(location) {
  var indexMemo = [];
    for (let i = 0; i < data.films.length; i++) {
      var movieDisplay = document.createElement("DIV");
      var movieImg = document.createElement("IMG");
      location.appendChild(movieDisplay);
      indexMemo.push(movieDisplay);
      movieDisplay.classList.add('allMovies__moviesItems');
      movieDisplay.appendChild(movieImg);
      movieImg.classList.add('allMovies__moviesImg');
      movieImg.src = data.films[i].img_url;
      var moviesDetails = document.querySelector("#moviesDetails");
      var moviesDetailsOverlay = document.querySelector("#moviesDetailsOverlay");
      var moviesDetails__close = document.querySelector("#moviesDetails__close");

      indexMemo[i].addEventListener("click", function() {
        moviesDetails.classList.toggle("closed");
        moviesDetailsOverlay.classList.toggle("closed");
        var moviesDetailsImg = document.querySelector('.moviesDetails__img');
        var title = document.querySelector('.moviesDetails__title');
        var category = document.querySelector('.moviesDetails__category');
        var duration = document.querySelector('.moviesDetails__duration');
        var description = document.querySelector('.moviesDetails__description');
        var langage = document.querySelector('.moviesDetails__langage');
        var year = document.querySelector('.moviesDetails__year');
        moviesDetailsImg.src = data.films[i].img_url;
        title.textContent = data.films[i].title;
        category.textContent = ' ' + data.films[i].category;
        duration.textContent = data.films[i].duration;
        description.textContent = data.films[i].description;
        langage.textContent = ' ' + data.films[i].audio_language;
        year.textContent = ' ' + data.films[i].year;
      });
    }
}
