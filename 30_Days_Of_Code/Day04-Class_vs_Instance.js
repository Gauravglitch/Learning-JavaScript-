// Define a function called Person that takes an initial age as an argument
function Person(initialAge) {
    // Check if the initial age is less than 0
    if (initialAge < 0) {
      // If it is, log a message and set the age to 0
      console.log('Age is not valid, setting age to 0.');
      this.age = 0;
    } else {
      // If it's not, set the age to the initial age
      this.age = initialAge;
    }
  
    // Define a method called amIOld that checks the person's age and logs a message
    this.amIOld = function() {

      if (this.age < 13) {
        console.log('You are young.');
      } 

      else if (this.age >= 13 && this.age < 18) {
        console.log('You are a teenager.');
      } 

      else {
        console.log('You are old.');
      }
    };
  
    // Define a method called yearPasses that increments the person's age by 1
    this.yearPasses = function() {
      this.age += 1;
    };
  }
  
  function main() {
    // Read the number of test cases from the input
    var T = parseInt(readLine());
  
    for (i = 0; i < T; i++) {
      // Read the age for this test case from the input
      var age = parseInt(readLine());
  
      // Create a new Person object with the given age
      var p = new Person(age);
  
      // Call the amIOld method to log the person's age category
      p.amIOld();
  
      // Simulate 3 years passing by calling the yearPasses method 3 times
      for (j = 0; j < 3; j++) {
        p.yearPasses();
      }
  
      // Call the amIOld method again to log the person's new age category
      p.amIOld();
  
      // Log a blank line to separate the output for each test case
      console.log("");   
    }
  }