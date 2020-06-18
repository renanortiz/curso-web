function tribonacci(signature,n){
    result = []
      if (n == 0) {
          return result
      } else if (n == 1) {
          result[0] = signature [0]
          return result
      } else if (n == 2) {
          return signature
      } else if (n >= 3) {
          result = signature
          for (let i = 3; i < n; i++) {
              result[i] = signature[i-1] + signature[i-2] + signature[i-3]
          }
          return result
      }
  }