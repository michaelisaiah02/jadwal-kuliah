$(document).ready(function () {
  $("#semester1, #semester2, #semester3, #semester4, #semester5, #semester6, #semester7, #semester8").on("click", function () {
    activeSemester = $(this).attr("id");
    localStorage.setItem("activeSemester", activeSemester);
    if (
      activeSemester === "semester1" ||
      activeSemester === "semester2" ||
      activeSemester === "semester3" ||
      activeSemester === "semester4" ||
      activeSemester === "semester5" ||
      activeSemester === "semester6" ||
      activeSemester === "semester7" ||
      activeSemester === "semester8"
    ) {
      $("ul li a.dropdown-item").removeClass("active");
      $(this).addClass("active");
    } else if ($(this).attr("id") === "semua") {
      $("ul li a").removeClass("active");
      $(this).addClass("active");
    } else if ($(this).attr("id") === "harian") {
      $("ul li a").removeClass("active");
      $(this).addClass("active");
    }
  });
  $("ul li a").on("click", function () {
    if ($(this).attr("id") === "semester") {
      // jangan lakukan apapun
    } else if (
      $(this).attr("id") === "semester1" ||
      $(this).attr("id") === "semester2" ||
      $(this).attr("id") === "semester3" ||
      $(this).attr("id") === "semester4" ||
      $(this).attr("id") === "semester5" ||
      $(this).attr("id") === "semester6" ||
      $(this).attr("id") === "semester7" ||
      $(this).attr("id") === "semester8"
    ) {
      // jangan lakukan apapun
    } else if ($(this).attr("id") === "semua") {
      $("ul li a.nav-link").removeClass("active");
      $(this).addClass("active");
    } else if ($(this).attr("id") === "harian") {
      $("ul li a.nav-link").removeClass("active");
      $(this).addClass("active");
    }
  });

  var hari = new Date();
  if (hari.getDay() === 0) {
    $("ul li a").removeClass("active");
    $("ul li a#semua").addClass("active");
  }

  if ($("ul li a#semua").hasClass("active")) {
    $("#konten").load("semua.html");
  }
  if ($("ul li a#harian").hasClass("active")) {
    $("#konten").load("harian.html");
  }

  $("#semua").click(function () {
    $("#konten").load("semua.html");
  });

  $("#harian").click(function () {
    $("#konten").load("harian.html");
  });

  $("a#instagram").hover(
    function () {
      $("img#michael").attr("src", "img/instagram.png").fadeTo("slow");
    },
    function () {
      $("img#michael").attr("src", "img/michael.jpg").fadeTo("slow");
    }
  );

  // Cari tombol reset
  var resetButton = $("#reset");

  // Tambahkan event listener
  resetButton.on("click", function () {
    // Hapus data dari localStorage
    localStorage.clear();

    // Refresh halaman
    location.reload();
  });
});
