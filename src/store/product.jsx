import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../reducer/productReducer";

export const AppContext = createContext();

const API = "https://shoe-backend-6w6r.onrender.com/api/data/getAllProducts";

export const AppProvider = ({ children }) => {

    const initialState = {
        isLoading: false,
        isError: false,
        products: [],
        featureProducts: [],
        isSingleLoading: false,
        singleProduct: {},
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    // get all products
    const getProducts = async (url) =>{
        dispatch({type:"SET_LOADING"});
        try {
            const res = await axios.get(url);
            const products = await res.data;
            dispatch({type:"SET_API_DATA", payload:products});
        } catch (error) {
           dispatch({type:"API_ERROR" });
        }
    };

    // get single product
    const getSingleProduct = async (url) =>{
        dispatch({type:"SET_SINGLE_LOADING"});
        try {
            const res = await axios.get(url);
            const singleProduct = await res.data;
            dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
        } catch (error) {
           dispatch({type:"SET_SINGLE_ERROR" });
        }
    };



    useEffect(()=>{
        getProducts(API);
    },[])

  return <AppContext.Provider value={{...state, getSingleProduct}}>{children}</AppContext.Provider>;
};

// custom hook

export const useProductContext = () => {
    return useContext(AppContext);
};