const getData = (str) => {
    return fetch(`https://test-e4411-default-rtdb.firebaseio.com/goods.json`)
        .then((response) => {
            return response.json()
        })
}

export default getData