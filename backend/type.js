const zod = require('zod');

const createtodos = zod.object({
    title: zod.string(),
    description: zod.string(),
    });

const gettodos = zod.object({
    id: zod.string(),
    });

module.exports = {
    createtodos : createtodos,
    gettodos : gettodos,
}