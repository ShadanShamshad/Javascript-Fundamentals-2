
        // <h5> Q1.Imagine you are working for a social media company.You 
        // have a list of all the users. Your job is to create a function that checks if a specific username is in that list.The function should take the username as input and tell you whether it's present in the list of users or not.</h5>  

        const Users = [
            "Anurag",
            "Mithun",
            "Alka",
            "Prabir",
            "Vinay",
            "Shubham",
            "Shivan",
            "Farman",
        ];
    
        function isUserPresent(username){
            if(Users.includes(username)){
                console.log(`Yes, ${username} is a valid user.`);
                return true;
            }else{
                console.log(`No, ${username} is not a valid user.`);
                return true;
            } 
            }        
            isUserPresent("Mithun");

    // <h5> Q2. Imagine you work for an e-commerce company.Your task is to create a function that takes the prices of all the products in a customer's cart as input parameters. The function should then calculate and return the total sum of all the product prices. This will help the company easily calculate the total cost of the customer's shopping cart.</h5>

        function calculateTotalCartValue(){
            let total = 0;
            for( let i = 0; i< arguments.length; i++){
                total += arguments[i];
            }
            console.log(`The total cart value is ${total}`);
            return total;
        }
        calculateTotalCartValue(125,40,30);
        

    // <h5> Q3. Imagine you are given a list of student objects, each containing the student's name and their marks. Your task is to create a function that checks results by filtering out students whose score is more than 90 and prints a message saying, "Congratulations [Student Name]! You have cleared the exam.
    // </h5>
        const students = [
            {
                names:'Mithun',
                marks:'95',
            },
            {
                names:'Prabir',
                marks:'75',
            },
            {
                names:'Alka',
                marks:'92',
            },
            {
                names:'Shivam',
                marks:'70',
            },
            {
                names:'Farman',
                marks:'99',
            },
        ];
    
        const checkResult=(names)=>{
            for(let student of students){
                if(student.names === names){
                    return student.marks > 90
                    ? console.log(`Congratulations ${student.names}! You have cleared the exam.`)
                    :console.log(`Sorry ${student.names}! You have not cleared the exam.`)
                }
            }
            console.log('invalid user')
        }
        
        checkResult('Mithun')
        checkResult('Prabir')
        checkResult('Alka')
        checkResult('Shivam')
        checkResult('Farman')

    // <h5> Q4. You are working for an e-commerce client, and they provide you with an array of objects containing product names and their prices. Your task is to create a function that finds the product with the maximum amount (the highest price) and the product with the minimum amount (the lowest price) and prints them to the console</h5>

        const products = [
            {name:'Laptop', price: 120000},
            {name:'Mobile', price: 70000},
            {name:'Laptop Bag', price: 20000},
            {name:'Watch', price: 20000},
            {name:'Mobile Charger', price: 1500},
        ];

        
        let maxProduct = {name:"",price:0}
        let minProduct = {name:"", price:Number.MAX_VALUE}

        for(let product of products){
            if (product.price > maxProduct.price){
                maxProduct = product;
            }
            if (product.price < minProduct.price){
                minProduct = product;
            }
        }
        console.log(`The Product with maximum amount is ${maxProduct.name} which is priced at Rs. ${maxProduct.price}`)
        console.log(`The Product with minimum amount is ${minProduct.name} which is priced at Rs. ${minProduct.price}`)

    // <h5> Q5.- Let’s say you are working for an event management company. You have a list of guest names as an array of strings. Your task is to return a sentence that has all the guest names, separated by commas.</h5>

        const guests = ["Anurag","Mithun","Alka","Prabir","Shivam","Farman"]

        console.log(guests.join(','))


    // <h5> Q6. You are working for an e-commerce company, and you are given an object containing product-related information. Your task is to print the product-related information details as shown in the image below.
    // </h5>
        const productDetails = {
            name :"Apple 2020 MacBook Air Laptop",
            price : 82000,
            color :"Grey",
            hardDisk :"256 GB",
        }

        console.log(`Below are the Product Details.`)
        for(let keys of Object.keys(productDetails) ){
            console.log(`${keys} : ${productDetails[keys]}`);
        }

        // <h5> Q7. Imagine you are working for a digital banking platform, and your team is tasked with improving the security of customer accounts. Your challenge is to create a function that generates a random 4-digit OTP (One-Time Password) for authentication purposes.</h5>

        const generateOtp =()=>{
        let number = '0123456789'
        let otp = ''
            for(let i = 0; i < 4; i++){
            otp = otp + number[Math.floor(Math.random()*10)]
            }
            return otp;
        }
        console.log(`Here is your otp: ${generateOtp()}`);

    // <h5> Q8 Let’s say you are working for an event management company. As a web developer, you need to build a countdown timer for an upcoming event. You need to build a function that calculates the number of days between the current date and the event's start date.</h5>


    const calculateRemainingDays = (eventDate)=>{
        const currentDate = new Date();
        const eventDateTime = new Date(eventDate);

        const timeDifference = eventDateTime - currentDate
        const daysRemaining = Math.ceil(timeDifference/(1000 * 60 *60 * 24));
        return daysRemaining;
    }
    const eventDate = '2023-10-19'
    console.log(calculateRemainingDays(eventDate));

    // <h5> Q9. As a web developer, you need to create a function that takes a username string as input and checks if it contains only unique characters. Use a Set to implement this efficiently. </h5>

        function uniqueCharactersCheck(data){
            const charSet = new Set();

            for(const val of data){
                if(charSet.has(val)){
                    console.log("The input strings contains duplicates")
                    return false;
                }
                charSet.add(val);
            }
            console.log("The input strings contains only unique characters.");
            return true;
        }
        uniqueCharactersCheck("mithun")
        uniqueCharactersCheck('anurag')

    
    // <h5> Q10. As a web developer, your task is to build a function that examines a sentence and counts how many times each unique word appears in it. Using a Map, the function efficiently keeps track of the occurrence of each word in the sentence</h5>

      
        function wordCounter(sentence){
            const frequencyMap = new Map();
            const words = sentence.split(/\s+/);
            for(const word of words){
                const newWord = word.toLowerCase().replace(',', '');
        
                if(newWord.length > 0){
                    frequencyMap.set(newWord, (frequencyMap.get(newWord) || 0) + 1);
                }
            }
            return frequencyMap;
        }
        const sentence = "please please submit your assignment on time, your assignments are important";
        const result = wordCounter(sentence);
        console.log(result);

        

        
    
        
