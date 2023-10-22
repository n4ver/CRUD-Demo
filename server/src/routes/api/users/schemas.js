const userProperties = {
    id: { type: 'number' },
    username: { type: 'string' },
    created_at: { type: 'string' },
    updated_at: { type: 'string' }
};
  
const tags = ['user'];

const paramsJsonSchema = {
    type: 'object',
    properties: {
        userId: { type: 'number' }
    },
    required: ['userId']
};

const queryStringJsonSchema = {
    type: 'object',
    properties: {
        filter: { type: 'string' }
    },
    required: ['filter']
};

const bodyCreateJsonSchema = {
    type: 'object',
    properties: personProperties,
    required: ['name', 'document', 'genre', 'phone']
};

const bodyUpdateJsonSchema = {
    type: 'object',
    properties: personProperties
};

const getAllSchema = {
    tags,
    querystring: queryStringJsonSchema,
    response: {
        200: {
            type: 'array',
            items: {
                type: 'object',
                properties: personProperties
            }
        }
    }
};

const getOneSchema = {
    tags,
    params: paramsJsonSchema,
    querystring: queryStringJsonSchema,
    response: {
        200: {
            type: 'object',
            properties: personProperties
        }
    }
};

const createSchema = {
    tags,
    body: bodyCreateJsonSchema,
    response: {
        201: {
            type: 'object',
            properties: personProperties
        }
    }
};

const updateSchema = {
    tags,
    params: paramsJsonSchema,
    body: bodyUpdateJsonSchema,
    response: {
        200: {
            type: 'object',
            properties: personProperties
        }
    }
};

const deleteSchema = {
    tags,
    params: paramsJsonSchema,
    response: {
        200: {
            type: 'object',
            properties: personProperties
        }
    }
};

module.exports = {
    getAllSchema,
    getOneSchema,
    createSchema,
    updateSchema,
    deleteSchema
};