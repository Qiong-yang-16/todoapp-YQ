export const generateID = () => {
    const S4 = () =>(((1+Math.random())*0x10000)|0).toString(16).substring(1)
    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4())
}

export const fetchAPITodos = () =>
    new Promise((resolve) =>
        setTimeout(() => resolve([
            { id: generateID(), title: 'prepare react hooks demos', completed: true },
            { id: generateID(), title: 'migrate existing system', completed: false }
        ]), 100)
    )