const address = {
    Street: 'House 2 Road K Forthright Estate',
    City: 'Punch off Lagos Ibadan Exp Road',
    zipCode: '112011'
};

function showAddress(address){
   for(let key in address)
   console.log(key,address[key]);
};

showAddress(address);


function showAddress(street,city,zipCode){
    return {
        street,
        city,
        zipCode
    }
};
let myStreet = 'House 2 Road K Forthright Estate';
let myCity = 'Punch off Lagos Ibadan Exp Road';
let myZipCode = '112011'
const myAddress = showAddress(myStreet,myCity,myZipCode);
console.log(myAddress)

function Address(street,city,zipCode){
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
};

const myAddress1 = new Address(myStreet,myCity,myZipCode);
console.log(myAddress1);
const  myAddress2 = new Address(myStreet,myCity,myZipCode);

function areSame(myAddress1, myAddress2){
    return myAddress1 === myAddress2 
}
console.log(areSame(myAddress1, myAddress2));

function areEqual(myAddress1, myAddress2){
  return  myAddress1.street === myAddress2.street &&
          myAddress1.city === myAddress2.city &&
          myAddress1.zipCode === myAddress2.zipCode;
};
console.log(areEqual(myAddress1, myAddress2));




   const blogPost = {
    title: 'The Lord is my Shepherd',
    body : 'lorem 50',
    author : 'King David',
    views : 200,
    comments: [
        {author: 'Dayo', body: 'lorem 30'},
        {author: 'Biola', body: 'lorem 140'}
        ],
    isLive: true
    
   };
   console.log(blogPost);

   function Blog(title,body,author){
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false
   };
    const myBlogPost = new Blog('a','b','c');
    console.log(myBlogPost);

    let priceRange = [
        {label: '$', tooltip: 'Inexpensive', minPrice: 0, maxPrice: 25},
        {label: '$$', tooltip: 'Moderate', minPrice: 26, maxPrice: 80},
        {label: '$$$', tooltip: 'Pricey', minPrice: 81, maxPrice: 150},
        {label: '$$$$', tooltip: 'Ultra High-End', minPrice: 121, maxPrice: 500}

    ];

    