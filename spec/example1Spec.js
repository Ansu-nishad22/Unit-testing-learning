import User from '../src/example1.js';
// Unit Testing: Setting up data with beforeEach

// Test Suite 
describe(`${User.name} Class`, () => {
    let model;

    beforeEach(() => {
        model = new User()
    })
    describe('default values', () => {
        it('first name defaults to empty', () => {
            expect(model.firstName).toBe('');
        });
    
        it('last name defaults to empty', () => {
           // assert
            expect(model.lastName).toBe('');
        });
    
        it('middle name defaults to empty', () => {            
            // assert
            expect(model.middleName).toBe('');
        }); 
    });
});