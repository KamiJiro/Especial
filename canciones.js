const songs = [
  {
    title: "Tu jardín con enanitos - Melendi",
    genre: "Pop",
    image: "https://i.scdn.co/image/ab67616d0000b273420c7ba982f6f92351fc0a2b",
    alt: "Portada",
    link: "https://open.spotify.com/intl-es/track/6yCjU5j6YHbux2VQCBTTE1?si=31ee0c0306024a65",
    chorus: '"Quiero ser tu medicina, tus silencios y tus gritos Tu ladrón, tu policía, tu jardín con enanitos Quiero ser la escoba que en tu vida barra la tristeza Quiero ser tu incertidumbre y sobretodo tu certeza"'
  },{
    title: "RUN - OneRepublic",
    genre: "Pop",
    image: "https://i1.sndcdn.com/artworks-HnqgxHpZyhjr4wMK-qYFRqQ-t500x500.jpg",
    alt: "Portada",
    link: "https://open.spotify.com/intl-es/track/6KL88T4Ma4ABXqzgUoEwkd?si=72aab4ffba744493",
    chorus: '"If I learned one lesson, count your blessings Look to the rising sun and run, run, run"'
  },
  {
    title: "Plan - Alex Ponce",
    genre: "Pop",
    image: "https://akamai.sscdn.co/uploadfile/letras/albuns/a/6/6/1/1993691697718087.jpg",
    alt: "Portada",
    link: "https://open.spotify.com/intl-es/track/1udeZVMClO0LEIgwgnueOx?si=9eaabb6ca37949d7",
    chorus: '"Y dime cual es el plan ¿Te quedas o te vas? Si estamos en son de amigos O de intimidad Si esto que estamos sintiendo Es amor de verdad"'
  },
  {
    title: "Traicion - Alex Ponce",
    genre: "Pop",
    image: "https://images.genius.com/eaeee7b8bda2dd41617f0424ccdaf2bb.1000x1000x1.png",
    alt: "Portada ",
    link: "https://open.spotify.com/intl-es/track/0VGmiApaRPcTcNndzAm1Zz?si=86b9299e80d947e1",
    chorus: '"¿Te gustó sentirte la antagonista? ¿Valió la pena un minuto de oxitocina? ¿Cómo se sintió perder al protagonista? ¿Eso fue parte de tu función?"'
  },
  {
    title: "Te pienso a cada hora - Dvicio",
    genre: "Rock español",
    image: "https://cdn-p.smehost.net/sites/5b3bac59eb36401694af3a241173447f/wp-content/uploads/2022/02/1a6ca3a0-da96-442d-8a0b-aa11cec1aab6.jpg",
    alt: "Portada",
    link: "https://open.spotify.com/intl-es/track/1J9wWlo3oI3HjPnp48L3XL?si=6ce00c8198d54299",
    chorus: '"Si no se va contigo Me lleno de vacíos Tu recuerdo no se va No se va contigo"'
  },
  {
    title: "Estrella - Dani Ribba",
    genre: "Argentinian Trap",
    image: "https://i1.sndcdn.com/artworks-v8JlK07UIJ1m-0-t500x500.jpg",
    alt: "Portada ",
    link: "https://open.spotify.com/intl-es/track/3X3Cq9mu8g0rDRimOABTDA?si=843d8332d93548d7",
    chorus: '"Ahora que está sola está buscando esa estrella La misma que de noche alumbraba sus huellas"'
  },
  {
    title: "En el pasado - Alex Ponce",
    genre: "Pop",
    image: "https://cdn-images.dzcdn.net/images/cover/29fb51241f766e5794e6c325cb346e68/0x1900-000000-80-0-0.jpg",
    alt: "Portada",
    link: "https://open.spotify.com/intl-es/track/5yaLbxJA06rXg1W3jI7M5Q?si=c3471db22aea4c79",
    chorus: '"Duele reconocer Que no eres la correcta Y veo en cámara lenta Cómo tú te quedas en el pasado En el pasado"'
  },
  {
    title: "Fromula - Alex Ponce",
    genre: "Tropipop",
    image: "https://i.ytimg.com/vi/vYbc8vYR-KU/maxresdefault.jpg",
    alt: "Portada",
    link: "https://open.spotify.com/intl-es/track/2vkShXgLEKbmTX6fe2EPzN?si=9810f436796c45e6",
    chorus: '"Y dime, ¿cuál es la fórmula para olvidar Todas las cosas que tú me prometiste? Porque sin eso no lo voy a lograr"'
  },
  {
    title: "Luna - Feid ,ATL Jacob",
    genre: "Música urbana",
    image: "https://pbs.twimg.com/media/GWBQPTuW0AAYDtg.jpg",
    alt: "Portada",
    link: "https://open.spotify.com/intl-es/track/7bywjHOc0wSjGGbj04XbVi?si=36c3870d5e984aff",
    chorus: '"Y-y de mí Y-y yo de ti No supe qué día te olvidaste de mí Y-y de mí Y-y yo de ti No supe qué día te olvidaste de mí"'
  },
  {
    title: "Descomplicado - Alex Ponce",
    genre: "Pop",
    image: "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/f2/65/53/f265532c-7718-ed35-31a6-45d91293e96c/196922136504_Cover.jpg/600x600bf-60.jpg",
    alt: "Portada",
    link: "https://open.spotify.com/intl-es/track/3Nmup0C9bhnS6OOOYEukRY?si=134600a89654483c",
    chorus: '"Conmigo no vas a caer en ese engaño Tú y yo por una noche, no hay por qué hacer daño Y dar mala fama al amor Y dar mala fama al amor"'
  },
  {
    title: "Para amarte a ti - KHEA , Tiago PZK",
    genre: "Música urbana",
    image: "https://i.scdn.co/image/ab67616d0000b27338b4dd9ad8c72222c635a71d",
    alt: "Portada",
    link: "https://open.spotify.com/intl-es/track/1n0KJruSFNN0SyNbnJLbyX?si=ea3fb6aca6954b59",
    chorus: '"Les daría mis ojos para verte Y mis manos para tocar tu piel (yeah) Y este corazón roto sin suerte A ver si comprenden"'
  },
  {
    title: "Derretirme - Alex Ponce",
    genre: "Pop",
    image: "https://cdn-images.dzcdn.net/images/cover/02b591b848f4082c44130af99d615fbd/0x1900-000000-80-0-0.jpg",
    alt: "Portada ",
    link: "https://open.spotify.com/intl-es/track/413f0rzCl9FuqHqx4eKuw8?si=f518fe35337c463f",
    chorus: '"Eres lo que yo busqué, por fin a ti te encontré Tú eres la pieza perdida faltante pa completarme Siempre te extraño tan mami, cuando te vas yo no sé Si estás en París o Miami posando pa derretirme"'
  },
  {
    title: "DREAM - OneRepublic",
    genre: "Pop",
    image: "https://i.ytimg.com/vi/E1yuXym9Jgg/maxresdefault.jpg",
    alt: "Portada",
    link: "https://open.spotify.com/intl-es/track/7kAykEQsPsC67ML8qQmOSW?si=11f7338146a845ff",
    chorus: '"In my dark days and night It might ve been just a dream In these dark days and night Ill be more than what you see"'
  }
];

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('songs-container');
  const nameInput = document.getElementById('name-input');
  const genreSelect = document.getElementById('genre-select');

  function createCard(song) {
    const article = document.createElement('article');
    article.className = 'card';
    article.tabIndex = 0;

    const imgWrapper = document.createElement('div');
    imgWrapper.className = 'img-wrapper';

    const img = document.createElement('img');
    img.src = song.image;
    img.alt = song.alt;
    imgWrapper.appendChild(img);

    const content = document.createElement('div');
    content.className = 'content';

    const title = document.createElement('h2');
    title.className = 'song-title';
    title.textContent = song.title;

    const link = document.createElement('a');
    link.className = 'btn-listen';
    link.href = song.link;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.setAttribute('aria-label', `Escuchar ${song.title} en Spotify`);
    link.textContent = 'Escuchar';

    const chorus = document.createElement('p');
    chorus.className = 'chorus';
    chorus.textContent = song.chorus;

    content.appendChild(title);
    content.appendChild(link);
    content.appendChild(chorus);

    article.appendChild(imgWrapper);
    article.appendChild(content);

    return article;
  }

  function renderSongs(filteredSongs) {
    container.innerHTML = '';
    if (filteredSongs.length === 0) {
      container.innerHTML = '<p style="color:var(--text-muted);text-align:center;">No se encontraron canciones.</p>';
      return;
    }
    filteredSongs.forEach(song => {
      const card = createCard(song);
      container.appendChild(card);
    });
  }

  function filterSongs() {
    const search = nameInput.value.toLowerCase();
    const genre = genreSelect.value;
    const filtered = songs.filter(song => {
      const matchesName = song.title.toLowerCase().includes(search);
      const matchesGenre = !genre || song.genre === genre;
      return matchesName && matchesGenre;
    });
    renderSongs(filtered);
  }

  nameInput.addEventListener('input', filterSongs);
  genreSelect.addEventListener('change', filterSongs);

  renderSongs(songs);
});