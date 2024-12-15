// eslint-disable-next-line no-undef
module.exports = {
    '* .js': ['yarn format --', 'yarn lint:fix'],
    '* .html': ['yarn format --', 'yarn lint:fix'],
};
