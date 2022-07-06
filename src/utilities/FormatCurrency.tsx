import React from 'react'

// The Intl.NumberFormat object enables language-sensitive number formatting.

// console.log(new Intl.NumberFormat('de-DE', 
// { style: 'currency', currency: 'EUR' }).format(number));

//  expected output: "123.456,79 €"

const Currency_Formatter = new Intl.NumberFormat( undefined , {
  currency: "USD" ,  style: "currency"
})



const FormatCurrency = (number: number) => {
  return (
    Currency_Formatter.format(number)
  )
}

export default FormatCurrency