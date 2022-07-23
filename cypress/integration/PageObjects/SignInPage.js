/// <reference types="cypress" />
export class SignIn {

    constructor() {
        //defining xpath locators   
        this.email = '//input[@placeholder="Email"]'
        this.password = '//input[@placeholder="Password"]'
        this.signinbutton = '//button[@type="submit"]'
    }

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


    clickonsigninbutton(){
        cy.xpath(this.signinbutton,{timeout:7000}).click();
    }//end of method








}