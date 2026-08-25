(function () {
  'use strict';
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---- Mobile drawer ---- */
  var burger = document.querySelector('[data-burger]');
  var drawer = document.querySelector('[data-drawer]');
  if (burger && drawer) {
    burger.addEventListener('click', function () {
      var open = drawer.classList.toggle('is-open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  /* ---- Scroll reveal ---- */
  var items = document.querySelectorAll('.rv');
  if (!items.length) return init();
  if (reduce || !('IntersectionObserver' in window)) {
    items.forEach(function (el) { el.classList.add('in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        var d = parseInt(e.target.getAttribute('data-delay') || '0', 10);
        setTimeout(function () { e.target.classList.add('in'); }, d);
        io.unobserve(e.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    items.forEach(function (el) { io.observe(el); });
  }
  init();

  function init() {
    liftStack();
    valueBars();
  }

  /* ---- Signature: 권리 해제 스택 ---- */
  function liftStack() {
    var stack = document.querySelector('[data-lift]');
    if (!stack) return;
    var rows = stack.querySelectorAll('.row');
    var out = stack.querySelector('[data-lift-val]');
    var from = parseFloat(stack.getAttribute('data-from') || '0');
    var to = parseFloat(stack.getAttribute('data-to') || '100');

    if (reduce) {
      rows.forEach(function (r) { r.classList.add('is-clear'); });
      if (out) out.innerHTML = fmt(to);
      return;
    }

    var i = 0;
    var step = function () {
      if (i >= rows.length) return;
      rows[i].classList.add('is-clear');
      if (out) {
        var v = from + (to - from) * ((i + 1) / rows.length);
        count(out, v);
      }
      i++;
      setTimeout(step, 520);
    };
    setTimeout(step, 900);
  }

  function fmt(v) {
    return '감정가 대비 <em>' + Math.round(v) + '%</em>';
  }

  function count(el, target) {
    var start = parseFloat(el.getAttribute('data-cur') || '0');
    var t0 = null, dur = 480;
    function tick(ts) {
      if (!t0) t0 = ts;
      var p = Math.min((ts - t0) / dur, 1);
      var e = 1 - Math.pow(1 - p, 3);
      var v = start + (target - start) * e;
      el.innerHTML = fmt(v);
      el.setAttribute('data-cur', v);
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  /* ---- Value bars ---- */
  function valueBars() {
    var bars = document.querySelectorAll('[data-bar]');
    if (!bars.length) return;
    if (reduce || !('IntersectionObserver' in window)) {
      bars.forEach(function (b) { b.style.width = b.getAttribute('data-bar') + '%'; });
      return;
    }
    var io2 = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (!e.isIntersecting) return;
        var el = e.target;
        setTimeout(function () { el.style.width = el.getAttribute('data-bar') + '%'; }, 120);
        io2.unobserve(el);
      });
    }, { threshold: 0.3 });
    bars.forEach(function (b) { io2.observe(b); });
  }
})();
