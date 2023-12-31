import axiosClient from '../axios/axios.js'

const AuthServices = {
    signup : async (signupData, callback = (data)=>{})=>{
        await axiosClient.post('/signup', signupData)
        .then(({data})=> {
            callback(data)
        })
    },

    login : async (loginData, callback = (data)=>{})=>{
        await axiosClient.post('/login', loginData)
        .then(({data})=> {
            callback(data)
        })
    },

    packagdata : async (packageDetails, callback = (data)=>{})=>{
        await axiosClient.post('/createdata', packageDetails)
        .then(({data})=> {
            callback(data)
        })
    },

    serpack: async(packageData, callback = (data)=>{})=>{
        await axiosClient.post('/getpackagedata', packageData)
        .then(({data})=>{
            callback(data)
        })
    },

    finaldestination: async(finaldestinationData, callback = (data)=>{})=>{
        await axiosClient.post('/updatefinaldestination', finaldestinationData)
        .then(({data})=>{
            callback(data)
        })
    },

    newDestination: async(newdestinationData, callback = (data)=>{})=>{
        await axiosClient.post('/updatenewdestination', newdestinationData)
        .then(({data})=>{
            callback(data)
        })
    },

}


export default AuthServices
