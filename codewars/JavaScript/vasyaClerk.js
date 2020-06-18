function tickets(peopleInLine){
    let notas25 = 0
      let notas50 = 0
      for (let i = 0; i < peopleInLine.length; i++) {
          if (peopleInLine[i] == 25) {
              notas25++;
          }
          if (peopleInLine[i] == 50) {
              if (notas25 >= 1) {
                  notas25--;
                  notas50++;
              }
              else {
                  i = peopleInLine.length;
                  return "NO"
              }
          }
          if (peopleInLine[i] == 100) {
              if (notas50 >= 1 && notas25 >= 1) {
                  notas25--;
                  notas50--;
              } else if (notas25 >= 3) {
                  notas25 -= 3;
              } else {
                  i = peopleInLine.length;
                  return "NO"
              }
          }
      }
      if (notas25 >= 0 && notas50 >= 0) {
          return "YES"
      } else {
          return "NO"
      }
  }