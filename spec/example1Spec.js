import User from '../src/example1.js';
/* Unit Testing: Setting Up Data with beforeEach Challenge
*   
* 1. Add a new describe for the fullName
* 2. Fully test the fullName get
* 3. Use a nested beforeEach
*/ 

// Test Suite 
// describe(`${User.name} Class`, () => {
//     let model;
    
//     beforeEach(() => {
//         model = new User();
//     });
    
//     describe('default values', () => {
//         it('first name defaults to empty', () => {
//             // assert
//             expect(model.firstName).toBe('');
//         });
    
//         it('last name defaults to empty', () => {
//             // assert
//             expect(model.lastName).toBe('');
//         });
    
//         it('middle name defaults to empty', () => {
//             // assert
//             expect(model.middleName).toBe('');
//         }); 
//     });
    
//     describe('full name', () => {
//         beforeEach(() => {
//            model = new User({ firstName: 'Dylan', lastName: 'Israel' }); 
//         });
        
//         it('middle initial when middleName is defined with first and last', () => {
//             // arrange
//             model.middleName = 'Christopher';
            
//             // act
//             const result = model.fullName;
            
//             // assert
//             expect(result).toBe(`${model.firstName} ${model.middleName[0]}. ${model.lastName}`);
//         });
       
//         it('when no middle name return just first and last', () => {
//            // arrange
//            model.middleName = '';
           
//            // act
//            const result = model.fullName;
           
//            // assert
//            expect(result).toBe(`${model.firstName} ${model.lastName}`);
//         });
//     });
// });


/*  Unit Testing: Spies Challenge
*
*   1. Use a spy and test the method getCodeName() fully
*   2. You will need to use spyOn and toHaveBeenCalledWith()
*   3. HINT: you will need to chain the spy 
*    example: spyOn(object, 'key').and.returnValue(value)
*/

// Test Suite 
describe(`${User.name} Class`, () => {
    let model;
    
    beforeEach(() => {
        model = new User();
    });

    describe('get code name', () => {
        it('is a coding god when confirmed', () => {
            // arrange
            spyOn(window, 'confirm').and.returnValue(true);
            
            // act
            const result = model.getCodeName();
            
            // assert
            expect(result).toBe('TESTING GOD!');
        });
        
        it('is a scrub when not doing testing', () => {
            // arrange
            spyOn(window, 'confirm').and.returnValue(false);
            
            // act
            const result = model.getCodeName();
            
            // assert
            expect(result).toBe(`Scrub skipping tests in his best friend's ride!`);
        });
        
        it('asks a user if they are a testing god', () => {
            // arrange
            spyOn(window, 'confirm').and.returnValue(true);
            
            // act
            const result = model.getCodeName();
            
            // assert
            expect(window.confirm).toHaveBeenCalledWith(`Are you a testing god?`);
        });
    });
});