//Person class
class Person {
    constructor(firstName, lastName, identification) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.idNumber = identification;
    }
    
    printPerson() {
        console.log(
            "Name: " + this.lastName + ", " + this.firstName 
            + "\nID: " + this.idNumber
        )
    }
}//Student class inherits Person class 
class Student extends Person {
    //constructor
    constructor(firstName, lastName, idNumber, testScores){
        //it calls the constructor of Person class
        super(firstName, lastName, idNumber)
        
        this.testScores = testScores}
     //calculate function that returns a char after calculating the average of the testScores
        calculate(){
         let avg = 0
         let sum = 0
        for(let i=0; i<this.testScores.length; i++){
             sum += this.testScores[i]
             avg  = sum / this.testScores.length
        }
        
        if(avg>=90 && avg <=100){
                return 'O'
                
            }else if(avg>=80 && avg<90){
                
                return 'E'
            }else if(avg>=70 && avg<80){
                
                return 'A'
            }else if(avg>=55 && avg<70){
                
                 return 'P'
            }else if(avg>=40 && avg<55){
                
                return 'D'
            }else if(avg<40){
                
                return 'T'
            }
        
    }
}

function main() {
    let firstName = read()
    let lastName = read()
    let id = +read()
    let numScores = +read()
    let testScores = new Array(numScores)
    
    for (var i = 0; i < numScores; i++) {
        testScores[i] = +read()  
    }

    let s = new Student(firstName, lastName, id, testScores)
    s.printPerson()
    s.calculate()
    console.log('Grade: ' + s.calculate())
}
