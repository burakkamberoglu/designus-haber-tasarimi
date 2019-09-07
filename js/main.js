document.querySelectorAll('.aramatikla')[0].addEventListener("click", function () {
  document.querySelectorAll('.aramaform')[0].classList.add("aramashow");
});
document.querySelectorAll('.icon-kapat')[0].addEventListener("click", function () {
  document.querySelectorAll('.aramaform')[0].classList.remove("aramashow");
});
if (document.querySelectorAll('.post-font-size')[0]) {
  for (var fsz = 0; fsz < document.querySelectorAll('.post-font-size').length; fsz++) {
  document.querySelectorAll('.post-font-size')[fsz].addEventListener("click", function () {
    this.lastElementChild.classList.toggle("goster");
  });
}
}
document.querySelectorAll('.menuicon')[0].addEventListener("click", function () {
  document.querySelectorAll('.Navigation-MegaMenu')[0].classList.toggle("goster");
  document.querySelectorAll('.menuicon ~ .ok')[0].classList.toggle("goster");
});

if (document.querySelectorAll('.overlay')[0]) {
  document.querySelectorAll('.overlay')[0].addEventListener("click", function () {
    document.querySelectorAll('.overlay')[0].style.display = 'none';
  });
}
if (document.querySelectorAll('input[name="font-size-range"]')[0]) {
  if (localStorage.fontsize) {
    for (var bks2 = 0; bks2 < document.querySelectorAll('input[name="font-size-range"]').length; bks2++) {
      document.querySelectorAll('input[name="font-size-range"]')[bks2].value = localStorage.fontsize;
    }
    for (var i = 0; i < document.querySelectorAll('.post-content-item p').length; i++) {
      document.querySelectorAll('.post-content-item p')[i].style.fontSize = localStorage.fontsize + 'px';
    }
  };
  
  for (var bks = 0; bks < document.querySelectorAll('input[name="font-size-range"]').length; bks++) {
  document.querySelectorAll('input[name="font-size-range"]')[bks].addEventListener("change", function () {
    localStorage.setItem("fontsize", this.value);
    var rangeinput = this;
    for (var i = 0; i < document.querySelectorAll('.post-content-item p').length; i++) {
      document.querySelectorAll('.post-content-item p')[i].style.fontSize = rangeinput.value + 'px';
    }
    for (var bks3 = 0; bks3 < document.querySelectorAll('input[name="font-size-range"]').length; bks3++) {
      document.querySelectorAll('input[name="font-size-range"]')[bks3].value = rangeinput.value;
    }
  });
}
}

if (document.querySelectorAll('.fotodetay .figure')[0]) {
  for (var fg = 0; fg < document.querySelectorAll('.fotodetay .figure').length; fg++) {
    document.querySelectorAll('.fotodetay .figure')[fg].addEventListener("click", function () {
      this.classList.toggle("pop");
    });
  }
}

if (document.querySelectorAll('.yorumbuton')[0]) {
  for (var yb = 0; yb < document.querySelectorAll('.yorumbuton').length; yb++) {
  document.querySelectorAll('.yorumbuton')[yb].addEventListener("click", function () {
    this.classList.toggle("goster");
    this.nextElementSibling.classList.toggle("dflex");
  });
}
}

if (document.querySelectorAll('.yorumgonderbuton')[0]) {
  for (var ybb = 0; ybb < document.querySelectorAll('.yorumbuton').length; ybb++) {
  document.querySelectorAll('.yorumgonderbuton')[ybb].addEventListener("click", function () {
    this.style.display = 'none';
    this.nextElementSibling.classList.add("goster");
  });
}
}

if (document.querySelectorAll('.Highlights-slider')[0]) {
  var $carousel = new Flickity('.Highlights-slider', {
    draggable: false,
    wrapAround: true,
    autoPlay: 7500,
    pauseAutoPlayOnHover: false,
    pageDots: false
  });
}

if (document.querySelectorAll('.yazardongu')[0]) {
  var $yazarliste = new Flickity('.yazardongu', {
    cellAlign: 'left',
    wrapAround: true,
    freeScroll: false,
    draggable: false,
    pageDots: false,
    autoPlay: 10000,
    pauseAutoPlayOnHover: false
  });
}

if (document.querySelectorAll('.sondakikahaber .slidesonhaber')[0]) {
  var $sondakika = new Flickity('.sondakikahaber .slidesonhaber', {
    cellAlign: 'left',
    wrapAround: true,
    freeScroll: false,
    draggable: false,
    pageDots: false,
    autoPlay: 20000,
    pauseAutoPlayOnHover: false
  });
}