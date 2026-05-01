export const getData = async () => {
    const res = await fetch('https://server-skill-sphere.onrender.com/products')
    const data = await res.json()
    return data
}

export const getPopular = async () => {
    const res = await fetch('https://server-skill-sphere.onrender.com/popular')
    const data = await res.json()
    return data
}