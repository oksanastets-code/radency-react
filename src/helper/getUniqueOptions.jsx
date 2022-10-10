export const getUniqueOptions = (items) => {
        const options = items.map(item => item.category);
        const uniqueOptions = options.filter((option, index, options) => options.indexOf(option) === index);
        return uniqueOptions;
    }