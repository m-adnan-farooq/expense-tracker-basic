
export const NumberFormat = value =>
  new Intl.NumberFormat().format(value);

export const NumberFormatRs = value =>
    new Intl.NumberFormat("en",{
        style : "currency",
        currency : "PKR",
        minimumFractionDigits: 0
    }).format(value)

console.log(NumberFormatRs(Math.round(123456)));