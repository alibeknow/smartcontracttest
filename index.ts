import * as ethers from 'ethers';
import * as web3 from 'web3';
import abi from './abi.json';
const contractAddress = '0x2a859bdec46cd00Cb2B656253138DF29c2FA5da2';
const contractABI = abi;
const walletPrivateKey =
  '0df992605fab39a63174b359c881f7a31273cc9127572d51e47268adf3fab960';
const walletAddress = '0x3584531e8AAa1b2035D1e577C54fb5F600a421Ab';
const recipientAddress = '0xAb7A9d5f1139E67C04a9de00113eC64772547c7C';
const provider = new ethers.JsonRpcProvider(
  'https://eth-sepolia.g.alchemy.com/v2/35cMnLxFYB6rgXLFG3zUPemouOiBWJ00',
);

const wallet = new ethers.Wallet(walletPrivateKey, provider);
const contract = new ethers.Contract(contractAddress, contractABI, wallet);

async function transfer() {
  const amount = ethers.parseUnits('1', 18);
  const tx = await contract.transfer(recipientAddress, amount);
  console.log(tx);
}

async function transferFrom() {
  const amount = ethers.parseUnits('100', 18);
  const tx = await contract.approve(recipientAddress, amount);
}

transfer();
// ABI для функции execute
const abis = [
  'function execute(bytes commands, bytes[] inputs, uint256 deadline)',
];

// Инициализация интерфейса
const iface = new ethers.Interface(abis);

// Данные для декодирования
const data = {
  function: 'execute(bytes,bytes[],uint256)',
  params: [
    '0x000604', // commands
    [
      '0x000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000029a2241af62c0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000002b779877a7b0d9e8603169ddbd7836e478b4624789000bb82a859bdec46cd00cb2b656253138df29c2fa5da2000000000000000000000000000000000000000000',
      '0x0000000000000000000000002a859bdec46cd00cb2b656253138df29c2fa5da2000000000000000000000000e49acc3b16c097ec88dc9352ce4cd57ab7e35b950000000000000000000000000000000000000000000000000000000000000019',
      '0x0000000000000000000000002a859bdec46cd00cb2b656253138df29c2fa5da20000000000000000000000003584531e8aaa1b2035d1e577c54fb5f600a421ab00000000000000000000000000000000000000000000007f08801d8974e84f6a',
    ],
    '1737146559', // deadline
  ],
};
const recipient:string;
const amountIn:string;
const amountOutMin:string;
const payerIsUser:boolean
const tokenIn:string;
const fee:string;
const tokenOut:string;
const recipient="0x3584531e8AAa1b2035D1e577C54fb5F600a421Ab"
const amountIn="3";
const amountOutMin="0"
const payerIsUser=true;
const tokenIn="0x2a859bdec46cd00Cb2B656253138DF29c2FA5da2"
const tokenOut="0x779877A7B0D9E8603169DdbD7836e478b4624789"
const contractRouter=new ethers.Contract("0x3fC91A3afd70395Cd496C647d5a6CC9D4B2b7FAD",abi,provider);
contractRouter.execute(web3.eth.abi.encodeParameters([]))

// Декодируем параметры вызова функции
const commands = data.params[0];
const inputs = data.params[1];
const deadline = parseInt(data.params[2] as string, 10);

console.log('Decoded Commands:', commands);
console.log('Decoded Deadline:', new Date(new Date().getTime() * 1000).getTime())
