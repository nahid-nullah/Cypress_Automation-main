/// <reference types="cypress" />
export class Web {

    constructor() {
        //defining xpath locators
        this.register = '//a[@href="#/register"]'   
        this.signin = '//a[@href="#/login"]'

    }


    clickonregister(){
        cy.xpath(this.register,{timeout:7000}).click();
    }//end of method



    clickonsignin(){
        cy.xpath(this.signin,{timeout:7000}).click();
    }//end of method



    }