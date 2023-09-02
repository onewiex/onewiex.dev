const USDTContractAddress = 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t';
const USDTContractABI = [
  {
    constant: true,
    inputs: [],
    name: 'name',
    outputs: [{ name: '', type: 'string' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [{ name: '_upgradedAddress', type: 'address' }],
    name: 'deprecate',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      { name: '_spender', type: 'address' },
      { name: '_value', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', type: 'bool' }],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'deprecated',
    outputs: [{ name: '', type: 'bool' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [{ name: '_evilUser', type: 'address' }],
    name: 'addBlackList',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      { name: '_from', type: 'address' },
      { name: '_to', type: 'address' },
      { name: '_value', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', type: 'bool' }],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'upgradedAddress',
    outputs: [{ name: '', type: 'address' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', type: 'uint8' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'maximumFee',
    outputs: [{ name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: '_totalSupply',
    outputs: [{ name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [],
    name: 'unpause',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [{ name: '_maker', type: 'address' }],
    name: 'getBlackListStatus',
    outputs: [{ name: '', type: 'bool' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'paused',
    outputs: [{ name: '', type: 'bool' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      { name: '_spender', type: 'address' },
      { name: '_subtractedValue', type: 'uint256' },
    ],
    name: 'decreaseApproval',
    outputs: [{ name: '', type: 'bool' }],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [{ name: 'who', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [{ name: '_value', type: 'uint256' }],
    name: 'calcFee',
    outputs: [{ name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [],
    name: 'pause',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', type: 'address' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', type: 'string' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      { name: '_to', type: 'address' },
      { name: '_value', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', type: 'bool' }],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [{ name: 'who', type: 'address' }],
    name: 'oldBalanceOf',
    outputs: [{ name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      { name: 'newBasisPoints', type: 'uint256' },
      { name: 'newMaxFee', type: 'uint256' },
    ],
    name: 'setParams',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [{ name: 'amount', type: 'uint256' }],
    name: 'issue',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      { name: '_spender', type: 'address' },
      { name: '_addedValue', type: 'uint256' },
    ],
    name: 'increaseApproval',
    outputs: [{ name: '', type: 'bool' }],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [{ name: 'amount', type: 'uint256' }],
    name: 'redeem',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      { name: '_owner', type: 'address' },
      { name: '_spender', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: 'remaining', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'basisPointsRate',
    outputs: [{ name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [{ name: '', type: 'address' }],
    name: 'isBlackListed',
    outputs: [{ name: '', type: 'bool' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [{ name: '_clearedUser', type: 'address' }],
    name: 'removeBlackList',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'MAX_UINT',
    outputs: [{ name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [{ name: 'newOwner', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [{ name: '_blackListedUser', type: 'address' }],
    name: 'destroyBlackFunds',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { name: '_initialSupply', type: 'uint256' },
      { name: '_name', type: 'string' },
      { name: '_symbol', type: 'string' },
      { name: '_decimals', type: 'uint8' },
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: '_blackListedUser', type: 'address' },
      { indexed: false, name: '_balance', type: 'uint256' },
    ],
    name: 'DestroyedBlackFunds',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [{ indexed: false, name: 'amount', type: 'uint256' }],
    name: 'Issue',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [{ indexed: false, name: 'amount', type: 'uint256' }],
    name: 'Redeem',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [{ indexed: false, name: 'newAddress', type: 'address' }],
    name: 'Deprecate',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [{ indexed: true, name: '_user', type: 'address' }],
    name: 'AddedBlackList',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [{ indexed: true, name: '_user', type: 'address' }],
    name: 'RemovedBlackList',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, name: 'feeBasisPoints', type: 'uint256' },
      { indexed: false, name: 'maxFee', type: 'uint256' },
    ],
    name: 'Params',
    type: 'event',
  },
  { anonymous: false, inputs: [], name: 'Pause', type: 'event' },
  { anonymous: false, inputs: [], name: 'Unpause', type: 'event' },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: 'previousOwner', type: 'address' },
      { indexed: true, name: 'newOwner', type: 'address' },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: 'owner', type: 'address' },
      { indexed: true, name: 'spender', type: 'address' },
      { indexed: false, name: 'value', type: 'uint256' },
    ],
    name: 'Approval',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: 'from', type: 'address' },
      { indexed: true, name: 'to', type: 'address' },
      { indexed: false, name: 'value', type: 'uint256' },
    ],
    name: 'Transfer',
    type: 'event',
  },
];

const USDCContractAddress = 'TEkxiTehnzSmSe2XqrBj4w32RUN966rdz8';
const USDCContractABI = [
  {
    inputs: [{ name: 'implementationContract', type: 'address' }],
    stateMutability: 'Nonpayable',
    type: 'Constructor',
  },
  {
    inputs: [
      { name: 'previousAdmin', type: 'address' },
      { name: 'newAdmin', type: 'address' },
    ],
    name: 'AdminChanged',
    type: 'Event',
  },
  {
    inputs: [{ name: 'implementation', type: 'address' }],
    name: 'Upgraded',
    type: 'Event',
  },
  { stateMutability: 'Payable', type: 'Fallback' },
  {
    outputs: [{ type: 'address' }],
    name: 'admin',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    inputs: [{ name: 'newAdmin', type: 'address' }],
    name: 'changeAdmin',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    outputs: [{ type: 'address' }],
    name: 'implementation',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    inputs: [{ name: 'newImplementation', type: 'address' }],
    name: 'upgradeTo',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    inputs: [
      { name: 'newImplementation', type: 'address' },
      { name: 'data', type: 'bytes' },
    ],
    name: 'upgradeToAndCall',
    stateMutability: 'Payable',
    type: 'Function',
  },
  {
    outputs: [{ type: 'string' }],
    name: 'symbol',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    inputs: [
      { indexed: true, name: 'owner', type: 'address' },
      { indexed: true, name: 'spender', type: 'address' },
      { name: 'value', type: 'uint256' },
    ],
    name: 'Approval',
    type: 'Event',
  },
  {
    inputs: [
      { indexed: true, name: 'authorizer', type: 'address' },
      { indexed: true, name: 'nonce', type: 'bytes32' },
    ],
    name: 'AuthorizationCanceled',
    type: 'Event',
  },
  {
    inputs: [
      { indexed: true, name: 'authorizer', type: 'address' },
      { indexed: true, name: 'nonce', type: 'bytes32' },
    ],
    name: 'AuthorizationUsed',
    type: 'Event',
  },
  {
    inputs: [{ indexed: true, name: '_account', type: 'address' }],
    name: 'Blacklisted',
    type: 'Event',
  },
  {
    inputs: [{ indexed: true, name: 'newBlacklister', type: 'address' }],
    name: 'BlacklisterChanged',
    type: 'Event',
  },
  {
    inputs: [
      { indexed: true, name: 'burner', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'Burn',
    type: 'Event',
  },
  {
    inputs: [{ indexed: true, name: 'newMasterMinter', type: 'address' }],
    name: 'MasterMinterChanged',
    type: 'Event',
  },
  {
    inputs: [
      { indexed: true, name: 'minter', type: 'address' },
      { indexed: true, name: 'to', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'Mint',
    type: 'Event',
  },
  {
    inputs: [
      { indexed: true, name: 'minter', type: 'address' },
      { name: 'minterAllowedAmount', type: 'uint256' },
    ],
    name: 'MinterConfigured',
    type: 'Event',
  },
  {
    inputs: [{ indexed: true, name: 'oldMinter', type: 'address' }],
    name: 'MinterRemoved',
    type: 'Event',
  },
  {
    inputs: [
      { name: 'previousOwner', type: 'address' },
      { name: 'newOwner', type: 'address' },
    ],
    name: 'OwnershipTransferred',
    type: 'Event',
  },
  { name: 'Pause', type: 'Event' },
  {
    inputs: [{ indexed: true, name: 'newAddress', type: 'address' }],
    name: 'PauserChanged',
    type: 'Event',
  },
  {
    inputs: [{ indexed: true, name: 'newRescuer', type: 'address' }],
    name: 'RescuerChanged',
    type: 'Event',
  },
  {
    inputs: [
      { indexed: true, name: 'from', type: 'address' },
      { indexed: true, name: 'to', type: 'address' },
      { name: 'value', type: 'uint256' },
    ],
    name: 'Transfer',
    type: 'Event',
  },
  {
    inputs: [{ indexed: true, name: '_account', type: 'address' }],
    name: 'UnBlacklisted',
    type: 'Event',
  },
  { name: 'Unpause', type: 'Event' },
  {
    outputs: [{ type: 'bytes32' }],
    name: 'CANCEL_AUTHORIZATION_TYPEHASH',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'bytes32' }],
    name: 'DOMAIN_SEPARATOR',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'bytes32' }],
    name: 'PERMIT_TYPEHASH',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'bytes32' }],
    name: 'RECEIVE_WITH_AUTHORIZATION_TYPEHASH',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'bytes32' }],
    name: 'TRANSFER_WITH_AUTHORIZATION_TYPEHASH',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'uint256' }],
    inputs: [
      { name: 'owner', type: 'address' },
      { name: 'spender', type: 'address' },
    ],
    name: 'allowance',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'bool' }],
    inputs: [
      { name: 'spender', type: 'address' },
      { name: 'value', type: 'uint256' },
    ],
    name: 'approve',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    outputs: [{ type: 'bool' }],
    inputs: [
      { name: 'authorizer', type: 'address' },
      { name: 'nonce', type: 'bytes32' },
    ],
    name: 'authorizationState',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'uint256' }],
    inputs: [{ name: 'account', type: 'address' }],
    name: 'balanceOf',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    inputs: [{ name: '_account', type: 'address' }],
    name: 'blacklist',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    outputs: [{ type: 'address' }],
    name: 'blacklister',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    inputs: [{ name: '_amount', type: 'uint256' }],
    name: 'burn',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    inputs: [
      { name: 'authorizer', type: 'address' },
      { name: 'nonce', type: 'bytes32' },
      { name: 'v', type: 'uint8' },
      { name: 'r', type: 'bytes32' },
      { name: 's', type: 'bytes32' },
    ],
    name: 'cancelAuthorization',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    outputs: [{ type: 'bool' }],
    inputs: [
      { name: 'minter', type: 'address' },
      { name: 'minterAllowedAmount', type: 'uint256' },
    ],
    name: 'configureMinter',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    outputs: [{ type: 'string' }],
    name: 'currency',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'uint8' }],
    name: 'decimals',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'bool' }],
    inputs: [
      { name: 'spender', type: 'address' },
      { name: 'decrement', type: 'uint256' },
    ],
    name: 'decreaseAllowance',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    outputs: [{ type: 'bool' }],
    inputs: [
      { name: 'spender', type: 'address' },
      { name: 'increment', type: 'uint256' },
    ],
    name: 'increaseAllowance',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    inputs: [
      { name: 'tokenName', type: 'string' },
      { name: 'tokenSymbol', type: 'string' },
      { name: 'tokenCurrency', type: 'string' },
      { name: 'tokenDecimals', type: 'uint8' },
      { name: 'newMasterMinter', type: 'address' },
      { name: 'newPauser', type: 'address' },
      { name: 'newBlacklister', type: 'address' },
      { name: 'newOwner', type: 'address' },
    ],
    name: 'initialize',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    inputs: [{ name: 'newName', type: 'string' }],
    name: 'initializeV2',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    outputs: [{ type: 'bool' }],
    inputs: [{ name: '_account', type: 'address' }],
    name: 'isBlacklisted',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'bool' }],
    inputs: [{ name: 'account', type: 'address' }],
    name: 'isMinter',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'address' }],
    name: 'masterMinter',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'bool' }],
    inputs: [
      { name: '_to', type: 'address' },
      { name: '_amount', type: 'uint256' },
    ],
    name: 'mint',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    outputs: [{ type: 'uint256' }],
    inputs: [{ name: 'minter', type: 'address' }],
    name: 'minterAllowance',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'string' }],
    name: 'name',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'uint256' }],
    inputs: [{ name: 'owner', type: 'address' }],
    name: 'nonces',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'address' }],
    name: 'owner',
    stateMutability: 'View',
    type: 'Function',
  },
  { name: 'pause', stateMutability: 'Nonpayable', type: 'Function' },
  {
    outputs: [{ type: 'bool' }],
    name: 'paused',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'address' }],
    name: 'pauser',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    inputs: [
      { name: 'owner', type: 'address' },
      { name: 'spender', type: 'address' },
      { name: 'value', type: 'uint256' },
      { name: 'deadline', type: 'uint256' },
      { name: 'v', type: 'uint8' },
      { name: 'r', type: 'bytes32' },
      { name: 's', type: 'bytes32' },
    ],
    name: 'permit',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    inputs: [
      { name: 'from', type: 'address' },
      { name: 'to', type: 'address' },
      { name: 'value', type: 'uint256' },
      { name: 'validAfter', type: 'uint256' },
      { name: 'validBefore', type: 'uint256' },
      { name: 'nonce', type: 'bytes32' },
      { name: 'v', type: 'uint8' },
      { name: 'r', type: 'bytes32' },
      { name: 's', type: 'bytes32' },
    ],
    name: 'receiveWithAuthorization',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    outputs: [{ type: 'bool' }],
    inputs: [{ name: 'minter', type: 'address' }],
    name: 'removeMinter',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    inputs: [
      { name: 'tokenContract', type: 'address' },
      { name: 'to', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'rescueERC20',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    outputs: [{ type: 'address' }],
    name: 'rescuer',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'string' }],
    name: 'symbol',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'uint256' }],
    name: 'totalSupply',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'bool' }],
    inputs: [
      { name: 'to', type: 'address' },
      { name: 'value', type: 'uint256' },
    ],
    name: 'transfer',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    outputs: [{ type: 'bool' }],
    inputs: [
      { name: 'from', type: 'address' },
      { name: 'to', type: 'address' },
      { name: 'value', type: 'uint256' },
    ],
    name: 'transferFrom',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    inputs: [{ name: 'newOwner', type: 'address' }],
    name: 'transferOwnership',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    inputs: [
      { name: 'from', type: 'address' },
      { name: 'to', type: 'address' },
      { name: 'value', type: 'uint256' },
      { name: 'validAfter', type: 'uint256' },
      { name: 'validBefore', type: 'uint256' },
      { name: 'nonce', type: 'bytes32' },
      { name: 'v', type: 'uint8' },
      { name: 'r', type: 'bytes32' },
      { name: 's', type: 'bytes32' },
    ],
    name: 'transferWithAuthorization',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    inputs: [{ name: '_account', type: 'address' }],
    name: 'unBlacklist',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  { name: 'unpause', stateMutability: 'Nonpayable', type: 'Function' },
  {
    inputs: [{ name: '_newBlacklister', type: 'address' }],
    name: 'updateBlacklister',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    inputs: [{ name: '_newMasterMinter', type: 'address' }],
    name: 'updateMasterMinter',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    inputs: [{ name: '_newPauser', type: 'address' }],
    name: 'updatePauser',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    inputs: [{ name: 'newRescuer', type: 'address' }],
    name: 'updateRescuer',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    inputs: [{ name: 'lostAndFound', type: 'address' }],
    name: 'initializeV2_1',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    outputs: [{ type: 'string' }],
    name: 'version',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    inputs: [
      { indexed: true, name: 'owner', type: 'address' },
      { indexed: true, name: 'spender', type: 'address' },
      { name: 'value', type: 'uint256' },
    ],
    name: 'Approval',
    type: 'Event',
  },
  {
    inputs: [
      { indexed: true, name: 'authorizer', type: 'address' },
      { indexed: true, name: 'nonce', type: 'bytes32' },
    ],
    name: 'AuthorizationCanceled',
    type: 'Event',
  },
  {
    inputs: [
      { indexed: true, name: 'authorizer', type: 'address' },
      { indexed: true, name: 'nonce', type: 'bytes32' },
    ],
    name: 'AuthorizationUsed',
    type: 'Event',
  },
  {
    inputs: [{ indexed: true, name: '_account', type: 'address' }],
    name: 'Blacklisted',
    type: 'Event',
  },
  {
    inputs: [{ indexed: true, name: 'newBlacklister', type: 'address' }],
    name: 'BlacklisterChanged',
    type: 'Event',
  },
  {
    inputs: [
      { indexed: true, name: 'burner', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'Burn',
    type: 'Event',
  },
  {
    inputs: [{ indexed: true, name: 'newMasterMinter', type: 'address' }],
    name: 'MasterMinterChanged',
    type: 'Event',
  },
  {
    inputs: [
      { indexed: true, name: 'minter', type: 'address' },
      { indexed: true, name: 'to', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'Mint',
    type: 'Event',
  },
  {
    inputs: [
      { indexed: true, name: 'minter', type: 'address' },
      { name: 'minterAllowedAmount', type: 'uint256' },
    ],
    name: 'MinterConfigured',
    type: 'Event',
  },
  {
    inputs: [{ indexed: true, name: 'oldMinter', type: 'address' }],
    name: 'MinterRemoved',
    type: 'Event',
  },
  {
    inputs: [
      { name: 'previousOwner', type: 'address' },
      { name: 'newOwner', type: 'address' },
    ],
    name: 'OwnershipTransferred',
    type: 'Event',
  },
  { name: 'Pause', type: 'Event' },
  {
    inputs: [{ indexed: true, name: 'newAddress', type: 'address' }],
    name: 'PauserChanged',
    type: 'Event',
  },
  {
    inputs: [{ indexed: true, name: 'newRescuer', type: 'address' }],
    name: 'RescuerChanged',
    type: 'Event',
  },
  {
    inputs: [
      { indexed: true, name: 'from', type: 'address' },
      { indexed: true, name: 'to', type: 'address' },
      { name: 'value', type: 'uint256' },
    ],
    name: 'Transfer',
    type: 'Event',
  },
  {
    inputs: [{ indexed: true, name: '_account', type: 'address' }],
    name: 'UnBlacklisted',
    type: 'Event',
  },
  { name: 'Unpause', type: 'Event' },
  {
    outputs: [{ type: 'bytes32' }],
    name: 'CANCEL_AUTHORIZATION_TYPEHASH',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'bytes32' }],
    name: 'DOMAIN_SEPARATOR',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'bytes32' }],
    name: 'PERMIT_TYPEHASH',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'bytes32' }],
    name: 'RECEIVE_WITH_AUTHORIZATION_TYPEHASH',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'bytes32' }],
    name: 'TRANSFER_WITH_AUTHORIZATION_TYPEHASH',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'uint256' }],
    inputs: [
      { name: 'owner', type: 'address' },
      { name: 'spender', type: 'address' },
    ],
    name: 'allowance',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'bool' }],
    inputs: [
      { name: 'spender', type: 'address' },
      { name: 'value', type: 'uint256' },
    ],
    name: 'approve',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    outputs: [{ type: 'bool' }],
    inputs: [
      { name: 'authorizer', type: 'address' },
      { name: 'nonce', type: 'bytes32' },
    ],
    name: 'authorizationState',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'uint256' }],
    inputs: [{ name: 'account', type: 'address' }],
    name: 'balanceOf',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    inputs: [{ name: '_account', type: 'address' }],
    name: 'blacklist',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    outputs: [{ type: 'address' }],
    name: 'blacklister',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    inputs: [{ name: '_amount', type: 'uint256' }],
    name: 'burn',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    inputs: [
      { name: 'authorizer', type: 'address' },
      { name: 'nonce', type: 'bytes32' },
      { name: 'v', type: 'uint8' },
      { name: 'r', type: 'bytes32' },
      { name: 's', type: 'bytes32' },
    ],
    name: 'cancelAuthorization',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    outputs: [{ type: 'bool' }],
    inputs: [
      { name: 'minter', type: 'address' },
      { name: 'minterAllowedAmount', type: 'uint256' },
    ],
    name: 'configureMinter',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    outputs: [{ type: 'string' }],
    name: 'currency',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'uint8' }],
    name: 'decimals',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'bool' }],
    inputs: [
      { name: 'spender', type: 'address' },
      { name: 'decrement', type: 'uint256' },
    ],
    name: 'decreaseAllowance',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    outputs: [{ type: 'bool' }],
    inputs: [
      { name: 'spender', type: 'address' },
      { name: 'increment', type: 'uint256' },
    ],
    name: 'increaseAllowance',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    inputs: [
      { name: 'tokenName', type: 'string' },
      { name: 'tokenSymbol', type: 'string' },
      { name: 'tokenCurrency', type: 'string' },
      { name: 'tokenDecimals', type: 'uint8' },
      { name: 'newMasterMinter', type: 'address' },
      { name: 'newPauser', type: 'address' },
      { name: 'newBlacklister', type: 'address' },
      { name: 'newOwner', type: 'address' },
    ],
    name: 'initialize',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    inputs: [{ name: 'newName', type: 'string' }],
    name: 'initializeV2',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    outputs: [{ type: 'bool' }],
    inputs: [{ name: '_account', type: 'address' }],
    name: 'isBlacklisted',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'bool' }],
    inputs: [{ name: 'account', type: 'address' }],
    name: 'isMinter',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'address' }],
    name: 'masterMinter',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'bool' }],
    inputs: [
      { name: '_to', type: 'address' },
      { name: '_amount', type: 'uint256' },
    ],
    name: 'mint',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    outputs: [{ type: 'uint256' }],
    inputs: [{ name: 'minter', type: 'address' }],
    name: 'minterAllowance',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'string' }],
    name: 'name',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'uint256' }],
    inputs: [{ name: 'owner', type: 'address' }],
    name: 'nonces',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'address' }],
    name: 'owner',
    stateMutability: 'View',
    type: 'Function',
  },
  { name: 'pause', stateMutability: 'Nonpayable', type: 'Function' },
  {
    outputs: [{ type: 'bool' }],
    name: 'paused',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'address' }],
    name: 'pauser',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    inputs: [
      { name: 'owner', type: 'address' },
      { name: 'spender', type: 'address' },
      { name: 'value', type: 'uint256' },
      { name: 'deadline', type: 'uint256' },
      { name: 'v', type: 'uint8' },
      { name: 'r', type: 'bytes32' },
      { name: 's', type: 'bytes32' },
    ],
    name: 'permit',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    inputs: [
      { name: 'from', type: 'address' },
      { name: 'to', type: 'address' },
      { name: 'value', type: 'uint256' },
      { name: 'validAfter', type: 'uint256' },
      { name: 'validBefore', type: 'uint256' },
      { name: 'nonce', type: 'bytes32' },
      { name: 'v', type: 'uint8' },
      { name: 'r', type: 'bytes32' },
      { name: 's', type: 'bytes32' },
    ],
    name: 'receiveWithAuthorization',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    outputs: [{ type: 'bool' }],
    inputs: [{ name: 'minter', type: 'address' }],
    name: 'removeMinter',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    inputs: [
      { name: 'tokenContract', type: 'address' },
      { name: 'to', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'rescueERC20',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    outputs: [{ type: 'address' }],
    name: 'rescuer',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'string' }],
    name: 'symbol',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'uint256' }],
    name: 'totalSupply',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'bool' }],
    inputs: [
      { name: 'to', type: 'address' },
      { name: 'value', type: 'uint256' },
    ],
    name: 'transfer',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    outputs: [{ type: 'bool' }],
    inputs: [
      { name: 'from', type: 'address' },
      { name: 'to', type: 'address' },
      { name: 'value', type: 'uint256' },
    ],
    name: 'transferFrom',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    inputs: [{ name: 'newOwner', type: 'address' }],
    name: 'transferOwnership',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    inputs: [
      { name: 'from', type: 'address' },
      { name: 'to', type: 'address' },
      { name: 'value', type: 'uint256' },
      { name: 'validAfter', type: 'uint256' },
      { name: 'validBefore', type: 'uint256' },
      { name: 'nonce', type: 'bytes32' },
      { name: 'v', type: 'uint8' },
      { name: 'r', type: 'bytes32' },
      { name: 's', type: 'bytes32' },
    ],
    name: 'transferWithAuthorization',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    inputs: [{ name: '_account', type: 'address' }],
    name: 'unBlacklist',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  { name: 'unpause', stateMutability: 'Nonpayable', type: 'Function' },
  {
    inputs: [{ name: '_newBlacklister', type: 'address' }],
    name: 'updateBlacklister',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    inputs: [{ name: '_newMasterMinter', type: 'address' }],
    name: 'updateMasterMinter',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    inputs: [{ name: '_newPauser', type: 'address' }],
    name: 'updatePauser',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    inputs: [{ name: 'newRescuer', type: 'address' }],
    name: 'updateRescuer',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    inputs: [{ name: 'lostAndFound', type: 'address' }],
    name: 'initializeV2_1',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    outputs: [{ type: 'string' }],
    name: 'version',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    inputs: [
      { indexed: true, name: 'owner', type: 'address' },
      { indexed: true, name: 'spender', type: 'address' },
      { name: 'value', type: 'uint256' },
    ],
    name: 'Approval',
    type: 'Event',
  },
  {
    inputs: [
      { indexed: true, name: 'authorizer', type: 'address' },
      { indexed: true, name: 'nonce', type: 'bytes32' },
    ],
    name: 'AuthorizationCanceled',
    type: 'Event',
  },
  {
    inputs: [
      { indexed: true, name: 'authorizer', type: 'address' },
      { indexed: true, name: 'nonce', type: 'bytes32' },
    ],
    name: 'AuthorizationUsed',
    type: 'Event',
  },
  {
    inputs: [{ indexed: true, name: '_account', type: 'address' }],
    name: 'Blacklisted',
    type: 'Event',
  },
  {
    inputs: [{ indexed: true, name: 'newBlacklister', type: 'address' }],
    name: 'BlacklisterChanged',
    type: 'Event',
  },
  {
    inputs: [
      { indexed: true, name: 'burner', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'Burn',
    type: 'Event',
  },
  {
    inputs: [{ indexed: true, name: 'newMasterMinter', type: 'address' }],
    name: 'MasterMinterChanged',
    type: 'Event',
  },
  {
    inputs: [
      { indexed: true, name: 'minter', type: 'address' },
      { indexed: true, name: 'to', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'Mint',
    type: 'Event',
  },
  {
    inputs: [
      { indexed: true, name: 'minter', type: 'address' },
      { name: 'minterAllowedAmount', type: 'uint256' },
    ],
    name: 'MinterConfigured',
    type: 'Event',
  },
  {
    inputs: [{ indexed: true, name: 'oldMinter', type: 'address' }],
    name: 'MinterRemoved',
    type: 'Event',
  },
  {
    inputs: [
      { name: 'previousOwner', type: 'address' },
      { name: 'newOwner', type: 'address' },
    ],
    name: 'OwnershipTransferred',
    type: 'Event',
  },
  { name: 'Pause', type: 'Event' },
  {
    inputs: [{ indexed: true, name: 'newAddress', type: 'address' }],
    name: 'PauserChanged',
    type: 'Event',
  },
  {
    inputs: [{ indexed: true, name: 'newRescuer', type: 'address' }],
    name: 'RescuerChanged',
    type: 'Event',
  },
  {
    inputs: [
      { indexed: true, name: 'from', type: 'address' },
      { indexed: true, name: 'to', type: 'address' },
      { name: 'value', type: 'uint256' },
    ],
    name: 'Transfer',
    type: 'Event',
  },
  {
    inputs: [{ indexed: true, name: '_account', type: 'address' }],
    name: 'UnBlacklisted',
    type: 'Event',
  },
  { name: 'Unpause', type: 'Event' },
  {
    outputs: [{ type: 'bytes32' }],
    name: 'CANCEL_AUTHORIZATION_TYPEHASH',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'bytes32' }],
    name: 'DOMAIN_SEPARATOR',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'bytes32' }],
    name: 'PERMIT_TYPEHASH',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'bytes32' }],
    name: 'RECEIVE_WITH_AUTHORIZATION_TYPEHASH',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'bytes32' }],
    name: 'TRANSFER_WITH_AUTHORIZATION_TYPEHASH',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'uint256' }],
    inputs: [
      { name: 'owner', type: 'address' },
      { name: 'spender', type: 'address' },
    ],
    name: 'allowance',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'bool' }],
    inputs: [
      { name: 'spender', type: 'address' },
      { name: 'value', type: 'uint256' },
    ],
    name: 'approve',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    outputs: [{ type: 'bool' }],
    inputs: [
      { name: 'authorizer', type: 'address' },
      { name: 'nonce', type: 'bytes32' },
    ],
    name: 'authorizationState',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'uint256' }],
    inputs: [{ name: 'account', type: 'address' }],
    name: 'balanceOf',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    inputs: [{ name: '_account', type: 'address' }],
    name: 'blacklist',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    outputs: [{ type: 'address' }],
    name: 'blacklister',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    inputs: [{ name: '_amount', type: 'uint256' }],
    name: 'burn',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    inputs: [
      { name: 'authorizer', type: 'address' },
      { name: 'nonce', type: 'bytes32' },
      { name: 'v', type: 'uint8' },
      { name: 'r', type: 'bytes32' },
      { name: 's', type: 'bytes32' },
    ],
    name: 'cancelAuthorization',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    outputs: [{ type: 'bool' }],
    inputs: [
      { name: 'minter', type: 'address' },
      { name: 'minterAllowedAmount', type: 'uint256' },
    ],
    name: 'configureMinter',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    outputs: [{ type: 'string' }],
    name: 'currency',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'uint8' }],
    name: 'decimals',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'bool' }],
    inputs: [
      { name: 'spender', type: 'address' },
      { name: 'decrement', type: 'uint256' },
    ],
    name: 'decreaseAllowance',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    outputs: [{ type: 'bool' }],
    inputs: [
      { name: 'spender', type: 'address' },
      { name: 'increment', type: 'uint256' },
    ],
    name: 'increaseAllowance',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    inputs: [
      { name: 'tokenName', type: 'string' },
      { name: 'tokenSymbol', type: 'string' },
      { name: 'tokenCurrency', type: 'string' },
      { name: 'tokenDecimals', type: 'uint8' },
      { name: 'newMasterMinter', type: 'address' },
      { name: 'newPauser', type: 'address' },
      { name: 'newBlacklister', type: 'address' },
      { name: 'newOwner', type: 'address' },
    ],
    name: 'initialize',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    inputs: [{ name: 'newName', type: 'string' }],
    name: 'initializeV2',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    outputs: [{ type: 'bool' }],
    inputs: [{ name: '_account', type: 'address' }],
    name: 'isBlacklisted',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'bool' }],
    inputs: [{ name: 'account', type: 'address' }],
    name: 'isMinter',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'address' }],
    name: 'masterMinter',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'bool' }],
    inputs: [
      { name: '_to', type: 'address' },
      { name: '_amount', type: 'uint256' },
    ],
    name: 'mint',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    outputs: [{ type: 'uint256' }],
    inputs: [{ name: 'minter', type: 'address' }],
    name: 'minterAllowance',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'string' }],
    name: 'name',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'uint256' }],
    inputs: [{ name: 'owner', type: 'address' }],
    name: 'nonces',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'address' }],
    name: 'owner',
    stateMutability: 'View',
    type: 'Function',
  },
  { name: 'pause', stateMutability: 'Nonpayable', type: 'Function' },
  {
    outputs: [{ type: 'bool' }],
    name: 'paused',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'address' }],
    name: 'pauser',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    inputs: [
      { name: 'owner', type: 'address' },
      { name: 'spender', type: 'address' },
      { name: 'value', type: 'uint256' },
      { name: 'deadline', type: 'uint256' },
      { name: 'v', type: 'uint8' },
      { name: 'r', type: 'bytes32' },
      { name: 's', type: 'bytes32' },
    ],
    name: 'permit',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    inputs: [
      { name: 'from', type: 'address' },
      { name: 'to', type: 'address' },
      { name: 'value', type: 'uint256' },
      { name: 'validAfter', type: 'uint256' },
      { name: 'validBefore', type: 'uint256' },
      { name: 'nonce', type: 'bytes32' },
      { name: 'v', type: 'uint8' },
      { name: 'r', type: 'bytes32' },
      { name: 's', type: 'bytes32' },
    ],
    name: 'receiveWithAuthorization',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    outputs: [{ type: 'bool' }],
    inputs: [{ name: 'minter', type: 'address' }],
    name: 'removeMinter',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    inputs: [
      { name: 'tokenContract', type: 'address' },
      { name: 'to', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'rescueERC20',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    outputs: [{ type: 'address' }],
    name: 'rescuer',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'string' }],
    name: 'symbol',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'uint256' }],
    name: 'totalSupply',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'bool' }],
    inputs: [
      { name: 'to', type: 'address' },
      { name: 'value', type: 'uint256' },
    ],
    name: 'transfer',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    outputs: [{ type: 'bool' }],
    inputs: [
      { name: 'from', type: 'address' },
      { name: 'to', type: 'address' },
      { name: 'value', type: 'uint256' },
    ],
    name: 'transferFrom',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    inputs: [{ name: 'newOwner', type: 'address' }],
    name: 'transferOwnership',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    inputs: [
      { name: 'from', type: 'address' },
      { name: 'to', type: 'address' },
      { name: 'value', type: 'uint256' },
      { name: 'validAfter', type: 'uint256' },
      { name: 'validBefore', type: 'uint256' },
      { name: 'nonce', type: 'bytes32' },
      { name: 'v', type: 'uint8' },
      { name: 'r', type: 'bytes32' },
      { name: 's', type: 'bytes32' },
    ],
    name: 'transferWithAuthorization',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    inputs: [{ name: '_account', type: 'address' }],
    name: 'unBlacklist',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  { name: 'unpause', stateMutability: 'Nonpayable', type: 'Function' },
  {
    inputs: [{ name: '_newBlacklister', type: 'address' }],
    name: 'updateBlacklister',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    inputs: [{ name: '_newMasterMinter', type: 'address' }],
    name: 'updateMasterMinter',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    inputs: [{ name: '_newPauser', type: 'address' }],
    name: 'updatePauser',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    inputs: [{ name: 'newRescuer', type: 'address' }],
    name: 'updateRescuer',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    inputs: [{ name: 'lostAndFound', type: 'address' }],
    name: 'initializeV2_1',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    outputs: [{ type: 'string' }],
    name: 'version',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    inputs: [
      { indexed: true, name: 'owner', type: 'address' },
      { indexed: true, name: 'spender', type: 'address' },
      { name: 'value', type: 'uint256' },
    ],
    name: 'Approval',
    type: 'Event',
  },
  {
    inputs: [
      { indexed: true, name: 'authorizer', type: 'address' },
      { indexed: true, name: 'nonce', type: 'bytes32' },
    ],
    name: 'AuthorizationCanceled',
    type: 'Event',
  },
  {
    inputs: [
      { indexed: true, name: 'authorizer', type: 'address' },
      { indexed: true, name: 'nonce', type: 'bytes32' },
    ],
    name: 'AuthorizationUsed',
    type: 'Event',
  },
  {
    inputs: [{ indexed: true, name: '_account', type: 'address' }],
    name: 'Blacklisted',
    type: 'Event',
  },
  {
    inputs: [{ indexed: true, name: 'newBlacklister', type: 'address' }],
    name: 'BlacklisterChanged',
    type: 'Event',
  },
  {
    inputs: [
      { indexed: true, name: 'burner', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'Burn',
    type: 'Event',
  },
  {
    inputs: [{ indexed: true, name: 'newMasterMinter', type: 'address' }],
    name: 'MasterMinterChanged',
    type: 'Event',
  },
  {
    inputs: [
      { indexed: true, name: 'minter', type: 'address' },
      { indexed: true, name: 'to', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'Mint',
    type: 'Event',
  },
  {
    inputs: [
      { indexed: true, name: 'minter', type: 'address' },
      { name: 'minterAllowedAmount', type: 'uint256' },
    ],
    name: 'MinterConfigured',
    type: 'Event',
  },
  {
    inputs: [{ indexed: true, name: 'oldMinter', type: 'address' }],
    name: 'MinterRemoved',
    type: 'Event',
  },
  {
    inputs: [
      { name: 'previousOwner', type: 'address' },
      { name: 'newOwner', type: 'address' },
    ],
    name: 'OwnershipTransferred',
    type: 'Event',
  },
  { name: 'Pause', type: 'Event' },
  {
    inputs: [{ indexed: true, name: 'newAddress', type: 'address' }],
    name: 'PauserChanged',
    type: 'Event',
  },
  {
    inputs: [{ indexed: true, name: 'newRescuer', type: 'address' }],
    name: 'RescuerChanged',
    type: 'Event',
  },
  {
    inputs: [
      { indexed: true, name: 'from', type: 'address' },
      { indexed: true, name: 'to', type: 'address' },
      { name: 'value', type: 'uint256' },
    ],
    name: 'Transfer',
    type: 'Event',
  },
  {
    inputs: [{ indexed: true, name: '_account', type: 'address' }],
    name: 'UnBlacklisted',
    type: 'Event',
  },
  { name: 'Unpause', type: 'Event' },
  {
    outputs: [{ type: 'bytes32' }],
    name: 'CANCEL_AUTHORIZATION_TYPEHASH',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'bytes32' }],
    name: 'DOMAIN_SEPARATOR',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'bytes32' }],
    name: 'PERMIT_TYPEHASH',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'bytes32' }],
    name: 'RECEIVE_WITH_AUTHORIZATION_TYPEHASH',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'bytes32' }],
    name: 'TRANSFER_WITH_AUTHORIZATION_TYPEHASH',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'uint256' }],
    inputs: [
      { name: 'owner', type: 'address' },
      { name: 'spender', type: 'address' },
    ],
    name: 'allowance',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'bool' }],
    inputs: [
      { name: 'spender', type: 'address' },
      { name: 'value', type: 'uint256' },
    ],
    name: 'approve',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    outputs: [{ type: 'bool' }],
    inputs: [
      { name: 'authorizer', type: 'address' },
      { name: 'nonce', type: 'bytes32' },
    ],
    name: 'authorizationState',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'uint256' }],
    inputs: [{ name: 'account', type: 'address' }],
    name: 'balanceOf',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    inputs: [{ name: '_account', type: 'address' }],
    name: 'blacklist',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    outputs: [{ type: 'address' }],
    name: 'blacklister',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    inputs: [{ name: '_amount', type: 'uint256' }],
    name: 'burn',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    inputs: [
      { name: 'authorizer', type: 'address' },
      { name: 'nonce', type: 'bytes32' },
      { name: 'v', type: 'uint8' },
      { name: 'r', type: 'bytes32' },
      { name: 's', type: 'bytes32' },
    ],
    name: 'cancelAuthorization',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    outputs: [{ type: 'bool' }],
    inputs: [
      { name: 'minter', type: 'address' },
      { name: 'minterAllowedAmount', type: 'uint256' },
    ],
    name: 'configureMinter',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    outputs: [{ type: 'string' }],
    name: 'currency',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'uint8' }],
    name: 'decimals',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'bool' }],
    inputs: [
      { name: 'spender', type: 'address' },
      { name: 'decrement', type: 'uint256' },
    ],
    name: 'decreaseAllowance',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    outputs: [{ type: 'bool' }],
    inputs: [
      { name: 'spender', type: 'address' },
      { name: 'increment', type: 'uint256' },
    ],
    name: 'increaseAllowance',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    inputs: [
      { name: 'tokenName', type: 'string' },
      { name: 'tokenSymbol', type: 'string' },
      { name: 'tokenCurrency', type: 'string' },
      { name: 'tokenDecimals', type: 'uint8' },
      { name: 'newMasterMinter', type: 'address' },
      { name: 'newPauser', type: 'address' },
      { name: 'newBlacklister', type: 'address' },
      { name: 'newOwner', type: 'address' },
    ],
    name: 'initialize',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    inputs: [{ name: 'newName', type: 'string' }],
    name: 'initializeV2',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    outputs: [{ type: 'bool' }],
    inputs: [{ name: '_account', type: 'address' }],
    name: 'isBlacklisted',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'bool' }],
    inputs: [{ name: 'account', type: 'address' }],
    name: 'isMinter',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'address' }],
    name: 'masterMinter',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'bool' }],
    inputs: [
      { name: '_to', type: 'address' },
      { name: '_amount', type: 'uint256' },
    ],
    name: 'mint',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    outputs: [{ type: 'uint256' }],
    inputs: [{ name: 'minter', type: 'address' }],
    name: 'minterAllowance',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'string' }],
    name: 'name',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'uint256' }],
    inputs: [{ name: 'owner', type: 'address' }],
    name: 'nonces',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'address' }],
    name: 'owner',
    stateMutability: 'View',
    type: 'Function',
  },
  { name: 'pause', stateMutability: 'Nonpayable', type: 'Function' },
  {
    outputs: [{ type: 'bool' }],
    name: 'paused',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'address' }],
    name: 'pauser',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    inputs: [
      { name: 'owner', type: 'address' },
      { name: 'spender', type: 'address' },
      { name: 'value', type: 'uint256' },
      { name: 'deadline', type: 'uint256' },
      { name: 'v', type: 'uint8' },
      { name: 'r', type: 'bytes32' },
      { name: 's', type: 'bytes32' },
    ],
    name: 'permit',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    inputs: [
      { name: 'from', type: 'address' },
      { name: 'to', type: 'address' },
      { name: 'value', type: 'uint256' },
      { name: 'validAfter', type: 'uint256' },
      { name: 'validBefore', type: 'uint256' },
      { name: 'nonce', type: 'bytes32' },
      { name: 'v', type: 'uint8' },
      { name: 'r', type: 'bytes32' },
      { name: 's', type: 'bytes32' },
    ],
    name: 'receiveWithAuthorization',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    outputs: [{ type: 'bool' }],
    inputs: [{ name: 'minter', type: 'address' }],
    name: 'removeMinter',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    inputs: [
      { name: 'tokenContract', type: 'address' },
      { name: 'to', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'rescueERC20',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    outputs: [{ type: 'address' }],
    name: 'rescuer',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'string' }],
    name: 'symbol',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'uint256' }],
    name: 'totalSupply',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'bool' }],
    inputs: [
      { name: 'to', type: 'address' },
      { name: 'value', type: 'uint256' },
    ],
    name: 'transfer',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    outputs: [{ type: 'bool' }],
    inputs: [
      { name: 'from', type: 'address' },
      { name: 'to', type: 'address' },
      { name: 'value', type: 'uint256' },
    ],
    name: 'transferFrom',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    inputs: [{ name: 'newOwner', type: 'address' }],
    name: 'transferOwnership',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    inputs: [
      { name: 'from', type: 'address' },
      { name: 'to', type: 'address' },
      { name: 'value', type: 'uint256' },
      { name: 'validAfter', type: 'uint256' },
      { name: 'validBefore', type: 'uint256' },
      { name: 'nonce', type: 'bytes32' },
      { name: 'v', type: 'uint8' },
      { name: 'r', type: 'bytes32' },
      { name: 's', type: 'bytes32' },
    ],
    name: 'transferWithAuthorization',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    inputs: [{ name: '_account', type: 'address' }],
    name: 'unBlacklist',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  { name: 'unpause', stateMutability: 'Nonpayable', type: 'Function' },
  {
    inputs: [{ name: '_newBlacklister', type: 'address' }],
    name: 'updateBlacklister',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    inputs: [{ name: '_newMasterMinter', type: 'address' }],
    name: 'updateMasterMinter',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    inputs: [{ name: '_newPauser', type: 'address' }],
    name: 'updatePauser',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    inputs: [{ name: 'newRescuer', type: 'address' }],
    name: 'updateRescuer',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    inputs: [{ name: 'lostAndFound', type: 'address' }],
    name: 'initializeV2_1',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    outputs: [{ type: 'string' }],
    name: 'version',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    inputs: [
      { indexed: true, name: 'owner', type: 'address' },
      { indexed: true, name: 'spender', type: 'address' },
      { name: 'value', type: 'uint256' },
    ],
    name: 'Approval',
    type: 'Event',
  },
  {
    inputs: [
      { indexed: true, name: 'authorizer', type: 'address' },
      { indexed: true, name: 'nonce', type: 'bytes32' },
    ],
    name: 'AuthorizationCanceled',
    type: 'Event',
  },
  {
    inputs: [
      { indexed: true, name: 'authorizer', type: 'address' },
      { indexed: true, name: 'nonce', type: 'bytes32' },
    ],
    name: 'AuthorizationUsed',
    type: 'Event',
  },
  {
    inputs: [{ indexed: true, name: '_account', type: 'address' }],
    name: 'Blacklisted',
    type: 'Event',
  },
  {
    inputs: [{ indexed: true, name: 'newBlacklister', type: 'address' }],
    name: 'BlacklisterChanged',
    type: 'Event',
  },
  {
    inputs: [
      { indexed: true, name: 'burner', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'Burn',
    type: 'Event',
  },
  {
    inputs: [{ indexed: true, name: 'newMasterMinter', type: 'address' }],
    name: 'MasterMinterChanged',
    type: 'Event',
  },
  {
    inputs: [
      { indexed: true, name: 'minter', type: 'address' },
      { indexed: true, name: 'to', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'Mint',
    type: 'Event',
  },
  {
    inputs: [
      { indexed: true, name: 'minter', type: 'address' },
      { name: 'minterAllowedAmount', type: 'uint256' },
    ],
    name: 'MinterConfigured',
    type: 'Event',
  },
  {
    inputs: [{ indexed: true, name: 'oldMinter', type: 'address' }],
    name: 'MinterRemoved',
    type: 'Event',
  },
  {
    inputs: [
      { name: 'previousOwner', type: 'address' },
      { name: 'newOwner', type: 'address' },
    ],
    name: 'OwnershipTransferred',
    type: 'Event',
  },
  { name: 'Pause', type: 'Event' },
  {
    inputs: [{ indexed: true, name: 'newAddress', type: 'address' }],
    name: 'PauserChanged',
    type: 'Event',
  },
  {
    inputs: [{ indexed: true, name: 'newRescuer', type: 'address' }],
    name: 'RescuerChanged',
    type: 'Event',
  },
  {
    inputs: [
      { indexed: true, name: 'from', type: 'address' },
      { indexed: true, name: 'to', type: 'address' },
      { name: 'value', type: 'uint256' },
    ],
    name: 'Transfer',
    type: 'Event',
  },
  {
    inputs: [{ indexed: true, name: '_account', type: 'address' }],
    name: 'UnBlacklisted',
    type: 'Event',
  },
  { name: 'Unpause', type: 'Event' },
  {
    outputs: [{ type: 'bytes32' }],
    name: 'CANCEL_AUTHORIZATION_TYPEHASH',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'bytes32' }],
    name: 'DOMAIN_SEPARATOR',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'bytes32' }],
    name: 'PERMIT_TYPEHASH',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'bytes32' }],
    name: 'RECEIVE_WITH_AUTHORIZATION_TYPEHASH',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'bytes32' }],
    name: 'TRANSFER_WITH_AUTHORIZATION_TYPEHASH',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'uint256' }],
    inputs: [
      { name: 'owner', type: 'address' },
      { name: 'spender', type: 'address' },
    ],
    name: 'allowance',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'bool' }],
    inputs: [
      { name: 'spender', type: 'address' },
      { name: 'value', type: 'uint256' },
    ],
    name: 'approve',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    outputs: [{ type: 'bool' }],
    inputs: [
      { name: 'authorizer', type: 'address' },
      { name: 'nonce', type: 'bytes32' },
    ],
    name: 'authorizationState',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'uint256' }],
    inputs: [{ name: 'account', type: 'address' }],
    name: 'balanceOf',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    inputs: [{ name: '_account', type: 'address' }],
    name: 'blacklist',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    outputs: [{ type: 'address' }],
    name: 'blacklister',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    inputs: [{ name: '_amount', type: 'uint256' }],
    name: 'burn',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    inputs: [
      { name: 'authorizer', type: 'address' },
      { name: 'nonce', type: 'bytes32' },
      { name: 'v', type: 'uint8' },
      { name: 'r', type: 'bytes32' },
      { name: 's', type: 'bytes32' },
    ],
    name: 'cancelAuthorization',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    outputs: [{ type: 'bool' }],
    inputs: [
      { name: 'minter', type: 'address' },
      { name: 'minterAllowedAmount', type: 'uint256' },
    ],
    name: 'configureMinter',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    outputs: [{ type: 'string' }],
    name: 'currency',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'uint8' }],
    name: 'decimals',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'bool' }],
    inputs: [
      { name: 'spender', type: 'address' },
      { name: 'decrement', type: 'uint256' },
    ],
    name: 'decreaseAllowance',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    outputs: [{ type: 'bool' }],
    inputs: [
      { name: 'spender', type: 'address' },
      { name: 'increment', type: 'uint256' },
    ],
    name: 'increaseAllowance',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    inputs: [
      { name: 'tokenName', type: 'string' },
      { name: 'tokenSymbol', type: 'string' },
      { name: 'tokenCurrency', type: 'string' },
      { name: 'tokenDecimals', type: 'uint8' },
      { name: 'newMasterMinter', type: 'address' },
      { name: 'newPauser', type: 'address' },
      { name: 'newBlacklister', type: 'address' },
      { name: 'newOwner', type: 'address' },
    ],
    name: 'initialize',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    inputs: [{ name: 'newName', type: 'string' }],
    name: 'initializeV2',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    outputs: [{ type: 'bool' }],
    inputs: [{ name: '_account', type: 'address' }],
    name: 'isBlacklisted',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'bool' }],
    inputs: [{ name: 'account', type: 'address' }],
    name: 'isMinter',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'address' }],
    name: 'masterMinter',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'bool' }],
    inputs: [
      { name: '_to', type: 'address' },
      { name: '_amount', type: 'uint256' },
    ],
    name: 'mint',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    outputs: [{ type: 'uint256' }],
    inputs: [{ name: 'minter', type: 'address' }],
    name: 'minterAllowance',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'string' }],
    name: 'name',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'uint256' }],
    inputs: [{ name: 'owner', type: 'address' }],
    name: 'nonces',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'address' }],
    name: 'owner',
    stateMutability: 'View',
    type: 'Function',
  },
  { name: 'pause', stateMutability: 'Nonpayable', type: 'Function' },
  {
    outputs: [{ type: 'bool' }],
    name: 'paused',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'address' }],
    name: 'pauser',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    inputs: [
      { name: 'owner', type: 'address' },
      { name: 'spender', type: 'address' },
      { name: 'value', type: 'uint256' },
      { name: 'deadline', type: 'uint256' },
      { name: 'v', type: 'uint8' },
      { name: 'r', type: 'bytes32' },
      { name: 's', type: 'bytes32' },
    ],
    name: 'permit',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    inputs: [
      { name: 'from', type: 'address' },
      { name: 'to', type: 'address' },
      { name: 'value', type: 'uint256' },
      { name: 'validAfter', type: 'uint256' },
      { name: 'validBefore', type: 'uint256' },
      { name: 'nonce', type: 'bytes32' },
      { name: 'v', type: 'uint8' },
      { name: 'r', type: 'bytes32' },
      { name: 's', type: 'bytes32' },
    ],
    name: 'receiveWithAuthorization',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    outputs: [{ type: 'bool' }],
    inputs: [{ name: 'minter', type: 'address' }],
    name: 'removeMinter',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    inputs: [
      { name: 'tokenContract', type: 'address' },
      { name: 'to', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'rescueERC20',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    outputs: [{ type: 'address' }],
    name: 'rescuer',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'string' }],
    name: 'symbol',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'uint256' }],
    name: 'totalSupply',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'bool' }],
    inputs: [
      { name: 'to', type: 'address' },
      { name: 'value', type: 'uint256' },
    ],
    name: 'transfer',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    outputs: [{ type: 'bool' }],
    inputs: [
      { name: 'from', type: 'address' },
      { name: 'to', type: 'address' },
      { name: 'value', type: 'uint256' },
    ],
    name: 'transferFrom',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    inputs: [{ name: 'newOwner', type: 'address' }],
    name: 'transferOwnership',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    inputs: [
      { name: 'from', type: 'address' },
      { name: 'to', type: 'address' },
      { name: 'value', type: 'uint256' },
      { name: 'validAfter', type: 'uint256' },
      { name: 'validBefore', type: 'uint256' },
      { name: 'nonce', type: 'bytes32' },
      { name: 'v', type: 'uint8' },
      { name: 'r', type: 'bytes32' },
      { name: 's', type: 'bytes32' },
    ],
    name: 'transferWithAuthorization',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    inputs: [{ name: '_account', type: 'address' }],
    name: 'unBlacklist',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  { name: 'unpause', stateMutability: 'Nonpayable', type: 'Function' },
  {
    inputs: [{ name: '_newBlacklister', type: 'address' }],
    name: 'updateBlacklister',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    inputs: [{ name: '_newMasterMinter', type: 'address' }],
    name: 'updateMasterMinter',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    inputs: [{ name: '_newPauser', type: 'address' }],
    name: 'updatePauser',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    inputs: [{ name: 'newRescuer', type: 'address' }],
    name: 'updateRescuer',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    inputs: [{ name: 'lostAndFound', type: 'address' }],
    name: 'initializeV2_1',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    outputs: [{ type: 'string' }],
    name: 'version',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    inputs: [
      { indexed: true, name: 'owner', type: 'address' },
      { indexed: true, name: 'spender', type: 'address' },
      { name: 'value', type: 'uint256' },
    ],
    name: 'Approval',
    type: 'Event',
  },
  {
    inputs: [
      { indexed: true, name: 'authorizer', type: 'address' },
      { indexed: true, name: 'nonce', type: 'bytes32' },
    ],
    name: 'AuthorizationCanceled',
    type: 'Event',
  },
  {
    inputs: [
      { indexed: true, name: 'authorizer', type: 'address' },
      { indexed: true, name: 'nonce', type: 'bytes32' },
    ],
    name: 'AuthorizationUsed',
    type: 'Event',
  },
  {
    inputs: [{ indexed: true, name: '_account', type: 'address' }],
    name: 'Blacklisted',
    type: 'Event',
  },
  {
    inputs: [{ indexed: true, name: 'newBlacklister', type: 'address' }],
    name: 'BlacklisterChanged',
    type: 'Event',
  },
  {
    inputs: [
      { indexed: true, name: 'burner', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'Burn',
    type: 'Event',
  },
  {
    inputs: [{ indexed: true, name: 'newMasterMinter', type: 'address' }],
    name: 'MasterMinterChanged',
    type: 'Event',
  },
  {
    inputs: [
      { indexed: true, name: 'minter', type: 'address' },
      { indexed: true, name: 'to', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'Mint',
    type: 'Event',
  },
  {
    inputs: [
      { indexed: true, name: 'minter', type: 'address' },
      { name: 'minterAllowedAmount', type: 'uint256' },
    ],
    name: 'MinterConfigured',
    type: 'Event',
  },
  {
    inputs: [{ indexed: true, name: 'oldMinter', type: 'address' }],
    name: 'MinterRemoved',
    type: 'Event',
  },
  {
    inputs: [
      { name: 'previousOwner', type: 'address' },
      { name: 'newOwner', type: 'address' },
    ],
    name: 'OwnershipTransferred',
    type: 'Event',
  },
  { name: 'Pause', type: 'Event' },
  {
    inputs: [{ indexed: true, name: 'newAddress', type: 'address' }],
    name: 'PauserChanged',
    type: 'Event',
  },
  {
    inputs: [{ indexed: true, name: 'newRescuer', type: 'address' }],
    name: 'RescuerChanged',
    type: 'Event',
  },
  {
    inputs: [
      { indexed: true, name: 'from', type: 'address' },
      { indexed: true, name: 'to', type: 'address' },
      { name: 'value', type: 'uint256' },
    ],
    name: 'Transfer',
    type: 'Event',
  },
  {
    inputs: [{ indexed: true, name: '_account', type: 'address' }],
    name: 'UnBlacklisted',
    type: 'Event',
  },
  { name: 'Unpause', type: 'Event' },
  {
    outputs: [{ type: 'bytes32' }],
    name: 'CANCEL_AUTHORIZATION_TYPEHASH',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'bytes32' }],
    name: 'DOMAIN_SEPARATOR',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'bytes32' }],
    name: 'PERMIT_TYPEHASH',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'bytes32' }],
    name: 'RECEIVE_WITH_AUTHORIZATION_TYPEHASH',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'bytes32' }],
    name: 'TRANSFER_WITH_AUTHORIZATION_TYPEHASH',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'uint256' }],
    inputs: [
      { name: 'owner', type: 'address' },
      { name: 'spender', type: 'address' },
    ],
    name: 'allowance',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'bool' }],
    inputs: [
      { name: 'spender', type: 'address' },
      { name: 'value', type: 'uint256' },
    ],
    name: 'approve',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    outputs: [{ type: 'bool' }],
    inputs: [
      { name: 'authorizer', type: 'address' },
      { name: 'nonce', type: 'bytes32' },
    ],
    name: 'authorizationState',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'uint256' }],
    inputs: [{ name: 'account', type: 'address' }],
    name: 'balanceOf',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    inputs: [{ name: '_account', type: 'address' }],
    name: 'blacklist',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    outputs: [{ type: 'address' }],
    name: 'blacklister',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    inputs: [{ name: '_amount', type: 'uint256' }],
    name: 'burn',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    inputs: [
      { name: 'authorizer', type: 'address' },
      { name: 'nonce', type: 'bytes32' },
      { name: 'v', type: 'uint8' },
      { name: 'r', type: 'bytes32' },
      { name: 's', type: 'bytes32' },
    ],
    name: 'cancelAuthorization',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    outputs: [{ type: 'bool' }],
    inputs: [
      { name: 'minter', type: 'address' },
      { name: 'minterAllowedAmount', type: 'uint256' },
    ],
    name: 'configureMinter',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    outputs: [{ type: 'string' }],
    name: 'currency',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'uint8' }],
    name: 'decimals',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'bool' }],
    inputs: [
      { name: 'spender', type: 'address' },
      { name: 'decrement', type: 'uint256' },
    ],
    name: 'decreaseAllowance',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    outputs: [{ type: 'bool' }],
    inputs: [
      { name: 'spender', type: 'address' },
      { name: 'increment', type: 'uint256' },
    ],
    name: 'increaseAllowance',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    inputs: [
      { name: 'tokenName', type: 'string' },
      { name: 'tokenSymbol', type: 'string' },
      { name: 'tokenCurrency', type: 'string' },
      { name: 'tokenDecimals', type: 'uint8' },
      { name: 'newMasterMinter', type: 'address' },
      { name: 'newPauser', type: 'address' },
      { name: 'newBlacklister', type: 'address' },
      { name: 'newOwner', type: 'address' },
    ],
    name: 'initialize',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    inputs: [{ name: 'newName', type: 'string' }],
    name: 'initializeV2',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    outputs: [{ type: 'bool' }],
    inputs: [{ name: '_account', type: 'address' }],
    name: 'isBlacklisted',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'bool' }],
    inputs: [{ name: 'account', type: 'address' }],
    name: 'isMinter',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'address' }],
    name: 'masterMinter',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'bool' }],
    inputs: [
      { name: '_to', type: 'address' },
      { name: '_amount', type: 'uint256' },
    ],
    name: 'mint',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    outputs: [{ type: 'uint256' }],
    inputs: [{ name: 'minter', type: 'address' }],
    name: 'minterAllowance',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'string' }],
    name: 'name',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'uint256' }],
    inputs: [{ name: 'owner', type: 'address' }],
    name: 'nonces',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'address' }],
    name: 'owner',
    stateMutability: 'View',
    type: 'Function',
  },
  { name: 'pause', stateMutability: 'Nonpayable', type: 'Function' },
  {
    outputs: [{ type: 'bool' }],
    name: 'paused',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'address' }],
    name: 'pauser',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    inputs: [
      { name: 'owner', type: 'address' },
      { name: 'spender', type: 'address' },
      { name: 'value', type: 'uint256' },
      { name: 'deadline', type: 'uint256' },
      { name: 'v', type: 'uint8' },
      { name: 'r', type: 'bytes32' },
      { name: 's', type: 'bytes32' },
    ],
    name: 'permit',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    inputs: [
      { name: 'from', type: 'address' },
      { name: 'to', type: 'address' },
      { name: 'value', type: 'uint256' },
      { name: 'validAfter', type: 'uint256' },
      { name: 'validBefore', type: 'uint256' },
      { name: 'nonce', type: 'bytes32' },
      { name: 'v', type: 'uint8' },
      { name: 'r', type: 'bytes32' },
      { name: 's', type: 'bytes32' },
    ],
    name: 'receiveWithAuthorization',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    outputs: [{ type: 'bool' }],
    inputs: [{ name: 'minter', type: 'address' }],
    name: 'removeMinter',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    inputs: [
      { name: 'tokenContract', type: 'address' },
      { name: 'to', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'rescueERC20',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    outputs: [{ type: 'address' }],
    name: 'rescuer',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'string' }],
    name: 'symbol',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'uint256' }],
    name: 'totalSupply',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'bool' }],
    inputs: [
      { name: 'to', type: 'address' },
      { name: 'value', type: 'uint256' },
    ],
    name: 'transfer',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    outputs: [{ type: 'bool' }],
    inputs: [
      { name: 'from', type: 'address' },
      { name: 'to', type: 'address' },
      { name: 'value', type: 'uint256' },
    ],
    name: 'transferFrom',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    inputs: [{ name: 'newOwner', type: 'address' }],
    name: 'transferOwnership',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    inputs: [
      { name: 'from', type: 'address' },
      { name: 'to', type: 'address' },
      { name: 'value', type: 'uint256' },
      { name: 'validAfter', type: 'uint256' },
      { name: 'validBefore', type: 'uint256' },
      { name: 'nonce', type: 'bytes32' },
      { name: 'v', type: 'uint8' },
      { name: 'r', type: 'bytes32' },
      { name: 's', type: 'bytes32' },
    ],
    name: 'transferWithAuthorization',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    inputs: [{ name: '_account', type: 'address' }],
    name: 'unBlacklist',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  { name: 'unpause', stateMutability: 'Nonpayable', type: 'Function' },
  {
    inputs: [{ name: '_newBlacklister', type: 'address' }],
    name: 'updateBlacklister',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    inputs: [{ name: '_newMasterMinter', type: 'address' }],
    name: 'updateMasterMinter',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    inputs: [{ name: '_newPauser', type: 'address' }],
    name: 'updatePauser',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    inputs: [{ name: 'newRescuer', type: 'address' }],
    name: 'updateRescuer',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    inputs: [{ name: 'lostAndFound', type: 'address' }],
    name: 'initializeV2_1',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    outputs: [{ type: 'string' }],
    name: 'version',
    stateMutability: 'View',
    type: 'Function',
  },
];

const OWXContractAddress = 'TF7iETvAFbAHwuz2FJL2qwHBdJnwm8Ww4F';
const OWXContractABI = [
  {
    constant: true,
    inputs: [],
    name: 'name',
    outputs: [{ name: '', type: 'string' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      { name: 'spender', type: 'address' },
      { name: 'value', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', type: 'bool' }],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      { name: 'sender', type: 'address' },
      { name: 'recipient', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', type: 'bool' }],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', type: 'uint8' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      { name: 'spender', type: 'address' },
      { name: 'addedValue', type: 'uint256' },
    ],
    name: 'increaseAllowance',
    outputs: [{ name: '', type: 'bool' }],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [{ name: 'account', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', type: 'string' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      { name: 'spender', type: 'address' },
      { name: 'subtractedValue', type: 'uint256' },
    ],
    name: 'decreaseAllowance',
    outputs: [{ name: '', type: 'bool' }],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      { name: 'recipient', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', type: 'bool' }],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      { name: 'owner', type: 'address' },
      { name: 'spender', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: 'from', type: 'address' },
      { indexed: true, name: 'to', type: 'address' },
      { indexed: false, name: 'value', type: 'uint256' },
    ],
    name: 'Transfer',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: 'owner', type: 'address' },
      { indexed: true, name: 'spender', type: 'address' },
      { indexed: false, name: 'value', type: 'uint256' },
    ],
    name: 'Approval',
    type: 'event',
  },
];

const crowdsaleContractAddress = 'TTM7AfxByFF7FQfeN43iEMsC4z9XryTcek';
const crowdsaleContractABI = [
  {
    constant: true,
    inputs: [],
    name: 'isCrowdsaleActive',
    outputs: [{ name: '', type: 'bool' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [{ name: 'usdcAmount', type: 'uint256' }],
    name: 'purchaseTokensWithUSDC',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [],
    name: 'purchaseTokensWithTRX',
    outputs: [],
    payable: true,
    stateMutability: 'payable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [],
    name: 'withdrawTRX',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [],
    name: 'stopCrowdsale',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'tokensSold',
    outputs: [{ name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'usdcTokenAddress',
    outputs: [{ name: '', type: 'address' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [{ name: '_newRate', type: 'uint256' }],
    name: 'setTokenPer1000UsdRate',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [],
    name: 'withdrawTokens',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', type: 'address' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'usdtTokenAddress',
    outputs: [{ name: '', type: 'address' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'tokenAddress',
    outputs: [{ name: '', type: 'address' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'tokenPer1000UsdRate',
    outputs: [{ name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'usdtPer1000TrxRate',
    outputs: [{ name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [{ name: '_newRate', type: 'uint256' }],
    name: 'setUsdtPer1000TrxRate',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [{ name: 'usdtAmount', type: 'uint256' }],
    name: 'purchaseTokensWithUSDT',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [],
    name: 'resumeCrowdsale',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { name: '_tokenAddress', type: 'address' },
      { name: '_usdtTokenAddress', type: 'address' },
      { name: '_usdcTokenAddress', type: 'address' },
      { name: '_tokenPer1000UsdRate', type: 'uint256' },
      { name: '_usdtPer1000TrxRate', type: 'uint256' },
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: 'buyer', type: 'address' },
      { indexed: false, name: 'amount', type: 'uint256' },
    ],
    name: 'TokensPurchased',
    type: 'event',
  },
];

let TOKENPER1000USD = 1000;
let USDPER1000TRXRATE = 77;

async function getTokenPrice() {
  const crowdsaleContract = window.tronWeb.contract(
    crowdsaleContractABI,
    crowdsaleContractAddress
  );

  try {
    let result = await crowdsaleContract.tokenPer1000UsdRate().call();
    TOKENPER1000USD = result.toString();
    let usdPerOwx = 1000 / TOKENPER1000USD;

    result = await crowdsaleContract.usdtPer1000TrxRate().call();
    USDPER1000TRXRATE = result.toString();
    let usdtPerTrx = 1000 / USDPER1000TRXRATE;

    console.log(TOKENPER1000USD);
    console.log(USDPER1000TRXRATE);

    const trxOwxRate = document.getElementById('trx-owx-rate');
    const usdOwxRate = document.getElementById('usd-owx-rate');
    // trxOwxRate.textContent = `${usdPerOwx * usdtPerTrx} TRX/OWX`;
    trxOwxRate.textContent = `1 $OWX = ${usdPerOwx * usdtPerTrx} TRX`;
    usdOwxRate.textContent = `1 $OWX = ${usdPerOwx} USD`;
  } catch (error) {
    alert(error);
  }
}

async function initInfo() {
  try {
    if (typeof window.tronWeb === 'undefined') {
      alert(
        'TronLink wallet not found in your browser. Please install TronLink or switch to a PC if you are using a mobile device.'
      );
      return;
    }
    if (!window.tronWeb || !window.tronWeb.ready) {
      alert(
        'TronLink wallet is not ready. Please unlock TronLink and refresh the page.'
      );
      return;
    } else {
      try {
        let address = window.tronWeb.defaultAddress.base58;
        await getTokenPrice();
        await updateWalletInfo(address);
      } catch (error) {
        console.error('Error requesting accounts:', error);
        alert(
          'An error occurred while requesting account information. Please try again.'
        );
      }
    }
  } catch (error) {
    console.error('Error:', error);
    alert('An error occurred. Please try again.');
  }
}

document
  .getElementById('button-connect-tronlink')
  .addEventListener('click', async () => {
    await initInfo();
  });

async function getUSDTBalance(userAddress) {
  return getTokenBalance(userAddress, USDTContractABI, USDTContractAddress);
}

async function getUSDCBalance(userAddress) {
  return getTokenBalance(userAddress, USDCContractABI, USDCContractAddress);
}

async function getOWXBalance(userAddress) {
  return getTokenBalance(userAddress, OWXContractABI, OWXContractAddress);
}

async function getTokenBalance(
  userAddress,
  tokenContractABI,
  tokenContractAddress
) {
  const contract = window.tronWeb.contract(
    tokenContractABI,
    tokenContractAddress
  );
  try {
    const balance = await contract.balanceOf(userAddress).call();
    return balance.toString();
  } catch (error) {
    console.error('Error fetching token balance:', error);
    return 0;
  }
}

const walletAddressComponent = document.getElementById('wallet-address');
const trxAmountComponent = document.getElementById('trx-amount');
const usdtAmountComponent = document.getElementById('usdt-amount');
const usdcAmountComponent = document.getElementById('usdc-amount');
const owxAmountComponent = document.getElementById('owx-amount');

async function updateWalletInfo(userAddress) {
  walletAddressComponent.textContent = userAddress;

  const trxAmount = (await tronWeb.trx.getBalance(userAddress)) / 10 ** 6;
  const usdcAmount = (await getUSDCBalance(userAddress)) / 10 ** 6;
  const usdtAmount = (await getUSDTBalance(userAddress)) / 10 ** 6;
  const owxAmount = (await getOWXBalance(userAddress)) / 10 ** 6;

  trxAmountComponent.textContent = trxAmount;
  usdtAmountComponent.textContent = usdtAmount;
  usdcAmountComponent.textContent = usdcAmount;
  owxAmountComponent.textContent = `${owxAmount} (~${Math.round(
    (owxAmount / TOKENPER1000USD) * 1000
  )} USD)`;

  setPurchaseAmount(trxAmount);
}

const addOWXComponent = document.getElementById('add-owx');
addOWXComponent.addEventListener('click', async () => {
  if (window.tronWeb && window.tronWeb.defaultAddress.base58) {
    var tronweb = window.tronWeb;
    var tx = await tronweb.request({
      method: 'wallet_watchAsset',
      params: {
        type: 'trc20',
        options: { address: OWXContractAddress },
      },
    });
    console.log(tx);
  }
});

const amountElement = document.getElementById('amount');
const tokenAmountElement = document.getElementById('token-amount');
const currencyElement = document.getElementById('currency');
function setPurchaseAmount(amount) {
  amountElement.value = amount;
  setTokenAmount();
}

amountElement.addEventListener('input', () => {
  let inputValue = amountElement.value;
  inputValue = inputValue.replace(/[^0-9]/g, '');
  amountElement.value = inputValue;
  setTokenAmount();
});

currencyElement.addEventListener('change', () => {
  const selectedCurrency = currencyElement.value;
  if (selectedCurrency == 'TRX') {
    amountElement.value = trxAmountComponent.textContent;
  } else if (selectedCurrency == 'USDC') {
    amountElement.value = usdcAmountComponent.textContent;
  } else if (selectedCurrency == 'USDT') {
    amountElement.value = usdtAmountComponent.textContent;
  } else {
    amountElement.value = 0;
  }
  setTokenAmount();
});

function setTokenAmount() {
  let tokenAmount = 0;
  let amount = amountElement.value;

  if (currencyElement.value == 'TRX') {
    tokenAmount = (amount * USDPER1000TRXRATE) / 1000;
  } else {
    tokenAmount = (amount * TOKENPER1000USD) / 1000;
  }
  tokenAmountElement.value = tokenAmount;
}

const buyNowElement = document.getElementById('buy-now');
buyNowElement.addEventListener('click', async () => {
  let currency = currencyElement.value;
  let amount = amountElement.value;

  if (amount == '' || amount == 0) {
    alert('Please input amount');
    return;
  }

  if (currency == 'TRX') {
    if (amount < 150) {
      alert('Minimun 150 TRX');
      return;
    }
    console.log(`Buy with ${amount} TRX`);
    await purchaseTokensWithTRX(amount);
  } else if (currency == 'USDC') {
    if (amount < 10) {
      alert('Minimun 10 USDC');
      return;
    }
    console.log(`Buy with ${amount} USDC`);
    await purchaseTokensWithUSDC(amount);
  } else if (currency == 'USDT') {
    if (amount < 10) {
      alert('Minimun 10 USDT');
      return;
    }
    console.log(`Buy with ${amount} USDT`);
    await purchaseTokensWithUSDT(amount);
  }
  await updateWalletInfo(window.tronWeb.defaultAddress.base58);
});

async function purchaseTokensWithUSDC(usdcAmount) {
  const userAddress = window.tronWeb.defaultAddress.base58;
  const crowdsaleContract = window.tronWeb.contract(
    crowdsaleContractABI,
    crowdsaleContractAddress
  );
  const usdcTokenContract = window.tronWeb.contract(
    USDTContractABI,
    USDTContractAddress
  );

  try {
    const usdcAmountWei = usdcAmount * 10 ** 6; // Convert USDC to wei

    const allowance = await usdcTokenContract
      .allowance(userAddress, crowdsaleContractAddress)
      .call();
    if (allowance.toNumber() < usdcAmountWei) {
      setTransactionInfo(
        userAddress,
        `Approve OWX to receive your ${usdcAmount} USDC`,
        true
      );
      // If allowance is not enough, set the allowance
      const result = await usdcTokenContract
        .approve(crowdsaleContractAddress, usdcAmountWei)
        .send({
          feeLimit: 100000000,
          shouldPollResponse: true,
        });

      console.log('Approval transaction result:', result);
    }

    // Purchase tokens with USDC
    setTransactionInfo(userAddress, `Buying OWX`, true);
    console.log('Start purchase token with USDT');
    const purchaseResult = await crowdsaleContract
      .purchaseTokensWithUSDC(usdcAmountWei)
      .send({
        feeLimit: 100000000,
        shouldPollResponse: true,
      });

    console.log('Purchase transaction result:', purchaseResult);

    setTransactionInfo(
      userAddress,
      `Buy OWX Success! Check your OWX balance or click here.`,
      false
    );
    await updateWalletInfo(window.tronWeb.defaultAddress.base58);
  } catch (error) {
    setTransactionInfo(userAddress, `Declined`, false);
    console.error('Error buying tokens with USDC:', error);
  }
}

async function purchaseTokensWithUSDT(usdcAmount) {
  const userAddress = window.tronWeb.defaultAddress.base58;
  const crowdsaleContract = window.tronWeb.contract(
    crowdsaleContractABI,
    crowdsaleContractAddress
  );
  const usdcTokenContract = window.tronWeb.contract(
    USDTContractABI,
    USDTContractAddress
  );

  try {
    const usdcAmountWei = usdcAmount * 10 ** 6; // Convert USDT to wei
    setTransactionInfo(
      userAddress,
      `Approve OWX to receive your ${usdcAmount} USDT`,
      true
    );
    console.log('Start allowance token with USDT');
    const allowance = await usdcTokenContract
      .allowance(userAddress, crowdsaleContractAddress)
      .call();
    if (allowance.toNumber() < usdcAmountWei) {
      const result = await usdcTokenContract
        .approve(crowdsaleContractAddress, usdcAmountWei)
        .send({
          feeLimit: 100000000,
          shouldPollResponse: true,
        });

      console.log('Approval transaction result:', result);
    }

    setTransactionInfo(userAddress, `Buying OWX`, true);
    console.log('Start purchase token with USDT');
    const purchaseResult = await crowdsaleContract
      .purchaseTokensWithUSDT(usdcAmountWei)
      .send({
        feeLimit: 100000000,
        shouldPollResponse: true,
      });

    console.log('Purchase transaction result:', purchaseResult);

    setTransactionInfo(
      userAddress,
      `Buy OWX Success! Check your OWX balance or click here.`,
      false
    );
    await updateWalletInfo(window.tronWeb.defaultAddress.base58);
  } catch (error) {
    setTransactionInfo(userAddress, `Declined`, false);
    console.error('Error buying tokens with USDT:', error);
  }
}

async function purchaseTokensWithTRX(amount) {
  const crowdsaleContract = window.tronWeb.contract(
    crowdsaleContractABI,
    crowdsaleContractAddress
  );

  try {
    let userAddress = window.tronWeb.defaultAddress.base58;
    setTransactionInfo(
      userAddress,
      `Your transaction is executing, please wait.`,
      true
    );

    const options = {
      feeLimit: 100000000,
      callValue: tronWeb.toSun(amount),
      shouldPollResponse: true,
    };

    await crowdsaleContract.purchaseTokensWithTRX().send(options);

    setTransactionInfo(
      userAddress,
      `Buy OWX Success! Check your OWX balance or click here.`,
      false
    );

    await updateWalletInfo(userAddress);
  } catch (error) {
    setTransactionInfo(userAddress, `Declined`, false);
    console.error('Error buying tokens:', error);
  }
}

window.addEventListener('message', function (e) {
  if (e.data.message && e.data.message.action == 'setAccount') {
    console.log('setAccount', e.data.message.data.address);
    updateWalletInfo(e.data.message.data.address);
  }
});

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(async () => {
    await initInfo();
  }, 1000);
});

function setTransactionInfo(userAddress, content, ispending) {
  const transactionLinkElement = document.getElementById('transaction-link');
  const transactionPendingElement = document.getElementById(
    'transaction-pending'
  );
  const purchaseStatusDiv = document.getElementById('purchase-status');
  purchaseStatusDiv.classList.remove('hidden');

  if (ispending) {
    transactionPendingElement.classList.remove('hidden');
  } else {
    transactionPendingElement.classList.add('hidden');
  }

  transactionLinkElement.textContent = content;
  transactionLinkElement.href = `https://nile.tronscan.org/#/address/${userAddress}`;
}

const copyWalletAddressComponent = document.getElementById(
  'copy-wallet-address'
);
copyWalletAddressComponent.addEventListener('click', () => {
  navigator.clipboard.writeText(walletAddressComponent.textContent);
});

const copyOWXContractComponent = document.getElementById('copy-owx-contract');
copyOWXContractComponent.addEventListener('click', () => {
  navigator.clipboard.writeText(OWXContractAddress);
});
