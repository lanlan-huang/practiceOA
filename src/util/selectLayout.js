// 判断使用哪一个layouts
export const selectLayout = pathName => {
    return pathName.includes('/users') ? 'LoginLayout' : 'BaseLayout';
}