document.addEventListener('DOMContentLoaded', () => {
    // Define sections and their toggles
    const sections = {
        'MajorAwards': ['NomOscar', 'WinOscar', 'Bafta', 'Goldend', 'Goldenc', 'Critic', 'Screen', 'Direct', 'Pga'],
        'StatsPage': ['Imdb', 'Film', 'Palm', 'Money', 'AFI', 'SightSound', 'Movies1001', 'Edgar', 'Ebert', 'Pink', 'Black', 'HeartEyes', 'Documentary', 'Animation', 'Ghost'],
        'GenreLists': ['Funny', 'Romcom', 'Anime', 'Comedy', 'Shorts', 'Tv', 'Concert', 'Action', 'PopAction', 'Adventure', 'PopAdventure', 'PopAnimation', 'PopComedy', 'Crime', 'PopCrime', 'Drama', 'PopDrama', 'Family', 'PopFamily', 'Fantasy', 'PopFantasy', 'History', 'PopHistory', 'PopHorror', 'Music', 'PopMusic', 'Mystery', 'PopMystery', 'Romance', 'PopRomance', 'ScienceFiction', 'PopScienceFiction', 'Thriller', 'PopThriller', 'War', 'PopWar', 'Western', 'PopWestern'],
        'OtherAwards': ['Lion', 'Sundance', 'Bear', 'Tiff', 'Spirit', 'Wga', 'Annie', 'Saturnh', 'Saturnf', 'Saturns', 'Razzie', 'Gotham', 'Lafca', 'Nbr', 'Nsf', 'Nyfc'],
        'LetterboxdLists': ['Crown', 'Fire', 'Poop', 'LetterboxdTop250', 'MostPopularYear', 'Gray', 'Thumbs', 'Year', 'FiveStar', 'Male', 'She', 'Ze', 'FansPerView', 'Letterboxd113', 'Obscure', 'GRated', 'PopGRated', 'PGRated', 'PopPGRated', 'PG13Rated', 'PopPG13Rated', 'RRated', 'PopRRated', 'NC17Rated', 'PopNC17Rated', 'NorthAmerica', 'PopNorthAmerica', 'PopSouthAmerica', 'PopEurope', 'PopAfrica', 'PopAsia', 'PopAustralia', 'SouthAmerica', 'EuropeanNarrative', 'AfricanNarrative', 'AsianNarrative', 'AustralianNarrative', 'ShortFilms250', 'PopFilms250', 'Top250Under120', 'Pop250Under120', 'Top150Over180', 'Pop150Over180', 'Top240Minutes', 'Pop240Minutes', 'Unweighted', 'Silent'],
        'ExternalLists': ['Marty', 'Toro', 'Ford', 'Wga101', 'Nerd', 'Inflate', 'Fresh', 'Scream', 'FourFavorites', 'TrueFilm', 'Rmovies', 'Top10', 'Register', 'Raj', 'Shoot', 'Criterion', "BillionDollarClub", "Flanagan", 'FourGreatest', 'BoxOffice', 'BurningCash', 'YearlyDollar', 'MoneybagOld', 'Moneybag', 'BoxOffice', 'BurningCash', 'YearlyDollar'],
    };

    // Excluded from master toggle
    const excludedToggles = ['HideNomForWin', 'Movies1001Alt', 'OscarHierarchy', 'MoneyAlt', 'NonPremiere', 'RemoveRatings', 'ConvertRuntime', 'Animation250', 'HorrorAlt'];

    // Function to toggle section visibility
    function toggleSection(header) {
        const content = header.nextElementSibling; // Get the next sibling (the content div)
        const icon = header.querySelector('.toggle-icon'); // Get the icon element

        // Check current state and toggle accordingly
        const isOpen = content.style.display === "block"; // Determine if currently open
        content.style.display = isOpen ? "none" : "block"; // Toggle visibility
        icon.textContent = ""; // Remove the icon text (keep the span empty)
        
        // Save the section state to storage
        const sectionName = header.textContent.trim(); // Get the section name
        chrome.storage.sync.set({ [sectionName]: !isOpen }); // Save the new state (opposite of current isOpen)
    }

    // Function to initialize section states from storage
    function initializeSectionStates() {
        // Get all section headers from the DOM
        const headers = document.querySelectorAll('.category-header');
        
        headers.forEach(header => {
            const sectionName = header.textContent.trim(); // Get the section name
            
            chrome.storage.sync.get([sectionName], (result) => {
                const isOpen = result[sectionName] !== undefined ? result[sectionName] : true; // Default to true (open) if not set
                
                const content = header.nextElementSibling; // Get the content div
                const icon = header.querySelector('.toggle-icon'); // Get the icon element

                // Set the initial state based on stored value
                content.style.display = isOpen ? "block" : "none"; // Show or hide content
                icon.textContent = ""; // Keep the icon span empty
            });
        });
    }

    // Attach click event listeners to section headers
    document.querySelectorAll('.category-header').forEach(header => {
        header.addEventListener('click', () => toggleSection(header));
    });

    // Initialize all toggles from storage
    function initializeToggles() {
        chrome.storage.sync.get(null, (result) => {
            // Initialize individual toggles
            Object.entries(toggleConfig).forEach(([toggleName, storageKey]) => {
                const toggle = document.getElementById(`toggle${toggleName}`);
                if (toggle) {
                        toggle.checked = result[storageKey] !== false;
                    }
                });

            // Initialize section master toggles
            Object.entries(sections).forEach(([section, toggles]) => {
                const sectionToggle = document.getElementById(`toggleMaster${section}`);
                if (sectionToggle) {
                    const sectionState = toggles.every(toggleName => 
                        result[`show${toggleName}`] !== false
                    );
                    sectionToggle.checked = sectionState;
                }
            });

            // Initialize master toggle
            const masterToggle = document.getElementById('toggleMasterAll');
            if (masterToggle) {
                const allTogglesState = Object.values(sections).flat()
                    .filter(toggle => !excludedToggles.includes(toggle))
                    .every(toggleName => result[`show${toggleName}`] !== false);
                masterToggle.checked = allTogglesState;
            }


        });
    }

    // Handle master toggle for all sections
    const masterAllToggle = document.getElementById('toggleMasterAll');
    masterAllToggle.addEventListener('change', () => {
        const isChecked = masterAllToggle.checked;
        const updates = {};
        
        Object.values(sections).flat().forEach(toggleName => {
            if (!excludedToggles.includes(toggleName)) {
                const toggle = document.getElementById(`toggle${toggleName}`);
                if (toggle) {
                    toggle.checked = isChecked;
                    updates[`show${toggleName}`] = isChecked;
                }
            }
        });

        // Update section master toggles
        Object.keys(sections).forEach(section => {
            const sectionToggle = document.getElementById(`toggleMaster${section}`);
            if (sectionToggle) {
                sectionToggle.checked = isChecked;
            }
        });

        // Save all changes at once
        chrome.storage.sync.set(updates);
    });

    // Handle individual section master toggles
    Object.entries(sections).forEach(([section, toggles]) => {
        const sectionToggle = document.getElementById(`toggleMaster${section}`);
        if (sectionToggle) {
            sectionToggle.addEventListener('change', () => {
                const isChecked = sectionToggle.checked;
                const updates = {};

                toggles.forEach(toggleName => {
                    const toggle = document.getElementById(`toggle${toggleName}`);
                    if (toggle) {
                        toggle.checked = isChecked;
                        updates[`show${toggleName}`] = isChecked;
                    }
                });

                // Save all changes at once
                chrome.storage.sync.set(updates);
            });
        }
    });

    // Define all toggles and their corresponding storage keys
    const toggleConfig = {
        'Crown': 'showCrown',
        'Fire': 'showFire',
        'Palm': 'showPalm',
        'Money': 'showMoney',
        'NomOscar': 'showNomOscar',
        'WinOscar': 'showWinOscar',
        'HideNomForWin': 'hideNomForWin',
        'Imdb': 'showImdb',
        'Edgar': 'showEdgar',
        'Movies1001': 'showMovies1001',
        'Animation': 'showAnimation',
        'Documentary': 'showDocumentary',
        'AFI': 'showAFI',
        'SightSound': 'showSightSound',
        'Ebert': 'showEbert',
        'Ghost': 'showGhost',
        'HeartEyes': 'showHeartEyes',
        'Black': 'showBlack',
        'Pink': 'showPink',
        'Poop': 'showPoop',
        'Toro': 'showToro',
        'TrueFilm': 'showTrueFilm',

        'Shorts': 'showShorts',
        'Wga': 'showWga',
        'Gray': 'showGray',
        'Thumbs': 'showThumbs',
        'Scream': 'showScream',
        'Ford': 'showFord',
        'Nerd': 'showNerd',
        'Top10': 'showTop10',
        'Marty': 'showMarty',
        'Rmovies': 'showRmovies',
        'Movies1001Alt': 'showMovies1001Alt',
        'Fresh': 'showFresh',
        'Register': 'showRegister',
        'Film': 'showFilm',
        'OscarHierarchy': 'showOscarHierarchy',
        'Comedy': 'showComedy',
        'Concert': 'showConcert',
        'Tv': 'showTv',
        'LetterboxdTop250': 'showLetterboxdTop250',
        'MoneyAlt': 'showMoneyAlt',
        'Inflate': 'showInflate',
        'Lion': 'showLion',
        'Bafta': 'showBafta',
        'Goldend': 'showGoldend',
        'Goldenc': 'showGoldenc',
        'Bear': 'showBear',
        'Gotham': 'showGotham',
        'Lafca': 'showLafca',
        'Nbr': 'showNbr',
        'Nsf': 'showNsf',
        'Nyfc': 'showNyfc',
        'Annie': 'showAnnie',
        'Razzie': 'showRazzie',
        'Tiff': 'showTiff',
        'Sundance': 'showSundance',
        'Critic': 'showCritic',
        'Spirit': 'showSpirit',
        'Direct': 'showDirect',
        'Screen': 'showScreen',
        'Pga': 'showPga',
        'Shoot': 'showShoot',
        'Raj': 'showRaj',
        'NonPremiere': 'useNonPremiereYear',
        'Saturnh': 'showSaturnh',
        'Saturnf': 'showSaturnf',
        'Saturns': 'showSaturns',
        'MuteAudio': 'muteAudio',
        'RemoveRatings': 'showRemoveRatings',
        'ConvertRuntime': 'showConvertRuntime',
        'FourFavorites': 'showFourFavorites',
        'Year': 'showYear',
        'FiveStar': 'showFiveStar',
        'BillionDollarClub': 'showBillionDollarClub',
        'Letterboxd113': 'showLetterboxd113',
        'Male': 'showMale',
        'She': 'showShe',
        'Ze': 'showZe',
        'FansPerView': 'showFansPerView',
        'Obscure': 'showObscure',
        'Romcom': 'showRomcom',
        'Anime': 'showAnime',
        'Criterion': 'showCriterion',
        'Flanagan': 'showFlanagan',
        'FourGreatest': 'showFourGreatest',
        'Action': 'showAction',
        'Adventure': 'showAdventure',
        'Animation250': 'showAnimation250',
        'Funny': 'showFunny',
        'Crime': 'showCrime',
        'Drama': 'showDrama',
        'Family': 'showFamily',
        'Fantasy': 'showFantasy',
        'History': 'showHistory',
        'Music': 'showMusic',
        'Mystery': 'showMystery',
        'Romance': 'showRomance',
        'ScienceFiction': 'showScienceFiction',
        'Thriller': 'showThriller',
        'War': 'showWar',
        'Western': 'showWestern',
        'GRated': 'showGRated',
        'PGRated': 'showPGRated',
        'PG13Rated': 'showPG13Rated',
        'RRated': 'showRRated',
        'NC17Rated': 'showNC17Rated',
        'NorthAmerica': 'showNorthAmerica',
        'SouthAmerica': 'showSouthAmerica',
        'EuropeanNarrative': 'showEuropeanNarrative',
        'AfricanNarrative': 'showAfricanNarrative',
        'AsianNarrative': 'showAsianNarrative',
        'AustralianNarrative': 'showAustralianNarrative',
        'PopNorthAmerica': 'showPopNorthAmerica',
        'PopSouthAmerica': 'showPopSouthAmerica',
        'PopEurope': 'showPopEurope',
        'PopAfrica': 'showPopAfrica',
        'PopAsia': 'showPopAsia',
        'PopAustralia': 'showPopAustralia',
        'ShortFilms250': 'showShortFilms250',
        'PopFilms250': 'showPopFilms250',
        'Top250Under120': 'showTop250Under120',
        'Pop250Under120': 'showPop250Under120',
        'Top150Over180': 'showTop150Over180',
        'Pop150Over180': 'showPop150Over180',
        'Top240Minutes': 'showTop240Minutes',
        'Pop240Minutes': 'showPop240Minutes',
        'BoxOffice': 'showBoxOffice',
        'BurningCash': 'showBurningCash',
        'YearlyDollar': 'showYearlyDollar',
        'MoneybagOld': 'showMoneybagOld',
        'Moneybag': 'showMoneybag',
        'HorrorAlt': 'showHorrorAlt',
        'Wga101': 'showWga101',
        'MostPopularYear': 'showMostPopularYear',
        'Unweighted': 'showUnweighted',
        'PopAction': 'showPopAction',
        'PopAdventure': 'showPopAdventure',
        'PopAnimation': 'showPopAnimation',
        'PopComedy': 'showPopComedy',
        'PopCrime': 'showPopCrime',
        'PopDrama': 'showPopDrama',
        'PopFamily': 'showPopFamily',
        'PopFantasy': 'showPopFantasy',
        'PopHistory': 'showPopHistory',
        'PopMusic': 'showPopMusic',
        'PopMystery': 'showPopMystery',
        'PopRomance': 'showPopRomance',
        'PopScienceFiction': 'showPopScienceFiction',
        'PopHorror': 'showPopHorror',
        'PopThriller': 'showPopThriller',
        'PopWar': 'showPopWar',
        'PopWestern': 'showPopWestern',
        'PopGRated': 'showPopGRated',
        'PopPGRated': 'showPopPGRated',
        'PopPG13Rated': 'showPopPG13Rated',
        'PopRRated': 'showPopRRated',
        'PopNC17Rated': 'showPopNC17Rated',
        'Silent': 'showSilent',
           
    };

    // Set up individual toggle listeners
    Object.entries(toggleConfig).forEach(([toggleName, storageKey]) => {
        const toggle = document.getElementById(`toggle${toggleName}`);
        if (toggle) {
            toggle.addEventListener('change', () => {
                chrome.storage.sync.set({ [storageKey]: toggle.checked });
                

            });
        }
    });
    
    // Initialize all toggles when popup opens
    initializeSectionStates(); // Initialize section states first
    initializeToggles();
});