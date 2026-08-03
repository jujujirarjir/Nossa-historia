/* =====================================================
   PÁGINAS
===================================================== */

const pages = document.querySelectorAll(".page");

const navigationItems =
    document.querySelectorAll(".navigation-item");


/* =====================================================
   MOSTRAR PÁGINA
===================================================== */

function showPage(pageId) {

    pages.forEach((page) => {

        page.classList.remove("active-page");

    });


    const selectedPage =
        document.getElementById(pageId);


    if (selectedPage) {

        selectedPage.classList.add("active-page");

    }


    if (bottomPlayer) {

        if (pageId === "songPage") {

            bottomPlayer.style.display = "none";

        } else {

            bottomPlayer.style.display = "";

        }

    }


    updateNavigation(pageId);


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =====================================================
   NAVEGAÇÃO INFERIOR
===================================================== */

function updateNavigation(pageId) {

    navigationItems.forEach((item) => {

        item.classList.remove("active");


        if (item.dataset.page === pageId) {

            item.classList.add("active");

        }

    });

}



/* =====================================================
   BOTÕES DATA-PAGE
===================================================== */

const pageButtons =
    document.querySelectorAll("[data-page]");


pageButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const targetPage =
            button.dataset.page;


        if (targetPage) {

            showPage(targetPage);

        }

    });

});



/* =====================================================
   JULIANA E GUSTAVO
===================================================== */

const artistLinks =
    document.querySelectorAll(".artist-link");


artistLinks.forEach((link) => {

    link.addEventListener("click", () => {

        showPage("artistPage");

    });

});


/* =====================================================
   ELEMENTOS DA PÁGINA DA MÚSICA
===================================================== */

const songPageTitle =
    document.getElementById("songPageTitle");

const songPageImage =
    document.getElementById("songPageImage");

const songPageLetter =
    document.getElementById("songPageLetter");

const bottomPlayerTitle =
    document.getElementById("bottomPlayerTitle");

const bottomPlayerArtist =
    document.getElementById("bottomPlayerArtist");

const bottomPlayerImage =
    document.getElementById("bottomPlayerImage");

const bottomPlayer =
    document.querySelector(".bottom-player");


/* =====================================================
   MÚSICAS DA PÁGINA DO ARTISTA
===================================================== */

const songRows =
    document.querySelectorAll(".song-row");


let currentSongIndex =
    Math.floor(Math.random() * songRows.length);


if (bottomPlayerTitle) {

    bottomPlayerTitle.textContent =
        "Embalo";

}


if (bottomPlayerImage) {

    bottomPlayerImage.src =
        "assets/embalo.jpg";

}


if (bottomPlayerArtist) {

    bottomPlayerArtist.textContent =
        "Ryu, The Runner, Teto, Yunk vino";

}


songRows.forEach((song, index) => {

    song.addEventListener("click", () => {

        currentSongIndex = index;


        const songName =
            song.dataset.song;

        const songImage =
            song.dataset.image;

        const songArtist =
            song.dataset.artist;

        const songLetter =
            song.dataset.letter;


        if (songName && songPageTitle) {

            songPageTitle.textContent =
                songName;

        }


        if (songImage && songPageImage) {

            songPageImage.src =
                songImage;

        }


        if (songName && bottomPlayerTitle) {

            bottomPlayerTitle.textContent =
                songName;

        }


        if (songImage && bottomPlayerImage) {

            bottomPlayerImage.src =
                songImage;

        }


        if (songArtist && bottomPlayerArtist) {

            bottomPlayerArtist.textContent =
                songArtist;

        }


        if (songLetter && songPageLetter) {

            songPageLetter.textContent =
                songLetter;

        }


        showPage("songPage");

    });

});



/* =====================================================
   PLAY PRINCIPAL
===================================================== */

const mainPlayButton =
    document.querySelector(".main-play-button");


if (mainPlayButton) {

    mainPlayButton.addEventListener("click", () => {

        const firstSong =
            document.querySelector(".song-row");
            currentSongIndex = 0;


        if (firstSong) {

            const songName =
                firstSong.dataset.song;

            const songImage =
                firstSong.dataset.image;

            const songArtist =
                firstSong.dataset.artist;

            const songLetter =
                firstSong.dataset.letter;


            if (songPageTitle) {

                songPageTitle.textContent =
                    songName;

            }


            if (songPageImage) {

                songPageImage.src =
                    songImage;

            }


            if (bottomPlayerTitle) {

                bottomPlayerTitle.textContent =
                    songName;

            }


            if (bottomPlayerImage) {

                bottomPlayerImage.src =
                    songImage;

            }

        }
         isPlaying = !isPlaying;

         updatePlayButtons();

        showPage("songPage");

    });

}
/* =====================================================
   PLAYER FIXO
===================================================== */

const bottomPlayButton =
    document.querySelector(".bottom-play");

const bigPlayButton =
    document.querySelector(".big-play");

let isPlaying = false;


function updatePlayButtons() {

    const symbol =
        isPlaying ? "❚❚" : "▶";


    if (bottomPlayButton) {

        bottomPlayButton.textContent =
            symbol;

    }


    if (mainPlayButton) {

        mainPlayButton.textContent =
            symbol;

    }


    if (bigPlayButton) {

        bigPlayButton.textContent =
            symbol;

    }

}


if (bottomPlayButton) {

    bottomPlayButton.addEventListener("click", () => {

        isPlaying = !isPlaying;

        updatePlayButtons();

        showPage("songPage");

    });

}


if (bigPlayButton) {

    bigPlayButton.addEventListener("click", () => {

        isPlaying = !isPlaying;

        updatePlayButtons();

    });

}
/* =====================================================
   FILTROS
===================================================== */

const filters =
    document.querySelectorAll(".filter");


filters.forEach((filter) => {

    filter.addEventListener("click", () => {

        filters.forEach((item) => {

            item.classList.remove("active");

        });


        filter.classList.add("active");

    });

});



/* =====================================================
   NAVEGAÇÃO INFERIOR
===================================================== */

navigationItems.forEach((item) => {

    item.addEventListener("click", () => {

        const targetPage =
            item.dataset.page;


        if (targetPage) {

            showPage(targetPage);

        }

    });

});
/* =====================================================
   PRÓXIMA E ANTERIOR
===================================================== */

const nextSongButton =
    document.getElementById("nextSong");

const previousSongButton =
    document.getElementById("previousSong");


function changeSong(index) {

    if (
        index < 0 ||
        index >= songRows.length
    ) {
        return;
    }


    const song =
        songRows[index];


    const songName =
        song.dataset.song;


    const songImage =
        song.dataset.image;


    const songArtist =
        song.dataset.artist;


     const songLetter =
        song.dataset.letter;


    if (!songName || !songImage) {

        return;

    }


    currentSongIndex =
        index;


    if (songPageTitle) {

        songPageTitle.textContent =
            songName;

    }


    if (songPageImage) {

        songPageImage.src =
            songImage;

    }


    if (bottomPlayerTitle) {

        bottomPlayerTitle.textContent =
            songName;

    }


    if (bottomPlayerImage) {

        bottomPlayerImage.src =
            songImage;

    }


    if (bottomPlayerArtist) {

        bottomPlayerArtist.textContent =
         songArtist;

    }


    if (songLetter && songPageLetter) {

       songPageLetter.textContent =
         songLetter;

    }

}


/* PRÓXIMA */

if (nextSongButton) {

    nextSongButton.addEventListener("click", () => {

        const nextIndex =
            currentSongIndex + 1;


        if (nextIndex < songRows.length) {

            changeSong(nextIndex);

        }

    });

}


/* ANTERIOR */

if (previousSongButton) {

    previousSongButton.addEventListener("click", () => {

        const previousIndex =
            currentSongIndex - 1;


        if (previousIndex >= 0) {

            changeSong(previousIndex);

        }

    });

}