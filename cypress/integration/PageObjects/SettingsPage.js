/// <reference types="cypress" />
export class Settings {


    constructor() {
    this.logout = '//button[@class="btn btn-outline-danger"]'
    }

    clickonlogout(){
        cy.xpath(this.logout,{timeout:7000}).click();
    }//end of method




}