function renderWithTemplate(templateFn, parentElement, data, position = "afterbegin", callback){
    parentElement.insertAdjacentHTML(position, templateFn);
    if (callback){
      callback(data);
    }
  }
  
  async function loadTemplate(path){
    const html = await fetch(path);
    const template = await html.text();  
    return template;
  }
  export async function loadHeaderFooter(){
    const header = await loadTemplate("../partials/header.html");
    const headerElement = document.querySelector("#main-header");
    const footer = await loadTemplate("../partials/footer.html");
    const footerElement = document.querySelector("#main-footer");
  
    renderWithTemplate(header, headerElement);
    renderWithTemplate(footer, footerElement);
   

  }