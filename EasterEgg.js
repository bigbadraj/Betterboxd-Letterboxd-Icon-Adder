// Debug logging function (copied from content.js for independence)
const EASTER_DEBUG = {
    EASTER: true,   // For easter egg debugging - temporarily enabled
};

function debugLog(category, message, ...args) {
    if (EASTER_DEBUG[category]) {
        console.log(`[${category}] ${message}`, ...args);
    }
}

// Configuration for easter eggs
const EASTER_EGG_CONFIG = {
  global: {
    // text-only "egg" (no chance/url; used only by text replacer)
    brendanFraser: {
      type: "text"
    },
    rickroll: {
      chance: 1 / 5000,
      url: "https://youtu.be/-nmCeXgztxM",
    },
    freddyGotFingered: {
      chance: 1 / 5000,
      url: "https://letterboxd.com/film/freddy-got-fingered/",
    }
  },

    
    // Film-specific easter eggs
    filmSpecific: {
        'megalopolis-2024': {
            type: 'textReplacement',
            audio: 'audio/pledge.mp3',
            tagline: "GO BACK TO THE CLUUUUUUUUUB",
            textReplacements: {
                'Megalopolis': 'Megacockolis'
            }
        },
        'american-psycho': {
            type: 'playlist',
        },
        'memento': {
            type: 'textReversal',
        },
        'the-bye-bye-man': {
            type: 'imageReplacement',
            image: 'images/peepee.png',
            textReplacements: {
                'bye bye': 'PeePee PooPoo'
            }
        },
        'inception': {
            type: 'audio',
            audio: 'audio/inception.mp3',
        },
        'spider-man-into-the-spider-verse': {
            type: 'audio',
            audio: 'audio/prowler.mp3',
        },
        'spider-man-across-the-spider-verse': {
            type: 'audio',
            audio: 'audio/prowler.mp3',
        },
        'spider-man-beyond-the-spider-verse': {
            type: 'audio',
            audio: 'audio/prowler.mp3',
        },
        'joker-2019': {
            type: 'taglineReplacement',
            tagline: "We live in a soceity..."
        },
        'candyman': {
            type: 'audio',
            audio: 'audio/candyman.mp3',
            loop: true,
        },
        'candyman-farewell-to-the-flesh': {
            type: 'audio',
            audio: 'audio/candyman.mp3',
            loop: true,
        },
        'candyman-day-of-the-dead': {
            type: 'audio',
            audio: 'audio/candyman.mp3',
            loop: true,
        },
        'candyman-2021': {
            type: 'audio',
            audio: 'audio/candyman.mp3',
            loop: true,
        },
        'five-nights-at-freddys': {
            type: 'jumpscare',
            videos: [
                'video/fnaf.mp4',
                'video/fnaf2.mp4', 
                'video/fnaf3.mp4',
                'video/fnaf4.mp4',
                'video/fnaf5.mp4',
                'video/fnaf6.mp4'
            ],
        },
        'zodiac': {
            type: 'cipher',
        },
        'the-game': {
            type: 'taglineReplacement',
            tagline: "You just lost The Game..."
        },
        'the-witch-2015': {
            type: 'taglineReplacement',
            tagline: "wouldst thou like to live deliciously?"
        },
        'emilia-perez': {
            type: 'taglineReplacement',
            tagline: "A heartwarming tale, from penis to vagina"
        },
        'fart-the-movie': {
            type: 'audio',
            audio: [
                'audio/fart1.mp3',
                'audio/fart2.mp3',
                'audio/fart3.mp3',
                'audio/fart4.mp3',
                'audio/fart5.mp3',
                'audio/fart6.mp3',
                'audio/fart7.mp3',
                'audio/fart8.mp3'
            ],
        },
        'flow-2024': {
            type: 'audio',
            audio: 'audio/flow.mp3',
            loop: true,
        },
        'challengers': {
            type: 'audio',
            audio: 'audio/challengers.mp3',
            loop: true,
        },
        'the-lego-movie': {
            type: 'audio',
            audio: 'audio/lego.mp3',
            loop: true,
        },
        'the-substance': {
            type: 'taglineReplacement',
            tagline: "Pump. It. Up. You've got to pump it up."
        },
        'the-shining': {
            type: 'taglineReplacement',
            tagline: "All work and no play makes jack a dull boy.\nAll work and no play makes jack a dull boy.\nAll work and no play makes jack a dull boy.\nAll work and no play makes jack a dull boy.\nAll work and no play makes jack a dull boy."
        },
        'borat-cultural-learnings-of-america-for-make-benefit-glorious-nation-of-kazakhstan': {
            type: 'backgroundReplacement',
            image: 'images/borat.jpg',
        },
        'the-arrival-of-a-train-at-la-ciotat': {
            type: 'jumpscare',
            video: 'video/train.mp4',
        },
        'the-truman-show': {
            type: 'video',
            video: 'video/truman.mp4',
        }
    }
};

// Main easter egg initialization function
function initializeEasterEggs() {
    console.log('EasterEgg.js: initializeEasterEggs() called');
    
        // Check if easter eggs are enabled
    chrome.storage.sync.get(['showEasterEggs'], (settings) => {
        console.log('EasterEgg.js: Settings retrieved:', settings);

        if (!settings.showEasterEggs) {
            console.log('EasterEgg.js: Easter eggs disabled, returning');
            return;
        }
        
        console.log('EasterEgg.js: Initializing global easter eggs');
        // Initialize global easter eggs
        initializeGlobalEasterEggs();
        
        // Initialize film-specific easter eggs if on a film page
        if (window.location.pathname.startsWith('/film/')) {
            console.log('EasterEgg.js: On film page, initializing film-specific easter eggs');
            initializeFilmSpecificEasterEggs();
        }
    });
}

// Global easter eggs that work on all pages
function initializeGlobalEasterEggs() {
    // Rickroll and Freddy Got Fingered redirects
    document.addEventListener('click', handleGlobalEasterEggClick);
    
    // Brendan Fraser text replacement
    replaceBrendanFraser();
    
    // Set up observer for dynamic content
    const observer = new MutationObserver(() => {
        replaceBrendanFraser();
    });
    
    observer.observe(document.body, {
        childList: true,
        subtree: true,
    });
}

// Handle global easter egg clicks (rickroll, Freddy Got Fingered, etc.)
function handleGlobalEasterEggClick() {
    chrome.storage.sync.get(['showEasterEggs'], (settings) => {
        if (!settings.showEasterEggs) return;

        // Roll once for each global redirect easter egg
        for (const [key, egg] of Object.entries(EASTER_EGG_CONFIG.global)) {
            if (Math.random() < egg.chance) {
                debugLog('EASTER', `Redirect triggered: ${egg.description}`);
                window.location.href = egg.url;
                return; // stop after the first trigger
            }
        }
    });
}

// Brendan Fraser text replacement
async function replaceBrendanFraser() {
    try {
        const settings = await new Promise((resolve, reject) => {
            chrome.storage.sync.get(['showEasterEggs'], (result) => {
                if (chrome.runtime.lastError) {
                    reject(chrome.runtime.lastError);
                } else {
                    resolve(result);
                }
            });
        });

        // Exit if toggle is off
        if (!settings.showEasterEggs) return;

        const textNodes = document.evaluate(
            "//text()[not(ancestor::script)][not(ancestor::style)]",
            document,
            null,
            XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
            null
        );

        let totalReplacements = 0;

        for (let i = 0; i < textNodes.snapshotLength; i++) {
            const node = textNodes.snapshotItem(i);
            if (node.nodeType === Node.TEXT_NODE) {
                const originalText = node.textContent;
                const updatedText = originalText.replace(
                    /brendan fraser(?!, from The Mummy \(1999\))/gi,
                    "Brendan Fraser, from The Mummy (1999)"
                );

                if (updatedText !== originalText) {
                    node.textContent = updatedText;
                    const replacementsInNode =
                        (originalText.match(/brendan fraser/gi) || []).length;
                    totalReplacements += replacementsInNode;

                    // Optional debug logging
                    console.log(
                        `[EASTER] Replaced ${replacementsInNode} occurrence(s) in a text node.`
                    );
                }
            }
        }

        if (totalReplacements > 0) {
            console.log(`[EASTER] Total replacements made: ${totalReplacements}`);
        }
    } catch (error) {
        console.warn("Failed to replace Brendan Fraser text:", error);
    }
}

// Call the function on page load (this was missing in your version)
replaceBrendanFraser();

// Film-specific easter eggs
function initializeFilmSpecificEasterEggs() {
    // Get current film slug from URL - handle sub-pages like reviews, cast, etc.
    const pathMatch = window.location.pathname.match(/\/film\/([^\/]+)/);
    const filmSlug = pathMatch ? pathMatch[1] : null;
    
    debugLog('EASTER', `Film-specific easter eggs: URL path = ${window.location.pathname}, extracted slug = ${filmSlug}`);
    
    if (!filmSlug) {
        debugLog('EASTER', 'No film slug found in URL');
        return;
    }
    
    // Check if this film has an easter egg
    const easterEgg = EASTER_EGG_CONFIG.filmSpecific[filmSlug];
    if (!easterEgg) {
        debugLog('EASTER', `No easter egg found for film slug: ${filmSlug}`);
        return;
    }
    
    debugLog('EASTER', `Found easter egg for ${filmSlug}: ${easterEgg.type}`);
    
    // Initialize based on type
    switch (easterEgg.type) {
        case 'textReplacement':
            initializeTextReplacementEasterEgg(easterEgg);
            break;
        case 'audio':
            initializeAudioEasterEgg(easterEgg);
            break;
        case 'playlist':
            initializePlaylistEasterEgg(easterEgg);
            break;
        case 'jumpscare':
            initializeJumpscareEasterEgg(easterEgg);
            break;
        case 'cipher':
            initializeCipherEasterEgg(easterEgg);
            break;
        case 'taglineReplacement':
            initializeTaglineReplacementEasterEgg(easterEgg);
            break;
        case 'imageReplacement':
            initializeImageReplacementEasterEgg(easterEgg);
            break;
        case 'backgroundReplacement':
            initializeBackgroundReplacementEasterEgg(easterEgg);
            break;
        case 'video':
            initializeVideoEasterEgg(easterEgg);
            break;
        case 'textReversal':
            initializeTextReversalEasterEgg(easterEgg);
            break;
    }
}

// Text replacement easter eggs (like Megalopolis)
function initializeTextReplacementEasterEgg(config) {
    if (config.audio) {
        const audio = new Audio(chrome.runtime.getURL(config.audio));
        audio.loop = true;
        audio.muted = true; // Will be unmuted on user interaction
        
        document.addEventListener('click', () => {
            audio.muted = false;
            audio.play().catch(() => {
                audio.muted = true;
                audio.play();
            });
        }, { once: true });
    }
    
    if (config.tagline) {
        replaceTagline(config.tagline);
    }
    
    if (config.textReplacements) {
        Object.entries(config.textReplacements).forEach(([oldText, newText]) => {
            replaceTextContent(oldText, newText);
        });
    }
}

// Audio easter eggs (like Inception, Spider-Verse, Fart) - now with overlapping playback and random file selection!
function initializeAudioEasterEgg(config) {
    document.addEventListener('click', () => {
        // Create a new audio instance for each click to allow overlapping
        let audioFiles = config.audio;
        if (typeof config.audio === 'string') {
            audioFiles = [config.audio];
        }
        
        const randomAudioFile = audioFiles[Math.floor(Math.random() * audioFiles.length)];
        const audio = new Audio(chrome.runtime.getURL(randomAudioFile));
        audio.muted = true;
        
        if (config.loop) {
            audio.loop = true;
        }
        
        // Unmute and play
        audio.muted = false;
        audio.play().catch(() => {
            // Fallback: mute and play if autoplay fails
            audio.muted = true;
            audio.play();
        });
        
        // Clean up the audio element when it finishes (for non-looping sounds)
        if (!config.loop) {
            audio.addEventListener('ended', () => {
                audio.remove();
            });
        }
    });
}
// Tagline replacement easter eggs
function initializeTaglineReplacementEasterEgg(config) {
    replaceTagline(config.tagline);

    const taglineElement = document.querySelector('.tagline');

    if (!taglineElement) {
        // Only observe until tagline exists
        const observer = new MutationObserver(() => {
            const tagline = document.querySelector('.tagline');
            if (tagline) {
                tagline.textContent = config.tagline;
                observer.disconnect(); // stop once applied
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }
}

// Helper function to replace tagline
function replaceTagline(newTagline) {
    const tagline = document.querySelector('.tagline');
    if (tagline) {
        tagline.textContent = newTagline;
    }
}

// Helper function to replace text content with case-insensitive matching and capitalization mirroring
function replaceTextContent(oldText, newText) {
    debugLog('EASTER', `Replacing text: "${oldText}" with "${newText}" (case-insensitive)`);
    
    let totalFound = 0;
    let totalReplaced = 0;
    
    // Function to replace text while preserving original capitalization
    function replaceWithCasePreservation(text, oldText, newText) {
        const regex = new RegExp(oldText, 'gi');
        const matches = text.match(regex);
        if (matches) {
            totalFound += matches.length;
        }
        
        const result = text.replace(regex, (match) => {
            totalReplaced++;
            // Mirror the capitalization of the original text
            if (match === match.toUpperCase()) {
                // All caps
                return newText.toUpperCase();
            } else if (match === match.toLowerCase()) {
                // All lowercase
                return newText.toLowerCase();
            } else if (match[0] === match[0].toUpperCase() && match.slice(1) === match.slice(1).toLowerCase()) {
                // Title case (first letter capitalized)
                return newText.charAt(0).toUpperCase() + newText.slice(1).toLowerCase();
            } else {
                // Mixed case or other patterns - use the replacement as-is
                return newText;
            }
        });
        
        return result;
    }
    
    // Function to recursively find and replace text in all text nodes
    function replaceTextInNode(node) {
        if (node.nodeType === Node.TEXT_NODE) {
            if (node.textContent.toLowerCase().includes(oldText.toLowerCase())) {
                node.textContent = replaceWithCasePreservation(node.textContent, oldText, newText);
            }
        } else if (node.nodeType === Node.ELEMENT_NODE) {
            // Skip script and style elements
            if (node.tagName === 'SCRIPT' || node.tagName === 'STYLE') {
                return;
            }
            // Recursively process child nodes
            for (let child of node.childNodes) {
                replaceTextInNode(child);
            }
        }
    }
    
    // Start the replacement process from the document body
    replaceTextInNode(document.body);
    
    // Log summary
    debugLog('EASTER', `Text replacement summary: Found ${totalFound} instances, replaced ${totalReplaced} instances`);
    
    // Also set up a mutation observer to handle dynamically added content
    const observer = new MutationObserver((mutations) => {
        let dynamicFound = 0;
        let dynamicReplaced = 0;
        
        mutations.forEach((mutation) => {
            mutation.addedNodes.forEach((node) => {
                if (node.nodeType === Node.ELEMENT_NODE) {
                    // Recursively process new elements
                    function processNewNode(newNode) {
                        if (newNode.nodeType === Node.TEXT_NODE) {
                            if (newNode.textContent.toLowerCase().includes(oldText.toLowerCase())) {
                                const matches = newNode.textContent.match(new RegExp(oldText, 'gi'));
                                if (matches) {
                                    dynamicFound += matches.length;
                                }
                                newNode.textContent = replaceWithCasePreservation(newNode.textContent, oldText, newText);
                            }
                        } else if (newNode.nodeType === Node.ELEMENT_NODE) {
                            for (let child of newNode.childNodes) {
                                processNewNode(child);
                            }
                        }
                    }
                    processNewNode(node);
                } else if (node.nodeType === Node.TEXT_NODE && node.textContent.toLowerCase().includes(oldText.toLowerCase())) {
                    const matches = node.textContent.match(new RegExp(oldText, 'gi'));
                    if (matches) {
                        dynamicFound += matches.length;
                    }
                    node.textContent = replaceWithCasePreservation(node.textContent, oldText, newText);
                }
            });
        });
        
        if (dynamicFound > 0) {
            debugLog('EASTER', `Dynamic content: Found ${dynamicFound} new instances, replaced ${dynamicReplaced} instances`);
        }
    });
    
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
}

// Helper functions for processing new content without duplicating replacement logic
function processNewContent(node, textReplacements) {
    if (node.nodeType === Node.TEXT_NODE) {
        processNewTextNode(node, textReplacements);
    } else if (node.nodeType === Node.ELEMENT_NODE) {
        // Skip script and style elements
        if (node.tagName === 'SCRIPT' || node.tagName === 'STYLE') {
            return;
        }
        // Recursively process child nodes
        for (let child of node.childNodes) {
            processNewContent(child, textReplacements);
        }
    }
}

function processNewTextNode(node, textReplacements) {
    if (node.nodeType === Node.TEXT_NODE) {
        Object.entries(textReplacements).forEach(([oldText, newText]) => {
            if (node.textContent.toLowerCase().includes(oldText.toLowerCase())) {
                // Apply the same case-preserving replacement logic
                const regex = new RegExp(oldText, 'gi');
                node.textContent = node.textContent.replace(regex, (match) => {
                    // Mirror the capitalization of the original text
                    if (match === match.toUpperCase()) {
                        return newText.toUpperCase();
                    } else if (match === match.toLowerCase()) {
                        return newText.toLowerCase();
                    } else if (match[0] === match[0].toUpperCase() && match.slice(1) === match.slice(1).toLowerCase()) {
                        return newText.charAt(0).toUpperCase() + newText.slice(1).toLowerCase();
                    } else {
                        return newText;
                    }
                });
            }
        });
    }
}

// Image replacement easter eggs (like Bye Bye Man)
function initializeImageReplacementEasterEgg(config) {
    if (config.image) {
        // Try to replace the image
        if (replacePosterImage(config.image)) {
            debugLog('EASTER', 'Image replacement successful!');
        } else {
            debugLog('EASTER', 'Image replacement failed');
        }
    }
    
    if (config.textReplacements) {
        // Only run text replacement once initially
        Object.entries(config.textReplacements).forEach(([oldText, newText]) => {
            replaceTextContent(oldText, newText);
        });
    }
    
    // Observer for dynamic content - but don't re-run the full replacement
    const observer = new MutationObserver((mutations) => {
        if (config.textReplacements) {
            // Only process new content, don't re-run the full replacement
            mutations.forEach((mutation) => {
                mutation.addedNodes.forEach((node) => {
                    if (node.nodeType === Node.ELEMENT_NODE) {
                        // Process new elements without calling replaceTextContent again
                        processNewContent(node, config.textReplacements);
                    } else if (node.nodeType === Node.TEXT_NODE) {
                        processNewTextNode(node, config.textReplacements);
                    }
                });
            });
        }
    });
    
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
}

// Background replacement easter eggs (like Borat)
function initializeBackgroundReplacementEasterEgg(config) {
    if (config.image) {
        const backdropElement = document.querySelector('.backdrop-container #backdrop');
        if (backdropElement) {
            backdropElement.setAttribute('data-backdrop', chrome.runtime.getURL(config.image));
            backdropElement.setAttribute('data-backdrop2x', chrome.runtime.getURL(config.image));
            backdropElement.setAttribute('data-backdrop-mobile', chrome.runtime.getURL(config.image));
            
            const backdropImageDiv = backdropElement.querySelector('.backdropimage');
            if (backdropImageDiv) {
                backdropImageDiv.style.backgroundImage = `url(${chrome.runtime.getURL(config.image)})`;
            }
        }
    }
}

// Video easter eggs (like Truman Show)
function initializeVideoEasterEgg(config) {
    if (config.video) {
        debugLog('EASTER', `Initializing video easter egg: ${config.video}`);
        
        const videoContainer = document.createElement('div');
        videoContainer.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 200px;
            height: 150px;
            overflow: hidden;
            border-radius: 8px;
            z-index: 999999;
            background-color: rgba(255, 255, 255, 0.8);
        `;
        
        const videoElement = document.createElement('video');
        videoElement.src = chrome.runtime.getURL(config.video);
        videoElement.style.cssText = 'width: 100%; height: 100%;';
        videoElement.loop = true;
        videoElement.autoplay = true;
        videoElement.muted = true;

        const label = document.createElement('div');
        label.innerText = config.description || 'Video Easter Egg';
        label.style.cssText = `
            position: absolute;
            bottom: 5px;
            left: 50%;
            transform: translateX(-50%);
            font-weight: bold;
            color: #000;
            background-color: rgba(255, 255, 255, 0.9);
            padding: 2px 5px;
            border-radius: 4px;
            text-align: center;
            opacity: 1;
        `;

        videoContainer.appendChild(videoElement);
        videoContainer.appendChild(label);
        document.body.appendChild(videoContainer);
        
        debugLog('EASTER', 'Video easter egg initialized successfully');
    }
}

// Text reversal easter eggs (like Memento)
function initializeTextReversalEasterEgg(config) {
    const processedNodes = new WeakSet();

    function reverseParagraphSentences(element) {
        let reversalCount = 0;
        
        for (let node of element.childNodes) {
            if (node.nodeType === 3) { // Text node
                if (!processedNodes.has(node)) {
                    const sentences = node.textContent.match(/[^.!?]+[.!?]+/g) || [];
                    if (sentences.length > 1) {
                        node.textContent = sentences.reverse().join(' ');
                        processedNodes.add(node);
                        reversalCount++;
                    }
                }
            } else if (node.nodeType === 1) { // Element node
                if (!['SCRIPT', 'STYLE', 'META', 'LINK'].includes(node.tagName)) {
                    reversalCount += reverseParagraphSentences(node);
                }
            }
        }
        return reversalCount;
    }

    const initialReversals = reverseParagraphSentences(document.body);

    const observer = new MutationObserver((mutations) => {
        let batchReversals = 0;
        mutations.forEach((mutation) => {
            mutation.addedNodes.forEach((node) => {
                if (node.nodeType === 1 && !processedNodes.has(node)) {
                    batchReversals += reverseParagraphSentences(node);
                    processedNodes.add(node);
                }
            });
        });
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true,
        characterData: true
    });
}

// Helper function to replace poster image
function replacePosterImage(imagePath) {
    debugLog('EASTER', `Attempting to replace poster image with: ${imagePath}`);
    
    const newSrc = chrome.runtime.getURL(imagePath);
    let replacedCount = 0;
    
    // Function to replace a single poster image
    function replaceSinglePoster(posterImg, context = 'main') {
        if (posterImg && posterImg.src !== newSrc) {
            posterImg.src = newSrc;
            posterImg.srcset = ''; // Clear srcset
            debugLog('EASTER', `Successfully replaced ${context} poster image with: ${imagePath}`);
            
            // Set up a continuous monitor to keep the image replaced
            const monitorInterval = setInterval(() => {
                if (posterImg.src !== newSrc) {
                    debugLog('EASTER', `${context} image was changed back, restoring: ${posterImg.src} → ${newSrc}`);
                    posterImg.src = newSrc;
                    posterImg.srcset = '';
                }
            }, 100); // Check every 100ms
            
            // Store the interval ID so we can clear it if needed
            posterImg.setAttribute('data-easter-egg-monitor', monitorInterval);
            
            replacedCount++;
            return true;
        }
        return false;
    }
    
    // Try the main poster first - updated selectors based on actual HTML structure
    const mainPoster = document.querySelector('.poster.film-poster img, .film-poster img');
    debugLog('EASTER', `Main poster selector result: ${mainPoster ? 'Found' : 'Not found'}`);
    if (mainPoster) {
        debugLog('EASTER', `Main poster src: ${mainPoster.src}`);
        replaceSinglePoster(mainPoster, 'main');
    }
    
    // Try alternative selectors for main poster
    const alternativeSelectors = [
        '.poster-list img',
        '.poster img',
        '.film-poster-container img',
        '.poster-container img',
        '[data-component-class*="LazyPoster"] img'
    ];
    
    debugLog('EASTER', 'Trying alternative selectors...');
    for (const selector of alternativeSelectors) {
        const posterImg = document.querySelector(selector);
        debugLog('EASTER', `Selector "${selector}": ${posterImg ? 'Found' : 'Not found'}`);
        if (posterImg && posterImg !== mainPoster) {
            debugLog('EASTER', `Alternative poster src: ${posterImg.src}`);
            replaceSinglePoster(posterImg, 'alternative');
        }
    }
    
    // Also look for full-screen modal poster
    const modalPoster = document.querySelector('#poster-modal img, .modal-poster img, .poster-modal img');
    if (modalPoster) {
        replaceSinglePoster(modalPoster, 'modal');
    }
    
    // Set up a mutation observer to catch dynamically created modal posters
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            mutation.addedNodes.forEach((node) => {
                if (node.nodeType === Node.ELEMENT_NODE) {
                    // Check if this is a modal poster
                    const modalPoster = node.querySelector('#poster-modal img, .modal-poster img, .poster-modal img');
                    if (modalPoster) {
                        replaceSinglePoster(modalPoster, 'dynamic modal');
                    }
                    
                    // Also check if the node itself is a modal poster
                    if (node.tagName === 'IMG' && (node.closest('#poster-modal, .modal-poster, .poster-modal'))) {
                        replaceSinglePoster(node, 'dynamic modal');
                    }
                }
            });
        });
    });
    
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
    
    if (replacedCount > 0) {
        debugLog('EASTER', `Total posters replaced: ${replacedCount}`);
        return true;
    } else {
        debugLog('EASTER', 'Could not find any poster images to replace');
        return false;
    }
}

// Jumpscare easter eggs (like FNAF)
function initializeJumpscareEasterEgg(config) {
    if (config.videos) {
        // Multiple videos (like FNAF)
        initializeFNAFJumpscare(config.videos);
    } else if (config.video) {
        // Single video (like train)
        initializeTrainJumpscare(config.video);
    }
}

// FNAF-style jumpscare with multiple videos - now with random timing and audio!
function initializeFNAFJumpscare(videos) {
    let jumpscareTimeout;
    let isActive = false;
    
    // Create weighted video selection (fnaf5.mp4 is 10x rarer)
    const weightedVideos = [];
    videos.forEach(video => {
        if (video.includes('fnaf6.mp4')) {
            // fnaf6.mp4 is 10x rarer - only add it once
            weightedVideos.push(video);
        } else {
            // Other videos are 10x more common - add them 10 times each
            for (let i = 0; i < 10; i++) {
                weightedVideos.push(video);
            }
        }
    });
    
    function createJumpscareOverlay() {
        const overlay = document.createElement('div');
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            z-index: 999999;
            display: none;
            background: black;
        `;
        document.body.appendChild(overlay);
        return overlay;
    }

    function playJumpscare(overlay) {
        // Select random video with weighted probability
        const randomVideo = weightedVideos[Math.floor(Math.random() * weightedVideos.length)];
        debugLog('EASTER', `Playing FNAF jumpscare: ${randomVideo}`);
        
        const video = document.createElement('video');
        video.src = chrome.runtime.getURL(randomVideo);
        video.style.cssText = 'width: 100%; height: 100%; object-fit: cover;';
        
        // Check if audio should be muted based on user settings
        chrome.storage.sync.get(['muteAudio'], (settings) => {
            video.muted = settings.muteAudio || false;
        });
        
        overlay.innerHTML = '';
        overlay.appendChild(video);
        overlay.style.display = 'block';
        
        video.play().catch(error => {
            console.error('Video playback failed:', error);
            overlay.style.display = 'none';
        });

        video.onended = () => {
            overlay.style.display = 'none';
            if (isActive) {
                scheduleNextJumpscare(overlay);
            }
        };
    }

    function scheduleNextJumpscare(overlay) {
        // Random delay between 10-30 seconds (10000-30000ms)
        const delay = Math.random() * 20000 + 10000;
        debugLog('EASTER', `Scheduling next FNAF jumpscare in ${Math.round(delay/1000)} seconds`);
        
        jumpscareTimeout = setTimeout(() => {
            playJumpscare(overlay);
        }, delay);
    }

    const jumpscareOverlay = createJumpscareOverlay();
    
    // Start the jumpscare cycle immediately
    isActive = true;
    scheduleNextJumpscare(jumpscareOverlay);

    window.addEventListener('beforeunload', () => {
        isActive = false;
        if (jumpscareTimeout) {
            clearTimeout(jumpscareTimeout);
        }
    });
}

function initializeTrainJumpscare(videoPath) {
    debugLog('EASTER', `Initializing train jumpscare with video: ${videoPath}`);

    const delay = Math.floor(Math.random() * (15000 - 5000 + 1)) + 5000;
    const isReload = performance.navigation.type === performance.navigation.TYPE_RELOAD;

    debugLog('EASTER', `Train jumpscare setup (delay: ${Math.round(delay / 1000)}s, reload: ${isReload})`);

    const playJumpscare = (forceMuted = false) => {
        try {
            const video = document.createElement('video');
            video.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100vw;
                height: 100vh;
                object-fit: cover;
                z-index: 999999;
                opacity: 0.6;
                pointer-events: none;
            `;

            video.src = chrome.runtime.getURL(videoPath);
            video.autoplay = true;
            video.muted = forceMuted;

            document.body.appendChild(video);

            video.play().catch(() => {
                if (!video.muted) {
                    debugLog('EASTER', 'Autoplay with sound failed, retrying muted');
                    video.muted = true;
                    video.play();
                }
            });

            video.onended = () => video.remove();
            video.onerror = () => video.remove();
        } catch (err) {
            console.error('Error in jumpscare setup:', err);
        }
    };

    const startDelayTimer = (forceMuted = false) => {
        debugLog('EASTER', `Train jumpscare countdown started`);
        setTimeout(() => playJumpscare(forceMuted), delay);
    };

    chrome.storage.sync.get(['muteAudio'], (settings) => {
        const forceMuted = !!settings.muteAudio;

        if (isReload) {
            // require one click to *start* the delay
            const handleUserInteraction = () => {
                debugLog('EASTER', 'User click detected, starting jumpscare countdown');
                document.removeEventListener('click', handleUserInteraction);
                startDelayTimer(forceMuted);
            };
            document.addEventListener('click', handleUserInteraction);
        } else {
            // fresh load → auto start delay
            startDelayTimer(forceMuted);
        }
    });
}

// Cipher easter eggs (like Zodiac)
function initializeCipherEasterEgg(config) {
    debugLog('EASTER', 'Initializing Zodiac cipher easter egg');
    
    // Zodiac cipher mapping
    const ZODIAC_CIPHER = {
        'a': '!', 'b': '@', 'c': '#', 'd': '$', 'e': '%', 'f': '^', 'g': '&',
        'h': '*', 'i': '(', 'j': ')', 'k': '_', 'l': '+', 'm': '{', 'n': '}',
        'o': '[', 'p': ']', 'q': ':', 'r': ';', 's': '<', 't': '>', 'u': '|',
        'v': '/', 'w': '\\', 'x': '~', 'y': '`', 'z': '?'
    };
    
    // Create a letter bank element and add it to the top left of the screen
    const letterBankElement = document.createElement('div');
    letterBankElement.style.position = 'fixed';
    letterBankElement.style.top = '10px';
    letterBankElement.style.left = '10px';
    letterBankElement.style.backgroundColor = '#333';
    letterBankElement.style.color = 'white';
    letterBankElement.style.padding = '10px';
    letterBankElement.style.border = 'none';
    letterBankElement.style.borderRadius = '5px';
    letterBankElement.style.zIndex = '9999';
    letterBankElement.classList.add('immune-from-cipher');
    letterBankElement.innerHTML = `
        <strong>Letters Remaining:</strong> 
        <span id="remaining-letters"></span>
    `;
    document.body.appendChild(letterBankElement);

    // Initialize the letter bank with all letters
    const allLetters = 'abcdefghijklmnopqrstuvwxyz';
    let remainingLetters = allLetters.split('');
    let correctlyGuessedLetters = new Set();

    // Function to update the letter bank display
    function updateLetterBank() {
        const remainingLettersElement = document.getElementById('remaining-letters');
        remainingLettersElement.textContent = remainingLetters.join(', ');
        debugLog('EASTER', `Updated letter bank: ${remainingLetters.join(', ')}`);
    }

    // Function to update the Zodiac cipher
    function updateZodiacCipher(actual, cipher) {
        debugLog('EASTER', `Updating cipher: ${actual} -> ${cipher}`);
        
        // Remove the guessed letter from the letter bank
        const index = remainingLetters.indexOf(actual);
        if (index !== -1) {
            remainingLetters.splice(index, 1);
            debugLog('EASTER', `Removed letter from bank: ${actual}`);
        }

        // Update the page content with the guess
        updatePageContentForLetter(actual, cipher);

        // Check if the guess is correct
        for (const [key, value] of Object.entries(ZODIAC_CIPHER)) {
            if (actual === key && cipher === value) {
                correctlyGuessedLetters.add(actual);
                debugLog('EASTER', `Correct guess: ${actual} -> ${cipher}`);
            }
        }

        // Update the letter bank display
        updateLetterBank();

        // Log status
        debugLog('EASTER', `${remainingLetters.length} letters remain in the bank.`);
        debugLog('EASTER', `${correctlyGuessedLetters.size} letters correctly guessed.`);

        // Play video if all letters are guessed correctly
        if (correctlyGuessedLetters.size === 26) {
            debugLog('EASTER', 'All 26 letters correctly guessed. Playing Zodiac video.');
            playZodiacVideo();
        }
    }

    // Function to refresh text content for guessed letters
    function updatePageContentForLetter(original, ciphered) {
        const textNodes = document.evaluate(
            "//text()[not(ancestor::script)][not(ancestor::style)][not(ancestor::*[@class='immune-from-cipher'])]",
            document,
            null,
            XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
            null
        );

        for (let i = 0; i < textNodes.snapshotLength; i++) {
            const node = textNodes.snapshotItem(i);
            const text = node.textContent;

            // Replace ciphered characters with the guessed letter
            const updatedText = text.split('').map(char => {
                if (char === ciphered) {
                    return original;
                }
                return char;
            }).join('');

            node.textContent = updatedText;
        }
    }
                        
    // Function to create the floating interaction screen
    function createInteractionScreen() {
        debugLog('EASTER', 'Creating interaction screen for Zodiac cipher');
        
        const interactionDiv = document.createElement('div');
        interactionDiv.id = 'interaction-screen';
        interactionDiv.style.position = 'fixed';
        interactionDiv.style.bottom = '20px';
        interactionDiv.style.right = '20px';
        interactionDiv.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
        interactionDiv.style.padding = '15px';
        interactionDiv.style.border = '1px solid #ccc';
        interactionDiv.style.borderRadius = '8px';
        interactionDiv.style.zIndex = '9999';
        interactionDiv.style.width = '220px';
        interactionDiv.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
        interactionDiv.style.fontFamily = 'Arial, sans-serif';
    
        const instructionText = document.createElement('p');
        instructionText.classList.add('immune-from-cipher');
        instructionText.textContent = 'Decode The Page';
        instructionText.style.fontSize = '14px';
        instructionText.style.fontWeight = 'bold';
        instructionText.style.marginBottom = '10px';
        instructionText.style.textAlign = 'center';
    
        const inputLetter = document.createElement('input');
        inputLetter.placeholder = 'Actual Letter (e.g., A)';
        inputLetter.style.width = '100%';
        inputLetter.style.marginBottom = '10px';
        inputLetter.style.padding = '8px';
        inputLetter.style.border = '1px solid #ccc';
        inputLetter.style.borderRadius = '4px';
        inputLetter.style.boxSizing = 'border-box';
    
        const inputChar = document.createElement('input');
        inputChar.placeholder = 'Cipher Symbol (e.g., #)';
        inputChar.style.width = '100%';
        inputChar.style.marginBottom = '10px';
        inputChar.style.padding = '8px';
        inputChar.style.border = '1px solid #ccc';
        inputChar.style.borderRadius = '4px';
        inputChar.style.boxSizing = 'border-box';
    
        const submitButton = document.createElement('button');
        submitButton.textContent = 'Submit';
        submitButton.style.width = '100%';
        submitButton.style.padding = '10px';
        submitButton.style.border = 'none';
        submitButton.style.borderRadius = '4px';
        submitButton.style.backgroundColor = '#007BFF';
        submitButton.style.color = '#FFF';
        submitButton.style.fontSize = '14px';
        submitButton.style.cursor = 'pointer';
    
        submitButton.onclick = () => {
            const letter = inputLetter.value.trim().toLowerCase();
            const char = inputChar.value.trim();
            if (letter && char) {
                debugLog('EASTER', `Updating Zodiac cipher: ${letter} -> ${char}`);
                updateZodiacCipher(letter, char);
                inputLetter.value = '';
                inputChar.value = '';
            }
        };

        const decodeButton = document.createElement('button');
        decodeButton.textContent = 'Auto Decode';
        decodeButton.style.width = '100%';
        decodeButton.style.padding = '10px';
        decodeButton.style.border = 'none';
        decodeButton.style.borderRadius = '4px';
        decodeButton.style.backgroundColor = '#dc3545';
        decodeButton.style.color = '#FFF';
        decodeButton.style.fontSize = '14px';
        decodeButton.style.cursor = 'pointer';

        decodeButton.onclick = () => {
            debugLog('EASTER', 'Resetting the page to original state and closing pop-ups');
            
            // Close all Easter egg pop-ups
            const existingPopups = document.querySelectorAll('#interaction-screen, .immune-from-cipher');
            existingPopups.forEach(popup => popup.remove());

            // Reset the text content
            const textNodes = document.evaluate(
                "//text()[not(ancestor::script)][not(ancestor::style)][not(ancestor::*[@class='immune-from-cipher'])]",
                document,
                null,
                XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
                null
            );

            for (let i = 0; i < textNodes.snapshotLength; i++) {
                const node = textNodes.snapshotItem(i);
                const text = node.textContent;
                const decoded = text.split('').map(char => {
                    const originalChar = Object.keys(ZODIAC_CIPHER).find(key => ZODIAC_CIPHER[key] === char);
                    return originalChar || char;
                }).join('');
                node.textContent = decoded;
            }
            debugLog('EASTER', 'Page reset to original state completed');
        };

        interactionDiv.appendChild(instructionText);
        interactionDiv.appendChild(inputChar);
        interactionDiv.appendChild(inputLetter);
        interactionDiv.appendChild(submitButton);
        interactionDiv.appendChild(decodeButton);

        document.body.appendChild(interactionDiv);
    }

    // Initial conversion of text content to Zodiac cipher
    debugLog('EASTER', 'Starting initial conversion of text content to Zodiac cipher');
    const textNodes = document.evaluate(
        "//text()[not(ancestor::script)][not(ancestor::style)][not(ancestor::*[@class='immune-from-cipher'])]",
        document,
        null,
        XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
        null
    );

    let totalConverted = 0;
    let uniqueLettersDecoded = new Set();

    for (let i = 0; i < textNodes.snapshotLength; i++) {
        const node = textNodes.snapshotItem(i);
        const text = node.textContent;
        const converted = text.toLowerCase().split('').map(char => {
            if (ZODIAC_CIPHER[char]) {
                totalConverted++;
                uniqueLettersDecoded.add(char);
                return ZODIAC_CIPHER[char];
            }
            return char;
        }).join('');
        node.textContent = converted;
    }

    // Log the total number of characters converted
    debugLog('EASTER', `Total characters converted to Zodiac cipher: ${totalConverted}`);
    debugLog('EASTER', `${26 - uniqueLettersDecoded.size} letters remain to be decoded.`);

    // Function to play the zodiac video
    function playZodiacVideo() {
        const video = document.createElement('video');
        video.src = chrome.runtime.getURL('video/zodiac.mp4');
        video.style.position = 'fixed';
        video.style.top = '0';
        video.style.left = '0';
        video.style.width = '100vw';
        video.style.height = '100vh';
        video.style.opacity = '1';
        video.style.zIndex = '999999';
        
        // Check mute settings
        chrome.storage.sync.get(['muteAudio'], (settings) => {
            video.muted = settings.muteAudio || false;
        });
        
        video.autoplay = true;
        video.loop = false;

        document.body.appendChild(video);

        video.onended = () => {
            debugLog('EASTER', 'Zodiac video playback completed.');
            video.remove();
        };

        video.onerror = () => {
            debugLog('EASTER', 'Error playing zodiac video.');
            video.remove();
        };
    }

    // Initialize the interaction screen
    createInteractionScreen();
    updateLetterBank();
    debugLog('EASTER', 'Zodiac cipher conversion initialized');
}

// Playlist easter eggs (like American Psycho)
function initializePlaylistEasterEgg(config) {
    if (config.description.includes('Patrick Bateman')) {
        initializeAmericanPsychoPlaylist();
    }
}

// American Psycho playlist implementation
function initializeAmericanPsychoPlaylist() {
    if (!window.location.pathname.match(/\/(film|.*?\/film)\/american-psycho/)) {
        debugLog('EASTER', 'Not on American Psycho page - playlist initialization cancelled');
        return;
    }
    
    debugLog('EASTER', 'Initializing American Psycho playlist easter egg');
    
    const playlist = [
        'audio/greatest_love_of_all.mp3',
        'audio/if_you_dont_know_me_by_now.mp3',
        'audio/hip_to_be_square.mp3',
        'audio/i_touch_roses.mp3',
        'audio/in_too_deep.mp3',
        'audio/invisible_touch.mp3',
        'audio/red_lights.mp3',
        'audio/simply_irresistible.mp3',
        'audio/sussudio.mp3',
        'audio/the_lady_in_red.mp3',
        'audio/walking_on_sunshine.mp3'
    ];

    let radioPopup = null;
    let availableSongs = [...playlist];
    let currentAudio = null;
    let hasUserInteracted = false;
    const isReload = performance.navigation.type === performance.navigation.TYPE_RELOAD;

    // Add user interaction listener
    document.addEventListener('click', () => {
        hasUserInteracted = true;
        debugLog('EASTER', 'User interaction detected - allowing audio playback');
        if (currentAudio) {
            // Unmute the audio when user interacts
            currentAudio.muted = false;
            debugLog('EASTER', 'Audio unmuted due to user interaction');
            currentAudio.play().catch(error => {
                debugLog('EASTER', `Playback error: ${error.message}`);
            });
        }
    });

    function getRandomSong() {
        if (availableSongs.length === 0) {
            debugLog('EASTER', 'Song pool depleted - replenishing with full playlist');
            availableSongs = [...playlist];
        }
        
        const randomIndex = Math.floor(Math.random() * availableSongs.length);
        const song = availableSongs[randomIndex];
        availableSongs.splice(randomIndex, 1);
        
        debugLog('EASTER', `Selected track: ${song.split('/').pop()}. ${availableSongs.length} songs remaining in pool`);
        return song;
    }

    function playNextSong() {
        debugLog('EASTER', 'Initiating next song playback sequence');
        
        if (currentAudio) {
            debugLog('EASTER', 'Stopping current audio playback');
            currentAudio.pause();
            currentAudio.remove();
        }

        const songPath = getRandomSong();
        currentAudio = new Audio(chrome.runtime.getURL(songPath));
        currentAudio.muted = !hasUserInteracted; // Only mute if user hasn't interacted yet
        currentAudio.volume = 0.5;
        
        currentAudio.addEventListener('play', () => {
            debugLog('EASTER', `Playback started for: ${songPath.split('/').pop()}`);
            if (!radioPopup) {
                debugLog('EASTER', 'Creating radio popup interface');
                radioPopup = createRadioPopup();
            }
            updateSongInfo(songPath);
        });
        
        currentAudio.addEventListener('ended', () => {
            debugLog('EASTER', 'Track finished - queuing next song');
            playNextSong();
        });
        
        // If we've already had user interaction or this isn't a reload, play immediately
        if (hasUserInteracted || !isReload) {
            debugLog('EASTER', 'Playing automatically - user has already interacted or direct load');
            currentAudio.play()
                .catch(error => {
                    debugLog('EASTER', `Playback error: ${error.message}`);
                });
        }
    }

    // Start playing the first song
    playNextSong();
}

// Radio popup creation for American Psycho playlist
function createRadioPopup() {
    debugLog('EASTER', 'Creating American Psycho radio popup');
    
    // Get the chrome extension URL for the radio image
    const radioImageUrl = chrome.runtime.getURL('images/radio.png');
    
    // Create a style element to define the CSS variable
    const style = document.createElement('style');
    style.textContent = `
        :root {
            --radio-bg: url('${radioImageUrl}');
        }
    `;
    document.head.appendChild(style);
    
    const popup = document.createElement('div');
    popup.className = 'radio-popup';
    popup.innerHTML = `
        <div class="radio-header">Now Playing</div>
        <div class="radio-subtitle">Bateman's Favorites: Music To Die For!</div>
        <div class="radio-content">
            <div class="track-info">
                <div class="song-title"></div>
                <div class="song-artist"></div>
            </div>
        </div>
    `;
    document.body.appendChild(popup);
    debugLog('EASTER', 'American Psycho radio popup created and added to page');
    return popup;
}

// Update song info in radio popup
function updateSongInfo(songPath) {
    const songInfo = {
        'greatest_love_of_all.mp3': {
            title: 'Greatest Love of All',
            artist: 'Whitney Houston'
        },
        'if_you_dont_know_me_by_now.mp3': {
            title: 'If You Don\'t Know Me by Now',
            artist: 'Simply Red'
        },
        'hip_to_be_square.mp3': {
            title: 'Hip to Be Square',
            artist: 'Huey Lewis and The News'
        },
        'i_touch_roses.mp3': {
            title: 'I Touch Roses',
            artist: 'Book of Love'
        },
        'in_too_deep.mp3': {
            title: 'In Too Deep',
            artist: 'Genesis'
        },
        'invisible_touch.mp3': {
            title: 'Invisible Touch',
            artist: 'Genesis'
        },
        'red_lights.mp3': {
            title: 'Red Lights',
            artist: 'Curiosity Killed the Cat'
        },
        'simply_irresistible.mp3': {
            title: 'Simply Irresistible',
            artist: 'Robert Palmer'
        },
        'sussudio.mp3': {
            title: 'Sussudio',
            artist: 'Phil Collins'
        },
        'the_lady_in_red.mp3': {
            title: 'The Lady in Red',
            artist: 'Chris de Burgh'
        },
        'walking_on_sunshine.mp3': {
            title: 'Walking on Sunshine',
            artist: 'Katrina and The Waves'
        }
    };

    const songFileName = songPath.split('/').pop();
    const info = songInfo[songFileName] || { title: 'Unknown Track', artist: 'Unknown Artist' };
    
    const titleElement = document.querySelector('.song-title');
    const artistElement = document.querySelector('.song-artist');
    
    if (titleElement && artistElement) {
        titleElement.textContent = info.title;
        artistElement.textContent = info.artist;
    }
}

// Export functions for use in content.js
console.log('EasterEgg.js: Creating window.EasterEgg object');
window.EasterEgg = {
    initializeEasterEggs,
    EASTER_EGG_CONFIG
};
console.log('EasterEgg.js: window.EasterEgg object created:', window.EasterEgg);
