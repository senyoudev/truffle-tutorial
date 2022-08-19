pragma solidity 0.8.16;


contract SimpleStorage {

    uint256 favoriteNumber;

 


    function store(uint256 _favoriteNumber) public {
        favoriteNumber = _favoriteNumber;
    }
    
    function retrieve() public view returns (uint256){
        return favoriteNumber;
    }

}