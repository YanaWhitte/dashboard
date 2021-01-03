function makeGraph(selector, color, columnSpacing, data) {
  /** @type {HTMLElement} */
  let myGraph1 = document.querySelector(selector);

  myGraph1.style.display = "flex";
  myGraph1.style.flexDirection = "row";
  myGraph1.style.alignItems = "flex-end";
  myGraph1.style.backgroundColor = "transparent";


  const graphRect = myGraph1.getBoundingClientRect()
  let myGraphHeight = graphRect.height;  

  let graphColumns = data.length;

  let graphColumnWidth = Math.ceil(parseInt(graphRect.width) / graphColumns);

  for (let i = 0; i < graphColumns; i++) {
      let box = document.createElement("div");
      // box.style.width = graphColumnWidth - columnSpacing + "px";
      box.style.flex = '1';
      box.style.marginRight = columnSpacing + "px";

      let h = parseInt(myGraphHeight);
      box.style.height = data[i] * h + "px";
      console.log(data, box.style.height, data[i] * h + "px")

      box.style.background = color;
      // box.style.boxSizing = 'border-box'
      myGraph1.appendChild(box);
  }
}

let totalHeight = 40;
let graphData = [20, 30, 18, 30, 40, 20, 25, 35, 25, 13, 20, 30, 18].map(
  (element) => element / totalHeight
);
makeGraph(
  ".graph-blue",
  "transparent linear-gradient(180deg, #55D8FE 0%, #54D8FF80 100%) 0% 0% no-repeat padding-box",
  1, graphData
);
makeGraph(
  ".graph-purple",
  "transparent linear-gradient(180deg, #A3A0FB 0%, #A3A0FB80 100%) 0% 0% no-repeat padding-box",
  1, graphData
);
makeGraph(
  ".graph-green",
  "transparent linear-gradient(180deg, #5EE2A0 0%, #5EE2A080 100%) 0% 0% no-repeat padding-box",
  1, graphData
);