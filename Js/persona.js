//view
let html;
html = ``;
let showhide;
showhide = true;


function diplayPersonaContent() {

  for (personas of model.personaInfo.personaList) {
    html += `
    
    <div class="${showhide == true ? "row" : "showHide"}">
      <div class="cell" data-title="Name" onclick="${personas.ProfileID}()">${personas.Name}</div>
      <div class="cell" data-title="Arcana">${personas.Arcana}</div>
      <div class="cell sideBorderleft" data-title="Strenght">${personas.attributes.str}</div>
      <div class="cell " data-title="Magic">${personas.attributes.mag}</div>
      <div class="cell" data-title="Endurance">${personas.attributes.end}</div>
      <div class="cell" data-title="Agility">${personas.attributes.agi}</div>
      <div class="cell" data-title="Luck">${personas.attributes.lck}</div>
      <div class="cell sideBorderleft" data-title="Luck">&nbsp</div>
    </div> 
    `;
  }
  html += `</div>`
  document.getElementById("frontPageTable").innerHTML = html;

}
function displayTable() {
  html = `<div class="table">      
    <div class="row header">
      <div class="cell">Name</div>
      <div class="cell">Arcana</div>
      <div class="cell">Strenght</div>
      <div class="cell">Magic</div>
      <div class="cell">Endurance</div>
      <div class="cell">Agility</div>
      <div class="cell">Luck</div>
      <div class="cell"><button onclick="collapse()">☰</button></div>  
    </div>
    
    `;
  document.getElementById("frontPageTable").innerHTML = html;

}


function collapse() {
  showhide = showhide == false ? true : false;
  html = " ";
  displayTable();
  diplayPersonaContent();
}
