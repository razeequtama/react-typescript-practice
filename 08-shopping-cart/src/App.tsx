export default function App()
{
  return <h1>Hello</h1>
}

/* 

  Plan:

  type ProductType = {
    id: string,
    product: string,
  }

  type CartItemType = {
    product:  ProductType
    quantity: int
  }

  UseContext for:
  type CartContext = {
    items: CartItemType[],
    addItems: (products: ProductType[]) => void,
    removeItems: (id: string) => void
  };

  Components:
  Product List contains of Product Cards
  Cart contains of added/interested products. It picks the things from the CartContext's "items" state.

  Display the cart's items below the products. Each added product in the card needs to have only one space, even if it's gonna
  be added/reduced in the future.

  Adding product steps:
  1.  Uses click the + button on a product,then it changes to a number (the amount) the user can increast/decrease,
      starting from 1. If the user makes the amount to 0, it changes back to the + button. The users can do this with
      multiple products at once.
  2.  There will be an "Add to cart" button below.
      For example, the user has 2 pillows (id: 1), 1 mousepad (id: 2), and 3 mugs (id: 3) for the amounts.
      This will will create an array of 3 products:

      products[0]             products[1]             products[2]
      [                      [                        [
        id: 1                 id: 2                   id: 3
        product: pillow       product: mousepad       product: mug
        quantity: 2           quantity: 1             quantity: 3
                       ]                      ]                  ]

      For each, addItems function will have the array as the paremeter,
      and it'll go through each part of the array, use the ids to match the cart's CartItemType's ids, and add them accordingly.

      Now, the items variable from the CartContext:
      items[0]                            items[1]                     items[2]
      [                                    [                           [
        product: ProductType                product: ProductType        product: ProductType
        quantity: 2                         quantity: 1                 quantity: 3
                       ]                                        ]                         ]

      Now, IF the user wants to add 1 pillow and 1 mousepad:
      products[0]             products[1] 
      [                      [
        id: 1                 id: 2    
        product: pillow       product: mousepad
        quantity: 1           quantity: 1 
                       ]                      ]
      
      addItems will do the same thing, but first, it'll increment the already existing array id there are already exists
      a product with the same id.
      So now, the items array:
      items[0]                            items[1]                     items[2]
      [                                    [                           [
        product: ProductType                product: ProductType        product: ProductType
        quantity: 1                         quantity: 2                 quantity: 3
                       ]                                        ]                         ]

  Removing product steps:

  1. The user clicks the "-" button on a product in the cart.

  2. The "-" button calls:

       removeItems(id)

     The id is used to find the matching product inside the CartContext's
     "items" state.

  3. If the matching product currently has a quantity greater than 1,
     decrease its quantity by 1.

     Example:

     Current items:

     items[0]                         items[1]                         items[2]
     [                               [                                [
       product: pillow                product: mousepad                product: mug
       quantity: 2                    quantity: 2                      quantity: 3
     ]                               ]                                ]

     User clicks "-" on pillow:

       removeItems("1")

     The result becomes:

     items[0]                         items[1]                         items[2]
     [                               [                                [
       product: pillow                product: mousepad                product: mug
       quantity: 1                    quantity: 2                      quantity: 3
     ]                               ]                                ]


  4. If the matching product has a quantity of 1, decrease it to 0 and
     remove the entire CartItemType from the "items" array.

     Current:

     items[0]                         items[1]                         items[2]
     [                               [                                [
       product: pillow                product: mousepad                product: mug
       quantity: 1                    quantity: 2                      quantity: 3
     ]                               ]                                ]

     User clicks "-" on pillow:

       removeItems("1")

     Since pillow's quantity is now 0, remove it completely.

     Result:

     items[0]                         items[1]
     [                               [
       product: mousepad                product: mug
       quantity: 2                      quantity: 3
     ]                               ]


  5. Therefore, removeItems does NOT need a ProductType[] parameter.
     It only needs the id of the product the user wants to decrease.

     The logic is:

       - Find the CartItemType whose product.id matches the given id.
       - If quantity > 1, decrease quantity by 1.
       - If quantity === 1, remove that CartItemType from the array.

*/