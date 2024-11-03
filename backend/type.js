const zod = require('zod');

const createtodos = zod.object({
    title: zod.string(),
    description: zod.string(),
    });

const completedtodos = zod.object({
    id: zod.string(),
    });

module.exports = {
    createtodos : createtodos,
    completedtodos : completedtodos,
}