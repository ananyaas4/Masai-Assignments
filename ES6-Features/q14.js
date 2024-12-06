const profile = {
    name: "Charlie",
    age: 29,
    address: {
        city: "San Francisco",
        zipcode: "94101"
    }
};
const updates = {
    age: 30,
    address: {
        zipcode: "94109",
        country: "USA"
    }
};
const res = {
    ...profile,
    age: updates.age,  
    address: {
        ...profile.address,  
        ...updates.address  
    }
};
console.log(res);