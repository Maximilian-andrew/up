document.addEventListener('DOMContentLoaded', function() {
  const videoGrid = document.getElementById('videoGrid');

  const starWarsMovies = [
    { title: 'Star Wars: Episode IV - Eine neue Hoffnung (1977)', thumbnail: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQGUQ3XkXw07T5FWPPaNkwfM84bRBu3rBk5YKhUS9959jXeUT-r', videoUrl: 'video1.mp4' },
    { title: 'Star Wars: Episode V - Das Imperium schlägt zurück (1980)', thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMA8KLs_FGgJWXm99_cazwyBPr4c-oeVpeJUn9zx4aviDv_PNh', videoUrl: 'video2.mp4' },
    { title: 'Star Wars: Episode VI - Die Rückkehr der Jedi-Ritter (1983)', thumbnail: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTpGhMCCMyJsF5FNgNi0_Jzs3sDKnt7LrifL82aXuvLzgIzS0At', videoUrl: 'video3.mp4' },
    { title: 'Star Wars: Episode I - Die dunkle Bedrohung (1999)', thumbnail: 'https://www.schnittberichte.com/www/SBs/563/cover.jpg', videoUrl: 'video4.mp4' },
    { title: 'Star Wars: Episode II - Angriff der Klonkrieger (2002)', thumbnail: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSHFm3utUkbjIPzXrUralUrVwY7jnDA5ckXaqvqST_B6w8P07yr', videoUrl: 'video5.mp4' },
    { title: 'Star Wars: Episode III - Die Rache der Sith (2005)', thumbnail: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQXV7ErvPWU31C2fQDhic8GOkA_w93o7geHIhKJsjcJtzy7Gyf3', videoUrl: 'video6.mp4' },
    { title: 'Star Wars: Episode VII - Das Erwachen der Macht (2015)', thumbnail: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS6qFyKyks33FbFY42nW6GNDPFlCQG1TnE6zaktwCS2Wb4VVW5X', videoUrl: 'video7.mp4' },
    { title: 'Star Wars: Episode VIII - Die letzten Jedi (2017)', thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdsp5CR3U7LY8H6SayyT5gB4lHVgRtsYM4LpO055kE7qbrr41B', videoUrl: 'video8.mp4' },
    { title: 'Star Wars: Episode IX - Der Aufstieg Skywalkers (2019)', thumbnail: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR0pOT0eeRv9nDy7YJ6Gx46CWfA80NnJOoBQiiWND-Uw0yfOTqA', videoUrl: 'video9.mp4' }
    // Weitere Filme hinzufügen
  ];

  // Filme nach dem Veröffentlichungsdatum sortieren
  starWarsMovies.sort(function(a, b) {
    const releaseYearA = parseInt(a.title.match(/\((\d+)\)/)[1]);
    const releaseYearB = parseInt(b.title.match(/\((\d+)\)/)[1]);
    return releaseYearA - releaseYearB;
  });

  function generateVideoGrid() {
    videoGrid.innerHTML = '';

    starWarsMovies.forEach(function(movie) {
      const videoItem = document.createElement('div');
      videoItem.classList.add('video-item');

      const thumbnailImg = document.createElement('img');
      thumbnailImg.src = movie.thumbnail;
      thumbnailImg.alt = movie.title;
      thumbnailImg.addEventListener('click', function() {
        window.location.href = movie.videoUrl;
      });

      const title = document.createElement('p');
      title.textContent = movie.title;

      videoItem.appendChild(thumbnailImg);
      videoItem.appendChild(title);

      videoGrid.appendChild(videoItem);
    });
  }

  generateVideoGrid();
});
