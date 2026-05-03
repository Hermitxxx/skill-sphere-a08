'use client'
import React, { createContext, useContext, useEffect, useState } from 'react';
import { getData, getPopular } from '../lib/data';

export const DataContext = createContext()

const DataProvider = ({ children }) => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const [data, setData] = useState([])
    const [popular, setPopular] = useState([])


    useEffect(() => {
        const loadData = async () => {
            try {
                setLoading(true)
                setError(null)

                    // getData and getPopular already return parsed JSON arrays
                    const result = await getData()
                    const result2 = await getPopular()
                    setData(result || [])
                    setPopular(result2 || [])
            }
            catch (error) {
                setError(error.message)
            } finally {
                setLoading(false)
            }
        }

        loadData()
    }, [])

    const value = {
        data,
        popular,
        loading,
        error
    }

    return <DataContext.Provider value={value}>{children}</DataContext.Provider>
};

export const useData = () => {
    const context = useContext(DataContext)
    return context
}

export default DataProvider;