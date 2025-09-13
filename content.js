const DEBUG = {
    ICON: true,    // For icon-related debugging
    SETTINGS: false, // For general Letterboxd tweaks debugging
};

// Add debug logging helper function
function debugLog(category, message, ...args) {
    if (DEBUG[category]) {
        console.log(`[${category}] ${message}`, ...args);
    }
}

const ICON_CONFIG = {
    crown: {
        url: 'film_titles_top-2500-highest-rated-narrative-feature.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/top-2500-highest-rated-narrative-feature/",
            imgSrc: "crown.png",
            height: "18",
            width: "18",
            className: "crown-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Top 5000"
        })
    },
    fire: {
        url: 'film_titles_top-2500-most-popular-narrative-feature-films.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/top-2500-most-popular-narrative-feature-films/",
            imgSrc: "fire.png",
            height: "12",
            width: "12",
            className: "fire-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Popular 5000"
        })
    },
    palm: {
        url: 'film_titles_cannes-palme-dor-winners.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/brsan/list/cannes-palme-dor-winners/",
            imgSrc: "palm.png",
            height: "16",
            width: "16",
            className: "palm-icon positioned-icon",
            showRanking: false,
            tooltipText: "Cannes Palme d'Or Winner"
        })
    },
    money: {
        url: 'film_titles_all-time-worldwide-box-office.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/matthew/list/all-time-worldwide-box-office/",
            imgSrc: "money.png",
            height: "16",
            width: "16",
            className: "money-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Box Office 100"
        })
    },
    moneyAlt: {
        url: 'film_titles_top-250-highest-grossing-movies-of-all-time-1.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/250-highest-grossing-movies-of-all-time/",
            imgSrc: "money.png",
            height: "16",
            width: "16",
            className: "money-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Box Office 250"
        })
    },
    nomOscar: {
        url: 'film_titles_every-oscar-nominee-ever.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/samuelelliott/list/every-oscar-nominee-ever/",
            imgSrc: "nom_oscar.png",
            height: "16",
            width: "16",
            className: "nom-oscar-icon positioned-icon",
            showRanking: false,
            tooltipText: "Oscar Nominee"
        })
    },
    winOscar: {
        url: 'film_titles_every-oscar-winner-ever-1.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/floorman/list/every-oscar-winner-ever-1/",
            imgSrc: "win_oscar.png",
            height: "16",
            width: "16",
            className: "win-oscar-icon positioned-icon",
            showRanking: false,
            tooltipText: "Oscar Winner"
        })
    },
    imdb: {
        url: 'film_titles_imdb-top-250.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/dave/list/imdb-top-250/",
            imgSrc: "imdb.png",
            height: "16",
            width: "16",
            className: "imdb-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the IMDb Top 250"
        })
    },
    edgar: {
        url: 'film_titles_edgar-wrights-1000-favorite-movies.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/crew/list/edgar-wrights-1000-favorite-movies/",
            imgSrc: "edgar.png",
            height: "16",
            width: "16",
            className: "edgar-icon floating-icon",
            showRanking: false,
            tooltipText: "Edgar Wright's 1000 Favorite Movies"
        })
    },
    movies1001: {
        url: 'film_titles_1001-movies-you-must-see-before-you-die-2024.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/gubarenko/list/1001-movies-you-must-see-before-you-die-2024/",
            imgSrc: "1001.png",
            height: "16",
            width: "16",
            className: "1001-icon floating-icon",
            showRanking: false,
            tooltipText: "1001 Movies You Must See Before You Die"
        })
    },
    animation: {
        url: 'film_titles_letterboxd-100-animation.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/lifeasfiction/list/letterboxd-100-animation/",
            imgSrc: "animation.png",
            height: "16",
            width: "16",
            className: "animation-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Animation Top 100"
        })
    },
    documentary: {
        url: 'film_titles_official-top-250-documentary-films.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/jack/list/official-top-250-documentary-films/",
            imgSrc: "documentary.jpg",
            height: "16",
            width: "16",
            className: "documentary-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Documentary Top 250"
        })
    },
    AFI: {
        url: 'film_titles_afis-100-years100-movies-10th-anniversary.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/afi/list/afis-100-years100-movies-10th-anniversary/",
            imgSrc: "AFI.png",
            height: "16",
            width: "16",
            className: "afi-icon positioned-icon",
            showRanking: false,
            tooltipText: "AFI 100 Years 100 Movies"
        })
    },
    sightSound: {
        url: 'film_titles_sight-and-sounds-greatest-films-of-all-time.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bfi/list/sight-and-sounds-greatest-films-of-all-time/",
            imgSrc: "sight.png",
            height: "16",
            width: "16",
            className: "sight-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Sight & Sound Greatest Films of All Time"
        })
    },
    ebert: {
        url: 'film_titles_roger-eberts-great-movies.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/dvideostor/list/roger-eberts-great-movies/",
            imgSrc: "ebert.png",
            height: "16",
            width: "16",
            className: "ebert-icon positioned-icon",
            showRanking: false,
            tooltipText: "Roger Ebert's Great Movies"
        })
    },
    horror: {
        url: 'film_titles_letterboxds-top-250-horror-films.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/darrencb/list/letterboxds-top-250-horror-films/",
            imgSrc: "ghost.png",
            height: "16",
            width: "16",
            className: "horror-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Horror Top 250"
        })
    },
    heartEyes: {
        url: 'film_titles_official-top-250-films-with-the-most-fans.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/jack/list/official-top-250-films-with-the-most-fans/",
            imgSrc: "hearteyes.png",
            height: "16",
            width: "16",
            className: "hearteyes-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Letterboxd Fans Top 250"
        })
    },
    black: {
        url: 'film_titles_black-directors-the-official-top-100-narrative.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/jack/list/black-directors-the-official-top-100-narrative/",
            imgSrc: "black.png",
            height: "16",
            width: "16",
            className: "black-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Black Directors Top 100"
        })
    },
    pink: {
        url: 'film_titles_women-directors-the-official-top-250-narrative.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/jack/list/women-directors-the-official-top-250-narrative/",
            imgSrc: "pink.png",
            height: "16",
            width: "16",
            className: "pink-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Women Directors Top 250"
        })
    },
    poop: {
        url: 'film_titles_the-anti-letterboxd-250.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/louferrigno/list/the-anti-letterboxd-250/",
            imgSrc: "poop.png",
            height: "16",
            width: "16",
            className: "poop-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Anti-Letterboxd 250"
        })
    },
    toro: {
        url: 'film_titles_guillermo-del-toros-twitter-film-recommendations.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/ben_macdonald/list/guillermo-del-toros-twitter-film-recommendations/",
            imgSrc: "toro.png",
            height: "16",
            width: "16",
            className: "toro-icon positioned-icon",
            showRanking: false,
            tooltipText: "Guillermo del Toro's Twitter Recommendations"
        })
    },
    trueFilm: {
        url: 'film_titles_r-truefilm-canon-1000-films.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/momsaysitsok/list/r-truefilm-canon-1000-films/",
            imgSrc: "truefilm.png",
            height: "16",
            width: "16",
            className: "truefilm-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the r/TrueFilm Canon 1000"
        })
    },

    shorts: {
        url: 'film_titles_letterboxds-top-250-highest-rated-short-films.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/slinkyman/list/letterboxds-top-250-highest-rated-short-films/",
            imgSrc: "shorts.png",
            height: "16",
            width: "16",
            className: "shorts-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Short Films Top 250"
        })
    },
    wga101: {
        url: 'film_titles_writers-guild-of-america-101-greatest-screenplays.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/oneohtrix/list/writers-guild-of-america-101-greatest-screenplays/",
            imgSrc: "wga.png",
            height: "16",
            width: "16",
            className: "wga101-icon positioned-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the WGA's 101 Greatest Screenplays of the 21st Century"
        })
    },
    gray: {
        url: 'film_titles_letterboxd-top-250-films-history-collected.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/dave/list/letterboxd-top-250-films-history-collected/",
            imgSrc: "gray.png",
            height: "16",
            width: "16",
            className: "gray-icon positioned-icon",
            showRanking: false,
            tooltipText: "Previous Entry in the Letterboxd Top 250"
        })
    },
    thumbs: {
        url: 'film_titles_the-most-controversial-films-on-letterboxd.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/thisisdrew/list/the-most-controversial-films-on-letterboxd/",
            imgSrc: "thumbs.png",
            height: "16",
            width: "16",
            className: "thumbs-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Most Controversial Films on Letterboxd"
        })
    },
    scream: {
        url: 'film_titles_horror-movies-everyone-should-watch-at-least.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/browsehorror/list/horror-movies-everyone-should-watch-at-least/",
            imgSrc: "scream.png",
            height: "16",
            width: "16",
            className: "scream-icon positioned-icon",
            showRanking: false,
            tooltipText: "Horror Movies Everyone Should Watch at Least Once"
        })
    },
    ford: {
        url: 'film_titles_movies-that-i-highly-recommend.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/francisfcoppola/list/movies-that-i-highly-recommend/",
            imgSrc: "ford.png",
            height: "16",
            width: "16",
            className: "ford-icon positioned-icon",
            showRanking: false,
            tooltipText: "Francis Ford Coppola's Recommendations"
        })
    },
    nerd: {
        url: 'film_titles_top-5000-films-of-all-time-calculated.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/prof_ratigan/list/top-5000-films-of-all-time-calculated/",
            imgSrc: "nerd.png",
            height: "16",
            width: "16",
            className: "nerd-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Top 5000 Films (Calculated)"
        })
    },
    top10: {
        url: 'film_titles_top10ners-1000-greatest-films-of-all-time.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/top10ner/list/top10ners-1000-greatest-films-of-all-time/",
            imgSrc: "top10.png",
            height: "16",
            width: "16",
            className: "top10-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in Top10ner's 1000 Greatest Films"
        })
    },
    marty: {
        url: 'film_titles_martin-scorseses-film-school-the-85-films.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/pinheadlarry145/list/martin-scorseses-film-school-the-85-films/",
            imgSrc: "marty.png",
            height: "16",
            width: "16",
            className: "marty-icon positioned-icon",
            showRanking: false,
            tooltipText: "Martin Scorsese's Film School"
        })
    },
    rmovies: {
        url: 'film_titles_movies-everyone-should-watch-at-least-once.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/fcbarcelona/list/movies-everyone-should-watch-at-least-once/",
            imgSrc: "rmovies.jpg",
            height: "16",
            width: "16",
            className: "rmovies-icon positioned-icon",
            showRanking: false,
            tooltipText: "r/Movies Must Watch Films"
        })
    },
    fresh: {
        url: 'film_titles_rotten-tomatoes-300-best-movies-of-all-time.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/imthelizardking/list/rotten-tomatoes-300-best-movies-of-all-time/",
            imgSrc: "fresh.png",
            height: "16",
            width: "16",
            className: "fresh-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Rotten Tomatoes Top 300"
        })
    },
    register: {
        url: 'film_titles_the-complete-library-of-congress-national.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/elvisisking/list/the-complete-library-of-congress-national/",
            imgSrc: "register.png",
            height: "16",
            width: "16",
            className: "register-icon positioned-icon",
            showRanking: false,
            tooltipText: "Library of Congress National Film Registry"
        })
    },
    film: {
        url: 'film_titles_oscar-winners-best-picture.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/floorman/list/oscar-winners-best-picture/",
            imgSrc: "film.png",
            height: "16",
            width: "16",
            className: "film-icon positioned-icon",
            showRanking: false,
            tooltipText: "Oscar Best Picture Winner"
        })
    },
    oscar10: {
        url: 'film_titles_every-film-to-win-10-or-oscars.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/every-film-to-win-10-or-oscars/",
            imgSrc: "oscar10.png",
            height: "16",
            width: "16",
            className: "oscar10-icon positioned-icon",
            showRanking: false,
            tooltipText: "At Least 10 Oscars"
        })
    },
    oscar7: {
        url: 'film_titles_every-film-to-win-7-or-oscars.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/every-film-to-win-7-or-oscars/",
            imgSrc: "oscar7.png",
            height: "16",
            width: "16",
            className: "oscar7-icon positioned-icon",
            showRanking: false,
            tooltipText: "At Least 7 Oscars"
        })
    },
    oscar5: {
        url: 'film_titles_every-film-to-win-5-or-oscars.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/every-film-to-win-5-or-oscars/",
            imgSrc: "oscar5.png",
            height: "16",
            width: "16",
            className: "oscar5-icon positioned-icon",
            showRanking: false,
            tooltipText: "At Least 5 Oscars"
        })
    },
    oscar3: {
        url: 'film_titles_every-film-to-win-3-or-oscars.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/every-film-to-win-3-or-oscars/",
            imgSrc: "oscar3.png",
            height: "16",
            width: "16",
            className: "oscar3-icon positioned-icon",
            showRanking: false,
            tooltipText: "At Least 3 Oscars"
        })
    },
    comedy: {
        url: 'film_titles_top-100-highest-rated-stand-up-comedy-specials.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/top-100-highest-rated-stand-up-comedy-specials/",
            imgSrc: "comedy.png",
            height: "16",
            width: "16",
            className: "comedy-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Stand-Up Top 100"
        })
    },
    concert: {
        url: 'film_titles_top-100-concert-films-digital-albums.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/offensivename/list/top-100-concert-films-digital-albums/",
            imgSrc: "concert.png",
            height: "16",
            width: "16",
            className: "concert-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Concert Films Top 100"
        })
    },
    tv: {
        url: 'film_titles_letterboxds-top-250-highest-rated-narrative.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/slinkyman/list/letterboxds-top-250-highest-rated-narrative/",
            imgSrc: "tv.png",
            height: "16",
            width: "16",
            className: "tv-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the TV Miniseries Top 250"
        })
    },
    letterboxdTop250: {
        url: 'film_titles_top-250-highest-rated-things-on-letterboxd.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/top-250-highest-rated-things-on-letterboxd/",
            imgSrc: "letterboxd.png",
            height: "16",
            width: "16",
            className: "letterboxdtop250-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Top 250 Things on Letterboxd"
        })
    },
    inflate: {
        url: 'film_titles_highest-grossing-movies-of-all-time-adjusted.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/highest-grossing-movies-of-all-time-adjusted/",
            imgSrc: "inflate.png",
            height: "16",
            width: "16",
            className: "inflate-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Domestic Box Office Top 250 (Inflation Adjusted)"
        })
    },
    lion: {
        url: 'film_titles_golden-lion-winners.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/golden-lion-winners/",
            imgSrc: "lion.png",
            height: "16",
            width: "16",
            className: "lion-icon positioned-icon",
            showRanking: false,
            tooltipText: "Venice Film Festival Golden Lion Winner"
        })
    },
    bafta: {
        url: 'film_titles_all-bafta-best-film-award-winners.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bafta/list/all-bafta-best-film-award-winners/",
            imgSrc: "bafta.png",
            height: "16",
            width: "16",
            className: "bafta-icon positioned-icon",
            showRanking: false,
            tooltipText: "BAFTA Best Film Winner"
        })
    },
    goldend: {
        url: 'film_titles_golden-globe-award-for-best-motion-picture.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/edd_gosbender/list/golden-globe-award-for-best-motion-picture/",
            imgSrc: "goldend.png",
            height: "16",
            width: "16",
            className: "goldend-icon positioned-icon",
            showRanking: false,
            tooltipText: "Golden Globes Best Drama Winner"
        })
    },
    goldenc: {
        url: 'film_titles_golden-globe-award-for-best-motion-picture-1.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/edd_gosbender/list/golden-globe-award-for-best-motion-picture-1/",
            imgSrc: "goldenc.png",
            height: "16",
            width: "16",
            className: "goldenc-icon positioned-icon",
            showRanking: false,
            tooltipText: "Golden Globes Best Comedy/Musical Winner"
        })
    },
    bear: {
        url: 'film_titles_berlin-international-film-festival-golden.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/peterstanley/list/berlin-international-film-festival-golden/",
            imgSrc: "bear.png",
            height: "16",
            width: "16",
            className: "bear-icon positioned-icon",
            showRanking: false,
            tooltipText: "Berlin Film Festival Golden Bear Winner"
        })
    },
    gotham: {
        url: 'film_titles_gotham-awards-best-feature-winners.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/gotham-awards-best-feature-winners/",
            imgSrc: "gotham.png",
            height: "16",
            width: "16",
            className: "gotham-icon positioned-icon",
            showRanking: false,
            tooltipText: "Gotham Awards Best Feature Winner"
        })
    },
    lafca: {
        url: 'film_titles_every-los-angeles-film-critics-association.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/every-los-angeles-film-critics-association/",
            imgSrc: "lafca.png",
            height: "16",
            width: "16",
            className: "lafca-icon positioned-icon",
            showRanking: false,
            tooltipText: "Los Angeles Film Critics Association Best Film Winner"
        })
    },
    Nbr: {
        url: 'film_titles_every-national-board-of-review-best-film.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/every-national-board-of-review-best-film/",
            imgSrc: "nbr.png",
            height: "16",
            width: "16",
            className: "nbr-icon positioned-icon",
            showRanking: false,
            tooltipText: "National Board of Review Best Film Winner"
        })
    },
    nsf: {
        url: 'film_titles_every-national-society-of-film-critics-best.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/every-national-society-of-film-critics-best/",
            imgSrc: "nsf.png",
            height: "16",
            width: "16",
            className: "nsf-icon positioned-icon",
            showRanking: false,
            tooltipText: "National Society of Film Critics Best Film Winner" 
        })
    },
    nyfc: {
        url: 'film_titles_every-new-york-film-critics-circle-best-film.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/every-new-york-film-critics-circle-best-film/",
            imgSrc: "nyfc.png",
            height: "16",
            width: "16",
            className: "nyfc-icon positioned-icon",
            showRanking: false,
            tooltipText: "New York Film Critics Circle Best Film Winner" 
        })
    },
    annie: {
        url: 'film_titles_every-annie-best-animated-feature-winner.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/every-annie-best-animated-feature-winner/",
            imgSrc: "annie.png",
            height: "16",
            width: "16",
            className: "annie-icon positioned-icon",
            showRanking: false,
            tooltipText: "Annie Best Animated Feature Winner" 
        })
    },
    razzie: {
        url: 'film_titles_razzie-worst-picture.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/yuriaso/list/razzie-worst-picture/",
            imgSrc: "razzie.png",
            height: "16",
            width: "16",
            className: "razzie-icon positioned-icon",
            showRanking: false,
            tooltipText: "Razzies Worst Picture Winner"
        })
    },
    tiff: {
        url: 'film_titles_tiff-peoples-choice-award-winners.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/robertpace/list/tiff-peoples-choice-award-winners/",
            imgSrc: "tiff.png",
            height: "16",
            width: "16",
            className: "tiff-icon positioned-icon",
            showRanking: false,
            tooltipText: "TIFF People's Choice Award Winner"
        })
    },
    sundance: {
        url: 'film_titles_sundance-grand-jury-prize-winners.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/cinelove/list/sundance-grand-jury-prize-winners/",
            imgSrc: "sundance.png",
            height: "16",
            width: "16",
            className: "sundance-icon positioned-icon",
            showRanking: false,
            tooltipText: "Sundance Grand Jury Prize Winner"
        })
    },
    critic: {
        url: 'film_titles_critics-choice-winners.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/ruthalula/list/critics-choice-winners/",
            imgSrc: "critic.png",
            height: "16",
            width: "16",
            className: "critic-icon positioned-icon",
            showRanking: false,
            tooltipText: "Critics' Choice Best Picture Winner"
        })
    },
    spirit: {
        url: 'film_titles_list-of-all-winners-for-the-independent-spirit.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/vedant_vashi13/list/list-of-all-winners-for-the-independent-spirit/",
            imgSrc: "spirit.png",
            height: "16",
            width: "16",
            className: "spirit-icon positioned-icon",
            showRanking: false,
            tooltipText: "Independent Spirit Best Feature Film Winner" 
        })
    },
    direct: {
        url: 'film_titles_directors-guild-of-america-award-winners.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/elmiko_/list/directors-guild-of-america-award-winners/",
            imgSrc: "direct.png",
            height: "16",
            width: "16",
            className: "direct-icon positioned-icon",
            showRanking: false,
            tooltipText: "DGA Outstanding Directing Winner" 
        })
    },
    screen: {
        url: 'film_titles_every-screen-actors-guild-outstanding-performance.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/every-screen-actors-guild-outstanding-performance/",
            imgSrc: "screen.png",
            height: "16",
            width: "16",
            className: "screen-icon positioned-icon",
            showRanking: false,
            tooltipText: "SAG Outstanding Performance by a Cast Winner" 
        })
    },
    wga: {
        url: 'film_titles_every-writers-guild-of-america-best-screenplay.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/writers-guild-of-america-best-screenplay/",
            imgSrc: "writers.png",
            height: "16",
            width: "16",
            className: "wga-icon positioned-icon",
            showRanking: false,
            tooltipText: "WGA Best Screenplay Winner" 
        })
    },
    pga: {
        url: 'film_titles_every-producers-guild-of-america-best-theatrical.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/every-producers-guild-of-america-best-theatrical/",
            imgSrc: "pga.png",
            height: "16",
            width: "16",
            className: "pga-icon positioned-icon",
            showRanking: false,
            tooltipText: "PGA Best Motion Picture Winner" 
        })
    },
    shoot: {
        url: 'film_titles_they-shoot-pictures-dont-they-1000-greatest-5.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/thisisdrew/list/they-shoot-pictures-dont-they-1000-greatest-5/",
            imgSrc: "shoot.png",
            height: "16",
            width: "16",
            className: "shoot-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in They Shoot Pictures, Don't They? 1000 Greatest Films"
        })
    },
    raj: {
        url: 'film_titles_every-movie-ive-seen-ranked.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/every-movie-ive-seen-ranked/",
            imgSrc: "raj.png",
            height: "16",
            width: "16",
            className: "raj-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in Raj's Personal Ranking"
        })
    },
    movies1001Alt: {
        url: 'film_titles_1001-movies-you-must-see-before-you-die.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/peterstanley/list/1001-movies-you-must-see-before-you-die/by/rating/",
            imgSrc: "1001.png",
            height: "16",
            width: "16",
            className: "movies1001-icon floating-icon",
            showRanking: false,
            tooltipText: "1001 Movies You Must See Before You Die (Expanded)"
        })
    },
    saturnh: {
        url: 'film_titles_every-saturn-award-winner-for-best-horror.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/every-saturn-award-winner-for-best-horror/",
            imgSrc: "saturnh.png",
            height: "16",
            width: "16",
            className: "saturnh-icon positioned-icon",
            showRanking: false,
            tooltipText: "Saturn Best Horror Film Winner"
        })
    },
    saturnf: {
        url: 'film_titles_every-saturn-award-winner-for-best-fantasy.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/every-saturn-award-winner-for-best-fantasy/",
            imgSrc: "saturnf.png",
            height: "16",
            width: "16",
            className: "saturnf-icon positioned-icon",
            showRanking: false,
            tooltipText: "Saturn Best Fantasy Film Winner"
        })
    },
    saturns: {
        url: 'film_titles_every-saturn-award-winner-for-best-science.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/every-saturn-award-winner-for-best-science/",
            imgSrc: "saturns.png",
            height: "16",
            width: "16",
            className: "saturns-icon positioned-icon",
            showRanking: false,
            tooltipText: "Saturn Best Science Fiction Film Winner"
        })
    },

    flanagan: { // This is the "favorites" one
        url: 'film_titles_flanagans-favorites-my-top-100.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/flanaganfilm/list/flanagans-favorites-my-top-100/",
            imgSrc: "flanagan.png",
            height: "16",
            width: "16",
            className: "flanagan-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in Mike Flanagan's 100 Favorites"
        })
    },
    fourFavorites: {
        url: 'film_titles_letterboxd-four-favorites-interviews.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/andregps/list/letterboxd-four-favorites-interviews/",
            imgSrc: "fourfav.png",
            height: "16",
            width: "16",
            className: "fourfav-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Letterboxd Four Favorites"
        })
    },
    year: {
        url: 'film_titles_the-top-rated-movie-of-every-year-by-letterboxd.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/mattheweg/list/the-top-rated-movie-of-every-year-by-letterboxd/",
            imgSrc: "years.png",
            height: "16",
            width: "16",
            className: "year-icon positioned-icon",
            showRanking: false,
            tooltipText: "Highest Rated Movie of its Release Year"
        })
    },
    fiveStar: { // New icon for 5-star rating movies
        url: 'film_titles_movies-where-a-5-star-rating-is-most-common.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/rileyaust/list/movies-where-a-5-star-rating-is-most-common/",
            imgSrc: "stars.png",
            height: "16",
            width: "16",
            className: "fiveStar-icon floating-icon",
            showRanking: false,
            tooltipText: "Movies Where a 5-Star Rating is Most Common"
        })
    },
    billionDollarClub: {  // New icon configuration
        url: 'film_titles_billion-dollar-movies.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/jonny5244/list/billion-dollar-movies/",
            imgSrc: "billion.png",
            height: "16",
            width: "16",
            className: "billion-icon floating-icon",
            showRanking: false,
            tooltipText: "Grossed One Billion Dollars, Unadjusted"
        })
    },
    letterboxd113: {  // New icon entry
        url: 'film_titles_letterboxd-113-highest-rated-19th-century.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/desdemoor/list/letterboxd-113-highest-rated-19th-century/",
            imgSrc: "old.png",  // Assuming the image is named old.png
            height: "16",
            width: "16",
            className: "letterboxd113-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Highest Rated Films of the 19th Century"
        })
    },
    male: {  // New icon for Most Fans on Letterboxd with Pronoun He
        url: 'film_titles_most-fans-on-letterboxd-with-pronoun-he-2024.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/crew/list/most-fans-on-letterboxd-with-pronoun-he-2024/",
            imgSrc: "male.png",
            height: "16",
            width: "16",
            className: "male-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Most Fans with He Pronouns 2024"
        })
    },
    she: {  // New icon entry for "Most Fans on Letterboxd with Pronoun She"
        url: 'film_titles_most-fans-on-letterboxd-with-pronoun-she-3.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/crew/list/most-fans-on-letterboxd-with-pronoun-she-3/",
            imgSrc: "female.png",
            height: "16",
            width: "16",
            className: "she-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Most Fans with She Pronouns 2024"
        })
    },
    ze: {  // New icon entry for Most Fans on Letterboxd with Pronoun Ze
        url: 'film_titles_most-fans-on-letterboxd-with-pronoun-ze-or-3.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/crew/list/most-fans-on-letterboxd-with-pronoun-ze-or-3/",
            imgSrc: "nonbi.png",  // Assuming the image is named nonbi.png
            height: "16",
            width: "16",
            className: "ze-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Most Fans with Ze or Xe Pronouns 2024"
        })
    },
    fansPerView: {  // New icon for Most Fans per Viewer
        url: 'film_titles_most-fans-per-viewer-on-letterboxd-2024.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/crew/list/most-fans-per-viewer-on-letterboxd-2024/",
            imgSrc: "fansperview.png",
            height: "16",
            width: "16",
            className: "fansperview-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Most Fans per Viewer"
        })
    },
    obscure: {
        url: 'film_titles_official-top-50-narrative-feature-films-under.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/offensivename/list/official-top-50-narrative-feature-films-under/",
            imgSrc: "obscure.png", // New image for the obscure icon
            height: "16",
            width: "16",
            className: "obscure-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Top 50 Under 15,000 Reviews"
        })
    },
    romcom: {
        url: 'film_titles_letterboxds-top-250-romantic-comedy-films.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/stateofhailey/list/letterboxds-top-250-romantic-comedy-films/",
            imgSrc: "romcom.png", // New image for romantic comedy
            height: "16",
            width: "16",
            className: "romcom-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Top 250 Rom-Coms"
        })
    },
    anime: {  // New entry for Anime
        url: 'film_titles_letterboxds-official-top-250-anime-tv-miniseries.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/jumpy/list/letterboxds-official-top-250-anime-tv-miniseries/",
            imgSrc: "anime.png",
            height: "16",
            width: "16",
            className: "anime-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Top 250 Anime TV Miniseries"
        })
    },
    criterion: { // New entry for Criterion Collection
        url: 'film_titles_the-complete-criterion-collection.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/jbutts15/list/the-complete-criterion-collection/",
            imgSrc: "collection.png", // New image for Criterion Collection
            height: "16",
            width: "16",
            className: "criterion-icon positioned-icon",
            showRanking: false,
            tooltipText: "Included within the Criterion Collection"
        })
    },
    fourGreatest: {  // New icon entry for Four Greatest Films
        url: 'film_titles_four-greatest-films-of-each-year-according.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/zishi/list/four-greatest-films-of-each-year-according/",
            imgSrc: "4year.png",  // New image for four greatest films
            height: "16",
            width: "16",
            className: "fourGreatest-icon positioned-icon",
            showRanking: false,
            tooltipText: "Each Years Four Greatest Films, According to r/letterboxd"
        })
    },
    action: {
        url: 'film_titles_top-250-highest-rated-action-narrative-feature.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/top-250-highest-rated-action-narrative-feature/",
            imgSrc: "action.png",
            height: "16",
            width: "16",
            className: "action-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Top 250 Action Films"
        })
    },
    popAction: {
        url: 'film_titles_top-250-most-popular-action-narrative-feature.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/top-250-most-popular-action-narrative-feature/",
            imgSrc: "popAction.png",
            height: "16",
            width: "16",
            className: "popAction-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Popular Action 250"
        })
    },
    adventure: { // New entry for Adventure
        url: 'film_titles_top-250-highest-rated-adventure-narrative.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/top-250-highest-rated-adventure-narrative/",
            imgSrc: "adventure.png",
            height: "16",
            width: "16",
            className: "adventure-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Top 250 Adventure Films"
        })
    },
    popAdventure: {
        url: 'film_titles_top-250-most-popular-adventure-narrative.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/top-250-most-popular-adventure-narrative/",
            imgSrc: "popAdventure.png",
            height: "16",
            width: "16",
            className: "popAdventure-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Popular Adventure 250"
        })
    },
    animation250: {  // New icon entry for Top 250 Animation
        url: 'film_titles_top-250-highest-rated-animation-narrative.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/top-250-highest-rated-animation-narrative/",
            imgSrc: "animation.png", // Using the same image
            height: "16",
            width: "16",
            className: "animation250-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Top 250 Animated Films"
        })
    },
    popAnimation: {  // New icon entry for Top 250 Popular Animation
        url: 'film_titles_top-250-most-popular-animation-narrative.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/top-250-most-popular-animation-narrative/",
            imgSrc: "popAnimation.png",
            height: "16",
            width: "16",
            className: "popAnimation-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Popular Animated Films"
        })
    },
    funny: { // New entry for Top 250 Highest Rated Comedy Narrative Feature
        url: 'film_titles_top-250-highest-rated-comedy-narrative-feature.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/top-250-highest-rated-comedy-narrative-feature/",
            imgSrc: "funny.png",
            height: "16",
            width: "16",
            className: "funny-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Top 250 Comedy Films"
        })
    },
    popComedy: {
        url: 'film_titles_top-250-most-popular-comedy-narrative-feature.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/top-250-most-popular-comedy-narrative-feature/",
            imgSrc: "popComedy.png",
            height: "16",
            width: "16",
            className: "popComedy-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Popular Comedy 250"
        })
    },
    crime: {
        url: 'film_titles_top-250-highest-rated-crime-narrative-feature.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/top-250-highest-rated-crime-narrative-feature/",
            imgSrc: "crime.png",
            height: "16",
            width: "16",
            className: "crime-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Top 250 Crime Films"
        })
    },
    popCrime: {
        url: 'film_titles_top-250-most-popular-crime-narrative-feature.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/top-250-most-popular-crime-narrative-feature/",
            imgSrc: "popCrime.png",
            height: "16",
            width: "16",
            className: "popCrime-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Popular Crime 250"
        })
    },
    drama: {
        url: 'film_titles_top-250-highest-rated-drama-narrative-feature.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/top-250-highest-rated-drama-narrative-feature/",
            imgSrc: "drama.png",
            height: "16",
            width: "16",
            className: "drama-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Top 250 Drama Films"
        })
    },
    popDrama: {
        url: 'film_titles_top-250-most-popular-drama-narrative-feature.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/top-250-most-popular-drama-narrative-feature/",
            imgSrc: "popDrama.png",
            height: "16",
            width: "16",
            className: "popDrama-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Popular Drama 250"
        })
    },
    family: {
        url: 'film_titles_top-250-highest-rated-family-narrative-feature.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/top-250-highest-rated-family-narrative-feature/",
            imgSrc: "family.png",
            height: "16",
            width: "16",
            className: "family-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Top 250 Family Films"
        })
    },
    popFamily: {
        url: 'film_titles_top-250-most-popular-family-narrative-feature.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/top-250-most-popular-family-narrative-feature/",
            imgSrc: "popFamily.png",
            height: "16",
            width: "16",
            className: "popFamily-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Popular Family 250"
        })
    },
    fantasy: { // New entry for Fantasy
        url: 'film_titles_top-250-highest-rated-fantasy-narrative-feature.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/top-250-highest-rated-fantasy-narrative-feature/",
            imgSrc: "fantasy.png",
            height: "16",
            width: "16",
            className: "fantasy-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Top 250 Fantasy Films"
        })
    },
    popFantasy: {
        url: 'film_titles_top-250-most-popular-fantasy-narrative-feature.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/top-250-most-popular-fantasy-narrative-feature/",
            imgSrc: "popFantasy.png",
            height: "16",
            width: "16",
            className: "popFantasy-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Popular Fantasy 250"
        })
    },
    history: { // New entry for History
        url: 'film_titles_top-250-highest-rated-history-narrative-feature.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/top-250-highest-rated-history-narrative-feature/",
            imgSrc: "history.png",
            height: "16",
            width: "16",
            className: "history-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Top 250 History Films"
        })
    },
    popHistory: {
        url: 'film_titles_top-250-most-popular-history-narrative-feature.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/top-250-most-popular-history-narrative-feature/",
            imgSrc: "popHistory.png",
            height: "16",
            width: "16",
            className: "popHistory-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Popular History 250"
        })
    },
    music: {
        url: 'film_titles_top-250-highest-rated-music-narrative-feature.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/top-250-highest-rated-music-narrative-feature/",
            imgSrc: "music.png",
            height: "16",
            width: "16",
            className: "music-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Top 250 Music Films"
        })
    },
    popMusic: {
        url: 'film_titles_top-250-most-popular-music-narrative-feature.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/top-250-most-popular-music-narrative-feature/",
            imgSrc: "popMusic.png",
            height: "16",
            width: "16",
            className: "popMusic-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Popular Music 250"
        })
    },
    mystery: { // New entry for Mystery
        url: 'film_titles_top-250-highest-rated-mystery-narrative-feature.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/top-250-highest-rated-mystery-narrative-feature/",
            imgSrc: "mystery.png",
            height: "16",
            width: "16",
            className: "mystery-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Top 250 Mystery Films"
        })
    },
    popMystery: {
        url: 'film_titles_top-250-most-popular-mystery-narrative-feature.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/top-250-most-popular-mystery-narrative-feature/",
            imgSrc: "popMystery.png",
            height: "16",
            width: "16",
            className: "popMystery-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Popular Mystery 250"
        })
    },
    romance: {  // New icon entry for Top 250 Romance Films
        url: 'film_titles_top-250-highest-rated-romance-narrative-feature.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/top-250-highest-rated-romance-narrative-feature/",
            imgSrc: "romance.png", // New image for romance
            height: "16",
            width: "16",
            className: "romance-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Top 250 Romance Films"
        })
    },
    popRomance: {
        url: 'film_titles_top-250-most-popular-romance-narrative-feature.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/top-250-most-popular-romance-narrative-feature/",
            imgSrc: "popRomance.png",
            height: "16",
            width: "16",
            className: "popRomance-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Popular Romance 250"
        })
    },
    scienceFiction: { // New entry for Science Fiction
        url: 'film_titles_top-250-highest-rated-science-fiction-narrative.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/top-250-highest-rated-science-fiction-narrative/",
            imgSrc: "scifi.png", // New image for Science Fiction
            height: "16",
            width: "16",
            className: "scifi-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Top 250 Science Fiction Films"
        })
    },
    popScienceFiction: {
        url: 'film_titles_top-250-most-popular-science-fiction-narrative.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/top-250-most-popular-science-fiction-narrative/",
            imgSrc: "popScifi.png",
            height: "16",
            width: "16",
            className: "popScifi-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Popular Science Fiction 250"
        })
    },
    thriller: {  // New entry for Top 250 Thriller Films
        url: 'film_titles_top-250-highest-rated-thriller-narrative.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/top-250-highest-rated-thriller-narrative/",
            imgSrc: "thriller.png",
            height: "16",
            width: "16",
            className: "thriller-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Top 250 Thriller Films"
        })
    },
    popThriller: {
        url: 'film_titles_top-250-most-popular-thriller-narrative-feature.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/top-250-most-popular-thriller-narrative-feature/",
            imgSrc: "popThriller.png",
            height: "16",
            width: "16",
            className: "popThriller-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Popular Thriller 250"
        })
    },

    war: { // New entry for War Films
        url: 'film_titles_top-250-highest-rated-war-narrative-feature.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/top-250-highest-rated-war-narrative-feature/",
            imgSrc: "war.png",
            height: "16",
            width: "16",
            className: "war-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Top 250 War Films"
        })
    },
    popWar: {
        url: 'film_titles_top-250-most-popular-war-narrative-feature.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/top-250-most-popular-war-narrative-feature/",
            imgSrc: "popWar.png",
            height: "16",
            width: "16",
            className: "popWar-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Popular War 250"
        })
    },
    western: { // New entry for Western Films
        url: 'film_titles_top-250-highest-rated-western-narrative-feature.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/top-250-highest-rated-western-narrative-feature/",
            imgSrc: "western.png",
            height: "16",
            width: "16",
            className: "western-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Top 250 Western Films"
        })
    },
    popWestern: {
        url: 'film_titles_top-250-most-popular-western-narrative-feature.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/top-250-most-popular-western-narrative-feature/",
            imgSrc: "popWestern.png",
            height: "16",
            width: "16",
            className: "popWestern-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Popular Western 250"
        })
    },
    gRated: { // New entry for G Rated Films
        url: 'film_titles_top-100-g-rated-narrative-feature-films.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/top-100-g-rated-narrative-feature-films/",
            imgSrc: "grated.png",
            height: "16",
            width: "16",
            className: "grated-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Top 100 G Rated Films"
        })
    },
    PopGRated: { // New entry for G Rated Films
        url: 'film_titles_top-200-most-popular-g-rated-narrative-feature.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/top-200-most-popular-g-rated-narrative-feature/",
            imgSrc: "popG.png",
            height: "16",
            width: "16",
            className: "popG-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Popular 200 G Rated Films"
        })
    },
    pGRated: { // New entry for PG Rated Films
        url: 'film_titles_top-250-pg-rated-narrative-feature-films.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/top-250-pg-rated-narrative-feature-films/",
            imgSrc: "pgrated.png",
            height: "16",
            width: "16",
            className: "pgrated-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Top 250 PG Rated Films"
        })
    },
    popPGRated: { // New entry for PG Rated Films
        url: 'film_titles_top-250-most-popular-pg-rated-narrative-feature.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/top-250-most-popular-pg-rated-narrative-feature/",
            imgSrc: "popPG.png",
            height: "16",
            width: "16",
            className: "popPG-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Popular 250 PG Rated Films"
        })
    },
    pG13Rated: { // New entry for PG-13 Rated Films
        url: 'film_titles_top-250-pg-13-rated-narrative-feature-films.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/top-250-pg-13-rated-narrative-feature-films/",
            imgSrc: "pg13rated.png",
            height: "16",
            width: "16",
            className: "pg13rated-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Top 250 PG-13 Rated Films"
        })
    },
    popPG13Rated: { // New entry for PG-13 Rated Films
        url: 'film_titles_top-250-most-popular-pg-13-rated-narrative.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/top-250-most-popular-pg-13-rated-narrative/",
            imgSrc: "popPG13.png",
            height: "16",
            width: "16",
            className: "popPG13-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Popular 250 PG-13 Rated Films"
        })
    },
    rRated: { // New entry for R Rated Films
        url: 'film_titles_top-250-r-rated-narrative-feature-films.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/top-250-r-rated-narrative-feature-films/",
            imgSrc: "rrated.png",
            height: "16",
            width: "16",
            className: "rrated-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Top 250 R Rated Films"
        })
    },
    popRRated: { // New entry for R Rated Films
        url: 'film_titles_top-250-most-popular-r-rated-narrative-feature.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/top-250-most-popular-r-rated-narrative-feature/",
            imgSrc: "popR.png",
            height: "16",
            width: "16",
            className: "popR-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Popular 250 R Rated Films"
        })
    },
    nC17Rated: { // New entry for NC-17 Rated Films
        url: 'film_titles_top-20-nc-17-rated-narrative-feature-films.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/top-20-nc-17-rated-narrative-feature-films/",
            imgSrc: "nc17rated.png",
            height: "16",
            width: "16",
            className: "nc17rated-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Top 20 NC-17 Rated Films"
        })
    },
    popNC17Rated: { // New entry for NC-17 Rated Films
        url: 'film_titles_top-25-most-popular-nc-17-rated-narrative.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/top-25-most-popular-nc-17-rated-narrative/",
            imgSrc: "popNC17.png",
            height: "16",
            width: "16",
            className: "popNC17-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Popular 25 NC-17 Rated Films"
        })
    },
    northAmerica: { // New entry for North American Narrative
        url: 'film_titles_top-250-highest-rated-north-american-narrative.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/top-250-highest-rated-north-american-narrative/",
            imgSrc: "namerica.png",
            height: "16",
            width: "16",
            className: "namerica-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Top 250 North American Films"
        })
    },
    popNorthAmerica: { // New entry for North American Popular
        url: 'film_titles_top-250-most-popular-north-american-narrative.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/top-250-most-popular-north-american-narrative/",
            imgSrc: "popNAmerica.png",
            height: "16",
            width: "16",
            className: "popnamerica-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Popular 250 North American Films"
        })
    },
    southAmerica: { // New entry for South American Narrative
        url: 'film_titles_top-250-highest-rated-south-american-narrative.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/top-250-highest-rated-south-american-narrative/",
            imgSrc: "samerica.png",
            height: "16",
            width: "16",
            className: "samerica-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Top 250 South American Films"
        })
    },
    popSouthAmerica: { // New entry for North American Popular
        url: 'film_titles_top-100-most-popular-south-american-narrative.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/top-100-most-popular-south-american-narrative/",
            imgSrc: "popSAmerica.png",
            height: "16",
            width: "16",
            className: "popsamerica-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Popular 250 South American Films"
        })
    },
    europeanNarrative: { // New entry for European Narrative Films
        url: 'film_titles_top-250-highest-rated-european-narrative.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/top-250-highest-rated-european-narrative/",
            imgSrc: "europe.png",
            height: "16",
            width: "16",
            className: "european-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Top 250 European Films"
        })
    },
    popEurope: { // New entry for European Popular
        url: 'film_titles_top-250-most-popular-european-narrative-feature.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/top-250-most-popular-european-narrative-feature/",
            imgSrc: "popEurope.png",
            height: "16",
            width: "16",
            className: "popeurope-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Popular 250 European Films"
        })
    },
    africanNarrative: { // New entry for European Narrative Films
        url: 'film_titles_top-100-highest-rated-african-narrative-feature.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/top-100-highest-rated-african-narrative-feature/",
            imgSrc: "africa.png",
            height: "16",
            width: "16",
            className: "african-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Top 250 African Films"
        })
    },
    popAfrica: { // New entry for African Popular
        url: 'film_titles_top-20-most-popular-african-narrative-feature.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/top-20-most-popular-african-narrative-feature/",
            imgSrc: "popAfrica.png",
            height: "16",
            width: "16",
            className: "popafrica-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Popular 20 African Films"
        })
    },
    popAsia: { // New entry for Asian Popular
        url: 'film_titles_top-250-most-popular-asian-narrative-feature.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/top-250-most-popular-asian-narrative-feature/",
            imgSrc: "popAsia.png",
            height: "16",
            width: "16",
            className: "popasia-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Popular 250 Asian Films"
        })
    },
    popAustralia: { // New entry for Australian Popular
        url: 'film_titles_top-150-most-popular-australian-narrative.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/top-150-most-popular-australian-narrative/",
            imgSrc: "popAustralia.png",
            height: "16",
            width: "16",
            className: "popaustralia-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Popular 150 Australian Films"
        })
    },
    asianNarrative: {  // New icon entry for Top 250 Asian Narrative Feature
        url: 'film_titles_top-250-highest-rated-asian-narrative-feature.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/top-250-highest-rated-asian-narrative-feature/",
            imgSrc: "asia.png",
            height: "16",
            width: "16",
            className: "asian-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Top 250 Asian Narrative Feature Films"
        })
    },
    australianNarrative: {  // New icon entry for Australian Narrative
        url: 'film_titles_top-75-highest-rated-australian-narrative.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/top-75-highest-rated-australian-narrative/",
            imgSrc: "australia.png",
            height: "16",
            width: "16",
            className: "australian-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Top 75 Australian Films"
        })
    },
    shortFilms250: {  // New icon entry for Top 250 Short Films
        url: 'film_titles_the-top-250-highest-rated-films-of-90-minutes.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/the-top-250-highest-rated-films-of-90-minutes/",
            imgSrc: "90.png",
            height: "16",
            width: "16",
            className: "shortFilms250-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Top 250 Under 90 Minute Films"
        })
    },
    popFilms250: {  // New icon entry for Popular 250 Short Films
        url: 'film_titles_the-top-250-most-popular-films-of-90-minutes.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/the-top-250-most-popular-films-of-90-minutes/",
            imgSrc: "pop90.png",
            height: "16",
            width: "16",
            className: "popFilms250-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Popular 250 Under 90 Minute Films"
        })
    },
    top250Under120: {  // New icon entry for Top 250 Films Under 120 Minutes
        url: 'film_titles_the-top-250-highest-rated-films-of-120-minutes.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/the-top-250-highest-rated-films-of-120-minutes/",
            imgSrc: "120.png",
            height: "16",
            width: "16",
            className: "top250Under120-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Top 250 Films Under 2 Hours"
        })
    },
    pop250Under120: {  // New icon entry for Popular 250 Films Under 120 Minutes
        url: 'film_titles_the-top-250-most-popular-films-of-120-minutes.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/the-top-250-most-popular-films-of-120-minutes/",
            imgSrc: "pop120.png",
            height: "16",
            width: "16",
            className: "pop250Under120-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Popular 250 Films Under 2 Hours"
        })
    },
    top150Over180: {  // New icon entry for Top 150 Films Over 180 Minutes
        url: 'film_titles_the-top-150-highest-rated-films-of-180-minutes.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/the-top-150-highest-rated-films-of-180-minutes/",
            imgSrc: "180.png",
            height: "16",
            width: "16",
            className: "top150Over180-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Top 150 Films Over 3 Hours"
        })
    },
    pop150Over180: {  // New icon entry for Popular 150 Films Over 180 Minutes
        url: 'film_titles_the-top-75-most-popular-films-of-180-minutes.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/the-top-75-most-popular-films-of-180-minutes/",
            imgSrc: "pop180.png",
            height: "16",
            width: "16",
            className: "pop150Over180-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Popular 150 Films Over 3 Hours"
        })
    },
    top240Minutes: {  // New icon entry for Top 20 Films Over 240 Minutes
        url: 'film_titles_the-top-20-highest-rated-films-of-240-minutes.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/the-top-20-highest-rated-films-of-240-minutes/",
            imgSrc: "240.png",
            height: "16",
            width: "16",
            className: "top240Minutes-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Top 20 Films Over 4 Hours"
        })
    },
    pop240Minutes: {  // New icon entry for Popular 20 Films Over 240 Minutes
        url: 'film_titles_the-top-5-most-popular-films-of-240-minutes.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/the-top-5-most-popular-films-of-240-minutes/",
            imgSrc: "pop240.png",
            height: "16",
            width: "16",
            className: "pop240Minutes-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Popular 20 Films Over 4 Hours"
        })
    },
    boxOffice: {  // New icon entry for Box Office Number One Films
        url: 'film_titles_list-of-box-office-number-one-films-in-the.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/arhodes/list/list-of-box-office-number-one-films-in-the/",
            imgSrc: "boxOffice.png",
            height: "16",
            width: "16",
            className: "boxOffice-icon floating-icon",
            showRanking: false,
            tooltipText: "Ranked #1 at the Weekly Box Office"
        })
    },
    yearlyDollar: {  // New icon configuration
        url: 'film_titles_highest-grossing-film-by-year-of-release.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/arhodes/list/highest-grossing-film-by-year-of-release/",
            imgSrc: "yearly_dollar.png",
            height: "16",
            width: "16",
            className: "yearly-dollar-icon floating-icon",
            showRanking: false,
            tooltipText: "Highest Grossing Film Per Year"
        })
    },
    burningCash: {  // New icon configuration
        url: 'film_titles_biggest-box-office-bombs-adjusted-for-inflation.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/arhodes/list/biggest-box-office-bombs-adjusted-for-inflation/",
            imgSrc: "burning_cash.png",
            height: "16",
            width: "16",
            className: "burning-cash-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Biggest Box Office Bombs (Inflation Adjusted)"
        })
    },
    mostPopularYear: {  // New entry for Most Popular Film for Every Year
        url: 'film_titles_most-popular-film-for-every-year-on-letterboxd.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/arhodes/list/most-popular-film-for-every-year-on-letterboxd/",
            imgSrc: "yearly_pop.png",
            height: "16",
            width: "16",
            className: "mostPopularYear-icon floating-icon",
            showRanking: false,
            tooltipText: "Most Popular Film Per Year"
        })
    },
    moneybagOld: {  // New icon configuration
        url: 'film_titles_most-expensive-films-adjusted-for-inflation.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/arhodes/list/most-expensive-films-adjusted-for-inflation/",
            imgSrc: "moneybag_old.png",
            height: "16",
            width: "16",
            className: "moneybagOld-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Most Expensive Films (Inflation Adjusted)"
        })
    },
    moneybag: {  // New icon configuration
        url: 'film_titles_most-expensive-films-unadjusted-for-inflation.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/arhodes/list/most-expensive-films-unadjusted-for-inflation/",
            imgSrc: "moneybag.png",
            height: "16",
            width: "16",
            className: "moneybag-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Most Expensive Films"
        })
    },
    moneybag: {  // New icon configuration
        url: 'film_titles_most-expensive-films-unadjusted-for-inflation.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/arhodes/list/most-expensive-films-unadjusted-for-inflation/",
            imgSrc: "moneybag.png",
            height: "16",
            width: "16",
            className: "moneybag-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Most Expensive Films"
        })
    },
    horrorAlt: {  // New icon configuration
        url: 'film_titles_top-250-highest-rated-horror-narrative-feature.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/top-250-highest-rated-horror-narrative-feature/",
            imgSrc: "ghost.png",
            height: "16",
            width: "16",
            className: "horrorAlt-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the top 250 Horror Films"
        })
    },
    popHorror: {
        url: 'film_titles_top-250-most-popular-horror-narrative-feature.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/bigbadraj/list/top-250-most-popular-horror-narrative-feature/",
            imgSrc: "popHorror.png",
            height: "16",
            width: "16",
            className: "popHorror-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Popular Horror 250"
        })
    },
    unweighted: {
        url: 'film_titles_top-250-movies-by-unweighted-rating.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/blackkfoxx/list/top-250-movies-by-unweighted-rating/",
            imgSrc: "weights.png", 
            height: "16", 
            width: "16",
            className: "unweighted-icon floating-icon",
            showRanking: true, 
            tooltipText: "№ {ranking} in the top 250 Letterboxd Unweighted"
        })
    },
    silent: {  // New icon entry for Top 100 Silent Films
        url: 'film_titles_letterboxds-top-100-silent-films.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/brsan/list/letterboxds-top-100-silent-films/",
            imgSrc: "silent.png",
            height: "16",
            width: "16",
            className: "silent-icon floating-icon",
            showRanking: true,
            tooltipText: "№ {ranking} in the Top 100 Silent Films"
        })
    },
    imdbGray: {
        url: 'film_titles_every-film-that-has-ever-been-on-the-imdb.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/jamesmorison/list/every-film-that-has-ever-been-on-the-imdb/",
            imgSrc: "imdbGray.png",
            height: "16",
            width: "16",
            className: "imdbGray-icon positioned-icon",
            showRanking: false,
            tooltipText: "Previous Entry in the IMDb Top 250"
        })
    },
    Harvard: {
        url: 'film_titles_harvard-film-phd-program-narrative-films.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/pileofcrowns/list/harvard-film-phd-program-narrative-films/",
            imgSrc: "Harvard.png",
            height: "16",
            width: "16",
            className: "Harvard-icon floating-icon",
            showRanking: false,
            tooltipText: "Part of the Harvard PhD Film Program"
        })
    },
    Bong: {
        url: 'film_titles_bong-joon-hos-favorites.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/gpu/list/bong-joon-hos-favorites/",
            imgSrc: "bong.png",
            height: "16",
            width: "16",
            className: "bong-icon floating-icon",
            showRanking: false,
            tooltipText: "One of Bong Joon-Ho’s Favorite Movies"
        })
    },
    Spike: {
        url: 'film_titles_spike-lees-95-essential-films-all-aspiring.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/theodo/list/spike-lees-95-essential-films-all-aspiring/",
            imgSrc: "spike.png",
            height: "16",
            width: "16",
            className: "spike-icon floating-icon",
            showRanking: false,
            tooltipText: "One of Spike Lee's Favorite Joints"
        })
    },
    tarantino: {
        url: 'film_titles_quentin-tarantinos-199-favorite-films.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/zachaigley/list/quentin-tarantinos-199-favorite-films/",
            imgSrc: "tarantino.png",
            height: "16",
            width: "16",
            className: "tarantino-icon floating-icon",
            showRanking: false,
            tooltipText: "One of Quentin Tarantino's Favorite Movies"
        })
    },
    greta: {
        url: 'film_titles_greta-gerwig-talked-about-these-films.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/nataliaivonica/list/greta-gerwig-talked-about-these-films/",
            imgSrc: "greta.png",
            height: "16",
            width: "16",
            className: "greta-icon floating-icon",
            showRanking: false,
            tooltipText: "A Film Greta Gerwig has Talked About Positively"
        })
    },
    kubrick: {
        url: 'film_titles_stanley-kubricks-100-favorite-filmsthat-we.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/jeffroskull/list/stanley-kubricks-100-favorite-filmsthat-we/",
            imgSrc: "kubrick.png",
            height: "16",
            width: "16",
            className: "kubrick-icon floating-icon",
            showRanking: false,
            tooltipText: "Stanley Kubrick’s 100 Favorite Films"
        })
    },
    kurosawa: {
        url: 'film_titles_akira-kurosawas-100-favorite-movies.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/michaelj/list/akira-kurosawas-100-favorite-movies/",
            imgSrc: "kurosawa.png",
            height: "16",
            width: "16",
            className: "kurosawa-icon floating-icon",
            showRanking: false,
            tooltipText: "Akira Kurosawa’s 100 Favorite Films"
        })
    },
    fincher: {
        url: 'film_titles_david-finchers-favorite-films.json',
        addFunction: createIconAdder({
            href: "https://letterboxd.com/abdurrhmknkl/list/david-finchers-favorite-films/",
            imgSrc: "fincher.png",
            height: "16",
            width: "16",
            className: "fincher-icon floating-icon",
            showRanking: false,
            tooltipText: "David Fincher’s Favorite Films"
        })
    },
};

// Generic icon creator function
function createIconAdder({ href, imgSrc, height, width, className, showRanking, tooltipText, alt }) {
    return function(ranking) {
        const li = document.createElement("li");
        li.className = "stat";
        
        const a = document.createElement("a");
        a.href = href;
        a.style.fontSize = ".92307692rem";
        
        // Create a wrapper span for both icon and ranking
        const tooltipWrapper = document.createElement("span");
        tooltipWrapper.className = "tooltip-wrapper";
        
        // Set tooltip text with ranking if provided
        if (tooltipText) {
            tooltipWrapper.setAttribute('data-tooltip', tooltipText.replace('{ranking}', ranking));
        }
        
        // Create the icon wrapper
        const iconWrapper = document.createElement("span");
        iconWrapper.className = className;
        
        const img = document.createElement("img");
        img.src = chrome.runtime.getURL(`images/${imgSrc}`);
        img.height = height;
        img.width = width;
        if (alt) img.alt = alt;
        
        iconWrapper.appendChild(img);
        tooltipWrapper.appendChild(iconWrapper);
        
        // Add ranking number to the same tooltip wrapper
        if (showRanking && ranking) {
            tooltipWrapper.appendChild(document.createTextNode(ranking));
        }
        
        a.appendChild(tooltipWrapper);
        li.appendChild(a);
        
        return li;
    };
}
// Generic data fetcher
async function fetchData(url) {
    const response = await fetch(`https://raw.githubusercontent.com/bigbadraj/Letterboxd-List-JSONs/refs/heads/main/${url}`);
    return await response.json();
}

// Near the top of the file, add a static audio instance


function isInTop250() {
    return new Promise((resolve) => {
        // debugLog('ICON', 'Waiting for 0.1 seconds to ensure the DOM has loaded...');
        
        setTimeout(() => {
            // debugLog('ICON', 'Checking if the film is in the Top 250...');
    
            // Search specifically for an <a> tag with the unique href
            const top250Link = document.querySelector('a[href="/dave/list/official-top-250-narrative-feature-films/"]');
    
            if (top250Link) {
                // debugLog('ICON', 'Top 250 link found:', top250Link.outerHTML); // Log the found element's HTML
                debugLog('ICON', 'Skipping crown or gray icon - film is already in Top 250');
                resolve(true); // The film is in the Top 250
            } else {
                debugLog('ICON', 'No Top 250 link found. Proceeding with icon logic...');
                
                // Log all <a> elements for debugging
                const allLinks = document.querySelectorAll('a'); // Get all <a> elements in the DOM
                // debugLog('ICON', `Total <a> elements found: ${allLinks.length}`);
    
                resolve(false); // The film is not in the Top 250
            }
        }, 100); // 100 milliseconds delay
    });
}

async function isInImdbTop250() {
    debugLog('ICON', 'Checking if the film is in the IMDb Top 250 JSON...');
    
    // Get the current film ID from the URL
    const currentPath = window.location.pathname;
    const filmId = currentPath.split('/')[2]; // Extract film ID from /film/film-id/
    
    // Load the IMDb Top 250 JSON data
    const imdbData = await fetchData('film_titles_imdb-top-250.json');
    
    // Check if the film is in the regular IMDb Top 250 JSON
    const itemIndex = imdbData.findIndex(item => item.ID === filmId);
    
    if (itemIndex !== -1) {
        debugLog('ICON', `Film ${filmId} found in regular IMDb Top 250 JSON at index ${itemIndex}`);
        return true; // The film is in the current IMDb Top 250
    } else {
        debugLog('ICON', `Film ${filmId} not found in regular IMDb Top 250 JSON`);
        return false; // The film is not in the current IMDb Top 250
    }
}

// Unified icon addition function
async function addIcon(filmId, iconKey, settings) {
    debugLog('ICON', `Attempting to add icon: ${iconKey} for film ID: ${filmId}`);
    
    // Handle mutual exclusivity between money and moneyAlt
    if (iconKey === 'money' && settings.showMoneyAlt === true) {
        debugLog('ICON', 'Skipping money icon - moneyAlt is enabled');
        return;
    }

    // Ensure both 1001 and 1001Alt toggles are on for 1001Alt icon
    if (iconKey === 'movies1001' && settings.showMovies1001Alt === true) {
        debugLog('ICON', 'Skipping 1001 icon - 1001Alt toggle is enabled');
        return;
    }

    if (iconKey === 'animation' && settings.showAnimation250 === true) {
        debugLog('ICON', 'Skipping animation icon - animation250 is disabled');
        return;
    }

    // Prevent any horror icons from appearing if main horror toggle is off
    if ((iconKey === 'horror' || iconKey === 'horrorAlt') && settings.showGhost === false) {
        debugLog('ICON', `Skipping ${iconKey} - main horror toggle is disabled`);
        return;
    }

    if (iconKey === 'horror' && settings.showHorrorAlt === true && settings.showGhost === true) {
        debugLog('ICON', 'Skipping horror icon - horrorAlt is enabled and main horror toggle is on');
        return;
    }



    if (iconKey === 'crown' || iconKey === 'gray') {
        // Wait for isInTop250() to finish before proceeding
        const isTop250 = await isInTop250();
        
        if (isTop250) {
            return; // Exit early if the film is in the Top 250
        }
    
        // Proceed with adding the icon if not in the Top 250
        debugLog('ICON', `Proceeding with adding ${iconKey} icon.`);
    }  

    
    // Proceed with adding the icon if not in the IMDb Top 250
    debugLog('ICON', `Proceeding with adding ${iconKey} icon.`);
    

    // Check for parent toggle dependencies
    if ((iconKey === 'moneyAlt' && settings.showMoney === false) || 
        (iconKey === 'movies1001Alt' && settings.showMovies1001 === false) ||
        (iconKey === 'animation250' && settings.showAnimation === false)) {
        debugLog('ICON', `Skipping ${iconKey} - parent toggle is disabled`);
        return;
    }
    
    // Handle IMDb icon priority - if both are enabled, prefer regular IMDb over imdbGray
    if (iconKey === 'imdbGray' && settings.showImdb === true) {
        const isImdbTop250 = await isInImdbTop250();
        if (isImdbTop250) {
            debugLog('ICON', `Skipping imdbGray - film is in current IMDb Top 250, regular IMDb icon will show instead`);
            return;
        }
    } else if (iconKey === 'imdbGray' && settings.showImdb === false) {
        debugLog('ICON', `Regular IMDb toggle is off, proceeding with imdbGray as normal icon`);
    }

    if (iconKey === 'oscarHierarchy' && settings.showWinOscar === false) {
        debugLog('ICON', `Skipping ${iconKey} - parent toggle 'showWinOscar' is disabled`);
        return;
    }


    const settingName = `show${iconKey.charAt(0).toUpperCase() + iconKey.slice(1)}`;
    debugLog('ICON', `Checking setting: ${settingName} = ${settings[settingName]}`);
    if (settings[settingName] === false) {
        debugLog('ICON', `Skipping ${iconKey} - toggle is disabled`);
        return;
    }
    
    try {
        // debugLog('ICON', `Fetching data for ${iconKey}`);
        const data = await fetchData(ICON_CONFIG[iconKey].url);
        
        // Try to find the film by ID (could be numeric ID or film slug)
        let itemIndex = data.findIndex(item => item.ID === filmId.toString());
        
        // If not found by exact ID match, try to find by film slug from URL
        if (itemIndex === -1 && filmId && filmId !== "Unknown") {
            // Extract film slug from current URL as fallback
            const urlMatch = window.location.pathname.match(/\/film\/([^\/]+)/);
            if (urlMatch) {
                const urlFilmSlug = urlMatch[1];
                debugLog('ICON', `Trying to match by URL film slug: ${urlFilmSlug}`);
                itemIndex = data.findIndex(item => item.ID === urlFilmSlug);
            }
        }
        
        // If still not found, try using the unique film identifier for additional matching
        if (itemIndex === -1 && window.currentFilmUniqueId) {
            const uniqueId = window.currentFilmUniqueId;
            debugLog('ICON', `Trying to match using unique film identifier:`, uniqueId);
            
            // Try matching by slug first
            itemIndex = data.findIndex(item => item.ID === uniqueId.slug);
            
            // If still not found, try matching by title and year (for cases where ID is "Unknown")
            if (itemIndex === -1 && uniqueId.slug && uniqueId.slug !== "Unknown") {
                // Look for films with "Unknown" ID but matching title and year
                itemIndex = data.findIndex(item => {
                    if (item.ID === "Unknown" && item.Title && item.Year) {
                        // Create a normalized title for comparison
                        const normalizedItemTitle = item.Title.toLowerCase().replace(/[^a-z0-9]/g, '');
                        const normalizedCurrentTitle = uniqueId.title ? uniqueId.title.toLowerCase().replace(/[^a-z0-9]/g, '') : '';
                        
                        // Check if titles and years match
                        return normalizedItemTitle === normalizedCurrentTitle && 
                               item.Year === uniqueId.year;
                    }
                    return false;
                });
                
                if (itemIndex !== -1) {
                    debugLog('ICON', `Found film by title/year match at index ${itemIndex}`);
                }
            }
        }
        
        if (itemIndex !== -1) {
            debugLog('ICON', `Found film in ${iconKey} list at index ${itemIndex} with ID: ${data[itemIndex].ID}`);
            
            // Special handling for Oscar nominations (only if Oscar Winners toggle is ON)
            if (iconKey === 'nomOscar' && settings.hideNomForWin && settings.showWinOscar !== false) {
                debugLog('ICON', 'Checking if film is Oscar winner before adding nomination icon');
                const winnerData = await fetchData('film_titles_every-oscar-winner-ever-1.json');
                
                // Try to find the film by ID (could be numeric ID or film slug)
                let found = winnerData.some(item => item.ID === filmId.toString());
                
                // If not found by exact ID match, try to find by film slug from URL
                if (!found && filmId && filmId !== "Unknown") {
                    const urlMatch = window.location.pathname.match(/\/film\/([^\/]+)/);
                    if (urlMatch) {
                        const urlFilmSlug = urlMatch[1];
                        debugLog('ICON', `Trying to match Oscar winner check by URL film slug: ${urlFilmSlug}`);
                        found = winnerData.some(item => item.ID === urlFilmSlug);
                    }
                }
                
                if (found) {
                    debugLog('ICON', 'Skipping nomination icon - film is Oscar winner');
                    return;
                }
            }

            const iconElement = ICON_CONFIG[iconKey].addFunction(itemIndex + 1);
            debugLog('ICON', `Created icon element for ${iconKey}:`, iconElement);
            
            return new Promise((resolve) => {
                const observer = new MutationObserver((mutations, observer) => {
                    debugLog('ICON', `Mutation observer triggered for ${iconKey}`);
                    const ul = document.querySelector(".production-statistic-list, .film-stats, .stats, [class*='stats']");
                    debugLog('ICON', `Looking for stats container for ${iconKey} - found: ${!!ul}`);
                    if (ul) {
                        debugLog('ICON', `Stats container outerHTML (first 300 chars): ${ul.outerHTML.substring(0, 300)}...`);
                    }
                    if (ul && !ul.querySelector(`.${iconKey}-icon`)) {
                        debugLog('ICON', `Appending ${iconKey} icon to DOM`);
                        ul.appendChild(iconElement);
                        observer.disconnect();
                        resolve();
                    } else if (ul) {
                        debugLog('ICON', `Icon ${iconKey} already exists in container`);
                        observer.disconnect();
                        resolve();
                    } else {
                        debugLog('ICON', `Still waiting for stats container for ${iconKey}`);
                    }
                });
                observer.observe(document, { childList: true, subtree: true });
            });
        } else {
            debugLog('ICON', `Film not found in ${iconKey} list`);
            return Promise.resolve();
        }
    } catch (error) {
        console.error(`Failed to add ${iconKey} icon:`, error);
        debugLog('ICON', `Error adding ${iconKey} icon:`, error);
        return Promise.resolve();
    }
}

// Update the addOscarIcon function
async function addOscarIcon(filmId, settings) {
    try {
        // Handle Oscar Winners (only if enabled)
        if (settings.showWinOscar !== false) {
            // If Oscar hierarchy is enabled and parent toggle is on, only show hierarchy
            if (settings.showOscarHierarchy !== false) {
                const oscarTiers = ['oscar10', 'oscar7', 'oscar5', 'oscar3'];
                let foundTier = false;
                
                for (const tier of oscarTiers) {
                    const data = await fetchData(ICON_CONFIG[tier].url);
                    if (data.some(item => item.ID === filmId.toString())) {
                        const iconElement = ICON_CONFIG[tier].addFunction();
                        
                        new MutationObserver((mutations, observer) => {
                            const ul = document.querySelector(".production-statistic-list");
                            if (ul && !ul.querySelector(`.${tier}-icon`)) {
                                ul.appendChild(iconElement);
                                observer.disconnect();
                            }
                        }).observe(document, { childList: true, subtree: true });
                        
                        foundTier = true;
                        break;
                    }
                }

                // If no tier matches and hierarchy is enabled, show regular Oscar winner icon
                if (!foundTier) {
                    // Only add regular winner icon if the film is an Oscar winner
                    const winnerData = await fetchData(ICON_CONFIG.winOscar.url);
                    if (winnerData.some(item => item.ID === filmId.toString())) {
                        addIcon(filmId, 'winOscar', settings);
                    }
                }
            } else {
                // If hierarchy is disabled but Oscar Winners is enabled, show regular Oscar winner icon
                addIcon(filmId, 'winOscar', settings);
            }
        }

        // Handle Oscar Nominations (independent of winner toggle)
        debugLog('ICON', `Oscar Nominee check: showNomOscar=${settings.showNomOscar}, showWinOscar=${settings.showWinOscar}`);
        if (settings.showNomOscar !== false) {
            // If Oscar Winners is OFF, always show nominees (hideNomForWin setting doesn't apply)
            if (settings.showWinOscar === false) {
                debugLog('ICON', 'Oscar Winners OFF - showing all nominees');
                addIcon(filmId, 'nomOscar', settings);
            } else {
                // If Oscar Winners is ON, check the hideNomForWin setting
                if (!settings.hideNomForWin) {
                    addIcon(filmId, 'nomOscar', settings);
                } else {
                    const winnerData = await fetchData(ICON_CONFIG.winOscar.url);
                    
                    // Try to find the film by ID (could be numeric ID or film slug)
                    let found = winnerData.some(item => item.ID === filmId.toString());
                    
                    // If not found by exact ID match, try to find by film slug from URL
                    if (!found && filmId && filmId !== "Unknown") {
                        const urlMatch = window.location.pathname.match(/\/film\/([^\/]+)/);
                        if (urlMatch) {
                            const urlFilmSlug = urlMatch[1];
                            debugLog('ICON', `Trying to match Oscar nomination check by URL film slug: ${urlFilmSlug}`);
                            found = winnerData.some(item => item.ID === urlFilmSlug);
                        }
                    }
                    
                    if (!found) {
                        addIcon(filmId, 'nomOscar', settings);
                    }
                }
            }
        }
    } catch (error) {
        console.error('Failed to add Oscar hierarchy icon:', error);
    }
}

async function updateReleaseYear(settings) {
    
    if (settings.useNonPremiereYear === false) {
        debugLog('SETTINGS', 'Release year update disabled');
        return;
    }

    debugLog('SETTINGS', 'Searching for release tables');
    const releaseTables = document.querySelectorAll('.release-table-title');
    let earliestNonPremiereDate = null;

    for (const tableTitle of releaseTables) {
        if (tableTitle.textContent.toLowerCase().includes('premiere')) {
            // debugLog('SETTINGS', 'Skipping premiere date:', tableTitle.textContent);
            continue;
        }

        const dateElement = tableTitle.nextElementSibling?.querySelector('.date');
        if (dateElement) {
            const dateText = dateElement.textContent.trim();
            const date = new Date(dateText);
            // debugLog('SETTINGS', 'Found release date:', dateText);
            
            if (!earliestNonPremiereDate || date < earliestNonPremiereDate) {
                earliestNonPremiereDate = date;
                debugLog('SETTINGS', 'New earliest non-premiere date:', date);
            }
        }
    }

    if (earliestNonPremiereDate) {
        const releaseYearElement = document.querySelector('.releasedate a');
        if (releaseYearElement) {
            const year = earliestNonPremiereDate.getFullYear();
            debugLog('SETTINGS', `Updating release year to ${year}`);
            releaseYearElement.textContent = year;
            releaseYearElement.href = `/films/year/${year}/`;
        }
    }
}

// Function to create a unique film identifier
function createUniqueFilmId(filmSlug, filmTitle, filmYear) {
    // Create a hash-like identifier that combines multiple pieces of information
    // This ensures uniqueness even if film slugs are similar
    const cleanTitle = filmTitle ? filmTitle.toLowerCase().replace(/[^a-z0-9]/g, '') : '';
    const cleanYear = filmYear ? filmYear.toString() : '';
    const cleanSlug = filmSlug ? filmSlug.toLowerCase().replace(/[^a-z0-9]/g, '') : '';
    
    // Combine all elements to create a unique identifier
    const combined = `${cleanSlug}_${cleanTitle}_${cleanYear}`;
    
    // Create a simple hash to make it more compact
    let hash = 0;
    for (let i = 0; i < combined.length; i++) {
        const char = combined.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32-bit integer
    }
    
    // Return both the original slug and the hash for maximum uniqueness
    return {
        slug: filmSlug,
        hash: Math.abs(hash).toString(36),
        combined: `${filmSlug}_${Math.abs(hash).toString(36)}`
    };
}

// Main function
async function fetchID() {
    // Check if we're on a film page - only proceed if URL starts with /film/
    if (!window.location.pathname.startsWith('/film/')) {
        debugLog('ICON', 'Not on a film page - skipping icon initialization');
        return;
    }
    
    // Debug: Log current page structure to help diagnose issues
    debugLog('ICON', '=== DEBUGGING PAGE STRUCTURE ===');
    debugLog('ICON', `Current URL: ${window.location.href}`);
    debugLog('ICON', `Current pathname: ${window.location.pathname}`);
    
    // Try multiple selectors to find the film poster or film ID
    let filmPoster = document.querySelector(".film-poster");
    let filmId = null;
    let filmTitle = null;
    let filmYear = null;
    
    if (filmPoster) {
        filmId = filmPoster.getAttribute("data-film-id");
        debugLog('ICON', `Found film-poster element, data-film-id: ${filmId}`);
        debugLog('ICON', `Film-poster element:`, filmPoster);
    } else {
        debugLog('ICON', 'Film-poster element not found');
    }
    
    // If we didn't get the film ID from film-poster, try alternative methods
    if (!filmId) {
        debugLog('ICON', 'Film ID not found in film-poster, trying alternative methods...');
        
        // Try to get film ID from URL
        const urlMatch = window.location.pathname.match(/\/film\/([^\/]+)/);
        if (urlMatch) {
            filmId = urlMatch[1];
            debugLog('ICON', `Extracted film ID from URL: ${filmId}`);
        }
        
        // Try other potential selectors for film ID
        if (!filmId) {
            const alternativeSelectors = [
                '[data-film-id]',
                '[data-film-slug]',
                '.film-header [data-*]',
                '.film-details [data-*]'
            ];
            
            for (const selector of alternativeSelectors) {
                const element = document.querySelector(selector);
                if (element) {
                    debugLog('ICON', `Found element with selector ${selector}:`, element);
                    filmId = element.getAttribute('data-film-id') || 
                             element.getAttribute('data-film-slug') || 
                             element.getAttribute('data-film');
                    if (filmId) {
                        debugLog('ICON', `Found film ID using selector ${selector}: ${filmId}`);
                        break;
                    }
                }
            }
        }
    }
    
    // Try to extract film title and year for additional uniqueness
    if (filmId) {
        // Look for film title in various places
        const titleSelectors = [
            'h1.film-title',
            '.film-header h1',
            'h1[class*="title"]',
            '.film-details h1'
        ];
        
        for (const selector of titleSelectors) {
            const titleElement = document.querySelector(selector);
            if (titleElement) {
                const titleText = titleElement.textContent.trim();
                if (titleText) {
                    // Extract year and title
                    const yearMatch = titleText.match(/\((\d{4})\)/);
                    if (yearMatch) {
                        filmYear = yearMatch[1];
                        filmTitle = titleText.replace(/\(\d{4}\)/, '').trim();
                    } else {
                        filmTitle = titleText;
                    }
                    debugLog('ICON', `Extracted title: "${filmTitle}" and year: "${filmYear}"`);
                    break;
                }
            }
        }
        
        // Create a more unique identifier
        const uniqueId = createUniqueFilmId(filmId, filmTitle, filmYear);
        debugLog('ICON', `Created unique film ID:`, uniqueId);
        
        // Store the unique identifier for use in icon matching
        window.currentFilmUniqueId = uniqueId;
    }
    
    // If we still don't have a film ID, log and return
    if (!filmId) {
        debugLog('ICON', 'ERROR: Could not find film ID using any method. Page structure may have changed.');
        console.error('Letterboxd extension: Could not find film ID. Page structure may have changed.');
        
        // Additional debugging: log all elements with data attributes
        debugLog('ICON', '=== SEARCHING FOR ANY DATA ATTRIBUTES ===');
        const allElements = document.querySelectorAll('*');
        const elementsWithData = Array.from(allElements).filter(el => {
            const attrs = el.attributes;
            for (let i = 0; i < attrs.length; i++) {
                if (attrs[i].name.startsWith('data-')) {
                    return true;
                }
            }
            return false;
        });
        
        if (elementsWithData.length > 0) {
            debugLog('ICON', `Found ${elementsWithData.length} elements with data attributes`);
            elementsWithData.slice(0, 10).forEach((el, i) => {
                const attrs = Array.from(el.attributes).filter(attr => attr.name.startsWith('data-'));
                debugLog('ICON', `Element ${i + 1}:`, el.tagName, attrs.map(attr => `${attr.name}="${attr.value}"`));
            });
        }
        
        return;
    }
    
    // Add a 1ms delay before proceeding
    await new Promise(resolve => setTimeout(resolve, 1));
    
    chrome.storage.sync.get(null, async (settings) => {
        // Add Oscar icons (this handles both regular and hierarchy)
        await addOscarIcon(filmId, settings);
        
        // Add the release year update
        updateReleaseYear(settings);
        
        
        // No need to call it here anymore
        
        // Debug: Check for stats container
        debugLog('ICON', '=== CHECKING FOR STATS CONTAINER ===');
        const statsSelectors = ['.production-statistic-list', '.film-stats', '.stats', '[class*="stats"]'];
        let statsContainer = null;
        
        for (const selector of statsSelectors) {
            const element = document.querySelector(selector);
            if (element) {
                statsContainer = element;
                debugLog('ICON', `Found stats container with selector: ${selector}`);
                debugLog('ICON', `Stats container:`, element);
                break;
            }
        }
        
        if (!statsContainer) {
            debugLog('ICON', 'WARNING: No stats container found. Icons may not display properly.');
        }
        
        // Create array of promises for icon additions
        const iconPromises = Object.keys(ICON_CONFIG)
            .filter(iconKey => !iconKey.startsWith('oscar') && 
                              iconKey !== 'winOscar' && 
                              iconKey !== 'nomOscar')
            .map(iconKey => addIcon(filmId, iconKey, settings));

        // Wait for all icons to be processed
        await Promise.all(iconPromises);
        debugLog('ICON', '✓ All icons have been processed and added');
    });
}

// Replace the current fetchID() call with this code
const initializeIcons = () => {
    // Check if we're on a film page - only proceed if URL starts with /film/
    if (!window.location.pathname.startsWith('/film/')) {
        debugLog('ICON', 'Not on a film page - skipping icon initialization');
        return;
    }
    
    debugLog('ICON', 'Waiting for film elements and stats container to be available...');
    
    // Set a timeout to prevent infinite waiting
    const timeout = setTimeout(() => {
        debugLog('ICON', 'WARNING: Timeout reached waiting for page elements. Page structure may have changed significantly.');
        console.warn('Letterboxd extension: Timeout waiting for page elements. Page structure may have changed.');
        
        // Try to run fetchID anyway - it will handle the error gracefully
        fetchID();
    }, 10000); // 10 second timeout
    
    const observer = new MutationObserver((mutations, obs) => {
        // Try to find any film-related element and stats container
        const filmElement = document.querySelector(".film-poster, [data-film-id], [data-film-slug], .film-header, .film-details");
        const statsContainer = document.querySelector(".production-statistic-list, .film-stats, .stats, [class*='stats']");
        
        if (filmElement && statsContainer) {
            debugLog('ICON', 'Film element and stats container found, initializing icons');
            clearTimeout(timeout);
            obs.disconnect();
            fetchID();
        }
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

    // Also try immediately in case the elements are already there
    const filmElement = document.querySelector(".film-poster, [data-film-id], [data-film-slug], .film-header, .film-details");
    const statsContainer = document.querySelector(".production-statistic-list, .film-stats, .stats, [class*='stats']");
    if (filmElement && statsContainer) {
        debugLog('ICON', 'Film element and stats container already present, initializing icons');
        clearTimeout(timeout);
        observer.disconnect();
        fetchID();
    }
};

// Initialize icons only on film pages
initializeIcons();



// Debug function that can be called from console
window.debugLetterboxdExtension = () => {
    console.log('=== LETTERBOXD EXTENSION DEBUG ===');
    console.log('Current URL:', window.location.href);
    console.log('Current pathname:', window.location.pathname);
    
    // Check for film-poster
    const filmPoster = document.querySelector('.film-poster');
    console.log('Film poster element:', filmPoster);
    if (filmPoster) {
        console.log('Film poster attributes:', Array.from(filmPoster.attributes).map(attr => `${attr.name}="${attr.value}"`));
    }
    
    // Check for stats container
    const statsSelectors = ['.production-statistic-list', '.film-stats', '.stats'];
    statsSelectors.forEach(selector => {
        const element = document.querySelector(selector);
        if (element) {
            console.log(`Stats container (${selector}):`, element);
        }
    });
    
    // Check for any data attributes
    const elementsWithData = document.querySelectorAll('[data-*]');
    console.log(`Found ${elementsWithData.length} elements with data attributes`);
    elementsWithData.slice(0, 20).forEach((el, i) => {
        const attrs = Array.from(el.attributes).filter(attr => attr.name.startsWith('data-'));
        if (attrs.length > 0) {
            console.log(`Element ${i + 1} (${el.tagName}):`, attrs.map(attr => `${attr.name}="${attr.value}"`));
        }
    });
    
    // Check for film-related classes
    const filmClasses = document.querySelectorAll('[class*="film"]');
    console.log(`Found ${filmClasses.length} elements with "film" in class name`);
    filmClasses.slice(0, 10).forEach((el, i) => {
        console.log(`Film class element ${i + 1}:`, el.tagName, el.className);
    });
    
    // Check current film unique ID if available
    if (window.currentFilmUniqueId) {
        console.log('Current film unique ID:', window.currentFilmUniqueId);
    }
    
    console.log('=== END DEBUG ===');
};

let ratingsRemoved = false; // Flag to track if ratings have been removed

// Function to remove ratings
async function removeRatings() {
    const ratingsSection = document.querySelector('.section.ratings-histogram-chart');
    if (ratingsSection) {
        if (ratingsSection.style.display !== 'none') {
            ratingsSection.style.display = 'none'; // Hide the ratings section
            debugLog('SETTINGS', 'Ratings and histogram successfully removed.');
            ratingsRemoved = true; // Set the flag to true
        } else {
            // debugLog('SETTINGS', 'Ratings section was already hidden.');
        }
    } else {
        // debugLog('SETTINGS', 'Ratings section not found. Retrying in 100ms...'); // Change to warn for clarity
        setTimeout(removeRatings, 100); // Retry after a short delay
    }
}

// Function to observe changes in the sidebar
function observeSidebar() {
    const sidebar = document.querySelector('aside.sidebar');
    if (!sidebar) {
        debugLog('SETTINGS', 'Sidebar not found.');
        return;
    }

    const observer = new MutationObserver(() => {
        // Check the toggle state and remove ratings if necessary
        checkAndRemoveRatings(observer);
    });

    observer.observe(sidebar, { childList: true, subtree: true });
}

// Add this function to handle the removal of ratings based on the toggle state
async function checkAndRemoveRatings(observer) {
    // If ratings have already been removed, do not proceed
    if (ratingsRemoved) {
        // debugLog('SETTINGS', 'Ratings have already been removed. No further action taken.');
        return; // Early return to prevent further checks
    }

    // Retrieve the toggle state from storage
    const result = await chrome.storage.sync.get(['showRemoveRatings']);
    if (result.showRemoveRatings) {
        // debugLog('SETTINGS', 'Remove Ratings toggle is ON.');
        await removeRatings(); // Call without passing observer
    } else {
        debugLog('SETTINGS', 'Remove Ratings toggle is OFF. No action taken.');
    }
}

// Call the function when the content script loads
observeSidebar(); // Start observing the sidebar for changes
checkAndRemoveRatings(); // Initial check for ratings removal

// Optimized runtime conversion function
async function convertRuntime() {
    try {
        chrome.storage.sync.get(['showConvertRuntime'], ({ showConvertRuntime }) => {
            if (!showConvertRuntime) {
                debugLog('SETTINGS', 'Runtime conversion toggle is off');
                return;
            }

            debugLog('SETTINGS', 'Runtime conversion toggle is on, processing runtime');

            const runtimeElements = [
                {
                    selector: '.text-link.text-footer',
                    getRuntime: el => el.textContent.match(/(\d+)\s*mins/),
                    setRuntime: (el, newText) => {
                        el.childNodes.forEach(node => {
                            if (node.nodeType === Node.TEXT_NODE) {
                                node.textContent = node.textContent.replace(/(\d+\s*mins)/, newText);
                            }
                        });
                    }
                },
                {
                    selector: '.text-footer-extra.duration-extra',
                    getRuntime: el => el.getAttribute('data-original-title').match(/(\d+)h\s*(\d+)m/),
                    setRuntime: (el, newText) => {
                        el.childNodes.forEach(node => {
                            if (node.nodeType === Node.TEXT_NODE) {
                                node.textContent = node.textContent.replace(/(\d+\s*mins)/, newText);
                            }
                        });
                    }
                }
            ];

            runtimeElements.forEach(({ selector, getRuntime, setRuntime }) => {
                const runtimeElement = document.querySelector(selector);
                if (runtimeElement) {
                    const match = getRuntime(runtimeElement);
                    if (match) {
                        let newRuntimeText;
                        if (match.length === 2) {
                            const minutes = parseInt(match[1], 10);
                            newRuntimeText = formatDuration(minutes);
                        } else if (match.length === 3) {
                            const hours = parseInt(match[1], 10);
                            const minutes = parseInt(match[2], 10);
                            newRuntimeText = formatDuration(hours * 60 + minutes);
                        }

                        setRuntime(runtimeElement, newRuntimeText);
                        debugLog('SETTINGS', `Updated runtime to: ${newRuntimeText}`);
                    } else {
                        debugLog('SETTINGS', 'No runtime found to convert');
                    }
                } else {
                    debugLog('SETTINGS', 'Runtime element not found');
                }
            });
        });
    } catch (error) {
        console.error('Error in convertRuntime:', error);
        debugLog('SETTINGS', 'Error in convertRuntime:', error);
    }
}

// Utility function for formatting duration
function formatDuration(duration) {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;

    if (hours > 0 && minutes > 0) {
        return `${hours} hour${hours !== 1 ? 's' : ''} and ${minutes} minute${minutes !== 1 ? 's' : ''}`;
    } else if (hours > 0) {
        return `${hours} hour${hours !== 1 ? 's' : ''}`;
    } else {
        return `${minutes} minute${minutes !== 1 ? 's' : ''}`;
    }
}

// Function to safely execute code in the context of the extension
function safeExecute(callback) {
    try {
        callback();
    } catch (error) {
        console.error('Error executing callback:', error);
    }
}

// Call the convertRuntime function on film pages
if (window.location.pathname.startsWith('/film/')) {
    safeExecute(convertRuntime);
}