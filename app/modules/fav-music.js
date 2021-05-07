export function userSelect(){
    const genres = document.querySelectorAll('.box-wrap')
    genres.forEach((genre) => {
        genre.addEventListener('click', () => {
            genre.classList.toggle('box-wrap')
            console.log(genre)
            console.log(genre.dataset.genre)
        })
    })
} 

const favMusicPage = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="../index.css" />

    <title>Favourite Music Select</title>
  </head>
  <body>
    <header class="header">
      <nav class="nav">
        <div class="nav__logo">Vibe</div>
        <ul class="nav__nav-list">
          <li class="nav__nav-item">
            <a href="" class="nav__link">About</a>
            <a href="" class="nav__link">Developers</a>
            <a href="" class="nav__link cta">Get a Playlist</a>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <div class="container">
        <div class="title">
          <h2>What's your favourite music?</h2>
          <span>Select at least 3 genres</span>
        </div>

        <!-- /** First Row **/ -->
        <div class="content first-row">
          <div class="box-wrap" data-genre="Metal">
            <i class="fas fa-check-circle fa-4x"></i>
            <div class="square metal">
              <div class="circle">
                <div class="inner-cirlce"></div>
                <h4 class="genre-name">Metal</h4>
              </div>
            </div>
          </div>

          <div class="box-wrap" data-genre="Rap">
            <i class="fas fa-check-circle fa-4x"></i>
            <div class="square rap">
              <div class="circle">
                <div class="inner-cirlce"></div>
                <h4 class="genre-name">Rap</h4>
              </div>
            </div>
          </div>

          <div class="box-wrap" data-genre="Alternative">
            <i class="fas fa-check-circle fa-4x"></i>
            <div class="square alternative">
              <div class="circle">
                <div class="inner-cirlce"></div>
                <h4 class="genre-name">Alternative</h4>
              </div>
            </div>
          </div>

          <div class="box-wrap" data-genre="Pop">
            <i class="fas fa-check-circle fa-4x"></i>
            <div class="square pop">
              <div class="circle">
                <div class="inner-cirlce"></div>
                <h4 class="genre-name">Pop</h4>
              </div>
            </div>
          </div>
        </div>

        <!-- /** second Row **/ -->
        <div class="content second-row">
          <div class="box-wrap" data-genre="Rock">
            <i class="fas fa-check-circle fa-4x"></i>
            <div class="square rock">
              <div class="circle">
                <div class="inner-cirlce"></div>
                <h4 class="genre-name">Rock</h4>
              </div>
            </div>
          </div>

          <div class="box-wrap" data-genre="Techno">
            <i class="fas fa-check-circle fa-4x"></i>
            <div class="square techno">
              <div class="circle">
                <div class="inner-cirlce"></div>
                <h4 class="genre-name">Techno</h4>
              </div>
            </div>
          </div>

          <div class="box-wrap" data-genre="Country">
            <i class="fas fa-check-circle fa-4x"></i>
            <div class="square country">
              <div class="circle">
                <div class="inner-cirlce"></div>
                <h4 class="genre-name">Country</h4>
              </div>
            </div>
          </div>

          <div class="box-wrap" data-genre="Jazz">
            <i class="fas fa-check-circle fa-4x"></i>
            <div class="square jazz">
              <div class="circle">
                <div class="inner-cirlce"></div>
                <h4 class="genre-name">Jazz</h4>
              </div>
            </div>
          </div>
        </div>

        <!-- /** Third Row **/ -->
        <div class="content third-row">
          <div class="box-wrap" data-genre="Indie">
            <i class="fas fa-check-circle fa-4x"></i>
            <div class="square indie">
              <div class="circle">
                <div class="inner-cirlce"></div>
                <h4 class="genre-name">Indie</h4>
              </div>
            </div>
          </div>

          <div class="box-wrap" data-genre="Hip-Hop">
            <i class="fas fa-check-circle fa-4x"></i>
            <div class="square hip-hop">
              <div class="circle">
                <div class="inner-cirlce"></div>
                <h4 class="genre-name">Hip-Hop</h4>
              </div>
            </div>
          </div>

          <div class="box-wrap" data-genre="Reggae">
            <i class="fas fa-check-circle fa-4x"></i>
            <div class="square reggae">
              <div class="circle">
                <div class="inner-cirlce"></div>
                <h4 class="genre-name">Reggae</h4>
              </div>
            </div>
          </div>

          <div class="box-wrap" data-genre="Acoustic">
            <i class="fas fa-check-circle fa-4x"></i>
            <div class="square acoustic">
              <div class="circle">
                <div class="inner-cirlce"></div>
                <h4 class="genre-name">Acoustic</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a class="next" href="">Next></a>
    </main>

    <script src="../app/index.js"></script>
    <script src="../modules/fav-music.js" type="module"></script>
  </body>
</html>

`
localStorage.setItem("content", favMusicPage);
// window.localStorage.clear();
