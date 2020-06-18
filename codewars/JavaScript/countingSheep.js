function countSheeps(arrayOfSheep) {
  let contador = 0
  for (let i = 0; i < arrayOfSheep.length; i++) {
    if (arrayOfSheep[i] == true) {
      contador++;
    }
  }
  return contador
}