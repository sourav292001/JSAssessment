// create a variable to hold your NFT's
const NFTs=[];
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (_name,_eyeColor,_shirtType,_bling) {  
    const NFT={
        "name":_name,
        "eyeColor":_eyeColor,
        "shirtType":_shirtType,
        "bling":_bling
    }
    NFTs.push(NFT);
    console.log("Minted:"+_name);

}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(let i =0;1<NFTs.length;i++){
        console.log(NFTs[i]);
    }

}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\n"+NFTs.length);

}

// call your functions below this line
mintNFT("Sourav","Blue","Hoodie","Gold chain");
mintNFT("Raman","Blue","Hoodie","Gold chain");
mintNFT("Rohan","Blue","Hoodie","Gold chain");
mintNFT("Sunny","Blue","Hoodie","Gold chain");
listNFTs();
getTotalSupply();
