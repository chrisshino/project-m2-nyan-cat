class Timer {
  constructor(theRoot, time) {
    this.root = theRoot;
    this.time = time;

    this.domElement = document.createElement("h1");
    this.domElement.style.position = "absolute";
    this.domElement.style.right = `${GAME_WIDTH - 30}px`;
    this.domElement.style.top = `0px`;
    this.domElement.style.zIndex = 6;
    this.domElement.style.color = 'white'
    theRoot.appendChild(this.domElement)
  }

  update(timeInput) {
    this.domElement.innerText = timeInput;
  }
}
