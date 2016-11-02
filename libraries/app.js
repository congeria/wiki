(function() {
      _.forEach([".page", ".menu-right", ".menu-left"], function(value) {
        Ps.initialize(document.querySelector(value))
      })
      
      document.getElementById('show-menu-left').addEventListener('click', function() {
        document.body.classList.toggle('shown-menu-left')
      })
      
      if (screen.width < 700) {
        document.body.classList.remove('shown-menu-left')
      }
      
      var li_ul = document.querySelectorAll(".col_ul li  ul");
      for (var i = 0; i < li_ul.length; i++) {
        li_ul[i].style.display = "none"
      }
      
      var exp_li = document.querySelectorAll(".col_ul li > span");
      for (var i = 0; i < exp_li.length; i++) {
        exp_li[i].style.cursor = "pointer"
        if (exp_li[i].classList.contains('no-sub')) {
          // Solves the display error
        } else {
          exp_li[i].onclick = showul
        }
      }
      
      function showul() {
        let nextul = this.nextElementSibling;
        if (nextul.style.display == "block") {
          nextul.style.display = "none"
        } else {
          nextul.style.display = "block"
        }
      }
      SmartUnderline.init({
        "location": ""
      })
    })();
