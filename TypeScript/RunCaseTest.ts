declare function require(name: string): any;

require('mocha');

class BOMString {
    replace(regex: string, replacer: string): BOMString {
        return this;
    }
}

(globalThis as any).location = new BOMString;

mocha.setup({
    ui: 'bdd',
    reporter: 'json'
}); 

console.log("start run test case");


mocha.addFile('./CaseTest.js');
mocha.run().on('end', function() {
     let allTestsNum = this.testResults.stats.tests; 
     let passesNum = this.testResults.stats.passes; 
     let failuresNum = this.testResults.stats.failures; 
     if (failuresNum > 0) {
         console.log(JSON.stringify(this.testResults.failures, null, 4));
     }
     console.warn(`Test Summary: Pass[${passesNum}/${allTestsNum}], Fail[${failuresNum}/${allTestsNum}].`);
 });
 