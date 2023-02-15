export default function useWidgetButton() {
  var maps = document.createElement("div");
  maps.innerHTML = `<div class="widget-carte-container"><h2>Carte</h2> <iframe width="600"height="450"style="border:0"loading="lazy"allowfullscreenreferrerpolicy="no-referrer-when-downgrade"src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCk2ucib5qc-uK1braaKGFQ2Bi2HNc4fws&q=${localStorage.getItem('address')}"></iframe> </div>`;
  return {maps};
}
