function oddsHandler() {
  debugger;
  // write me!

  strings.displayed = "odds";
  const currentDisplayed = strings.displayed;
  const currentArray = strings[currentDisplayed];
  const currentListComponent = renderList(urrentArray, currentDisplayed);
  const listContainer = document.getElementById('selected');
  
  listContainer.appendChild(currentListComponent);

  // log user interaction: handler name, user input, new state
  log.push({
    handler: 'odds',
    strings: JSON.parse(JSON.stringify(strings))
  })
}
