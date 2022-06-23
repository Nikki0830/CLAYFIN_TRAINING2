import React from "react"

const OneContext = React.createContext();
// const TwoContext = React.createContext();

export const ProductProvider = OneContext.Provider
// export const ProductProvider2 = TwoContext.Provider

export const ProductConsumer = OneContext.Consumer
// export const ProductConsumer2 = TwoContext.Consumer

export default OneContext