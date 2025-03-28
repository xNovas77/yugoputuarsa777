document.addEventListener("DOMContentLoaded", function () {
  let introVideo = document.querySelector("#bg-video");
  let quidditchVideo = document.querySelector("#quidditch-video");

  if (!introVideo || !quidditchVideo) {
    console.error("Salah satu video tidak ditemukan di halaman!");
    return;
  }

  // **FUNGSI PLAY VIDEO (dengan suara)**
  function playVideo(video) {
    video.muted = false; // Aktifkan suara
    video.volume = 1.0;
    video.play().catch((error) => {
      console.warn("Autoplay dicegah oleh browser:", error);
    });
  }

  // **FUNGSI PAUSE VIDEO (dan mute)**
  function pauseVideo(video) {
    video.pause();
    video.muted = true;
  }

  // **FUNGSI CEK SCROLL & PLAY VIDEO YANG SESUAI**
  function checkVideoVisibility() {
    let introRect = introVideo.getBoundingClientRect();
    let quidditchRect = quidditchVideo.getBoundingClientRect();
    let windowHeight = window.innerHeight;

    // Cek video yang terlihat lebih dominan di layar
    let introVisible = introRect.top < windowHeight * 0.6 && introRect.bottom > windowHeight * 0.4;
    let quidditchVisible = quidditchRect.top < windowHeight * 0.6 && quidditchRect.bottom > windowHeight * 0.4;

    if (introVisible) {
      playVideo(introVideo);
      pauseVideo(quidditchVideo);
    } else if (quidditchVisible) {
      playVideo(quidditchVideo);
      pauseVideo(introVideo);
    }
  }

  // Jalankan pengecekan saat scroll
  window.addEventListener("scroll", checkVideoVisibility);

  // Jalankan sekali saat halaman dimuat
  checkVideoVisibility();
});
document.addEventListener("DOMContentLoaded", function () {
  let hogwartsStory = document.getElementById("hogwarts-story");
  let hideTextButton = document.getElementById("hide-text");

  function showText() {
      hogwartsStory.classList.add("show-text");
      hideTextButton.style.display = "block"; // Munculkan tombol "Tutup"
  }

  function hideText() {
      hogwartsStory.classList.remove("show-text");
      hideTextButton.style.display = "none"; // Sembunyikan tombol
  }

  window.addEventListener("scroll", function () {
      let rect = hogwartsStory.getBoundingClientRect();
      let windowHeight = window.innerHeight;
      
      if (rect.top < windowHeight * 0.8) {
          showText();
      }
  });

  hideTextButton.addEventListener("click", hideText);
});
document.addEventListener("DOMContentLoaded", function () {
  let introVideo = document.querySelector("#bg-video");
  let quidditchVideo = document.querySelector("#quidditch-video");
  let battleVideo = document.querySelector("#Battle-video"); // Tambahan video pertarungan
  let hogwartsStory = document.getElementById("hogwarts-story");
  let hideTextButton = document.getElementById("hide-text");

  if (!introVideo || !quidditchVideo || !battleVideo || !hogwartsStory || !hideTextButton) {
    console.error("Salah satu elemen tidak ditemukan di halaman!");
    return;
  }

  // **FUNGSI PLAY VIDEO (dengan suara)**
  function playVideo(video) {
    video.muted = false; // Aktifkan suara
    video.volume = 1.0;
    video.play().catch((error) => {
      console.warn("Autoplay dicegah oleh browser:", error);
    });
  }

  // **FUNGSI PAUSE VIDEO (dan mute)**
  function pauseVideo(video) {
    video.pause();
    video.muted = true;
  }

  // **FUNGSI CEK SCROLL & PLAY VIDEO YANG SESUAI**
  function checkVideoVisibility() {
    let introRect = introVideo.getBoundingClientRect();
    let quidditchRect = quidditchVideo.getBoundingClientRect();
    let battleRect = battleVideo.getBoundingClientRect();
    let hogwartsRect = hogwartsStory.getBoundingClientRect();
    let windowHeight = window.innerHeight;

    let introVisible = introRect.top < windowHeight * 0.6 && introRect.bottom > windowHeight * 0.4;
    let quidditchVisible = quidditchRect.top < windowHeight * 0.6 && quidditchRect.bottom > windowHeight * 0.4;
    let battleVisible = battleRect.top < windowHeight * 0.6 && battleRect.bottom > windowHeight * 0.4;
    let hogwartsVisible = hogwartsRect.top < windowHeight * 0.8; // Teks muncul lebih cepat

    if (introVisible) {
      playVideo(introVideo);
      pauseVideo(quidditchVideo);
      pauseVideo(battleVideo);
    } else if (quidditchVisible) {
      playVideo(quidditchVideo);
      pauseVideo(introVideo);
      pauseVideo(battleVideo);
    } else if (battleVisible) {
      playVideo(battleVideo);
      pauseVideo(introVideo);
      pauseVideo(quidditchVideo);
    }

    // Tampilkan Hogwarts Story jika terlihat
    if (hogwartsVisible) {
      showText();
    }
  }

  // **FUNGSI SHOW & HIDE HOGWARTS STORY**
  function showText() {
    hogwartsStory.classList.add("show-text");
    hideTextButton.style.display = "block"; // Munculkan tombol "Tutup"
  }

  function hideText() {
    hogwartsStory.classList.remove("show-text");
    hideTextButton.style.display = "none"; // Sembunyikan tombol
  }

  // Event listener untuk tombol "Tutup"
  hideTextButton.addEventListener("click", hideText);

  // Jalankan pengecekan saat scroll
  window.addEventListener("scroll", checkVideoVisibility);

  // Jalankan sekali saat halaman dimuat
  checkVideoVisibility();
});
document.addEventListener("DOMContentLoaded", function () {
  let introVideo = document.querySelector("#bg-video");
  let quidditchVideo = document.querySelector("#quidditch-video");
  let battleVideo = document.querySelector("#Battle-video");
  let hogwartsStory = document.getElementById("hogwarts-story");
  let hideTextButton = document.getElementById("hide-text");

  if (!introVideo || !quidditchVideo || !battleVideo || !hogwartsStory || !hideTextButton) {
    console.error("Salah satu elemen tidak ditemukan di halaman!");
    return;
  }

  // **FUNGSI PLAY VIDEO (dengan suara)**
  function playVideo(video) {
    if (video.paused) {
      video.muted = false;
      video.volume = 1.0;
      video.play().catch((error) => {
        console.warn("Autoplay dicegah oleh browser:", error);
      });
    }
  }

  // **FUNGSI PAUSE VIDEO (dan mute)**
  function pauseVideo(video) {
    video.pause();
    video.muted = true;
  }

  // **FUNGSI CEK SCROLL & PLAY VIDEO YANG SESUAI**
  function checkVideoVisibility() {
    let introRect = introVideo.getBoundingClientRect();
    let quidditchRect = quidditchVideo.getBoundingClientRect();
    let battleRect = battleVideo.getBoundingClientRect();
    let hogwartsRect = hogwartsStory.getBoundingClientRect();
    let windowHeight = window.innerHeight;

    let introVisible = introRect.top < windowHeight * 0.6 && introRect.bottom > windowHeight * 0.4;
    let quidditchVisible = quidditchRect.top < windowHeight * 0.6 && quidditchRect.bottom > windowHeight * 0.4;
    let battleVisible = battleRect.top < windowHeight * 0.6 && battleRect.bottom > windowHeight * 0.4;
    let hogwartsVisible = hogwartsRect.top < windowHeight * 0.8;

    if (introVisible) {
      playVideo(introVideo);
      pauseVideo(quidditchVideo);
      pauseVideo(battleVideo);
    } else if (quidditchVisible) {
      playVideo(quidditchVideo);
      pauseVideo(introVideo);
      pauseVideo(battleVideo);
    } else if (battleVisible) {
      playVideo(battleVideo);
      pauseVideo(introVideo);
      pauseVideo(quidditchVideo);
    }

    if (hogwartsVisible) {
      showText();
    }
  }

  // **FUNGSI SHOW & HIDE HOGWARTS STORY**
  function showText() {
    hogwartsStory.classList.add("show-text");
    hideTextButton.style.display = "block";
  }

  function hideText() {
    hogwartsStory.classList.remove("show-text");
    hideTextButton.style.display = "none";
  }

  hideTextButton.addEventListener("click", hideText);

  // Jalankan pengecekan saat scroll
  window.addEventListener("scroll", checkVideoVisibility);

  // Jalankan sekali saat halaman dimuat
  checkVideoVisibility();
});
let videos = document.querySelectorAll("video");

  function checkVisibility() {
    videos.forEach((video) => {
      let rect = video.getBoundingClientRect();
      let inView = rect.top >= 0 && rect.bottom <= window.innerHeight;
      
      if (inView) {
        video.play();
        video.muted = false;
      } else {
        video.pause();
        video.muted = true;
      }
    });
  }

  window.addEventListener("scroll", checkVisibility);
  window.addEventListener("resize", checkVisibility);
  checkVisibility();
