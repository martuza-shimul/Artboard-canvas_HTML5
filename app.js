window.addEventListener("load", () => {
  // console.log("hello");
  const canvas = document.querySelector("#canvas ");
  const ctx = canvas.getContext("2d"); // defining what kind of context we need

  // Resizing
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;

  // canvas.fill = "blue";
  ctx.fillStyle = "rgba(255,0,0,0.7)";
  ctx.fillRect(50, 50, 200, 200);
  ctx.lineWidth = 5;
  ctx.strokeStyle = "green";
  ctx.strokeRect(100, 100, 200, 200);

  ctx.beginPath();
  ctx.moveTo(350, 50);
  ctx.lineTo(650, 50);
  ctx.lineTo(650, 200);
  ctx.closePath();
  ctx.stroke();

  let painting = false;

  const startPosition = e => {
    painting = true;
    ctx.beginPath();
    draw(e);
  };
  const finishPosition = () => {
    painting = false;
    // ctx.beginPath();
  };

  const draw = e => {
    if (!painting) return;
    ctx.lineWidth = 10;
    ctx.lineCap = "round";
    ctx.strokeStyle = "#000";
    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX, e.clientY);
  };
  // eventListners

  canvas.addEventListener("mousedown", startPosition);
  canvas.addEventListener("mouseup", finishPosition);
  canvas.addEventListener("mousemove", draw);
});

window.addEventListener("resize", () => {
  // Resizing
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
});
