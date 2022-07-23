/// <reference types="cypress" />

import { sign } from "aws4";
import {SignUp} from "./../../integration/PageObjects/SignUpPage"
import{Home} from "./../../integration/PageObjects/HomePage"
import { home } from "ospath";
import{Settings} from "./../../integration/PageObjects/SettingsPage"
import{NewPost} from "./../../integration/PageObjects/NewPostPage"
import{ArticleHome} from "./../../integration/PageObjects/ArticleHomePage"
import{SignIn} from "./..//..//integration/PageObjects/SignInPage"
import{User} from "./..//..//integration/PageObjects/UserPage"
import{Web} from "./..//..//integration/PageObjects/WebPage"


describe('take home test', function() {
    it('Navigate to Sign Up Page & Sign Up as a New User - Positive Test',() =>{
        const signup = new SignUp();
        const home = new Home();
        const settings = new Settings();
        const web = new Web();
        //navigate to page
        cy.visit('https://rx-devtest.com');
        //click on register
        web.clickonregister();
        //click on username field
        signup.clickonusername();
        //enter user name
        signup.typeusername("user267");
        //click on email field
        signup.clickonemail();
        //enter email
        signup.typeemail("email267@gmail.com");
        //click on password field
        signup.clickonpassword();
        //enter password
        signup.typepassword("P@ssWord23");
        //click on sign up button
        signup.clickonsignupbutton();
        cy.wait(3000);
        //click on settings
        home.clickonsettings();
        cy.wait(3000);
        //click on logout
        settings.clickonlogout();
    })//end of it
   
        
        it('Navigate to Sign Up Page & Sign Up as a New User - Negative Test',() =>{
        const signup = new SignUp();
        const web = new Web();
        //navigate to page
        cy.visit('https://rx-devtest.com');
        //click on register
        web.clickonregister();
        //click on username field
        signup.clickonusername();
        //enter user name
        signup.typeusername("123");
        //click on email field
        signup.clickonemail();
        //enter email
        signup.typeemail("123@");
        //click on password field
        signup.clickonpassword();
        //enter password
        signup.typepassword("123456");
        //click on sign up button
        signup.clickonsignupbutton();
        cy.wait(3000);
        })//end of it


        it('Navigate to Login Page & Login - Negative Test',() =>{
        const web = new Web();
        const signin = new SignIn();
        //navigate to page
        cy.visit('https://rx-devtest.com');
        //click on Sign in
        web.clickonsignin();
        //click on email field
        signin.clickonemail();
        //enter email
        signin.typeemail("email123@yahoo.com");
        //click on password field
        signin.clickonpassword();
        //enter password
        signin.typepassword("P@ssword12");
        //click on sign in button
        signin.clickonsigninbutton();
        cy.wait(3000);
        cy.xpath('//ul[@class="error-messages"]').then(($incorrectLogin) =>{
            let textincorrectLogin = $incorrectLogin.text();
            cy.log("Incorrect Login Message is " + textincorrectLogin);
            cy.wait(3000);   
        })//end of then
    })//end of it


    it('Navigate to Login Page & Login - Positive Test',() =>{
        const web = new Web();
        const signin = new SignIn();
        //navigate to page
        cy.visit('https://rx-devtest.com');
        //click on Sign in
        web.clickonsignin();
        //click on email field
        signin.clickonemail();
        //enter email
        signin.typeemail("email123@yahoo.com");
        //click on password field
        signin.clickonpassword();
        //enter password
        signin.typepassword("P@ssword123");
        //click on sign in button
        signin.clickonsigninbutton();
        cy.wait(3000);
        //capturing and printing message from user feed to console to validate login
        cy.xpath('//div[@class="article-preview"]').then(($Validation) =>{
            let textValidation = $Validation.text();
            cy.log("Successful Login Redirect Page Message is " + textValidation);
            cy.wait(3000);
        })//end of then
    })//end of it


    it('Navigate to Web Page and Create a Post',() =>{
        const home = new Home();
        const newpost = new NewPost();
        const articlehome = new ArticleHome();
        //click on New Post
        home.clickonnewpost();
        //click on Article Title
        newpost.clickonarticletitle();
        //enter Article Title
        newpost.typearticletitle("HELLO RXMG");
        //click on What's this article about
        newpost.clickonarticleabout();
        //enter What's this article about
        newpost.typearticleabout("TESTING");
        //click on Write your article
        newpost.clickonarticlewrite();
        //enter and write your article
        newpost.typearticlewrite("Hello This is a Test");
        //click on Enter tags
        newpost.clickonarticletag();
        //enter tags
        newpost.typearticletag("Greeting");
        cy.wait(3000);
        newpost.clickonarticlepublish();
        cy.wait(3000);
        //click on Write a comment field
        articlehome.clickoncommentarticle();
        //enter comment in comment field
        articlehome.typecommentarticle("Amazing 1st Post!");
        //click on Post Comment
        articlehome.clickonpostcomment();
        //click on home button
        articlehome.clickonhome();
        //click on Global Feed
        home.clickonglobalfeed();
        //capture post from Global Feed and print to console
        cy.xpath('//a[@class="preview-link"]').eq(0).then(($postValidation) =>{
            let textPostValidation = $postValidation.text();
            cy.log("My post is displaying " + textPostValidation);
            cy.wait(3000);
        })//end of then
    
        
        //click on user icon
        home.clickonuserimage();
        //capturr and print post from user feed to console to validate post
        cy.xpath('//div[@class="article-preview"]').then(($postValidationUser) =>{
            let textPostValidationUser = $postValidationUser.text();
            cy.log("My post is displaying " + textPostValidationUser);
            cy.wait(10000);
        })//end of then

    })//end of it

    it('Navigate to Web Page and Delete Created Post',() =>{
        const articlehome = new ArticleHome();
        const home = new Home();
        //click on user post
        home.clickonuserpostlink();
        //click on Delete Article
        articlehome.clickondeletearticle();
        //click on Global Feed
        home.clickonglobalfeed();
        cy.wait(5000);
        home.clickonuserimage();
        cy.wait(5000);

    })//end of it



})//end of describe

