export const february_29_2020 = (p) => {
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

export const february_29_2020_part_two = (p) => {
  let canvas

  p.setup = () => {
    canvas = p.createCanvas(500, 500)
    p.noCursor()

    p.colorMode(p.HSB)
    p.rectMode(p.CENTER)
    p.noStroke()
  }

  p.draw = () => {
    p.background(p.pmouseY / 2, 100, 100)
    p.fill(360 - p.pmouseY / 2, 100, 100)
    p.ellipse(250, 250, p.pmouseX + 1, p.pmouseX + 1)
  }
}

export const march_1_2020 = (p) => {
  "use strict";
  let stepX, stepY

  p.setup = () => {
    p.createCanvas(800, 400)
    console.log(p.width, p.height)
    p.noStroke()
    p.colorMode(p.HSB, p.width, p.height, 100)
  }

  p.draw = () => {
    stepX = p.mouseX + 4
    stepY = p.mouseY + 4

    for (let gridY = 0; gridY < p.height; gridY += stepY) {
      for (let gridX = 0; gridX < p.width; gridX += stepX) {
        p.fill(gridX, p.height - gridY, 100)
        p.rect(gridX, gridY, stepX, stepY)
      }
    }
  }
}