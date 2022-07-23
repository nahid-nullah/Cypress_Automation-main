/// <reference types="cypress" />
export class NewPost {


    constructor() {
        //defining xpath locators
        this.articletitle = '//input[@placeholder="Article Title"]'
        this.articleabout = '//input[@class="form-control"]'  //index 0
        this.articlewrite = '//textarea[@class="form-control"]'
        this.articletag = '//input[@class="form-control"]' //index 1
        this.articlepublish = '//button[@type="button"]'
   
    }

    clickonarticletitle(){
        cy.xpath(this.articletitle,{timeout:7000}).click();
    }//end of method

    typearticletitle(uservalue){
        cy.xpath(this.articletitle,{timeout:7000}).type(uservalue);
    }//end of method


    clickonarticleabout(){
        cy.xpath(this.articleabout,{timeout:7000}).eq(0).click();
    }//end of method

    typearticleabout(uservalue){
        cy.xpath(this.articleabout,{timeout:7000}).eq(0).type(uservalue);
    }//end of method


    clickonarticlewrite(){
        cy.xpath(this.articlewrite,{timeout:7000}).click();
    }//end of method

    typearticlewrite(uservalue){
        cy.xpath(this.articlewrite,{timeout:7000}).type(uservalue);
    }//end of method


    clickonarticletag(){
        cy.xpath(this.articletag,{timeout:7000}).eq(1).click();
    }//end of method

    typearticletag(uservalue){
        cy.xpath(this.articletag,{timeout:7000}).eq(1).type(uservalue);
    }//end of method


    clickonarticlepublish(){
        cy.xpath(this.articlepublish,{timeout:7000}).click();
    }//end of method

}