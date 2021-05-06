const genres = document.querySelectorAll('.box-wrap')

genres.forEach((genre) => {
    genre.addEventListener('click', () => {
        genre.classList.remove('box-wrap')
    })
})