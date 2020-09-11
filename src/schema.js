module.exports = {
    type: 'object',
    properties: {
        react: {
            anyOf: [
                {type: 'boolean'},
                {
                    type: 'object',
                    properties: {
                        displayName: {
                            anyOf: [
                                {type: 'string'},
                                {instanceof: 'Function'},
                                {type: 'boolean'},
                            ],
                        },
                    },
                },
            ],
        },
        url: {
            anyOf: [
                {type: 'boolean'},
                {
                    type: 'object',
                    properties: {
                        limit: {
                            type: 'number',
                        },
                    },
                },
            ],
        },
    },
    additionalProperties: false,
};
