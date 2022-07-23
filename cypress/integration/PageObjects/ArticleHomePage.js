/// <reference types="cypress" />
export class ArticleHome {

    constructor() {
        //defining xpath locators
        this.home = '//a[@href="#/"]' //index 1
        this.deletearticle = '//button[@class="btn btn-outline-danger btn-sm"]'
        this.commentarticle = '//textarea[@placeholder="Write a comment..."]'
        this.postcomment = '//button[@type="submit"]'
   
    }


    clickonhome(){
        cy.xpath(this.home,{timeout:7000}).eq(1).click();
    }//end of method


    clickondeletearticle(){
        cy.xpath(this.deletearticle,{timeout:7000}).click();
    }//end of method


    clickoncommentarticle(){
        cy.xpath(this.commentarticle,{timeout:7000}).click();
    }//end of method


    typecommentarticle(uservalue){
        cy.xpath(this.commentarticle,{timeout:7000}).type(uservalue);
    }//end of method


    clickonpostcomment(){
        cy.xpath(this.postcomment,{timeout:7000}).click();
    }//end of method






}