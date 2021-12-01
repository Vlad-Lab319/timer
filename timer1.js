let arg = process.argv.splice(2);

arg.map(el => {

  Number.isInteger(Number(el)) && Number(el) > 0 ? 
  
  setTimeout(() => {
    process.stdout.write('.');
  }, el * 1000 )
  :  
  undefined
} );