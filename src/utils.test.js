import {fact, save} from './utils';

describe("Tests for factorial", ()=>{
    beforeEach(()=>{
        //initializations
    })
    afterEach(()=>{
        //clear initializations
    })
    beforeAll(()=>{

    })
    afterEach(()=>{

    })
    it("should return 1 for factorial of 1",()=>{
        const expected = 1
        const actual = fact(1);
        expect(actual).toBe(expected);
    })
    
    it("should return 2 for factorial of 2",()=>{
        const expected = 2
        const actual = fact(2);
        expect(actual).toBe(expected);
    })
    
    it("should return 24 for factorial of 4",()=>{
        const expected = 24;
        const actual = fact(4);
        expect(actual).toBe(expected);
    })
});

describe("Tests for save", ()=>{
    let mockedSetItem;
    beforeAll(()=>{
        mockedSetItem = jest.fn()
        window.localStorage.__proto__.setItem = mockedSetItem;
        //jest.spyOn(window.localStorage.__proto__, "setItem");
    })
    it("should call onSuccess() on successful save",()=>{
        const msg = "hello";
        const onSuccess = jest.fn();
        save(msg, onSuccess);
        const savedMsg = window.localStorage.getItem("msg");
        expect(onSuccess).toHaveBeenCalled();
    })
    it.only("should save the msg to localstorage on save",()=>{
        const msg = "hello";
        const onSuccess = jest.fn();
        save(msg, onSuccess);
        //const savedMsg = window.localStorage.getItem("msg");
        expect(mockedSetItem).toHaveBeenCalled();
    })
});
