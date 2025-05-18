document.addEventListener("DOMContentLoaded", function () {
  // ... كود التفاعل السابق

  // VANTA Background
  VANTA.NET({
    el: "#animated-bg",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.0,
    scaleMobile: 1.0,
    color: 0x00e6ac,
    backgroundColor: 0x0f0c29,
    points: 10.0,
    maxDistance: 20.0,
    spacing: 15.0
  });
});
