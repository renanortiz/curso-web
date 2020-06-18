class SmallestIntegerFinder {
    findSmallestInt(args) {
        let menor = args[0]
        for (let i = 0; i < args.length; i++) {
            if (menor > args[i]) {
                menor = args[i]
            }
        }
        return menor
  }
}