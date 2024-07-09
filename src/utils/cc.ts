export const cc = (...classes: undefined[]) => (
    classes.filter( c => (typeof c === 'string')).join(' ')
)