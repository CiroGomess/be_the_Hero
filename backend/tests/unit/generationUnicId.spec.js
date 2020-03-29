const generationUnicId = require('../../src/utils/generationUnicId')

describe('Gerenation Unique ID', () => {
    it('should generation an unique ID', () => {
        
        const id = generationUnicId()

        expect(id).toHaveLength(8)
    })
})