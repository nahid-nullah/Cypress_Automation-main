/// <reference types="cypress" />
export class User {

    constructor() {
        //defining xpath locators   
        this.myarticles = '//div[@class="article-preview"]'
       
    }

    printmyarticles(){
        cy.xpath(this.myarticles,{timeout:7000});
    }//end of method
    


}