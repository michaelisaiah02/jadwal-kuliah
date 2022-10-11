$(document).ready(function () {
  $("ul li a").on("click", function () {
    $("ul li a").removeClass("active");
    $(this).addClass("active");
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
});
