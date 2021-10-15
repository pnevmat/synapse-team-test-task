let validationResult = null;
const validator = (phrase, validationSchema, errors) => {
    
    if (phrase.length < 6) {
        validationResult = errors.length;
        return validationResult;
    };
    
    const validationSchemaKeys = Object.keys(validationSchema);

    for (let key of validationSchemaKeys) {
        validationResult = validationSchema[key].test(phrase);
        if (!validationResult) {
            validationResult = errors.symbols;
            return validationResult;
        } else {
            continue;
        };
    };

    if (validationResult) {
        validationResult = false;
    }

    return validationResult;
};

export default validator;