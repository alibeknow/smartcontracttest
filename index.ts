import * as ethers from 'ethers';
import * as web3 from 'web3';
import abi from './abi.json';
const universalRouterUni = '0x2a859bdec46cd00Cb2B656253138DF29c2FA5da2';
const contractAddress = '0x2a859bdec46cd00Cb2B656253138DF29c2FA5da2';
const contractABI = abi;
const walletPrivateKey =
  '0df992605fab39a63174b359c881f7a31273cc9127572d51e47268adf3fab960';
const walletAddress = '0x3584531e8AAa1b2035D1e577C54fb5F600a421Ab';
const recipientAddress = '0xAb7A9d5f1139E67C04a9de00113eC64772547c7C';
const erc20AbiApi =
  'function approve(address spender, uint256 amount) external returns (bool)';
const provider = new ethers.JsonRpcProvider(
  'https://eth-sepolia.g.alchemy.com/v2/35cMnLxFYB6rgXLFG3zUPemouOiBWJ00',
);

const wallet = new ethers.Wallet(walletPrivateKey, provider);
const contract = new ethers.Contract(universalRouterUni, contractABI, wallet);
const tokenContract = new ethers.Contract(erc20AbiApi, erc20AbiApi, wallet);

async function transfer() {
  const amount = ethers.parseUnits('1', 18);
  const tx = await contract.transfer(recipientAddress, amount);
  console.log(tx);
}

async function transferFrom() {
  const amount = ethers.parseUnits('100', 18);
  const tx = await contract.approve(recipientAddress, amount);
}

// Функция для декодирования inputs
async function decodeInputs() {
  const abiCoder = new ethers.AbiCoder();
  const pathSwap = abiCoder.encode(
    ['address', 'uint24', 'address'],
    [
      '0x779877A7B0D9E8603169DdbD7836e478b4624789',
      3000,
      '0x2a859bdec46cd00Cb2B656253138DF29c2FA5da2',
    ],
  );
  const params = ['address', 'uint256', 'uint256', 'bytes', 'bool'];
  const values = [walletAddress, '3000000000000000000', 0, pathSwap, true];
  const result = abiCoder.encode(params, values);
  console.log({ result });

  const commandsValues = '0x00';
  const amountToApprove = ethers.parseEther('3'); // 3.0 токена
  const txApprove = await tokenContract.approve(
    universalRouterUni,
    amountToApprove,
  );
  console.log({ txApprove });
  const tx = await contract.execute(commandsValues, [result]);
  console.log({ tx });
}
decodeInputs();
