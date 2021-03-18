function age(nbage) {


  const name = process.argv[2]
  const forname = process.argv[3]
  if (nbage < 18) {
    console.log(`Désolé, ${forname} ${name} vous êtes mineur, vous ne pouvez pas voter`)
  } else if (nbage >= 18) {
    console.log(`${forname} ${name} vous êtes majeur, vous pouvez voter`)
  }

}


age(18)