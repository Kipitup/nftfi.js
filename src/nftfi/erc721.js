/**
 * @class
 * Class for working with ERC721 non-fungible tokens.
 */
class Erc721 {
  #config;
  #contractFactory;

  constructor(options) {
    this.#config = options?.config;
    this.#contractFactory = options?.contractFactory;
  }

  _getContractAddress(contractName) {
    switch (contractName) {
      case 'v1.loan.fixed':
        return this.#config.loan.fixed.v1.address;
      case 'v2.loan.fixed':
        return this.#config.loan.fixed.v2.address;
      case 'v2-1.loan.fixed':
        return this.#config.loan.fixed.v2_1.address;
    }
  }

  /**
   * Returns the owner of the specified NFT.
   *
   * @param {object} options - Options
   * @param {string} options.token.address - The ERC721 token address
   * @param {string} options.token.id - The ERC721 token ID
   * @returns {string} The NFT's owner address
   *
   * @example
   * const address = await nftfi.erc721.ownerOf({
   *   token: {
   *    address: '0x00000000',
   *    id: '0'
   *   }
   * });
   */
  async ownerOf(options) {
    const contract = this.#contractFactory.create({
      address: options.token.address,
      abi: this.#config.erc721.abi
    });
    const address = await contract.call({
      function: 'ownerOf',
      args: [options.token.id]
    });
    return address.toLowerCase();
  }

  /**
   * Sets or unsets the approval of a given NFTfi contract.
   * The NFTfi contract is allowed to transfer all tokens of the sender on their behalf.
   *
   * @param {object} options - Options
   * @param {string} options.token.address - The ERC721 token address
   * @param {string} options.nftfi.contract.name - The name of the NFTfi contract (eg. `v1.loan.fixed`, `v2.loan.fixed`, `v2-1.loan.fixed`)
   * @returns {boolean} Boolean value indicating whether the operation succeeded
   *
   * @example
   * const address = await nftfi.erc721.setApprovalForAll({
   *   token: {
   *    address: '0x00000000'
   *   },
   *   nftfi: { contract: { name: 'v2-1.loan.fixed' } }
   * });
   */
  async setApprovalForAll(options) {
    let success;
    const contractName = options.nftfi.contract.name;
    const contractAddress = this._getContractAddress(contractName);
    const contract = this.#contractFactory.create({
      address: options.token.address,
      abi: this.#config.erc721.abi
    });
    const result = await contract.call({
      function: 'setApprovalForAll',
      args: [contractAddress, true]
    });
    success = result?.status === 1;
    return success;
  }
}

export default Erc721;
