const SimpleStorage = artifacts.require("SimpleStorage");


contract("Simple storage", (accounts) => {
        it('should store the favorite number',async() => {
            const storage = await SimpleStorage.new()
            await storage.store(10)
            const data = await storage.retrieve()
            assert.equal(data.toString(), 10, "the value of favNumber is not 10");
        })
    })