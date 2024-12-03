/**
 * This file is autogenerated. Do not edit it manually.
 */
import { type Abi } from 'viem';

export const reviewAbi = [
  {
    inputs: [],
    name: 'AccessControlBadConfirmation',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        internalType: 'bytes32',
        name: 'neededRole',
        type: 'bytes32',
      },
    ],
    name: 'AccessControlUnauthorizedAccount',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'target',
        type: 'address',
      },
    ],
    name: 'AddressEmptyCode',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'implementation',
        type: 'address',
      },
    ],
    name: 'ERC1967InvalidImplementation',
    type: 'error',
  },
  {
    inputs: [],
    name: 'ERC1967NonPayable',
    type: 'error',
  },
  {
    inputs: [],
    name: 'EnforcedPause',
    type: 'error',
  },
  {
    inputs: [],
    name: 'ExpectedPause',
    type: 'error',
  },
  {
    inputs: [],
    name: 'FailedInnerCall',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InvalidInitialization',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'message',
        type: 'string',
      },
    ],
    name: 'InvalidReviewDetails',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InvalidSignature',
    type: 'error',
  },
  {
    inputs: [],
    name: 'NotInitializing',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'reviewId',
        type: 'uint256',
      },
    ],
    name: 'ReviewIsArchived',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'reviewId',
        type: 'uint256',
      },
    ],
    name: 'ReviewNotArchived',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'reviewId',
        type: 'uint256',
      },
    ],
    name: 'ReviewNotFound',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'subject',
        type: 'address',
      },
    ],
    name: 'SelfReview',
    type: 'error',
  },
  {
    inputs: [],
    name: 'SignatureWasUsed',
    type: 'error',
  },
  {
    inputs: [],
    name: 'UUPSUnauthorizedCallContext',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'slot',
        type: 'bytes32',
      },
    ],
    name: 'UUPSUnsupportedProxiableUUID',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'reviewId',
        type: 'uint256',
      },
    ],
    name: 'UnauthorizedArchiving',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'reviewId',
        type: 'uint256',
      },
    ],
    name: 'UnauthorizedEdit',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'paymentToken',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'WrongPaymentAmount',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'paymentToken',
        type: 'address',
      },
    ],
    name: 'WrongPaymentToken',
    type: 'error',
  },
  {
    inputs: [],
    name: 'ZeroAddress',
    type: 'error',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint64',
        name: 'version',
        type: 'uint64',
      },
    ],
    name: 'Initialized',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'Paused',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'reviewId',
        type: 'uint256',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'author',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'subject',
        type: 'address',
      },
    ],
    name: 'ReviewArchived',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'enum EthosReview.Score',
        name: 'score',
        type: 'uint8',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'author',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'bytes32',
        name: 'attestationHash',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'subject',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'reviewId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'profileId',
        type: 'uint256',
      },
    ],
    name: 'ReviewCreated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'reviewId',
        type: 'uint256',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'author',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'subject',
        type: 'address',
      },
    ],
    name: 'ReviewEdited',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'reviewId',
        type: 'uint256',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'author',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'subject',
        type: 'address',
      },
    ],
    name: 'ReviewRestored',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'previousAdminRole',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'newAdminRole',
        type: 'bytes32',
      },
    ],
    name: 'RoleAdminChanged',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
    ],
    name: 'RoleGranted',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
    ],
    name: 'RoleRevoked',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'Unpaused',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'implementation',
        type: 'address',
      },
    ],
    name: 'Upgraded',
    type: 'event',
  },
  {
    inputs: [],
    name: 'ADMIN_ROLE',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'DEFAULT_ADMIN_ROLE',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'OWNER_ROLE',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'UPGRADE_INTERFACE_VERSION',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'admin',
        type: 'address',
      },
    ],
    name: 'addAdmin',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'enum EthosReview.Score',
        name: 'score',
        type: 'uint8',
      },
      {
        internalType: 'address',
        name: 'subject',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'paymentToken',
        type: 'address',
      },
      {
        internalType: 'string',
        name: 'comment',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'metadata',
        type: 'string',
      },
      {
        components: [
          {
            internalType: 'string',
            name: 'account',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'service',
            type: 'string',
          },
        ],
        internalType: 'struct AttestationDetails',
        name: 'attestationDetails',
        type: 'tuple',
      },
    ],
    name: 'addReview',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'reviewId',
        type: 'uint256',
      },
    ],
    name: 'archiveReview',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'contractAddressManager',
    outputs: [
      {
        internalType: 'contract IContractAddressManager',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'reviewId',
        type: 'uint256',
      },
      {
        internalType: 'string',
        name: 'comment',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'metadata',
        type: 'string',
      },
    ],
    name: 'editReview',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'expectedSigner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
    ],
    name: 'getRoleAdmin',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        internalType: 'uint256',
        name: 'index',
        type: 'uint256',
      },
    ],
    name: 'getRoleMember',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
    ],
    name: 'getRoleMemberCount',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'grantRole',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'hasRole',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'admin',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'expectedSigner',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'signatureVerifier',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'contractAddressManagerAddr',
        type: 'address',
      },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'enum EthosReview.ReviewsBy',
        name: 'reviewsBy',
        type: 'uint8',
      },
      {
        internalType: 'uint256',
        name: 'profileId',
        type: 'uint256',
      },
      {
        internalType: 'bytes32',
        name: 'attestationHash',
        type: 'bytes32',
      },
    ],
    name: 'numberOfReviewsBy',
    outputs: [
      {
        internalType: 'uint256',
        name: 'reviewsNumber',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'pause',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'paused',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'proxiableUUID',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'admin',
        type: 'address',
      },
    ],
    name: 'removeAdmin',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        internalType: 'address',
        name: 'callerConfirmation',
        type: 'address',
      },
    ],
    name: 'renounceRole',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'reviewId',
        type: 'uint256',
      },
    ],
    name: 'restoreReview',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'reviewCount',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'reviewIdsByAuthorProfileId',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'subjectAddress',
        type: 'address',
      },
    ],
    name: 'reviewIdsBySubjectAddress',
    outputs: [
      {
        internalType: 'uint256[]',
        name: '',
        type: 'uint256[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'attestationHash',
        type: 'bytes32',
      },
    ],
    name: 'reviewIdsBySubjectAttestationHash',
    outputs: [
      {
        internalType: 'uint256[]',
        name: '',
        type: 'uint256[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'reviewIdsBySubjectProfileId',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'reviewPrice',
    outputs: [
      {
        internalType: 'bool',
        name: 'allowed',
        type: 'bool',
      },
      {
        internalType: 'uint256',
        name: 'price',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'reviews',
    outputs: [
      {
        internalType: 'bool',
        name: 'archived',
        type: 'bool',
      },
      {
        internalType: 'enum EthosReview.Score',
        name: 'score',
        type: 'uint8',
      },
      {
        internalType: 'address',
        name: 'author',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'subject',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'reviewId',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'authorProfileId',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'createdAt',
        type: 'uint256',
      },
      {
        internalType: 'string',
        name: 'comment',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'metadata',
        type: 'string',
      },
      {
        components: [
          {
            internalType: 'string',
            name: 'account',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'service',
            type: 'string',
          },
        ],
        internalType: 'struct AttestationDetails',
        name: 'attestationDetails',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'attestationHash',
        type: 'bytes32',
      },
      {
        internalType: 'uint256',
        name: 'fromIdx',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'maxLength',
        type: 'uint256',
      },
    ],
    name: 'reviewsByAttestationHashInRange',
    outputs: [
      {
        components: [
          {
            internalType: 'bool',
            name: 'archived',
            type: 'bool',
          },
          {
            internalType: 'enum EthosReview.Score',
            name: 'score',
            type: 'uint8',
          },
          {
            internalType: 'address',
            name: 'author',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'subject',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'reviewId',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'authorProfileId',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'createdAt',
            type: 'uint256',
          },
          {
            internalType: 'string',
            name: 'comment',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'metadata',
            type: 'string',
          },
          {
            components: [
              {
                internalType: 'string',
                name: 'account',
                type: 'string',
              },
              {
                internalType: 'string',
                name: 'service',
                type: 'string',
              },
            ],
            internalType: 'struct AttestationDetails',
            name: 'attestationDetails',
            type: 'tuple',
          },
        ],
        internalType: 'struct EthosReview.Review[]',
        name: 'result',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'authorProfileId',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'fromIdx',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'maxLength',
        type: 'uint256',
      },
    ],
    name: 'reviewsByAuthorInRange',
    outputs: [
      {
        components: [
          {
            internalType: 'bool',
            name: 'archived',
            type: 'bool',
          },
          {
            internalType: 'enum EthosReview.Score',
            name: 'score',
            type: 'uint8',
          },
          {
            internalType: 'address',
            name: 'author',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'subject',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'reviewId',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'authorProfileId',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'createdAt',
            type: 'uint256',
          },
          {
            internalType: 'string',
            name: 'comment',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'metadata',
            type: 'string',
          },
          {
            components: [
              {
                internalType: 'string',
                name: 'account',
                type: 'string',
              },
              {
                internalType: 'string',
                name: 'service',
                type: 'string',
              },
            ],
            internalType: 'struct AttestationDetails',
            name: 'attestationDetails',
            type: 'tuple',
          },
        ],
        internalType: 'struct EthosReview.Review[]',
        name: 'result',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'subjectProfileId',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'fromIdx',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'maxLength',
        type: 'uint256',
      },
    ],
    name: 'reviewsBySubjectInRange',
    outputs: [
      {
        components: [
          {
            internalType: 'bool',
            name: 'archived',
            type: 'bool',
          },
          {
            internalType: 'enum EthosReview.Score',
            name: 'score',
            type: 'uint8',
          },
          {
            internalType: 'address',
            name: 'author',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'subject',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'reviewId',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'authorProfileId',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'createdAt',
            type: 'uint256',
          },
          {
            internalType: 'string',
            name: 'comment',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'metadata',
            type: 'string',
          },
          {
            components: [
              {
                internalType: 'string',
                name: 'account',
                type: 'string',
              },
              {
                internalType: 'string',
                name: 'service',
                type: 'string',
              },
            ],
            internalType: 'struct AttestationDetails',
            name: 'attestationDetails',
            type: 'tuple',
          },
        ],
        internalType: 'struct EthosReview.Review[]',
        name: 'result',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'revokeRole',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bool',
        name: 'allowed',
        type: 'bool',
      },
      {
        internalType: 'address',
        name: 'paymentToken',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'price',
        type: 'uint256',
      },
    ],
    name: 'setReviewPrice',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes',
      },
    ],
    name: 'signatureUsed',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'signatureVerifier',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes4',
        name: 'interfaceId',
        type: 'bytes4',
      },
    ],
    name: 'supportsInterface',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'targetId',
        type: 'uint256',
      },
    ],
    name: 'targetExistsAndAllowedForId',
    outputs: [
      {
        internalType: 'bool',
        name: 'exists',
        type: 'bool',
      },
      {
        internalType: 'bool',
        name: 'allowed',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'unpause',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'contractAddressesAddr',
        type: 'address',
      },
    ],
    name: 'updateContractAddressManager',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'signer',
        type: 'address',
      },
    ],
    name: 'updateExpectedSigner',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
    ],
    name: 'updateOwner',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'sinatureVerifier',
        type: 'address',
      },
    ],
    name: 'updateSignatureVerifier',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newImplementation',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'upgradeToAndCall',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'paymentToken',
        type: 'address',
      },
    ],
    name: 'withdrawFunds',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
] as const satisfies Abi;
