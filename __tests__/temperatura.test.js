import { describe, it, expect } from '@jest/globals'
import ServiceTemperatura from '../src/services/temperatura.js'

describe("Testando Cel to Fah", () => {

    it("Testando o valor zero", () => {
        const fah = ServiceTemperatura.ConvertCeltoFah(0)

        expect(fah).toBe(32)
    })
      it("Testando o valor 10", () => {
        const fah = ServiceTemperatura.ConvertCeltoFah(10)

        expect(fah).toBe(50)
    })
      it("Testando o valor -25", () => {
        const fah = ServiceTemperatura.ConvertCeltoFah(-25)

        expect(fah).toBe(-13)
    })
      
})
