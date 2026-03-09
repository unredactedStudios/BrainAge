const APP_VERSION = "ver1.0-0903260023 beta";

let activeMenu = null;
const speechScripts = {
  aboutIntro: [
    {
      text: "Brain Training: Web Edition is a browser-based adaptation of the Nintendo DS Brain Age series...",
      head: "assets/HEAD1.webp"
    },
    {
      text: "Characters, names & likenesses from the Nintendo DS series are © Nintendo. All original Nintendo DS IP belongs to Nintendo.",
      head: "assets/HEAD1.webp"
    },
    {
      text: "This fan-made edition is non-commercial and intended for educational & entertainment purposes.",
      head: "assets/HEAD1.webp"
    },
    {
      text: `Brain Training: Web Edition ${APP_VERSION} <br/>by RexiMemo! Studios<br/>All rights reserved.`,
      head: "assets/HEAD2.webp"
    }
  ],

  introduction: [
    {
      text: "Hello! My name is Ryuta Kawashima, and I'm a doctor of neuroscience.",
      head: "assets/HEAD2.webp"
    },
    {
      text: "Why don't we try doing some <span class='redText'>brain training</span> together?",
      head: "assets/HEAD1.webp"
    },
    {
      text: "Let's get started!",
      head: "assets/HEAD.webp"
    },
    {
      text: "If you don't use your brain, it will age quickly.",
      head: "assets/HEAD1.webp"
    },
    {
      text: "Your brain will not be as strong as one with the ideal brain age of <span class='redText'>20</span>.",
      head: "assets/HEADSAD.webp"
    },
    {
      text: "It's just like not exercising. A healthy body must work out regularly, you know!",
      head: "assets/HEAD1.webp"
    },
    {
      text: "But there is a solution: you can <span class='redText'>train your brain</span> like you train your body!",
      head: "assets/HEAD1.webp"
    },
    {
      text: "I've found that quick, simple exercises in reading, writing, and arithmetic can help.",
      head: "assets/HEAD1.webp"
    },
    {
      text: "Take a look at these brain scans.",
      head: "assets/HEAD1.webp",
      rightImage: "assets/BRAINSCAN_1.webp"
    },
    {
      text: "The yellow and red patches show areas of rapid blood flow.",
      head: "assets/HEAD1.webp",
      rightImage: "assets/BRAINSCAN_1.webp"
    },
    {
      text: "Those areas of your brain are doing <span class='redText'>a lot of work</span>!",
      head: "assets/HEAD.webp",
      rightImage: "assets/BRAINSCAN_1.webp"
    },
    {
      text: "Image A shows a brain in idle thought. Image B shows a brain watching TV.",
      head: "assets/HEAD1.webp",
      rightImage: "assets/BRAINSCAN_1.webp"
    },
    {
      text: "These brains are hardly working at all! Lazy brains!",
      head: "assets/HEADSAD.webp",
      rightImage: "assets/BRAINSCAN_1.webp"
    },
    {
      text: "Now, look at the following images.",
      head: "assets/HEAD1.webp",
      rightImage: "assets/BRAINSCAN_2.webp"
    },
    {
      text: "Image C shows a brain that is solving simple math problems rapidly,",
      head: "assets/HEAD1.webp",
      rightImage: "assets/BRAINSCAN_2.webp"
    },
    {
      text: "while image D shows a brain whose owner is reading out loud.",
      head: "assets/HEAD1.webp",
      rightImage: "assets/BRAINSCAN_2.webp"
    },
    {
      text: "See how <span class='redText'>larger portions of these brains are being put to work</span>?",
      head: "assets/HEAD.webp",
      rightImage: "assets/BRAINSCAN_2.webp"
    },
    {
      text: "Solving simple calculations and reading out loud activate the brain!",
      head: "assets/HEAD2.webp",
      rightImage: "assets/BRAINSCAN_2.webp"
    },
    {
      text: "These activities are included in this software,",
      head: "assets/HEAD2.webp",
      rightImage: "assets/BRAINSCAN_2.webp"
    },
    {
      text: "as well as many other <span class='redText'>training programs</span> for your brain.",
      head: "assets/HEAD2.webp",
      rightImage: "assets/BRAINSCAN_2.webp"
    },
    {
      text: "I designed this software to include only exercises which aid your brain.",
      head: "assets/HEAD2.webp",
      rightImage: "assets/BRAINSCAN_2.webp"
    },
    {
      text: "Modern imaging tools suggest that they are all quite effective!",
      head: "assets/HEAD2.webp",
      rightImage: "assets/BRAINSCAN_2.webp"
    },
    {
      text: "And now, it's time to start your training!",
      head: "assets/HEAD2.webp",
      rightImage: "assets/BRAINSCAN_2.webp",
      nextPage: "training.html" // optional: points to another HTML page
    }
  ]
};

let selectedMinigame = null;

speechScripts.minigame_reading = [
  { text: "Reading Aloud is good for <span class='redText'>activating your prefrontal cortex</span>.", head: "assets/HEAD2.webp" },
  { text: "It may help the <span class='redText'>overall stimulation</span> of your <span class='redText'>brain</span> too!", head: "assets/HEAD2.webp" },
  {
    text: "Try to read <span class='redText'>one selection aloud per day</span> as fast as you can.",
    head: "assets/HEAD1.webp",
    rightImage: "assets/READINGALOUD_PREVIEW.webp"
  },
  {
    text: "Touch <span class='redText'>next</span> to turn the page.",
    head: "assets/HEAD1.webp",
    rightImage: "assets/READINGALOUD_PREVIEW.webp"
  },
  {
    text: "Oh, and it's OK to <span class='redText'>read to yourself</span> if reading out loud is too embarrassing.",
    head: "assets/HEAD2.webp",
    rightImage: "assets/READINGALOUD_PREVIEW.webp"
  },
  {
    text: "Now let's start.",
    head: "assets/HEAD1.webp",
    nextPage: "m_reading.html"   // <-- whatever page you want
  }
];

speechScripts.minigame_scramble = [
  { text: "Word Scramble is good for <span class='redText'>activating your prefrontal cortex</span>.", head: "assets/HEAD2.webp" },
  { text: "It may help to train your <span class='redText'>memory</span> too!", head: "assets/HEAD2.webp" },
  {
    text: "Look at the <span class='redText'>spinning letters</span>, then arrange them to <span class='redText'>form a word</span>.",
    head: "assets/HEAD1.webp",
    rightImage: "assets/WORDSCRAMBLE_PREVIEW.webp"
  },
  {
    text: "Ready? Set? Go!",
    head: "assets/HEAD1.webp",
    nextPage: "m_scramble.html"   // <-- whatever page you want
  }
];

speechScripts.minigame_photo = [
  { text: "Photo Memory is good for <span class='redText'>activating your prefrontal cortex</span>.", head: "assets/HEAD2.webp" },
  { text: "It may also help to train your <span class='redText'>memory</span>!", head: "assets/HEAD2.webp" },
  {
    text: "Remember the last photo displayed,",
    head: "assets/HEAD1.webp",
    rightImage: "assets/PHOTOMEMORY_PREVIEW.webp"
  },
  {
    text: "then <span class='redText'>touch the photos </span>on the right, following the instructions.",
    head: "assets/HEAD1.webp",
    rightImage: "assets/PHOTOMEMORY_PREVIEW1.webp"
  },
  {
    text: "Let's begin.",
    head: "assets/HEAD1.webp",
    nextPage: "m_memory.html"   // <-- whatever page you want
  }
];

let menuTransitionInProgress = false;
let moreState = "normal"; // "normal" | "grey" | "blink"

function getActiveHead() {
  return activeMenu?.querySelector(".head");
}

let currentSpeechList = [];
let currentSpeechIndex = 0;
let speechInProgress = false;
let blinkInterval = null;

function playSfx(src, volume = 1) {
  const s = new Audio(src);
  s.volume = volume;
  s.play().catch(() => {});
}

function hideStartBtn() {
  const btn = document.getElementById("startBtn");
  if (!btn) return;
  btn.style.display = "none";
  btn.replaceWith(btn.cloneNode(true)); // remove old listeners
}

function showStartBtn(nextPage) {
  const btn = document.getElementById("startBtn");
  if (!btn) return;

  // reset listeners by cloning (matches your pattern)
  btn.replaceWith(btn.cloneNode(true));
  const newBtn = document.getElementById("startBtn");

  newBtn.style.display = "block";
  newBtn.src = "assets/START.webp";

  // press/release visuals
  newBtn.addEventListener("mousedown", () => {
    newBtn.src = "assets/START_PRESSED.webp";
  });

  const restore = () => (newBtn.src = "assets/START.webp");
  newBtn.addEventListener("mouseup", restore);
  newBtn.addEventListener("mouseleave", restore);

  // click -> fade -> redirect
  newBtn.addEventListener("click", () => {
  // Play OK sound 
  playSfx("assets/OK.ogg", 1);

  const overlay = document.getElementById("whiteOverlay");
  if (!overlay) {
    window.location.href = nextPage;
    return;
  }

  overlay.style.pointerEvents = "auto";
  overlay.style.opacity = "1";

  setTimeout(() => {
    window.location.href = nextPage;
  }, 500);
});
}

function clearMenuTopButtons() {
  const back = activeMenu?.querySelector(".leftBtn");
  if (back) back.replaceWith(back.cloneNode(true));

  const more = activeMenu?.querySelector(".moreBtn");
  if (more) more.replaceWith(more.cloneNode(true));
}

function handleEndButton() {
  const endBtn = document.querySelector("#mainMenu .endBtn");
  if (!endBtn) return;

  endBtn.replaceWith(endBtn.cloneNode(true));
  const newEnd = document.querySelector("#mainMenu .endBtn");

  newEnd.addEventListener("mousedown", () => {
    newEnd.src = "assets/END_PRESSED.webp";
  });

  function restoreEndVisual() {
    newEnd.src = "assets/END.webp";
  }

  newEnd.addEventListener("mouseup", restoreEndVisual);
  newEnd.addEventListener("mouseleave", restoreEndVisual);

  newEnd.addEventListener("click", () => {
    const overlay = document.getElementById("whiteOverlay");

    if (overlay) {
      overlay.style.pointerEvents = "auto";
      overlay.style.opacity = "1";
    }

    setTimeout(() => {
      window.location.href = "index.html#fastboot";
    }, 500);
  });
}

function handleBackButton() {
  const backBtn = activeMenu?.querySelector(".leftBtn");
  if (!backBtn) return;

  // replace node to remove previous listeners (keeps your pattern)
  backBtn.replaceWith(backBtn.cloneNode(true));
  const newBack = activeMenu.querySelector(".leftBtn");

  // PRESS
  newBack.addEventListener("mousedown", () => {
    newBack.src = "assets/BACK_PRESSED.webp";
  });

  // RELEASE
  function restoreBackVisual() {
    newBack.src = "assets/BACK.webp";
  }

  newBack.addEventListener("mouseup", restoreBackVisual);
  newBack.addEventListener("mouseleave", restoreBackVisual);


  newBack.addEventListener("click", () => {
    speechInProgress = false;
    if (blinkInterval) {
      clearInterval(blinkInterval);
      blinkInterval = null;
    }
    setMoreState("normal");

    transitionWithOverlay("mainMenu", "assets/HOME.ogg");
  });

}

function handleMoreButton() {
  const moreBtn = activeMenu?.querySelector(".moreBtn");
  if (!moreBtn) return;

  moreBtn.replaceWith(moreBtn.cloneNode(true));
  const newMore = activeMenu.querySelector(".moreBtn");

  // PRESS
  newMore.addEventListener("mousedown", () => {
    if (moreState === "grey") return; // stay greyed
    newMore.src = "assets/MORE_PRESSED.webp";
  });

  // RELEASE
  function restoreMoreVisual() {
    if (moreState === "grey") {
      newMore.src = "assets/MORE_GREYED.webp";
    } else {
      setMoreState(moreState); // restore normal or blink
    }
  }

  newMore.addEventListener("mouseup", restoreMoreVisual);
  newMore.addEventListener("mouseleave", restoreMoreVisual);

  // CLICK ACTION
  newMore.addEventListener("click", () => {
    if (speechInProgress || moreState === "grey") return;
    playSfx("assets/NEXT_PRESSED.ogg", 1);
    
    currentSpeechIndex++;

    if (currentSpeechIndex < currentSpeechList.length) {
      // Next speech line
      typeSpeechLine(
        currentSpeechList[currentSpeechIndex],
        "speechText",
        "assets/SPEAK.ogg"
      );
    } else {
      // Last line reached
      const lastLine = currentSpeechList[currentSpeechList.length - 1];
      const nextPage = lastLine.nextPage;

      if (nextPage) {
        // Fade white overlay, then navigate to new page
        const overlay = document.getElementById("whiteOverlay");
        overlay.style.pointerEvents = "auto";
        overlay.style.opacity = "1";

        setTimeout(() => {
          window.location.href = nextPage;
        }, 500); // give the overlay 0.5s to fade in
      } else {
        // Default: go back to main menu
        transitionWithOverlay("mainMenu", "assets/HOME.ogg");
      }

      setMoreState("normal");
    }
  });
}


const moreBtn = document.getElementById("moreBtn");

function getActiveMoreBtn() {
  return activeMenu?.querySelector(".moreBtn");
}

function setMoreState(state) {
  const moreBtn = getActiveMoreBtn();
  if (!moreBtn) return;

  moreState = state; // track state globally

  if (blinkInterval) {
    clearInterval(blinkInterval);
    blinkInterval = null;
  }

  if (state === "grey") {
    moreBtn.src = "assets/MORE_GREYED.webp";
  }

  if (state === "blink") {
    let on = false;
    blinkInterval = setInterval(() => {
      moreBtn.src = on ? "assets/MORE.webp" : "assets/MORE_BLINK.webp";
      on = !on;
    }, 250);
  }

  if (state === "normal") {
    moreBtn.src = "assets/MORE.webp";
  }
}


const mainMenu = document.getElementById("mainMenu");
const bgm = document.getElementById("bgm");


const buttons = document.querySelectorAll(".button");
const menuScreens = document.querySelectorAll(".menuScreen");

function fadeAudio(audio, targetVolume = 0, duration = 500) {
  const startVolume = audio.volume;
  const startTime = performance.now();

  return new Promise(resolve => {
    function step(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      audio.volume = startVolume + (targetVolume - startVolume) * progress;
      if (progress < 1) requestAnimationFrame(step);
      else resolve();
    }
    requestAnimationFrame(step);
  });
}

let calInterval = null;

function startCalendarAnim() {
  const cal = activeMenu?.querySelector("#calendarAnim");
  if (!cal) return;

  if (calInterval) {
    clearInterval(calInterval);
    calInterval = null;
  }

  let on = false;
  cal.src = "assets/CAL1.webp";

  // sync once after first paint
  requestAnimationFrame(() => syncStaticAboveWidth());

  calInterval = setInterval(() => {
    on = !on;
    cal.src = on ? "assets/CAL.webp" : "assets/CAL1.webp";
    // keep width matched
    requestAnimationFrame(() => syncStaticAboveWidth());
  }, 500);
}

function syncStaticAboveWidth() {
  const wrap = activeMenu?.querySelector(".calendarWrap");
  if (!wrap) return;

  const cal = wrap.querySelector(".calendarAnim");
  const top = wrap.querySelector(".leftStaticAbove");
  if (!cal || !top) return;

  // when the calendar image has a layout width, match it
  const w = cal.getBoundingClientRect().width;
  if (w > 0) top.style.width = `${w}px`;
}

function getTrackName(src) {
  if (!src) return "";
  try {
    return new URL(src, window.location.href)
      .pathname
      .split("/")
      .pop();
  } catch {
    return String(src).split("/").pop();
  }
}

function switchMenu(targetMenuId, newBGMsrc) {
  if (menuTransitionInProgress) return;
  menuTransitionInProgress = true;

  const currentMenu =
    activeMenu || document.querySelector(".menuScreen:not([style*='display:none'])");
  const targetMenu = document.getElementById(targetMenuId);

  if (!targetMenu) {
    menuTransitionInProgress = false;
    return;
  }

  const currentTrack = getTrackName(bgm.src);
  const requestedTrack = getTrackName(newBGMsrc);
  const trackChanges = currentTrack !== requestedTrack;

  const doSwap = () => {
    // hide old screen
    if (currentMenu) {
      currentMenu.style.display = "none";
      currentMenu.classList.remove("fading");
    }

    // show new screen
    targetMenu.style.display = "block";
    if (targetMenuId === "mainMenu") targetMenu.classList.remove("fading");
    else targetMenu.classList.add("fading");

    activeMenu = targetMenu;
    startCalendarAnim();
    updateVersionLabel();

    if (targetMenuId === "aboutMenu") startSpeech("aboutIntro");
    if (targetMenuId === "homeMenu") startSpeech("introduction");
    if (targetMenuId === "minigameIntroMenu" && selectedMinigame)
      startSpeech(selectedMinigame.script);

    clearMenuTopButtons();
    handleBackButton();
    handleMoreButton();

    menuTransitionInProgress = false;
  };

  // 🎵 If track changes → fade out & switch
  if (trackChanges) {
    fadeAudio(bgm, 0, 500).then(() => {
      bgm.pause();
      bgm.currentTime = 0;

      bgm.src = newBGMsrc;
      bgm.volume = 1;
      bgm.play().catch(() => {});

      doSwap();
    });
  } else {
    // 🎵 Same track → DO NOT fade, DO NOT pause, DO NOT reset src
    if (bgm.paused) bgm.play().catch(() => {});
    doSwap();
  }
}

function setMinigameIntroUI(game) {
  const title = document.getElementById("minigameTitle");
  if (title) title.textContent = game.title;

  // optional preview image (uses your .rightImage styling)
  const preview = document.getElementById("minigamePreview");
  if (preview) {
    if (game.preview) {
      preview.src = game.preview;
      preview.style.opacity = "1";
    } else {
      preview.style.opacity = "0";
      preview.src = "";
    }
  }
}

buttons.forEach(button => {
  button.addEventListener("click", () => {
    if (menuTransitionInProgress) return;

    // Play OK.ogg sound immediately
    const okSound = new Audio("assets/OK.ogg");
    okSound.volume = 1;
    okSound.play().catch(() => { });

    button.style.pointerEvents = "none";

    // Get button's current position
    const rect = button.getBoundingClientRect();

    // Fix it in place at its current coordinates
    button.style.position = "fixed";
    button.style.top = `${rect.top}px`;
    button.style.left = `${rect.left}px`;
    button.style.transform = "none";
    button.style.zIndex = 999;

    // Shift clicked button down/right by 5px
    button.style.transition = "transform 0.1s ease-in-out";
    button.style.transform = "translate(5px, 5px)";

    // Hide only other buttons inside the same menu screen
    const currentScreen = button.closest(".menuScreen");
    if (currentScreen) {
      currentScreen.querySelectorAll(".button").forEach(b => {
        if (b !== button) b.style.display = "none";
      });
    }

    // Delay a tiny bit to see the click shift
    setTimeout(() => {
      const text = button.textContent;
      if (text === "Training") transitionWithOverlay("trainingMenu", "assets/HOME.ogg");
      else if (text === "My Brain Training") {
        const overlay = document.getElementById("whiteOverlay");
        overlay.style.pointerEvents = "auto";
        overlay.style.opacity = "1";

        setTimeout(() => {
          window.location.href = "training.html";
        }, 500); // 0.5s fade
      }

      else if (text === "Options") transitionWithOverlay("optionsMenu", "assets/OPTIONS.ogg");
      else if (text === "About") transitionWithOverlay("aboutMenu", "assets/ABOUT.ogg");

      else if (text === "Reading Aloud") {
        selectedMinigame = {
          title: "Reading Aloud",
          script: "minigame_reading",
          preview: "" // e.g. "assets/READING_PREVIEW.webp"
        };
        transitionWithOverlay("minigameIntroMenu", "assets/HOME.ogg");
      }

      else if (text === "Word Scramble") {
        selectedMinigame = {
          title: "Word Scramble",
          script: "minigame_scramble",
          preview: "" // optional
        };
        transitionWithOverlay("minigameIntroMenu", "assets/HOME.ogg");
      }

      else if (text === "Photo Memory") {
        selectedMinigame = {
          title: "Photo Memory",
          script: "minigame_photo",
          preview: "" // optional
        };
        transitionWithOverlay("minigameIntroMenu", "assets/HOME.ogg");
      }
    }, 150);
  });
});

function typeSpeech(text, containerId, speakSrc, interval = 50) {
  const container = document.getElementById(containerId);
  container.textContent = ""; // clear previous text
  let index = 0;

  function addLetter() {
    if (index < text.length) {
      container.textContent += text[index];

      // Play SPEAK.ogg with overlap
      const speak = new Audio(speakSrc);
      speak.volume = 1;
      speak.play().catch(err => console.warn("SPEAK.ogg blocked:", err));

      index++;
      setTimeout(addLetter, interval);
    }
  }

  addLetter();
}

function typeSpeechLine(line, containerId, speakSrc, interval = 30, onComplete) {
  // find container inside active menu first; fallback to document
  const container = (activeMenu && activeMenu.querySelector(`#${containerId}`)) || document.getElementById(containerId);
  if (!container) {
    console.error("speech container not found:", containerId, "activeMenu:", activeMenu);
    return;
  }

  container.innerHTML = "";
  speechInProgress = true;
  hideStartBtn();
  setMoreState("grey");

  // Set head image
  const headImg = getActiveHead();
  if (line.head && headImg) headImg.src = line.head;

  // Set right image
  const rightImg = getActiveRightImage();
  if (line.rightImage && rightImg) {
    rightImg.src = line.rightImage;
    rightImg.style.opacity = "1";
    rightImg.classList.add("floating");
  } else if (rightImg) {
    rightImg.style.opacity = "0";
    rightImg.classList.remove("floating");
  }

  const text = line.text;
  let i = 0;
  let htmlBuffer = "";

  function addLetter() {
    if (i >= text.length) {
      container.innerHTML = htmlBuffer;
      speechInProgress = false;
      setMoreState("blink");
      if (onComplete) onComplete();
      if (line.nextPage && activeMenu?.id === "minigameIntroMenu") {
        showStartBtn(line.nextPage);
      }
      return;
    }

    if (text[i] === "<") {
      const tagEnd = text.indexOf(">", i);
      if (tagEnd !== -1) {
        htmlBuffer += text.slice(i, tagEnd + 1);
        i = tagEnd + 1;
      } else {
        htmlBuffer += text[i];
        i++;
      }
    } else {
      htmlBuffer += text[i];
      i++;
    }

    // update visible HTML each step
    container.innerHTML = htmlBuffer;

    // play voice tick
    const speak = new Audio(speakSrc);
    speak.volume = 1;
    speak.play().catch(() => { });

    setTimeout(addLetter, interval);
  }

  addLetter();
}

function startSpeech(scriptName) {
  currentSpeechList = speechScripts[scriptName];
  currentSpeechIndex = 0;

  typeSpeechLine(
    currentSpeechList[currentSpeechIndex],
    "speechText",
    "assets/SPEAK.ogg"
  );
}

function getActiveRightImage() {
  return activeMenu?.querySelector(".rightImage");
}

function resetMainMenuButtons() {
  // Restore inline styles applied when a button was clicked
  const mainButtons = document.querySelectorAll("#mainMenu .button");
  mainButtons.forEach(b => {
    // Remove any inline positioning/transform/pointer/etc applied during click
    b.style.position = "";
    b.style.top = "";
    b.style.left = "";
    b.style.transform = "";
    b.style.zIndex = "";
    b.style.transition = "";
    b.style.display = "";          // allow CSS to decide (was hidden by inline style previously)
    b.style.pointerEvents = "";    // re-enable pointer events
    b.classList.remove("clicked"); // if you used that class
  });

  // Also ensure any top-bar buttons inside mainMenu are visible / clickable if present
  const topBarBtns = document.querySelectorAll("#mainMenu .topBarBtn, #mainMenu .moreBtn, #mainMenu .leftBtn, #mainMenu .rightBtn");
  topBarBtns.forEach(btn => {
    btn.style.display = "";
    btn.style.pointerEvents = "";
  });
}

function updateVersionLabel() {
  const label = document.getElementById("versionLabel");
  if (!label) return;

  if (activeMenu?.id === "mainMenu") {
    label.textContent = APP_VERSION;
    label.style.display = "block";
  } else {
    label.style.display = "none";
  }
}

function transitionWithOverlay(targetMenuId, newBGMsrc) {
  const overlay = document.getElementById("whiteOverlay");
  if (!overlay) {
    switchMenu(targetMenuId, newBGMsrc);
    return;
  }

  overlay.style.pointerEvents = "auto";
  overlay.style.opacity = "1";

  setTimeout(() => {
    resetMainMenuButtons();
    switchMenu(targetMenuId, newBGMsrc);

    // Fade out ASAP (not dependent on bgm "playing")
    requestAnimationFrame(() => requestAnimationFrame(() => {
      overlay.style.opacity = "0";
    }));

    const fallbackTimeout = setTimeout(() => {
      if (overlay.style.opacity === "1") overlay.style.opacity = "0";
    }, 1200);

    overlay.addEventListener("transitionend", function handler(e) {
      if (e.propertyName !== "opacity") return;
      if (overlay.style.opacity === "0") {
        overlay.style.pointerEvents = "none";
        clearTimeout(fallbackTimeout);
        overlay.removeEventListener("transitionend", handler);
      }
    });
  }, 500); // wait 0.5s for fade-in
}

function animateMainMenuButtons() {
  const buttons = document.querySelectorAll(
    "#buttonStack .button, #buttonStack2 .button"
  );

  buttons.forEach((btn, index) => {
    // Reset animation state
    btn.style.animation = "none";
    btn.style.opacity = "0";
    btn.style.visibility = "hidden";
    btn.style.transform = "translateX(100vw)";

    // Force reflow so animation can restart
    btn.getBoundingClientRect();

    // Apply animation
    btn.style.visibility = "visible";
    btn.style.animation = `slideInFromRight 0.6s forwards`;
    btn.style.animationDelay = `${index * 0.1}s`;
  });
}

window.addEventListener("load", () => {
  const overlay = document.getElementById("whiteOverlay");

  // Show main menu *after* page load
  mainMenu.style.display = "block";
  activeMenu = mainMenu;
  startCalendarAnim();
  updateVersionLabel();
  handleEndButton();

  // Force overlay fully white
  overlay.style.opacity = "1";
  overlay.style.pointerEvents = "auto";
  overlay.getBoundingClientRect(); // force paint

  // Start music under fade
  bgm.play().catch(() => { });

  // Fade OUT white
  requestAnimationFrame(() => {
    overlay.style.opacity = "0";
  });

  overlay.addEventListener(
    "transitionend",
    () => {
      overlay.style.pointerEvents = "none";
      animateMainMenuButtons(); // buttons slide AFTER fade
    },
    { once: true }
  );
});
