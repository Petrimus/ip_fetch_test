# Practise javascript
You are given a task to fetch ip data from an API. Can you do that?

## Instruction
1. Clone or download this repo.
  It contains a small size web site with plain javascript, html and css.

2. Open vs code
3. Open index.html by right clicking it. There are no servers installed so you have refresh the page when change the code.
4. Inside myFunction.js file is a function myFetchFunction. Write your code inside of it.Use addContent(["string"]) function 
  to display on web site. It adds a <div> element with string content to the site.

## Server
API data is served from local json-server. You can install it globally with command 
`npm install -g json-server` and run with command `json-server db.json ` 
or you can run it with NPX `npx json-server --watch db.json`.

You can connect server localhost:3000/{'YOUR_CHOOICE']
[YOUR_CHOICE] can be:
* /ip_easy - which gives you a json list of 10 correct ip addresses,
* /ip_medium - which gives you 12 ip addresses, where 10 are correct and 2 contains letters,
* /ip_hard - which gives you 14 ip addresses where 9 are correct and 5 are somehow wrong or
* /ip_object - which gives array of objects that have ip property, some right and some wrong.

When json-serve is running localhost:3000 will give you more info.

## Task
Your job is to fetch ips, filter correct ones and put them in to webpage like this. 

![Alt text](images/ip-addresses.png?raw=true)

## Answer
Inside sampleAnswer.txt are some possible solutions, maybe not the best ones. Can you come up with more elegant solutions?
