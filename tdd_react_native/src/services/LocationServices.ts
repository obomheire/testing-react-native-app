import GetLocation from "react-native-get-location"

class LocationService {
    static async fetchCurrentPosition() {
        return GetLocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 15000
        }).then(({latitude, longitude}) => ({latitude, longitude}))
    }
}
 
export default LocationService

/*
EXAMPLE 1
class LocationService {
    static async getCurrentPosition() {
        return Promise.reject()
    }   
}


export default LocationService
*/
