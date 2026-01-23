
//product Constructor
function Product(name,available){
    this.name=name;
    this.available=available;
}

//product array
let products= [];


function addProduct(){
    let name=document.getElementById("productName").value;

    if(name === ""){
        alert("Please Enter Product Name!");
        return
    }

    let newProduct= new Product(name,true);
    products.push(newProduct);//push is array method

    console.log(newProduct);


    
}