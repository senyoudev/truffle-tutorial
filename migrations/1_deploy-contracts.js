var simpleStorage=artifacts.require("SimpleStorage.sol");

module.exports = function(deployer) {
      deployer.deploy(simpleStorage);
}