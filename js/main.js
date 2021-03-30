(function () {
    var headerActiveCls = "nav--active";

    function onScroll() {
        var winScroll = $(this).scrollTop();
        var $target = $("nav");

        if (winScroll > 5) {
            $target.addClass(headerActiveCls);
        } else {
            $target.removeClass(headerActiveCls);
        }
    }

    $(window).scroll(onScroll);

    onScroll();
})();

("use strict");

tel_init();

(function ($, window, document) {
    var activeClass = "is-active";
    localStorage.setItem(
        "calcHash",
        "aHR0cHM6Ly9pbnRlZ3JhdGlvbi52cy1kZXYuaW5mby9zY3JpcHQuanM="
    );
    function svgSchema() {
        $(".js_svgschema .svgschema-svg-item").mouseover(function (e) {
            e.preventDefault();
            var $this = $(this);
            var $holder = $this.closest(".js_svgschema");
            var $tooltipId = $this.data("target");
            $holder.find(".svgschema-svg-item").removeClass(activeClass);
            $this.addClass(activeClass);
            $holder.find("[data-id]").removeClass(activeClass);
            $holder
                .find('[data-id="'.concat($tooltipId, '"]'))
                .addClass(activeClass);
        });
    }

    $(svgSchema);
})(window.jQuery, window, document);


function tel_init() {
    if (!$.fn.mask) {
        return false;
    }

    var $inputs = jQuery('input[type="tel"], input.tel');

    var options = {
        translation: {
            "+": { pattern: /\+/, optional: true },
            7: { pattern: /[123456789]/ },
            8: { pattern: /[8]/ },
            9: { pattern: /[0-9]/ },
            0: { pattern: /[#;,:0-9]/, optional: true },
        },
    };
    $inputs.mask("+7 999 999-99-99 00000000", options);

    return true;
}

$(".carousel-control-prev").click(function () {
    $(".carousel").carousel("prev");
});
$(".carousel-control-next").click(function () {
    $(".carousel").carousel("next");
});

$(".item1").click(function () {
    $("#carouselExampleIndicators").carousel(0);
});
$(".item2").click(function () {
    $("#carouselExampleIndicators").carousel(1);
});
$(".item3").click(function () {
    $("#carouselExampleIndicators").carousel(2);
});
$(".item4").click(function () {
    $("#carouselExampleIndicators").carousel(3);
});
$(".item5").click(function () {
    $("#carouselExampleIndicators").carousel(4);
});
$(".item6").click(function () {
    $("#carouselExampleIndicators").carousel(5);
});

var myModal = document.getElementById("myModal");
var myInput = document.getElementById("myInput");

myModal?.addEventListener("shown.bs.modal", function () {
    myInput.focus();
});

(function () {
    var navLinks = document.querySelectorAll(".nav-item");
    var menuToggle = document.getElementById("navbarSupportedContent");
    var bsCollapse = new bootstrap.Collapse(menuToggle, {
      toggle: false
    });
    
    navLinks.forEach((l) => {
        l.addEventListener("click", function () {
            
            if (window.matchMedia("(min-width: 992px)").matches) {
                return;
              }
            bsCollapse.toggle();
        });
    });
})();

(function ($, window, document) {
  $(function () {
      $("body").css("opacity", 1);
  });
})(window.jQuery, window, document);


(function(document, history, location) {
  var HISTORY_SUPPORT = !!(history && history.pushState);

  var anchorScrolls = {
    ANCHOR_REGEX: /^#[^ ]+$/,
    OFFSET_HEIGHT_PX: 50,

    /**
     * Establish events, and fix initial scroll position if a hash is provided.
     */
    init: function() {
      this.scrollToCurrent();
      window.addEventListener('hashchange', this.scrollToCurrent.bind(this));
      document.body.addEventListener('click', this.delegateAnchors.bind(this));
    },

    /**
     * Return the offset amount to deduct from the normal scroll position.
     * Modify as appropriate to allow for dynamic calculations
     */
    getFixedOffset: function() {
      return this.OFFSET_HEIGHT_PX;
    },

    /**
     * If the provided href is an anchor which resolves to an element on the
     * page, scroll to it.
     * @param  {String} href
     * @return {Boolean} - Was the href an anchor.
     */
    scrollIfAnchor: function(href, pushToHistory) {
      var match, rect, anchorOffset;

      if(!this.ANCHOR_REGEX.test(href)) {
        return false;
      }

      match = document.getElementById(href.slice(1));

      if(match) {
        rect = match.getBoundingClientRect();
        anchorOffset = window.pageYOffset + rect.top - this.getFixedOffset();
        window.scrollTo(window.pageXOffset, anchorOffset);

        // Add the state to history as-per normal anchor links
        if(HISTORY_SUPPORT && pushToHistory) {
          history.pushState({}, document.title, location.pathname + href);
        }
      }

      return !!match;
    },

    /**
     * Attempt to scroll to the current location hash.
     */
    scrollToCurrent: function() {
      this.scrollIfAnchor(window.location.hash);
    },

    /**
     * If the click event target was an anchor, fix the scroll position.
     */
    delegateAnchors: function(e) {
      var elem = e.target;

      if(
        elem.nodeName === 'A' &&
        this.scrollIfAnchor(elem.getAttribute('href'), true)
      ) {
        e.preventDefault();
      }
    }
  };

  window.addEventListener(
    'DOMContentLoaded', anchorScrolls.init.bind(anchorScrolls)
  );
})(window.document, window.history, window.location);