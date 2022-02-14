const fs = require('fs');
const { mainModule } = require('process');

var json = [];
// var card = {
//     "Type":"jghjgj",
//     "SubType":"hjkhkj",
//     "ItemName":"hjkhjk",
//     "ItemPrice":"hkjhkj",
//     "Rating":"hjkhjk",
//     "Description":"hjkhkj",
//     "CardImgSrc":"hjkkj",
//     "ModalData":{
//         "ModalHeading":"hjkhjk",
//         "ItemIngredients":"hjkhjk",
//         "ModalImgSrc":"hjkhjk",
//     },
// }

// var emp = {
//     "Type":"jghjgj",
//     "SubType":"hjkhkj",
//     "EmpName":"hjkhjk",
//     "CardImgSrc":"hjkkj",
//     "ModalData":{
//         "EmpDesignation":"hjkhjk",
//         "Contribution":"hjkhjk",
//     },
// }
var nonI = [
    '/asset/food_images/nonVeg/item_1.jpg',
    '/asset/food_images/nonVeg/item_2.jpg',
    '/asset/food_images/nonVeg/item_3.jpg',
    '/asset/food_images/nonVeg/item_4.jpg',
    '/asset/food_images/nonVeg/item_5.jpg',
    '/asset/food_images/nonVeg/item_6.jpg',
    '/asset/food_images/nonVeg/item_7.jpg',
    '/asset/food_images/nonVeg/item_8.jpg',
    '/asset/food_images/nonVeg/item_9.jpg',
    '/asset/food_images/nonVeg/item_10.jpg',
    '/asset/food_images/nonVeg/item_11.jpg',
    '/asset/food_images/nonVeg/item_12.jpg',
    '/asset/food_images/nonVeg/item_13.jpg',
    '/asset/food_images/nonVeg/item_14.jpg',
    '/asset/food_images/nonVeg/item_15.jpg',
    '/asset/food_images/nonVeg/item_16.jpg',
    '/asset/food_images/nonVeg/item_17.jpg',
    '/asset/food_images/nonVeg/item_18.jpg',
    '/asset/food_images/nonVeg/item_19.jpg',
    '/asset/food_images/nonVeg/item_20.jpg',
    '/asset/food_images/nonVeg/item_21.jpg',
    '/asset/food_images/nonVeg/item_22.jpg',
    '/asset/food_images/nonVeg/item_23.jpg',
    '/asset/food_images/nonVeg/item_24.jpg',
    '/asset/food_images/nonVeg/item_25.jpg',
    '/asset/food_images/nonVeg/item_26.jpg',
    '/asset/food_images/nonVeg/item_27.jpg',
    '/asset/food_images/nonVeg/item_28.jpg',
    '/asset/food_images/nonVeg/item_29.jpg',
    '/asset/food_images/nonVeg/item_30.jpg'
]
var vegI = [
    '/asset/food_images/veg/item_1.jpg',
    '/asset/food_images/veg/item_2.jpg',
    '/asset/food_images/veg/item_3.jpg',
    '/asset/food_images/veg/item_4.jpg',
    '/asset/food_images/veg/item_5.jpg',
    '/asset/food_images/veg/item_6.jpg',
    '/asset/food_images/veg/item_7.jpg',
    '/asset/food_images/veg/item_8.jpg',
    '/asset/food_images/veg/item_9.jpg',
    '/asset/food_images/veg/item_10.jpg',
    '/asset/food_images/veg/item_11.jpg',
    '/asset/food_images/veg/item_12.jpg',
    '/asset/food_images/veg/item_13.jpg',
    '/asset/food_images/veg/item_14.jpg',
    '/asset/food_images/veg/item_15.jpg',
    '/asset/food_images/veg/item_16.jpg',
    '/asset/food_images/veg/item_17.jpg',
    '/asset/food_images/veg/item_18.jpg',
    '/asset/food_images/veg/item_19.jpg',
    '/asset/food_images/veg/item_20.jpg',
    '/asset/food_images/veg/item_21.jpg',
    '/asset/food_images/veg/item_22.jpg',
    '/asset/food_images/veg/item_23.jpg',
    '/asset/food_images/veg/item_24.jpg',
    '/asset/food_images/veg/item_25.jpg',
    '/asset/food_images/veg/item_26.jpg',
    '/asset/food_images/veg/item_27.jpg',
    '/asset/food_images/veg/item_28.jpg',
    '/asset/food_images/veg/item_29.jpg',
    '/asset/food_images/veg/item_30.jpg'
]
var empI = [
    '/asset/employee_images/emp_1.jpg',
    '/asset/employee_images/emp_2.jpg',
    '/asset/employee_images/emp_3.jpg',
    '/asset/employee_images/emp_4.jpg',
    '/asset/employee_images/emp_5.jpg',
    '/asset/employee_images/emp_6.jpg',
    '/asset/employee_images/emp_7.jpg',
    '/asset/employee_images/emp_8.jpg',
    '/asset/employee_images/emp_9.jpg',
    '/asset/employee_images/emp_10.jpg',
    '/asset/employee_images/emp_11.jpg',
    '/asset/employee_images/emp_12.jpg',
    '/asset/employee_images/emp_13.jpg',
    '/asset/employee_images/emp_14.jpg',
    '/asset/employee_images/emp_15.jpg',
    '/asset/employee_images/emp_16.jpg',
    '/asset/employee_images/emp_17.jpg',
    '/asset/employee_images/emp_18.jpg',
    '/asset/employee_images/emp_19.jpg',
    '/asset/employee_images/emp_20.jpg',
    '/asset/employee_images/emp_21.jpg',
    '/asset/employee_images/emp_22.jpg'
]
var count1 = 0;
var count2 = 0;

function price (min, max) {
     var num = Math.floor(
      Math.random() * (max - min + 1) + min
    )
    return num.toString()+".00";
}

function rating (min, max) {
    var num = Math.floor(
     Math.random() * (max - min + 1) + min
   )
   return num;
}

function generatefoodJson () {
    for(let i=1;i<=60;i++){
        if(i % 2 == 0){
            card = {
                "Type":"FOOD_01",
                "SubType":"NV_01",
                "ItemName":"Item "+i,
                "ItemPrice":price(60,500),
                "Rating":rating(1,5),
                "Description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce leo velit, pretium rhoncus tempor in, dapibus sit amet ligula.",
                "CardImgSrc":nonI[count1],
                "ModalData":{
                    "ItemIngredients":[
                        "Item Ingredients 1.",
                        "Item Ingredients 2.",
                        "Item Ingredients 3.",
                        "Item Ingredients 4.",
                        "Item Ingredients 5.",
                    ]
                }
            }
            count1++;
            json.push(card);
        } else{
            card = {
                "Type":"FOOD_01",
                "SubType":"VG_02",
                "ItemName":"Item "+i,
                "ItemPrice":price(60,500),
                "Rating":rating(1,5),
                "Description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce leo velit, pretium rhoncus tempor in, dapibus sit amet ligula.",
                "CardImgSrc":vegI[count2],
                "ModalData":{
                    "ItemIngredients":[
                        "Item Ingredients 1.",
                        "Item Ingredients 2.",
                        "Item Ingredients 3.",
                        "Item Ingredients 4.",
                        "Item Ingredients 5.",
                    ]
                }
            }
            count2++;
            json.push(card);
        }
    }
}

function empCard(index, subType1,subType2, desig, count){
    emp = {
        "Type":"EMP_01",
        "SubType":subType1+subType2,
        "EmpName":"Employee "+count,
        "CardImgSrc":empI[index],
        "ModalData":{
            "EmpDesignation":desig+" "+count,
            "Contribution":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce leo velit, pretium rhoncus tempor in, dapibus sit amet ligula.",
        },
    }

    return emp;
}

function generateempJson () {
    var a = 2, b = 7, c = 22
    for(let i = 0,count=1; i < a; i++,count++){
        json.push(empCard(i,"CoF_","01","Co-Founder",count));
    }
    for(let i = a,count=1; i < b; i++,count++){
        json.push(empCard(i,"DIR_","02","Director",count));
    }
    for(let i = b,count=1; i < c; i++,count++){
        json.push(empCard(i,"EMP_","03","Associate",count));
    }
}

function writeJson () {
    const jsonString = (JSON.stringify(json));
    fs.writeFile('items_data.json', jsonString, err => {
        if (err) {
            console.log('Error writing file', err)
        } else {
            console.log('Successfully wrote file')
        }
    })
}

function mainFunc(){
    generatefoodJson();
    generateempJson();
    writeJson();
}


mainFunc();



