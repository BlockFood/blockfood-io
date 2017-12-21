window.preSale = {
    abi: [{
        'constant': true,
        'inputs': [],
        'name': 'maxCap',
        'outputs': [{ 'name': '', 'type': 'uint256', 'value': '200000000000000000000' }],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function'
    }, {
        'constant': false,
        'inputs': [{ 'name': 'amount', 'type': 'uint256' }],
        'name': 'withdraw',
        'outputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function'
    }, {
        'constant': true,
        'inputs': [],
        'name': 'minCap',
        'outputs': [{ 'name': '', 'type': 'uint256', 'value': '100000000000000000000' }],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function'
    }, {
        'constant': true,
        'inputs': [],
        'name': 'contributionRejected',
        'outputs': [{ 'name': '', 'type': 'uint256', 'value': '0' }],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function'
    }, {
        'constant': false,
        'inputs': [{ 'name': 'id', 'type': 'string' }],
        'name': 'apply',
        'outputs': [],
        'payable': true,
        'stateMutability': 'payable',
        'type': 'function'
    }, {
        'constant': true,
        'inputs': [],
        'name': 'contributionPending',
        'outputs': [{ 'name': '', 'type': 'uint256', 'value': '0' }],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function'
    }, {
        'constant': true,
        'inputs': [{ 'name': '', 'type': 'address' }],
        'name': 'applications',
        'outputs': [{ 'name': 'contribution', 'type': 'uint256', 'value': '0' }, {
            'name': 'id',
            'type': 'string',
            'value': ''
        }, { 'name': 'state', 'type': 'uint8', 'value': '0' }],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function'
    }, {
        'constant': true,
        'inputs': [],
        'name': 'owner',
        'outputs': [{ 'name': '', 'type': 'address', 'value': '0x1e60b2e238b8d5881ac6e73ae430f73f54bab3fe' }],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function'
    }, {
        'constant': false,
        'inputs': [{ 'name': 'applicant', 'type': 'address' }],
        'name': 'accept',
        'outputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function'
    }, {
        'constant': true,
        'inputs': [],
        'name': 'minContribution',
        'outputs': [{ 'name': '', 'type': 'uint256', 'value': '500000000000000000' }],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function'
    }, {
        'constant': false,
        'inputs': [{ 'name': 'applicant', 'type': 'address' }],
        'name': 'reject',
        'outputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function'
    }, {
        'constant': true,
        'inputs': [],
        'name': 'endDate',
        'outputs': [{ 'name': '', 'type': 'uint256', 'value': '1518105600' }],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function'
    }, {
        'constant': true,
        'inputs': [],
        'name': 'contributionAccepted',
        'outputs': [{ 'name': '', 'type': 'uint256', 'value': '0' }],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function'
    }, {
        'constant': true,
        'inputs': [],
        'name': 'withdrawn',
        'outputs': [{ 'name': '', 'type': 'uint256', 'value': '0' }],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function'
    }, {
        'constant': true,
        'inputs': [],
        'name': 'target',
        'outputs': [{ 'name': '', 'type': 'address', 'value': '0x0918b5487b332b56af2cdfa04f466212456f48c7' }],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function'
    }, {
        'inputs': [{
            'name': 'target_',
            'type': 'address',
            'index': 0,
            'typeShort': 'address',
            'bits': '',
            'displayName': 'target&thinsp;<span class="punctuation">_</span>&thinsp;',
            'template': 'elements_input_address',
            'value': ''
        }, {
            'name': 'endDate_',
            'type': 'uint256',
            'index': 1,
            'typeShort': 'uint',
            'bits': '256',
            'displayName': 'end Date&thinsp;<span class="punctuation">_</span>&thinsp;',
            'template': 'elements_input_uint',
            'value': ''
        }, {
            'name': 'minContribution_',
            'type': 'uint256',
            'index': 2,
            'typeShort': 'uint',
            'bits': '256',
            'displayName': 'min Contribution&thinsp;<span class="punctuation">_</span>&thinsp;',
            'template': 'elements_input_uint',
            'value': ''
        }, {
            'name': 'minCap_',
            'type': 'uint256',
            'index': 3,
            'typeShort': 'uint',
            'bits': '256',
            'displayName': 'min Cap&thinsp;<span class="punctuation">_</span>&thinsp;',
            'template': 'elements_input_uint',
            'value': ''
        }, {
            'name': 'maxCap_',
            'type': 'uint256',
            'index': 4,
            'typeShort': 'uint',
            'bits': '256',
            'displayName': 'max Cap&thinsp;<span class="punctuation">_</span>&thinsp;',
            'template': 'elements_input_uint',
            'value': ''
        }], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'constructor'
    }, {
        'anonymous': false,
        'inputs': [{ 'indexed': false, 'name': 'applicant', 'type': 'address' }, {
            'indexed': false,
            'name': 'contribution',
            'type': 'uint256'
        }, { 'indexed': false, 'name': 'id', 'type': 'string' }],
        'name': 'PendingApplication',
        'type': 'event'
    }, {
        'anonymous': false,
        'inputs': [{ 'indexed': false, 'name': 'applicant', 'type': 'address' }, {
            'indexed': false,
            'name': 'contribution',
            'type': 'uint256'
        }, { 'indexed': false, 'name': 'id', 'type': 'string' }],
        'name': 'RejectedApplication',
        'type': 'event'
    }, {
        'anonymous': false,
        'inputs': [{ 'indexed': false, 'name': 'applicant', 'type': 'address' }, {
            'indexed': false,
            'name': 'contribution',
            'type': 'uint256'
        }, { 'indexed': false, 'name': 'id', 'type': 'string' }],
        'name': 'AcceptedApplication',
        'type': 'event'
    }, {
        'anonymous': false,
        'inputs': [{ 'indexed': false, 'name': 'target', 'type': 'address' }, {
            'indexed': false,
            'name': 'amount',
            'type': 'uint256'
        }],
        'name': 'Withdrawn',
        'type': 'event'
    }],
    address: '0x19cEdda575d1D4485dD4462E4bf49B36eb2eE31D'
}