var faker = require("faker");

//generates fake information.

for (let i = 0; i < 10; i++) {
    // var randomName = faker.name.findName();
    // var randomEmail = faker.internet.email();
    // var randomCard = faker.helpers.createCard();

    // console.log(`${i} => ${randomName}  ${randomEmail} `);
    // console.log(randomCard);

    var product_name = faker.commerce.productName();
    var product_price = faker.commerce.price();

    console.log(`${i+1} => ${product_name}   =>  ${product_price} `);

}