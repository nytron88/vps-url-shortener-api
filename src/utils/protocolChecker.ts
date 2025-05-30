export const verifyIfHasHttpProtocol = (url: string) => {
    return url.includes("http") ? url : `http://${url}`;

};