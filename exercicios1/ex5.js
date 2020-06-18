function transform (x) {
    console.log(`R$ ${x.toFixed(2).toString().replace('.',',')}`)
}

console.log(0.1 + 0.2)
transform(0.1 + 0.2)