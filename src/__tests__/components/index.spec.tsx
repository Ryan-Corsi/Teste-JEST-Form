import React from 'react'
import { render } from "@testing-library/react-native"
import { Inicial } from '../../telas/Inicial'

describe('Tela login', () =>{
    
    it('EDV contains 9289', () =>{
        const { getByTestId } =  render(<Inicial/>)
        const userEDV = getByTestId('input-edv')
        expect(userEDV.props.value).toContain("9289")
    })

    it('EDV size is 8', () =>{
        const { getByTestId } =  render(<Inicial/>)
        const userEDV = getByTestId('input-edv')
        expect(userEDV.props.value).toHaveLength(8)
    })

    it('Password size is more than 8', () =>{
        const { getByTestId } = render(<Inicial />)
        const pass = getByTestId('input-password')
        expect(pass.props.value.length).toBeGreaterThanOrEqual(8)
    })

    it('Password contains symbols', () =>{
        const { getByTestId } = render(<Inicial />)
        const pass = getByTestId('input-password')
        expect(pass.props.value).toMatch(new RegExp("[@/+*#()]"))
    })

    it('Password contais numbers', () =>{
        const { getByTestId } = render(<Inicial />)
        const pass = getByTestId('input-password')
        expect(pass.props.value).toMatch(new RegExp("[0-9]"))
    })

    it('Password is equals to 1L0V3Chocol@te', () =>{
        const { getByTestId } = render(<Inicial />)
        const pass = getByTestId('input-password')
        expect(pass.props.value).toEqual("1L0V3Chocol@te")
    })
})