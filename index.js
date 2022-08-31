//
// A sample NodeJS program that leverages the puppeteer Node library and will...
//
//    * open up a new browser page to scrambledfonts.monotype.com
//    * fill in the form 
//    * submit it
//    * delay 
//    * close the browser 
// 



// Todo:
// Maybe consider wrapping this in a loop to create multiple accounts


const puppeteer = require('puppeteer');
    async function main() {
        const browser = await puppeteer.launch({
            // can be run headless by setting true
            headless: false
        });
        const page = await browser.newPage();
        await page.goto('https://scrambledfonts.monotype.com/');
        
        // Todo:
        // figure out a way to automatically detect the required fields


        // first argument can be id or class name
        await page.type('#FirstName', 'Bryans form testing');
        await page.type('#LastName', 'Bryans form testing');   
        
        await page.type('#Street', 'Bryans form testing');
        
        await page.type('#ZipCode', 'Bryans form testing');
        await page.type('#City', 'Bryans form testing');

        await page.type('#Country', 'Bryans form testing'); 
        
        await page.type('#Email', 'junk@gmail.com');

        await page.type('#Password', 'SixCharacterPassword');

        await page.type('#ConfirmPassword', 'SixCharacterPassword');

        // find an input type that is submit
        await page.evaluate(() => {
            document.querySelector('input[type=submit]').click();
        });


        await page.waitForTimeout(10000); // wait for 5 seconds
        await browser.close();
    }
    main();