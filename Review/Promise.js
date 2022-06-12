function GetCustomer(id)
{
    console.log("Getting Customer Data , Please Wait");
    return new Promise((rseolve , reject) => {
        setTimeout(() => { 
            rseolve({id: id, firstName:"John", lastName:"Richard", age: 40, email:"JohnRichard@outlook.com"});
    }, 2000);
    });
} 


const GetCustomerOrders = (email) => {
    console.log("Getting Customer Orders , Please Wait");
    return new Promise((rseolve , reject) => {
        setTimeout(() => {
            rseolve({email, order: "Mobile", customerId: 1, creationDate: "24-05-2022"});
    }, 3000);
    });
}

GetCustomer(1)
.then((customer) => GetCustomerOrders(customer.email))
.then(order => console.log(order))
.catch(error => console.log(error));
