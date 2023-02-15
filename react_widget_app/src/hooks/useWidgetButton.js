import { useEffect } from "react";

export default function useWidgetButton() {
  const handleCreateMaps = () => {
    var maps = document.createElement("div");
    maps.className = "widget-carte";
    maps.innerHTML = `<div class="widget-carte-container"><button class='widget-carte-remove' onclick='this.parentElement.parentElement.remove()'>X</button><h2>Carte</h2> <iframe width="600"height="450"style="border:0"loading="lazy"allowfullscreenreferrerpolicy="no-referrer-when-downgrade"src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCk2ucib5qc-uK1braaKGFQ2Bi2HNc4fws&q=${localStorage.getItem(
      "address"
    )}"></iframe> </div>`;
    document.getElementById("widget-content").appendChild(maps);
  };

  return { handleCreateMaps };
}
