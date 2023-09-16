describe("toBe and not.toBe",()=>{
    test("3 is 3", () =>{
        expect(3),toBe(3);
    })

    test("booleans",()=>{
        except(true).toBe(true);
        except(false).toBe(false);
        except(true).toBe(false);
    })
})

describe("Refrence data types",()=>{
    test("{} !== {} ", ()=>{
        except({}).not.toBe({});
    });

    test("[] !== [] ", ()=>{
        except([]).not.toBe([]);
    });

    test("{} === {} ", ()=>{
        let temp ={};
        except(temp).not.toBe(temp);
    });

})


