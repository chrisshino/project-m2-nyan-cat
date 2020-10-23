class Rich extends Enemy{
  constructor(theRoot, newEnemy) {
    super(theRoot, newEnemy)
    this.domElement.src = './images/rich.png'

  }
}

class Tiff extends Enemy {
  constructor(theRoot, newEnemy) {
    super(theRoot, newEnemy)
    this.domElement.src = './images/tiff.png'
  }
}

class Diana extends Enemy {
  constructor(theRoot, newEnemy) {
    super(theRoot, newEnemy)
    this.domElement.src = './images/diana.png'
  }
}