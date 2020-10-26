
//Create json data for response
conversation = {

    "Hello" : "Hello!!! I am plagriasm bot.I can find how similiar the files are...\n1.Upload content to find the similiarity \n2.Exit\nSend tour option (1 or 2)",
    "HELLO" : "Hello!!! I am plagriasm bot.I can find how similiar the files are...\n1.Upload content to find the similiarity \n2.Exit\nSend tour option (1 or 2)",
    "hi" : "Hello!!! I am plagriasm bot.I can find how similiar the files are...\n1.Upload content to find the similiarity \n2.Exit\nSend your option (1 or 2)",
    "HI" : "Hello!!! I am plagriasm bot.I can find how similiar the files are...\n1.Upload content to find the similiarity \n2.Exit\nSend your option (1 or 2)",
    "Hi"    : "Hi !!! I am plagiarism bot.I can help you to find the similarity between files...\n1.Upload content to find the similiarity \n2.Exit\nSend your option (1 or 2)",
    "hello"    : "Hi !!! I am plagiarism bot.I can help you to find the similarity between files...\n1.Upload content to find the similiarity \n2.Exit\nSend your option (1 or 2)",
    "2"     : "Thanks you !!!!\nHave a great day.\nGood bye!!!!!",
    "repeat" : "\n1.Do you want to do it again \n2.Exit\nSend your option (1 or 2)"

};



//Fecting chat 
var chat = document.getElementById("chat")

//Function to create a message 
createmessage = function(message,classname){
    //creating p tag 
    var p = document.createElement("p");
    //putting content to the p tag
    p.innerText = message;
    //creatinng attribute i.e.,class with name message and the class name from the parameter
    var att = document.createAttribute("class");
    att.value = 'message '+classname;
    //setting attribute to the p tag 
    p.setAttributeNode(att);
    //returning p tag created
    return p;
}

//Function to user message 
createusermessage = function(message){
    //calling create message function and returning the create p tag 
    return createmessage(message,'user');
}

//Function to user message 
createbotmessage = function(message){
    //calling create message function and returning the create p tag 
    return createmessage(message,'bot');
}

//create variables for storing content and checking
var ischeck = false;
var count = 0;
var content1 = "";
var content2 = "";

//Function to remove punctuations
removePunctuation = function(words){
    //Variable for all punctuations
    var punctuation = '!"#$%\'()*+,-./:;<>=?@[\\]^_`{|}~';
    //returning the filtered list 
    return words.filter(function(word){
        return punctuation.indexOf(word) == -1;
    });
}

//Function to check plagiarism
plagiarismChecker = function(){
    //Spliting the given text
    words1 = content1.split(" ");
    words2 = content2.split(" ");
    //Removing punctuations from the splited list
    words1 = removePunctuation(words1);
    words2 = removePunctuation(words2);
    //variable for common words length in splited lists
    var commonlength = 0;
    //checking for common words
    for(var i = 0 ;i < words1.length; i++){
        if(words2.includes(words1[i])){
            commonlength = commonlength + 1;
        }
    }
    //Finding unique lengths 
    unique_words1_length = words1.length - commonlength;
    unique_words2_length = words2.length - commonlength;
    //Finding similarity
    var similar = 100-((unique_words1_length+unique_words2_length)/(words1.length+words2.length))*100;
    messge="Content given are "+ (similar) +"% similar";
    //creating message
    var p = createbotmessage(messge);
    //adding to the content in html page
    chat.appendChild(p);
}

//Function for submit 
submit = function(){
    //Fecting the value 
    var m = document.getElementById('demo').value;
    //add that message to the conbtent in html
    chat.appendChild(createusermessage(m));
    //Creating bot message
    var msg = "Sorry I can't understand";
    //Comparing the input text with the json data if it is present change the message of bot
    if(m in conversation){
        msg = conversation[m];
    }
    //if the message is 1 or is check value is true then take the content for plagiarism check 
    else if(m=="1" || ischeck==true){
        //Creating bot message
        msg = "Enter the content to check";
        //Checking whether is check is true
        if(ischeck==true){
            //if count is equal to one take the content and convert it into lower case
            if(count == 1){
                content1 = m.toLowerCase();
            }
            //if count is 2 take the content and convert it into lower case and call plagiarism checker function
            else if(count == 2){
                content2 = m.toLowerCase();
                plagiarismChecker();
                //changing the message of bot
                msg = conversation["repeat"];
            }
        }
        //if count is 2 then change the values of ischeck and count
        if(count == 2){
            ischeck = false;
            count = 0;
        }
        //Otherwise increment the value of count
        else{
            ischeck = true;
            count =count + 1;
        }
    }
    //xreating message by call createbotmessage function 
    var p = createbotmessage(msg);
    //Adding content to the page
    chat.appendChild(p);
}