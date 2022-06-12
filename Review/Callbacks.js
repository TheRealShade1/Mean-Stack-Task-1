function GetCustomer(id , callback)
{
    console.log("Getting Customer Data , Please Wait");
    setTimeout(() => { 
            callback({id: id, firstName:"John", lastName:"Richard", age: 40, email:"JohnRichard@outlook.com"});
    }, 2000)
} 


const GetCustomerOrders = (email , callback) => {
    console.log("Getting Customer Orders , Please Wait");
    setTimeout(() => {
        callback({email, order: "Mobile", customerId: 1, creationDate: "24-05-2022"});
    }, 3000)
}

GetCustomer(1 , (customer) => {
    console.log("Customer", customer);   
});

GetCustomerOrders(customer.email);

