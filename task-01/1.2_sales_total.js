// 1.2. Develop a program which produces ordered array of sales.
// Input: array of objects with the following structure {amount: 10000, quantity: 10}. Output: new array of ordered sales.
// Array element structure should be: {amount: 10000, quantity: 10, Total: 100000}, where Total = amount * quantity. 
//Please order by Total and note that input array shall remain intact.



// Input sales
const inputSales = [
    { amount: 10000, quantity: 10 },
    { amount: 5000, quantity: 5 },
    { amount: 15000, quantity: 8 },
  ];
  
  // Function to calculate Total and create a new array of ordered sales
  function orderSales(input) {
    const orderedSales = input.map((sale) => {
      const total = sale.amount * sale.quantity;
  
      // Return added Total property
      return { ...sale, Total: total };
    });
  
    // Order Total in descending order
    orderedSales.sort((a, b) => b.Total - a.Total);
  
    return orderedSales;
  }
  
  // Get the ordered sales
  const orderedSalesArray = orderSales(inputSales);
  
  console.log("Input Array:", inputSales);
  console.log("Ordered Array:", orderedSalesArray);
  