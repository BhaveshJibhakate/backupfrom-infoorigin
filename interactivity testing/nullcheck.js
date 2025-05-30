
const data = {
    person: {
        name: "bhavesh Jibhakate",
        age: 26,
        address: {
            city: "Bhandara",
            pincode: 441904,
            colony: "Radhakrishna vihar colony,khat road"
        }
    },
    bike: {
        name: "splendor",
        previousOwner: "Manohar Jibhakate",
        currentOwner: "Bhavesh Jibhakate",
        bikedata: {
            chasisno: 123456,
            mode: "+ version",
            manufacturing_year: 2013
        }
    }

};
console.log(data.elephant?.age);
console.log(data.person.address.halwa);
console.log(data.bike.currentOwner);
console.log(data.animal);


