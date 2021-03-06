/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import { Erc165 } from "./Erc165";

export class Erc165Factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<Erc165> {
    return super.deploy(overrides || {}) as Promise<Erc165>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Erc165 {
    return super.attach(address) as Erc165;
  }
  connect(signer: Signer): Erc165Factory {
    return super.connect(signer) as Erc165Factory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Erc165 {
    return new Contract(address, _abi, signerOrProvider) as Erc165;
  }
}

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506100216301ffc9a760e01b610026565b6100aa565b6001600160e01b03198082161415610085576040805162461bcd60e51b815260206004820152601c60248201527f4552433136353a20696e76616c696420696e7465726661636520696400000000604482015290519081900360640190fd5b6001600160e01b0319166000908152602081905260409020805460ff19166001179055565b60ba806100b86000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c806301ffc9a714602d575b600080fd5b605160048036036020811015604157600080fd5b50356001600160e01b0319166065565b604080519115158252519081900360200190f35b6001600160e01b03191660009081526020819052604090205460ff169056fea2646970667358221220f5502056d1700533b0b4776bb4979408bfce25c2b5f734f3357bf738823a338464736f6c63430007030033";
