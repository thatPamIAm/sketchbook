export default function sketch(p) {
  let canvas
  p.setup = () => {
    canvas = p.createCanvas(500, 500)
    p.noCursor()

    p.colorMode(p.HSB, 360, 100, 100)
    p.rectMode(p.CENTER)
    p.noStroke()
  }

  p.draw = () => {
    p.background(p.pmouseY / 2, 100, 100)
    p.fill(360 - p.pmouseY / 2, 100, 100)
    p.rect(250, 250, p.pmouseX + 1, p.pmouseX + 1)
  }
}