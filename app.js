const USDTContractAddress = 'TXLAQ63Xg1NAzckPwKHvzw7CSEmLMEqcdj';
const USDTContractABI = [
  {
    inputs: [
      { name: 'name_', type: 'string' },
      { name: 'symbol_', type: 'string' },
    ],
    stateMutability: 'Nonpayable',
    type: 'Constructor',
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
      { name: 'userAddress', type: 'address' },
      { name: 'relayerAddress', type: 'address' },
      { name: 'functionSignature', type: 'bytes' },
    ],
    name: 'MetaTransactionExecuted',
    type: 'Event',
  },
  {
    inputs: [
      { indexed: true, name: 'previousOwner', type: 'address' },
      { indexed: true, name: 'newOwner', type: 'address' },
    ],
    name: 'OwnershipTransferred',
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
    outputs: [{ type: 'string' }],
    name: 'ERC712_VERSION',
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
      { name: 'amount', type: 'uint256' },
    ],
    name: 'approve',
    stateMutability: 'Nonpayable',
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
    outputs: [{ type: 'uint8' }],
    name: 'decimals',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'bool' }],
    inputs: [
      { name: 'spender', type: 'address' },
      { name: 'subtractedValue', type: 'uint256' },
    ],
    name: 'decreaseAllowance',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    outputs: [{ type: 'bytes' }],
    inputs: [
      { name: 'userAddress', type: 'address' },
      { name: 'functionSignature', type: 'bytes' },
      { name: 'sigR', type: 'bytes32' },
      { name: 'sigS', type: 'bytes32' },
      { name: 'sigV', type: 'uint8' },
    ],
    name: 'executeMetaTransaction',
    stateMutability: 'Payable',
    type: 'Function',
  },
  {
    outputs: [{ type: 'uint256' }],
    name: 'getChainId',
    stateMutability: 'Pure',
    type: 'Function',
  },
  {
    outputs: [{ type: 'bytes32' }],
    name: 'getDomainSeperator',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ name: 'nonce', type: 'uint256' }],
    inputs: [{ name: 'user', type: 'address' }],
    name: 'getNonce',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'bool' }],
    inputs: [
      { name: 'spender', type: 'address' },
      { name: 'addedValue', type: 'uint256' },
    ],
    name: 'increaseAllowance',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    inputs: [{ name: 'amount', type: 'uint256' }],
    name: 'mint',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    outputs: [{ type: 'string' }],
    name: 'name',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'address' }],
    name: 'owner',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    name: 'renounceOwnership',
    stateMutability: 'Nonpayable',
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
      { name: 'recipient', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'transfer',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    outputs: [{ type: 'bool' }],
    inputs: [
      { name: 'sender', type: 'address' },
      { name: 'recipient', type: 'address' },
      { name: 'amount', type: 'uint256' },
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
];

const USDCContractAddress = 'TXLAQ63Xg1NAzckPwKHvzw7CSEmLMEqcdj';
const USDCContractABI = [
  {
    inputs: [
      { name: 'name_', type: 'string' },
      { name: 'symbol_', type: 'string' },
    ],
    stateMutability: 'Nonpayable',
    type: 'Constructor',
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
      { name: 'userAddress', type: 'address' },
      { name: 'relayerAddress', type: 'address' },
      { name: 'functionSignature', type: 'bytes' },
    ],
    name: 'MetaTransactionExecuted',
    type: 'Event',
  },
  {
    inputs: [
      { indexed: true, name: 'previousOwner', type: 'address' },
      { indexed: true, name: 'newOwner', type: 'address' },
    ],
    name: 'OwnershipTransferred',
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
    outputs: [{ type: 'string' }],
    name: 'ERC712_VERSION',
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
      { name: 'amount', type: 'uint256' },
    ],
    name: 'approve',
    stateMutability: 'Nonpayable',
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
    outputs: [{ type: 'uint8' }],
    name: 'decimals',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'bool' }],
    inputs: [
      { name: 'spender', type: 'address' },
      { name: 'subtractedValue', type: 'uint256' },
    ],
    name: 'decreaseAllowance',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    outputs: [{ type: 'bytes' }],
    inputs: [
      { name: 'userAddress', type: 'address' },
      { name: 'functionSignature', type: 'bytes' },
      { name: 'sigR', type: 'bytes32' },
      { name: 'sigS', type: 'bytes32' },
      { name: 'sigV', type: 'uint8' },
    ],
    name: 'executeMetaTransaction',
    stateMutability: 'Payable',
    type: 'Function',
  },
  {
    outputs: [{ type: 'uint256' }],
    name: 'getChainId',
    stateMutability: 'Pure',
    type: 'Function',
  },
  {
    outputs: [{ type: 'bytes32' }],
    name: 'getDomainSeperator',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ name: 'nonce', type: 'uint256' }],
    inputs: [{ name: 'user', type: 'address' }],
    name: 'getNonce',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'bool' }],
    inputs: [
      { name: 'spender', type: 'address' },
      { name: 'addedValue', type: 'uint256' },
    ],
    name: 'increaseAllowance',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    inputs: [{ name: 'amount', type: 'uint256' }],
    name: 'mint',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    outputs: [{ type: 'string' }],
    name: 'name',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'address' }],
    name: 'owner',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    name: 'renounceOwnership',
    stateMutability: 'Nonpayable',
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
      { name: 'recipient', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'transfer',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    outputs: [{ type: 'bool' }],
    inputs: [
      { name: 'sender', type: 'address' },
      { name: 'recipient', type: 'address' },
      { name: 'amount', type: 'uint256' },
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
];
const OWXContractAddress = 'TRVXcwQYHRVfkfFbyQUoDy5uu1Bjz4tCwB';
const OWXContractABI = [
  {
    outputs: [{ type: 'string' }],
    constant: true,
    name: 'name',
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
    outputs: [{ type: 'uint256' }],
    constant: true,
    name: 'totalSupply',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'bool' }],
    inputs: [
      { name: 'sender', type: 'address' },
      { name: 'recipient', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'transferFrom',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    outputs: [{ type: 'uint8' }],
    constant: true,
    name: 'decimals',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'bool' }],
    inputs: [
      { name: 'spender', type: 'address' },
      { name: 'addedValue', type: 'uint256' },
    ],
    name: 'increaseAllowance',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    outputs: [{ type: 'uint256' }],
    constant: true,
    inputs: [{ name: 'account', type: 'address' }],
    name: 'balanceOf',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'string' }],
    constant: true,
    name: 'symbol',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'bool' }],
    inputs: [
      { name: 'spender', type: 'address' },
      { name: 'subtractedValue', type: 'uint256' },
    ],
    name: 'decreaseAllowance',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    outputs: [{ type: 'bool' }],
    inputs: [
      { name: 'recipient', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'transfer',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    outputs: [{ type: 'uint256' }],
    constant: true,
    inputs: [
      { name: 'owner', type: 'address' },
      { name: 'spender', type: 'address' },
    ],
    name: 'allowance',
    stateMutability: 'View',
    type: 'Function',
  },
  { stateMutability: 'Nonpayable', type: 'Constructor' },
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
    inputs: [
      { indexed: true, name: 'owner', type: 'address' },
      { indexed: true, name: 'spender', type: 'address' },
      { name: 'value', type: 'uint256' },
    ],
    name: 'Approval',
    type: 'Event',
  },
];

const crowdsaleContractAddress = 'TU8uqHR8UGELMbS2R9TVdJGNgGXU15w2U3';
const crowdsaleContractABI = [
  {
    outputs: [{ type: 'bool' }],
    constant: true,
    name: 'isCrowdsaleActive',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    inputs: [{ name: 'usdcAmount', type: 'uint256' }],
    name: 'purchaseTokensWithUSDC',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    payable: true,
    name: 'purchaseTokensWithTRX',
    stateMutability: 'Payable',
    type: 'Function',
  },
  { name: 'withdrawTRX', stateMutability: 'Nonpayable', type: 'Function' },
  { name: 'stopCrowdsale', stateMutability: 'Nonpayable', type: 'Function' },
  {
    outputs: [{ type: 'uint256' }],
    constant: true,
    name: 'tokensSold',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'address' }],
    constant: true,
    name: 'usdcTokenAddress',
    stateMutability: 'View',
    type: 'Function',
  },
  { name: 'withdrawTokens', stateMutability: 'Nonpayable', type: 'Function' },
  {
    outputs: [{ type: 'address' }],
    constant: true,
    name: 'owner',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'address' }],
    constant: true,
    name: 'usdtTokenAddress',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'address' }],
    constant: true,
    name: 'tokenAddress',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'uint256' }],
    constant: true,
    name: 'tokenPer1000UsdRate',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    outputs: [{ type: 'uint256' }],
    constant: true,
    name: 'usdtPer1000TrxRate',
    stateMutability: 'View',
    type: 'Function',
  },
  {
    inputs: [{ name: '_newRate', type: 'uint256' }],
    name: 'setUsdtPer1000TrxRate',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  {
    inputs: [{ name: 'usdtAmount', type: 'uint256' }],
    name: 'purchaseTokensWithUSDT',
    stateMutability: 'Nonpayable',
    type: 'Function',
  },
  { name: 'resumeCrowdsale', stateMutability: 'Nonpayable', type: 'Function' },
  {
    inputs: [
      { name: '_tokenAddress', type: 'address' },
      { name: '_usdtTokenAddress', type: 'address' },
      { name: '_usdcTokenAddress', type: 'address' },
      { name: '_tokenPer1000UsdRate', type: 'uint256' },
      { name: '_usdtPer1000TrxRate', type: 'uint256' },
    ],
    stateMutability: 'Nonpayable',
    type: 'Constructor',
  },
  {
    inputs: [
      { indexed: true, name: 'buyer', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'TokensPurchased',
    type: 'Event',
  },
];

let TOKENPER1000USD = 500;
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
    trxOwxRate.textContent = `${usdPerOwx * usdtPerTrx} TRX/OWX`;
    usdOwxRate.textContent = `${usdPerOwx} USD/OWX`;
  } catch (error) {
    alert(error);
  }
}

async function initInfo() {
  try {
    if (typeof window.tronWeb === 'undefined') {
      alert('TronLink wallet not detected. Please install TronLink.');
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
        options: { address: 'TRVXcwQYHRVfkfFbyQUoDy5uu1Bjz4tCwB' },
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
        `Approve OWX receive your ${usdcAmount} USDC`,
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
      `Approve OWX receive your ${usdcAmount} USDT`,
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
  navigator.clipboard.writeText('TF7iETvAFbAHwuz2FJL2qwHBdJnwm8Ww4F');
});
