export const randomString = () => {
    return Math.floor(Math.random() * 0x10000).toString(16);
}