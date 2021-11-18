import React from "react"
import { CustomerList } from "./customers/CustomerList"
import { EmployeeList } from "./employees/EmployeesList"
import { TicketList } from "./serviceTickets/TicketList"
export const Repairs = () => {
     return (
        <>
        <h1>Honey Rae's Repair Shop</h1>
        
        <h2>Customer list</h2>
        <CustomerList />
       
        <h3>Employee list</h3>
         <EmployeeList />

         <h4>Service Tickets</h4>
         <TicketList />
        </>
    )
}
