const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];


function findMatching(drivers, findName) {
    const newDriver = drivers.filter(driver => driver.toLowerCase() === findName.toLowerCase())
    return newDriver
}

function fuzzyMatch(drivers, specifiedLetters) {
    const newList = drivers.filter(driver => driver.toLowerCase().startsWith(specifiedLetters.toLowerCase()))
    return newList
}

function matchName(drivers, target) {
    const matchingName = drivers.filter(driver => driver.name === target)
    return matchingName
}