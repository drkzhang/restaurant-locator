1.    How long did you spend on the coding test? What would you add to your solution if you had more time? If you didn't spend much time on the coding test then use this as an opportunity to explain what you would add.
    about 2 hours.
    I would improve on the UI and also try to restructure to code to be cleaner and more tidy if i have more time. Possibly more criteria can be added for user to search for restaurants. 




2.    What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.
  arrow function.
    I did not use it but the code could be changed to use it .
    for example, " handleChange(e){
    this.setState({keyword:e.target.value});
    }"
    can be changed to "handleChange => e =>{this.setState({keyword:e.target.value});}"
    and also the "bind(this)" sentence can be discarded when arrow function is used.



3.    How would you track down a performance issue in production? Have you ever had to do this?
    I would try to use inspection mode in chrome to see if there are any errors in console first. If not, and the loading speed is low I would try the following methods:
    1.separate into components and load differently 
    2.load text first, then picture
    3.design ui to let user trigger more information, but load them in the back at the first place



4.    How would you improve the API that you just used?
    I would try to add more functionalites so user can search based on more criteria




5.     Please describe yourself using JSON.
    In this application I use json to format the response so that it is easier for me to
    extract information form api.