import React, { useEffect, useState } from "react"

export const CustomerList = () => {
    const [customers, setCustomers] = useState([])
    const [totalCustomerMessage, updateMessage] = useState("")
    // use effect works like a event listener with a diffrent syntax 
        useEffect(
        () => {
            fetch("http://localhost:8088/customers")
                .then(res => res.json())
                .then((customerArray) => { 
                    setCustomers(customerArray)
                })
                
            }, 
        []
    )

            useEffect(
                () => {
                  if (customers.length === 1) {
                      updateMessage("You have 1 customer")
                  }
                  else {
                      updateMessage(`You have ${customers.length} customers`)
                  }
                },
                [customers] //dependicy array.
            )
    return (
        <>
        <div>{totalCustomerMessage}</div>
             {
              customers.slice(0,5).map(
                (customerObject) => { 
                    return <p key={`customer--${customerObject.id}`}>{customerObject.name}</p>
                }
            )
        }
        </>
    )
}


//key=  is a unique identifer. 