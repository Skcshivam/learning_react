function customReader(reactElememt,container){
  /*const domElement = document.createElement(reactElememt.type)

  domElement.innerHTML = reactElememt.children

  domElement.setAttribute('href',reactElememt.props.href);
  domElement.setAttribute('target', reactElememt.props.target)

  container.appendChild(domElement) */

  const domElement = document.createElement(reactElememt.type)

  domElement.innerHTML = reactElememt.children;

  for (const prop  in reactElememt.props) {
     if(domElement === "children") continue;
      domElement.setAttribute(prop, reactElememt.props[prop])
  }

  container.appendChild(domElement)
}

const reactElememt = {
  type : 'a',
  props :{
    href : "https://google.com",
    target : "_blank"
  },
  children :'click me to visit google'
}

const maincontainer = document.querySelector("#root")

customReader(reactElememt,maincontainer)