import LocationService from "../services/LocationServices";

describe('LocationServisec', () => {
    test('Should return Latitude & Longitude from current location', async() => {
        const position = await LocationService.fetchCurrentPosition()
        expect(position).toEqual({
            latitude: 0,
            longitude: 0
        })
    })
})