export async function getoreder() {
    const res = await fetch('https://dummyjson.com/carts/1')
    return await res.json()
}

export async function getrevenue() {
    const res = await fetch('https://dummyjson.com/carts')
    return await res.json()

}

export async function getproduct() {
    const res = await fetch('https://dummyjson.com/products')
    return await res.json()

}

export async function getcomment() {
    const res = fetch('https://dummyjson.com/comments')
    return await res.json()

}
console.log("comments response ", getcomment())
export async function getcustomer() {
    const res = fetch('https://dummyjson.com/users/1')
        // return await res.json()
}