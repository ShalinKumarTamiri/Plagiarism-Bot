# Plagiarism-Bot
 
 ### Team Memebers:
 
    * Shalin Kumar - 18pa1a1242
    
    * Mydhili - 18pa1a1210
 
 ## Objective :
 
    * This a webpage for plagiarism bot to check similarity between the content given by the end user.
    
    * We used HTML,CSS,BOOTSTRAP,JAVASCRIPT to develop this webpages.
    
    * Now, our main goal to check text only.
    
 ## Steps :
 
    1.First, it will display login page and a link to register page.
    
    2.If she/he is not an existing user then goto register page and register. 
    
    3.Dispaly the main content page it contains info and slides about plagiarism, link to bot and about us sections.
    
    4.And a dark mode and normal mode option in the main content page.
    
    5.Chat page comntains input box and bot will reply to the messages according to the input of the end user.
    
    6.It will greet the end user and asks whether he/she wants to check who similar the files are or wants to exit.
    
    7.If he/she wants to perform plagiarism check then bot will ask the end user to enter the content and bot will return the percentage of similarity.
    
    8.Then , it aks for the input whether he/she wants perform again or wants to exit.
    
    9.Finally , it greets the end user and quits.
    
 ## Approach :
 
    1.We initially splits the sentences into words 
    
    2.Then we will remove punctuations from the remaining words
    
    3.We will do this process for both the files
    
    4.We will find how many words are common in both filtered words and we will calculate how similar they are.
    
 ## Functions and their use in javascript:
 
    1.Createmessage : It will create a message with the input given by end user and response of the bot.
    
    2.Createusermessage : It will call createmessage function 
    
    3.Createbotmessage : It will call createmessage function 
    
    4.RemovePunctuation : It remove all punctuations from the filtered list
    
    5.PlagiarismChecker : It will split the text and call removepunctuation function and calculate similarity 
    
    6.Submit : It will add the user and bot messages to the page and calculate the similarity when end user send the message.
    
 ## Block Diagram :
 
 ![Block Diagram](https://raw.githubusercontent.com/ShalinKumarTamiri/plagbot/main/Blockdiagram.jpg)
 
 
 ## Demo video link :
    
 [![](http://img.youtube.com/vi/WU7qDuJ6RcM/0.jpg)](http://www.youtube.com/watch?v=WU7qDuJ6RcM "")
