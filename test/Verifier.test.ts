import { expect } from "chai";
import { ethers } from "hardhat";

describe("Verifier", function () {
  beforeEach(async function () {});

  it("passes for right values", async function () {
    const VerifierContract = await ethers.getContractFactory("Verifier");
    const verifier = await VerifierContract.deploy();
    const proof = {
      a: [
        "0x2e9df2b1332f75b014cfef718fab30d61f0731a28f01b4517aa3c863df366ed3",
        "0x13fc635dc9f37b20e9e117f4d1aa820b579436c2b7266d2bae0c5d839ed90cff",
      ],
      b: [
        [
          "0x2fc178d932ef390555b4a8fc0582ebd4814b0797f3f673ecd8d591700f22969f",
          "0x01ec36d78a484e4cd53d05da34c4db6691e5e2c2bd8a078fb2805a01309cf220",
        ],
        [
          "0x1e375c3b4028e3bf8ef82c31ef13e1ec4460eca46535592c1a4f38802c61b8ea",
          "0x0265190d69c19100f1bf04ea2e0a094fd0a44b0d27a71c0cb494355f102cc109",
        ],
      ],
      c: [
        "0x1c7849d1a1b163b690928a285fd086c3bd08956288ee9d5dd10aea44097ccd49",
        "0x2479843b74bae943ff3471ba2dd85c5717cb84662244967c5eb8f6e234cbf186",
      ],
    };
    const input = [
      "0x0000000000000000000000000000000000000000000000000000000000000001",
    ];
    const tx = await verifier.verifyTx(proof.a, proof.b, proof.c, input);
  });
});