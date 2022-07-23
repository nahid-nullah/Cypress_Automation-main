/// <reference types="cypress" />
export class Home {


    constructor() {
        //defining xpath locators
        this.home = '//a[@href="#/"]' //index 1
        this.settings = '//a[@href="#/settings"]'
        this.newpost = '//a[@href="#/editor"]'
        this.globalfeed = '//a[text()="Global Feed"]'
        this.userimage = '//img[@class="user-pic"]'
        this.userpostlink = '//a[@class="preview-link"]' //index 0

   
    }

    clickonsettings(){
        cy.xpath(this.settings,{timeout:7000}).click();
    }//end of method


    clickonglobalfeed(){
        cy.xpath(this.globalfeed,{timeout:7000}).click();
    }//end of method


    clickonuserimage(){
        cy.xpath(this.userimage,{timeout:7000}).click();
    }//end of method


    clickonuserpostlink(){
        cy.xpath(this.userpostlink,{timeout:7000}).eq(0).click();
    }//end of method


    clickonnewpost(){
        cy.xpath(this.newpost,{timeout:7000}).click();
    }//end of method

    clickonhome(){
        cy.xpath(this.home,{timeout:7000}).eq(1).click();
    }//end of method


}