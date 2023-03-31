const addToBookmark = (id) => {
    const storedBookmark = getBookmark();
    const quantity = storedBookmark[id]
    if (!quantity) {
        storedBookmark[id] = 1;
    }
    else {
        const newQuantity = quantity + 1;
        storedBookmark[id] = newQuantity;
    }
    localStorage.setItem('bookmark-stored', JSON.stringify(storedBookmark))

}


const getBookmark = () => {
    let storedBookmark;
    const getCart = localStorage.getItem('bookmark-stored');
    if (getCart) {
        storedBookmark = JSON.parse(getCart)
    }
    else {
        storedBookmark = {}
    }
    return storedBookmark;
}

export {
    addToBookmark,
    getBookmark
}