/// <reference types="cypress" />
export class SignUp {

    constructor() {
        //defining xpath locators 
        this.username = '//input[@placeholder="Username"]'    
        this.email = '//input[@placeholder="Email"]'
        this.password = '//input[@placeholder="Password"]'
        this.signupbutton = '//button[@type="submit"]'

        this.timeout = 7000;
    }

    

    clickonusername(){
        cy.xpath(this.username,{timeout:this.timeout}).click();
    }//end of method

    typeusername(uservalue){
        cy.xpath(this.username,{timeout:7000}).type(uservalue)
    }//end of method

    clickonemail(){
        cy.xpath(this.email,{timeout:7000}).click();
    }//end of method

    typeemail(uservalue){
        cy.xpath(this.email,{timeout:7000}).type(uservalue)
    }//end of method

    clickonpassword(){
        cy.xpath(this.password,{timeout:7000}).click();
    }//end of method

    typepassword(uservalue){
        cy.xpath(this.password,{timeout:7000}).type(uservalue)
    }//end of method

    clickonsignupbutton(){
        cy.xpath(this.signupbutton,{timeout:7000}).click();
    }//end of method


}
