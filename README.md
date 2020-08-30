# Practise javascript
You are given a task to fetch ip data from an API. Can you do that?

## Instruction
1. Clone or download this repo.
  It contains a small size web site with plain javascript, html and css.

2. Open vs code
3. Open index.html by right clicking it. There are no servers installed so you have refresh the page when change the code.
4. Inside myFunction.js file is function myFetchFunction. Write your code inside of it.Use addContent([string]) function 
  to display on web site. It adds a <div> element with string content to the site.

API is served at https://ip-json-server.ey.r.appspot.com/api/[YOUR_CHOICE].
[YOUR_CHOICE] can be:
* /array/easy - which gives you a json list of 10 correct ip addresses,
* /array/medium - which gives you 12 ip addresses, where 10 are correct and 2 contains letters,
* /array/hard - which gives you 14 ip addresses where 9 are correct and 5 are somehow wrong.

example https://ip-json-server.ey.r.appspot.com/api/array/easy

## Task
Your job is to fetch ips, filter correct ones and put them in to webpage like this. 

![Alt text](images/ip-addresses.png?raw=true)
