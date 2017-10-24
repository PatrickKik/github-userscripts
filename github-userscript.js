// ==UserScript==
// @name         github-userscript
// @namespace    nl.patrickkik
// @version      1.1
// @description  Tampermonkey/Greasemonkey userscripts to modify GitHub to my preferences.
// @author       Patrick Kik
// @match        https://github.com/*/pull/*/files
// @updateURL    https://raw.githubusercontent.com/PatrickKik/github-userscripts/master/github-userscript.js
// @downloadURL  https://raw.githubusercontent.com/PatrickKik/github-userscripts/master/github-userscript.js
// @grant        none
// ==/UserScript==

$(document).ready(buildMenu);

function buildMenu() {
    var divPrReviewTools = $("div.pr-review-tools")[0];
    divPrReviewTools.appendChild(createToggleCollapseAllButton());
}

function toggleCollapseAll() {
    $("button.btn-octicon").click();
}

function createToggleCollapseAllButton() {
    var button = document.createElement("button");
    button.setAttribute("id", "nl-patrickkik-toggle-collapse-all");
    button.setAttribute("type", "button");
    button.innerText = "Toggle collapse all";
    button.style.marginLeft = "1em";
    button.onclick = toggleCollapseAll;
    return button;
}

