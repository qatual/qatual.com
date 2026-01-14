const style = document.createElement("style")
style.textContent = `
@import url("https://fonts.googleapis.com/css2?family=Parkinsans:wght@300;400;500;600;700&display=swap");

*{
  font-family:"Parkinsans", sans-serif;
  margin:0;
  padding:0;
  box-sizing:border-box;
}

html,body{
  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  display:flex;
  align-items:center;
  justify-content:center;
  background:#040404;
  background-image:radial-gradient(circle,#ffffff1a 4px,transparent 1px);
  background-size:41px 41px;
  background-position:0px 0px;
  opacity:1;
}
`
document.head.appendChild(style)

const body = document.body

let targetX = 0
let targetY = 0
let currentX = 0
let currentY = 0

const strength = 50

document.addEventListener("mousemove", e => {
  const xPercent = e.clientX / window.innerWidth - 0.5
  const yPercent = e.clientY / window.innerHeight - 0.5
  targetX = xPercent * strength
  targetY = yPercent * strength
})

function animate() {
  currentX += (targetX - currentX) * 0.08
  currentY += (targetY - currentY) * 0.08
  body.style.backgroundPosition = `${currentX}px ${currentY}px`
  requestAnimationFrame(animate)
}

animate()
