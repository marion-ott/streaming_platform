// Function to scroll down to Category Section.
var categoryBtn = document.querySelector('.header__nav');
categoryBtn.addEventListener('click', function() {
  setTimeout(function() {window.scrollTo(0, 2150);},1)
});

//Function Carousel
var btn_left = document.querySelector('.left');
var btn_right = document.querySelector('.right');
var imgs = document.querySelectorAll('.carousel__img');
var wrap = document.querySelector('.carousel__content');
var counter = 0;
var wrap_width = wrap.offsetWidth;
wrap.style.width = (wrap_width * imgs.length) + 'px';
btn_left.addEventListener('click', function() {
  if (counter > 0) {
    counter--;
  } else {
    counter = imgs.length - 1;
    }
  wrap.style.marginLeft = (-wrap_width * counter) + 'px';
});
btn_right.addEventListener('click', function() {
  if (counter < imgs.length - 1) {
    counter++;
  } else {
    counter = 0;
    }
  wrap.style.marginLeft = (-wrap_width * counter) + 'px';
});

// Function to open/close the movie details section
function movieDetails() {
  moviesDetails__close.addEventListener("click", function() {
    moviesDetails.classList.add("closed");
    moviesDetailsOverlay.classList.add("closed");
    video.currentTime = 0;
    if (!video.paused) {
      togglePlay();
    };
  });
  moviesDetailsOverlay.addEventListener("click", function() {
    moviesDetails.classList.add("closed");
    moviesDetailsOverlay.classList.add("closed");
    video.currentTime = 0;
    if (!video.paused) {
      togglePlay();
    };
  });
}


var allMoviesContainer = document.querySelector('.allMovies__moviesContainer');
window.addEventListener('DOMContentLoaded', function (event) {
  var memo = [];
    for (let i = 0; i < data.films.length; i++) {
      var movieDisplay = document.createElement("DIV");
      var movieImg = document.createElement("IMG");
      var moviePlay = document.createElement("P");
      allMoviesContainer.appendChild(movieDisplay);
      memo.push(movieDisplay);
      movieDisplay.classList.add('allMovies__moviesItems');
      movieDisplay.appendChild(moviePlay);
      moviePlay.classList.add('allMovies__moviesPlay');
      moviePlay.textContent = "▶︎";
      movieDisplay.appendChild(movieImg);
      movieImg.classList.add('allMovies__moviesImg');
      movieImg.src = data.films[i].img_url;
      var moviesDetails = document.querySelector("#moviesDetails");
      var moviesDetailsOverlay = document.querySelector("#moviesDetailsOverlay");
      var moviesDetails__close = document.querySelector("#moviesDetails__close");

      memo[i].addEventListener("click", function() {
        moviesDetails.classList.toggle("closed");
        moviesDetailsOverlay.classList.toggle("closed");
        var moviesDetailsPlayer = document.querySelector('.player__video');
        var title = document.querySelector('.moviesDetails__title');
        var category = document.querySelector('.moviesDetails__category');
        var duration = document.querySelector('.moviesDetails__duration');
        var description = document.querySelector('.moviesDetails__description');
        var langage = document.querySelector('.moviesDetails__langage');
        var year = document.querySelector('.moviesDetails__year');
        moviesDetailsPlayer.src = 'https://7h3wh1t3r4bb17.pw/hetic-si3/data/'+data.films[i].src;
        title.textContent = data.films[i].title;
        category.textContent = ' ' + data.films[i].category;
        duration.textContent = data.films[i].duration;
        description.textContent = data.films[i].description;
        langage.textContent = ' ' + data.films[i].audio_language;
        year.textContent = ' ' + data.films[i].year;
        togglePlay();
      });
      movieDetails();
    }
  });



var categories = document.querySelectorAll('.categories__categoriesItems');

for (let i = 0; i < categories.length; i++) {
  categories[i].addEventListener('click', function(event) {
    event.preventDefault();
    var movieContainer = document.querySelector('.categories__moviesContainer');
    movieContainer.innerHTML = "";
    var indexMemo = [];
    for (var a = 0; a < data.films.length; a++) {
      if (categories[i].dataset.category == data.films[a].category) {
        var movieDisplay = document.createElement("DIV");
        var movieImg = document.createElement("IMG");
        var moviePlay = document.createElement("P");
        movieContainer.appendChild(movieDisplay);
        movieDisplay.classList.add('categories__moviesItems');
        movieDisplay.appendChild(moviePlay);
        moviePlay.classList.add('categories__moviesPlay');
        moviePlay.textContent = "▶︎";
        movieDisplay.appendChild(movieImg);
        movieImg.classList.add('categories__moviesImg');
        movieImg.src = data.films[a].img_url;
        indexMemo.push(a);
      }
      }
      var moviesOnDisplay = document.querySelectorAll('.categories__moviesItems');
      for (let index = 0; index < moviesOnDisplay.length; index++) {
        var moviesDetails = document.querySelector("#moviesDetails");
        var moviesDetailsOverlay = document.querySelector("#moviesDetailsOverlay");
        var moviesDetails__close = document.querySelector("#moviesDetails__close");

        moviesOnDisplay[index].addEventListener("click", function() {
          moviesDetails.classList.toggle("closed");
          moviesDetailsOverlay.classList.toggle("closed");
          var moviesDetailsPlayer = document.querySelector('.player__video');
          var title = document.querySelector('.moviesDetails__title');
          var category = document.querySelector('.moviesDetails__category');
          var duration = document.querySelector('.moviesDetails__duration');
          var description = document.querySelector('.moviesDetails__description');
          var langage = document.querySelector('.moviesDetails__langage');
          var year = document.querySelector('.moviesDetails__year');
          moviesDetailsPlayer.src = 'https://7h3wh1t3r4bb17.pw/hetic-si3/data/'+data.films[indexMemo[index]].src;
          title.textContent = data.films[indexMemo[index]].title;
          category.textContent = ' ' + data.films[indexMemo[index]].category;
          duration.textContent = data.films[indexMemo[index]].duration;
          description.textContent = data.films[indexMemo[index]].description;
          langage.textContent = ' ' + data.films[indexMemo[index]].audio_language;
          year.textContent = ' ' + data.films[indexMemo[index]].year;
          togglePlay();
        });
        movieDetails()
      }
    });
  }
