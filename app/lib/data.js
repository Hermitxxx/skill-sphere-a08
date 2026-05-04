export const getData = async () => {
    const res = await fetch('https://server-skill-sphere.onrender.com/products')

    if (!res.ok) {
        return null
    }

    const data = await res.json()
    return data
}

export const getPopular = async () => {
    const res = await fetch('https://server-skill-sphere.onrender.com/popular')

    if (!res.ok) {
        return null
    }

    const data = await res.json()
    return data
}

export const getNewReleases = async () => {
    const res = await fetch('https://server-skill-sphere.onrender.com/new-releases')

    if (!res.ok) {
        return null
    }

    const data = await res.json()
    return data
}

export const getCourseById = async (id) => {
    const res = await fetch(`https://server-skill-sphere.onrender.com/products/${id}`)

    if (!res.ok) {
        return null
    }

    const data = await res.json()
    return data
}