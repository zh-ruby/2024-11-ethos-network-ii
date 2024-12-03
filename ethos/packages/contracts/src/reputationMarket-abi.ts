/**
 * This file is autogenerated. Do not edit it manually.
 */
import { type Abi } from 'viem';

export const reputationMarketAbi = [
  { inputs: [], name: 'AccessControlBadConfirmation', type: 'error' },
  {
    inputs: [
      { internalType: 'address', name: 'account', type: 'address' },
      { internalType: 'bytes32', name: 'neededRole', type: 'bytes32' },
    ],
    name: 'AccessControlUnauthorizedAccount',
    type: 'error',
  },
  {
    inputs: [{ internalType: 'address', name: 'target', type: 'address' }],
    name: 'AddressEmptyCode',
    type: 'error',
  },
  {
    inputs: [{ internalType: 'address', name: 'implementation', type: 'address' }],
    name: 'ERC1967InvalidImplementation',
    type: 'error',
  },
  { inputs: [], name: 'ERC1967NonPayable', type: 'error' },
  { inputs: [], name: 'EnforcedPause', type: 'error' },
  { inputs: [], name: 'ExpectedPause', type: 'error' },
  { inputs: [], name: 'FailedCall', type: 'error' },
  {
    inputs: [{ internalType: 'string', name: 'message', type: 'string' }],
    name: 'FeeTransferFailed',
    type: 'error',
  },
  {
    inputs: [{ internalType: 'uint256', name: 'profileId', type: 'uint256' }],
    name: 'InactiveMarket',
    type: 'error',
  },
  { inputs: [], name: 'InsufficientFunds', type: 'error' },
  { inputs: [], name: 'InsufficientInitialLiquidity', type: 'error' },
  {
    inputs: [
      { internalType: 'uint256', name: 'profileId', type: 'uint256' },
      { internalType: 'address', name: 'addressStr', type: 'address' },
    ],
    name: 'InsufficientVotesOwned',
    type: 'error',
  },
  {
    inputs: [{ internalType: 'uint256', name: 'profileId', type: 'uint256' }],
    name: 'InsufficientVotesToSell',
    type: 'error',
  },
  { inputs: [], name: 'InvalidInitialization', type: 'error' },
  {
    inputs: [{ internalType: 'string', name: 'message', type: 'string' }],
    name: 'InvalidMarketConfigOption',
    type: 'error',
  },
  { inputs: [], name: 'InvalidProfileId', type: 'error' },
  { inputs: [], name: 'InvalidSignature', type: 'error' },
  {
    inputs: [{ internalType: 'uint256', name: 'profileId', type: 'uint256' }],
    name: 'MarketAlreadyExists',
    type: 'error',
  },
  {
    inputs: [
      { internalType: 'enum MarketCreationErrorCode', name: 'code', type: 'uint8' },
      { internalType: 'address', name: 'addressStr', type: 'address' },
      { internalType: 'uint256', name: 'profileId', type: 'uint256' },
    ],
    name: 'MarketCreationUnauthorized',
    type: 'error',
  },
  {
    inputs: [{ internalType: 'uint256', name: 'profileId', type: 'uint256' }],
    name: 'MarketDoesNotExist',
    type: 'error',
  },
  { inputs: [], name: 'MarketNotGraduated', type: 'error' },
  { inputs: [], name: 'NotInitializing', type: 'error' },
  { inputs: [], name: 'ReentrancyGuardReentrantCall', type: 'error' },
  { inputs: [], name: 'SignatureWasUsed', type: 'error' },
  {
    inputs: [
      { internalType: 'uint256', name: 'votesBought', type: 'uint256' },
      { internalType: 'uint256', name: 'expectedVotes', type: 'uint256' },
      { internalType: 'uint256', name: 'slippageBasisPoints', type: 'uint256' },
    ],
    name: 'SlippageLimitExceeded',
    type: 'error',
  },
  { inputs: [], name: 'UUPSUnauthorizedCallContext', type: 'error' },
  {
    inputs: [{ internalType: 'bytes32', name: 'slot', type: 'bytes32' }],
    name: 'UUPSUnsupportedProxiableUUID',
    type: 'error',
  },
  { inputs: [], name: 'UnauthorizedGraduation', type: 'error' },
  { inputs: [], name: 'UnauthorizedWithdrawal', type: 'error' },
  { inputs: [], name: 'ZeroAddress', type: 'error' },
  { inputs: [], name: 'ZeroAddressNotAllowed', type: 'error' },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'uint256', name: 'profileId', type: 'uint256' },
      { indexed: true, internalType: 'address', name: 'oldRecipient', type: 'address' },
      { indexed: true, internalType: 'address', name: 'newRecipient', type: 'address' },
    ],
    name: 'DonationRecipientUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'recipient', type: 'address' },
      { indexed: false, internalType: 'uint256', name: 'amount', type: 'uint256' },
    ],
    name: 'DonationWithdrawn',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [{ indexed: false, internalType: 'uint64', name: 'version', type: 'uint64' }],
    name: 'Initialized',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'uint256', name: 'configIndex', type: 'uint256' },
      {
        components: [
          { internalType: 'uint256', name: 'initialLiquidity', type: 'uint256' },
          { internalType: 'uint256', name: 'initialVotes', type: 'uint256' },
        ],
        indexed: false,
        internalType: 'struct ReputationMarket.MarketConfig',
        name: 'config',
        type: 'tuple',
      },
    ],
    name: 'MarketConfigAdded',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'uint256', name: 'configIndex', type: 'uint256' },
      {
        components: [
          { internalType: 'uint256', name: 'initialLiquidity', type: 'uint256' },
          { internalType: 'uint256', name: 'initialVotes', type: 'uint256' },
        ],
        indexed: false,
        internalType: 'struct ReputationMarket.MarketConfig',
        name: 'config',
        type: 'tuple',
      },
    ],
    name: 'MarketConfigRemoved',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'uint256', name: 'profileId', type: 'uint256' },
      { indexed: true, internalType: 'address', name: 'creator', type: 'address' },
      {
        components: [
          { internalType: 'uint256', name: 'initialLiquidity', type: 'uint256' },
          { internalType: 'uint256', name: 'initialVotes', type: 'uint256' },
        ],
        indexed: false,
        internalType: 'struct ReputationMarket.MarketConfig',
        name: 'config',
        type: 'tuple',
      },
    ],
    name: 'MarketCreated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'uint256', name: 'profileId', type: 'uint256' },
      { indexed: true, internalType: 'address', name: 'withdrawer', type: 'address' },
      { indexed: false, internalType: 'uint256', name: 'amount', type: 'uint256' },
    ],
    name: 'MarketFundsWithdrawn',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [{ indexed: true, internalType: 'uint256', name: 'profileId', type: 'uint256' }],
    name: 'MarketGraduated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'uint256', name: 'profileId', type: 'uint256' },
      { indexed: true, internalType: 'uint256', name: 'voteTrust', type: 'uint256' },
      { indexed: true, internalType: 'uint256', name: 'voteDistrust', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'trustPrice', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'distrustPrice', type: 'uint256' },
      { indexed: false, internalType: 'int256', name: 'deltaVoteTrust', type: 'int256' },
      { indexed: false, internalType: 'int256', name: 'deltaVoteDistrust', type: 'int256' },
      { indexed: false, internalType: 'int256', name: 'deltaTrustPrice', type: 'int256' },
      { indexed: false, internalType: 'int256', name: 'deltaDistrustPrice', type: 'int256' },
      { indexed: false, internalType: 'uint256', name: 'blockNumber', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'updatedAt', type: 'uint256' },
    ],
    name: 'MarketUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [{ indexed: false, internalType: 'address', name: 'account', type: 'address' }],
    name: 'Paused',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'bytes32', name: 'role', type: 'bytes32' },
      { indexed: true, internalType: 'bytes32', name: 'previousAdminRole', type: 'bytes32' },
      { indexed: true, internalType: 'bytes32', name: 'newAdminRole', type: 'bytes32' },
    ],
    name: 'RoleAdminChanged',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'bytes32', name: 'role', type: 'bytes32' },
      { indexed: true, internalType: 'address', name: 'account', type: 'address' },
      { indexed: true, internalType: 'address', name: 'sender', type: 'address' },
    ],
    name: 'RoleGranted',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'bytes32', name: 'role', type: 'bytes32' },
      { indexed: true, internalType: 'address', name: 'account', type: 'address' },
      { indexed: true, internalType: 'address', name: 'sender', type: 'address' },
    ],
    name: 'RoleRevoked',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [{ indexed: false, internalType: 'address', name: 'account', type: 'address' }],
    name: 'Unpaused',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [{ indexed: true, internalType: 'address', name: 'implementation', type: 'address' }],
    name: 'Upgraded',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'uint256', name: 'profileId', type: 'uint256' },
      { indexed: true, internalType: 'address', name: 'buyer', type: 'address' },
      { indexed: true, internalType: 'bool', name: 'isPositive', type: 'bool' },
      { indexed: false, internalType: 'uint256', name: 'amount', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'funds', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'boughtAt', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'minVotePrice', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'maxVotePrice', type: 'uint256' },
    ],
    name: 'VotesBought',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'uint256', name: 'profileId', type: 'uint256' },
      { indexed: true, internalType: 'address', name: 'seller', type: 'address' },
      { indexed: true, internalType: 'bool', name: 'isPositive', type: 'bool' },
      { indexed: false, internalType: 'uint256', name: 'amount', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'funds', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'soldAt', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'minVotePrice', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'maxVotePrice', type: 'uint256' },
    ],
    name: 'VotesSold',
    type: 'event',
  },
  {
    inputs: [],
    name: 'ADMIN_ROLE',
    outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'DEFAULT_ADMIN_ROLE',
    outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'OWNER_ROLE',
    outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'PRICE_MAXIMUM',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'UPGRADE_INTERFACE_VERSION',
    outputs: [{ internalType: 'string', name: '', type: 'string' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: 'admin', type: 'address' }],
    name: 'addAdmin',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'initialLiquidity', type: 'uint256' },
      { internalType: 'uint256', name: 'initialVotes', type: 'uint256' },
    ],
    name: 'addMarketConfig',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'profileId', type: 'uint256' },
      { internalType: 'bool', name: 'isPositive', type: 'bool' },
      { internalType: 'uint256', name: 'expectedVotes', type: 'uint256' },
      { internalType: 'uint256', name: 'slippageBasisPoints', type: 'uint256' },
    ],
    name: 'buyVotes',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'contractAddressManager',
    outputs: [{ internalType: 'contract IContractAddressManager', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  { inputs: [], name: 'createMarket', outputs: [], stateMutability: 'payable', type: 'function' },
  {
    inputs: [{ internalType: 'uint256', name: 'marketConfigIndex', type: 'uint256' }],
    name: 'createMarketWithConfig',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'marketOwner', type: 'address' },
      { internalType: 'uint256', name: 'marketConfigIndex', type: 'uint256' },
    ],
    name: 'createMarketWithConfigAdmin',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'donationBasisPoints',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: '', type: 'address' }],
    name: 'donationEscrow',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    name: 'donationRecipient',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'entryProtocolFeeBasisPoints',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'exitProtocolFeeBasisPoints',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'expectedSigner',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: 'profileId', type: 'uint256' }],
    name: 'getMarket',
    outputs: [
      {
        components: [
          { internalType: 'uint256', name: 'profileId', type: 'uint256' },
          { internalType: 'uint256', name: 'trustVotes', type: 'uint256' },
          { internalType: 'uint256', name: 'distrustVotes', type: 'uint256' },
        ],
        internalType: 'struct ReputationMarket.MarketInfo',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getMarketConfigCount',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: 'profileId', type: 'uint256' }],
    name: 'getParticipantCount',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'bytes32', name: 'role', type: 'bytes32' }],
    name: 'getRoleAdmin',
    outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'bytes32', name: 'role', type: 'bytes32' },
      { internalType: 'uint256', name: 'index', type: 'uint256' },
    ],
    name: 'getRoleMember',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'bytes32', name: 'role', type: 'bytes32' }],
    name: 'getRoleMemberCount',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'bytes32', name: 'role', type: 'bytes32' }],
    name: 'getRoleMembers',
    outputs: [{ internalType: 'address[]', name: '', type: 'address[]' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'user', type: 'address' },
      { internalType: 'uint256', name: 'profileId', type: 'uint256' },
    ],
    name: 'getUserVotes',
    outputs: [
      {
        components: [
          { internalType: 'uint256', name: 'profileId', type: 'uint256' },
          { internalType: 'uint256', name: 'trustVotes', type: 'uint256' },
          { internalType: 'uint256', name: 'distrustVotes', type: 'uint256' },
        ],
        internalType: 'struct ReputationMarket.MarketInfo',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'profileId', type: 'uint256' },
      { internalType: 'bool', name: 'isPositive', type: 'bool' },
    ],
    name: 'getVotePrice',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: 'profileId', type: 'uint256' }],
    name: 'graduateMarket',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    name: 'graduatedMarkets',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'bytes32', name: 'role', type: 'bytes32' },
      { internalType: 'address', name: 'account', type: 'address' },
    ],
    name: 'grantRole',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'bytes32', name: 'role', type: 'bytes32' },
      { internalType: 'address', name: 'account', type: 'address' },
    ],
    name: 'hasRole',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'owner', type: 'address' },
      { internalType: 'address', name: 'admin', type: 'address' },
      { internalType: 'address', name: 'expectedSigner', type: 'address' },
      { internalType: 'address', name: 'signatureVerifier', type: 'address' },
      { internalType: 'address', name: 'contractAddressManagerAddr', type: 'address' },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: 'profileId', type: 'uint256' }],
    name: 'isAllowedToCreateMarket',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'uint256', name: '', type: 'uint256' },
      { internalType: 'address', name: '', type: 'address' },
    ],
    name: 'isParticipant',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    name: 'lastMarketUpdates',
    outputs: [
      { internalType: 'uint256', name: 'voteTrust', type: 'uint256' },
      { internalType: 'uint256', name: 'voteDistrust', type: 'uint256' },
      { internalType: 'uint256', name: 'positivePrice', type: 'uint256' },
      { internalType: 'uint256', name: 'negativePrice', type: 'uint256' },
      { internalType: 'uint256', name: 'lastUpdateBlock', type: 'uint256' },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    name: 'marketConfigs',
    outputs: [
      { internalType: 'uint256', name: 'initialLiquidity', type: 'uint256' },
      { internalType: 'uint256', name: 'initialVotes', type: 'uint256' },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    name: 'marketFunds',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'uint256', name: '', type: 'uint256' },
      { internalType: 'uint256', name: '', type: 'uint256' },
    ],
    name: 'participants',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  { inputs: [], name: 'pause', outputs: [], stateMutability: 'nonpayable', type: 'function' },
  {
    inputs: [],
    name: 'paused',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'protocolFeeAddress',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'proxiableUUID',
    outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: 'admin', type: 'address' }],
    name: 'removeAdmin',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: 'configIndex', type: 'uint256' }],
    name: 'removeMarketConfig',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'bytes32', name: 'role', type: 'bytes32' },
      { internalType: 'address', name: 'callerConfirmation', type: 'address' },
    ],
    name: 'renounceRole',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'bytes32', name: 'role', type: 'bytes32' },
      { internalType: 'address', name: 'account', type: 'address' },
    ],
    name: 'revokeRole',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'profileId', type: 'uint256' },
      { internalType: 'bool', name: 'isPositive', type: 'bool' },
      { internalType: 'uint256', name: 'amount', type: 'uint256' },
    ],
    name: 'sellVotes',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'bool', name: 'value', type: 'bool' }],
    name: 'setAllowListEnforcement',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: 'basisPoints', type: 'uint256' }],
    name: 'setDonationBasisPoints',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: 'basisPoints', type: 'uint256' }],
    name: 'setEntryProtocolFeeBasisPoints',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: 'basisPoints', type: 'uint256' }],
    name: 'setExitProtocolFeeBasisPoints',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: 'newProtocolFeeAddress', type: 'address' }],
    name: 'setProtocolFeeAddress',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'profileId', type: 'uint256' },
      { internalType: 'bool', name: 'value', type: 'bool' },
    ],
    name: 'setUserAllowedToCreateMarket',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'bytes', name: '', type: 'bytes' }],
    name: 'signatureUsed',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'signatureVerifier',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'profileId', type: 'uint256' },
      { internalType: 'bool', name: 'isPositive', type: 'bool' },
      { internalType: 'uint256', name: 'funds', type: 'uint256' },
    ],
    name: 'simulateBuy',
    outputs: [
      { internalType: 'uint256', name: 'votesBought', type: 'uint256' },
      { internalType: 'uint256', name: 'fundsPaid', type: 'uint256' },
      { internalType: 'uint256', name: 'newVotePrice', type: 'uint256' },
      { internalType: 'uint256', name: 'protocolFee', type: 'uint256' },
      { internalType: 'uint256', name: 'donation', type: 'uint256' },
      { internalType: 'uint256', name: 'minVotePrice', type: 'uint256' },
      { internalType: 'uint256', name: 'maxVotePrice', type: 'uint256' },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'profileId', type: 'uint256' },
      { internalType: 'bool', name: 'isPositive', type: 'bool' },
      { internalType: 'uint256', name: 'amount', type: 'uint256' },
    ],
    name: 'simulateSell',
    outputs: [
      { internalType: 'uint256', name: 'votesSold', type: 'uint256' },
      { internalType: 'uint256', name: 'fundsReceived', type: 'uint256' },
      { internalType: 'uint256', name: 'newVotePrice', type: 'uint256' },
      { internalType: 'uint256', name: 'protocolFee', type: 'uint256' },
      { internalType: 'uint256', name: 'minVotePrice', type: 'uint256' },
      { internalType: 'uint256', name: 'maxVotePrice', type: 'uint256' },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'bytes4', name: 'interfaceId', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function',
  },
  { inputs: [], name: 'unpause', outputs: [], stateMutability: 'nonpayable', type: 'function' },
  {
    inputs: [{ internalType: 'address', name: 'contractAddressesAddr', type: 'address' }],
    name: 'updateContractAddressManager',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'profileId', type: 'uint256' },
      { internalType: 'address', name: 'newRecipient', type: 'address' },
    ],
    name: 'updateDonationRecipient',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: 'signer', type: 'address' }],
    name: 'updateExpectedSigner',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: 'owner', type: 'address' }],
    name: 'updateOwner',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: 'sinatureVerifier', type: 'address' }],
    name: 'updateSignatureVerifier',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'newImplementation', type: 'address' },
      { internalType: 'bytes', name: 'data', type: 'bytes' },
    ],
    name: 'upgradeToAndCall',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'withdrawDonations',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: 'profileId', type: 'uint256' }],
    name: 'withdrawGraduatedMarketFunds',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
] as const satisfies Abi;
