var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];



function calculateSalesTax(salesData, taxRates)

{
  // Create a function that takes the sales data input for each company and adds the total sales

    //First calculate Salestax for each input

      var output = {};

      for (x=0; x<salesData.length; x++)
      {
        if(output[salesData[x].name] === undefined)
        {
           output[salesData[x].name] = {};

           output[salesData[x].name].totalTaxes = 0;

           output[salesData[x].name].totalSales = 0;



        }
        output[salesData[x].name].totalTaxes+=taxcalc(salesData[x].sales, salesData[x].province);

        output[salesData[x].name].totalSales+=sum(salesData[x].sales);



      }

      console.log(output);



}

function taxcalc(sales, province)
      {
        var sum =0;
        for (a=0; a<sales.length; a++)
        {
          sum+= sales[a];
        }

        for (word in salesTaxRates)
        {
          if (word === province)
          {
            var net = sum*(salesTaxRates[word]);
          }
        }

        return net;

      }

function sum(numbers)
{
  return numbers.reduce(function(a,b)
  {
    return a + b
  });
}

calculateSalesTax(companySalesData, salesTaxRates);

// //* Expected Results:
// {
//   Telus: {
//     totalSales: 1300
//     totalTaxes: 144
//   },
//   Bombardier: {
//     totalSales: 800,
//     totalTaxes: 40
//   }
// }