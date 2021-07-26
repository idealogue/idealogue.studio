import React, { useCallback, useReducer } from 'react'
import styled from 'styled-components'
import BurgerComponent, { Parent } from '$hux/BurgerComponent'
import { BurgerElement } from '$hux/Image'
import { BurgerBadge as Badge } from '$hux/Badge'

const Inner = styled.div`
    height: 50%;
    position: relative;
    top: 25%;
`

const UnstyledBurger = ({ name, children, className, onMouseDown: onMouseDownProp, ...props }) => {
    const [open, toggle] = useReducer((x) => !x, false)

    const onMouseDown = useCallback((e) => {
        toggle()

        if (typeof onMouseDownProp === 'function') {
            onMouseDownProp(e)
        }
    }, [onMouseDownProp])

    return (
        <Parent
            {...props}
            className={`${className || ''} ${open ? 'open' : ''}`.replace(/^\s*|\s*$/g, '')}
            onMouseDown={onMouseDown}
            role="button"
            tabIndex="0"
        >
            <Inner>
                {children}
            </Inner>
            <Badge>
                Tap!
            </Badge>
        </Parent>
    )
}

const Burger = styled(UnstyledBurger)`
    height: 140px;
    margin: 0 auto;
    outline: 0 !important;
    position: relative;
    width: 140px;
`

export default Burger

export const Bills = ({ className }) => (
    <Burger className={className}>
        <BurgerComponent cid="bills-shadow" at={ 0.67} dy={0.08} animateBy={ 0.00} src={BurgerElement.SHADOW_1} shadow />
        <BurgerComponent cid="bills-0" at={ 0.66} dy={0.08} animateBy={ 1.74} src={BurgerElement.BUN_BOTTOM_1} />
        <BurgerComponent cid="bills-1" at={ 0.48} dy={0.08} animateBy={ 1.56} src={BurgerElement.PICKLES} />
        <BurgerComponent cid="bills-2" at={ 0.42} dy={0.08} animateBy={ 1.10} src={BurgerElement.PATTY_1} />
        <BurgerComponent cid="bills-3" at={ 0.38} dy={0.08} animateBy={ 0.74} src={BurgerElement.CHEESE_1} />
        <BurgerComponent cid="bills-4" at={ 0.32} dy={0.08} animateBy={ 0.46} src={BurgerElement.TOMATO_1} />
        <BurgerComponent cid="bills-5" at={ 0.30} dy={0.08} animateBy={ 0.08} src={BurgerElement.BACON} />
        <BurgerComponent cid="bills-6" at={ 0.20} dy={0.08} animateBy={-0.34} src={BurgerElement.BEETROOT} />
        <BurgerComponent cid="bills-7" at={ 0.06} dy={0.08} animateBy={-0.70} src={BurgerElement.PINEAPPLE} />
        <BurgerComponent cid="bills-8" at={ 0.00} dy={0.08} animateBy={-1.10} src={BurgerElement.EGG} />
        <BurgerComponent cid="bills-9" at={-0.08} dy={0.08} animateBy={-1.46} src={BurgerElement.LETTUCE} />
        <BurgerComponent cid="bills-10" at={-0.50} dy={0.08} animateBy={-1.74} src={BurgerElement.BUN_TOP} />
    </Burger>
)

export const Theo = ({ className }) => (
    <Burger className={className}>
        <BurgerComponent cid="theo-shadow" at={ 0.75} dy={0.00} animateBy={ 0.00} src={BurgerElement.SHADOW_1} shadow />
        <BurgerComponent cid="theo-0" at={ 0.74} dy={0.00} animateBy={ 1.76} src={BurgerElement.BUN_BOTTOM_1} />
        <BurgerComponent cid="theo-1" at={ 0.56} dy={0.00} animateBy={ 1.66} src={BurgerElement.PICKLES} />
        <BurgerComponent cid="theo-2" at={ 0.52} dy={0.00} animateBy={ 1.10} src={BurgerElement.PATTY_4} />
        <BurgerComponent cid="theo-3" at={ 0.48} dy={0.00} animateBy={ 0.74} src={BurgerElement.CHEESE_2} />
        <BurgerComponent cid="theo-4" at={ 0.44} dy={0.00} animateBy={ 0.40} src={BurgerElement.BACON} />
        <BurgerComponent cid="theo-5" at={ 0.22} dy={0.00} animateBy={ 0.10} src={BurgerElement.PATTY_3} />
        <BurgerComponent cid="theo-6" at={ 0.14} dy={0.00} animateBy={-0.36} src={BurgerElement.CHEESE_1} />
        <BurgerComponent cid="theo-7" at={ 0.06} dy={0.00} animateBy={-0.74} src={BurgerElement.TOMATO_1} />
        <BurgerComponent cid="theo-8" at={-0.02} dy={0.00} animateBy={-1.10} src={BurgerElement.BACON} />
        <BurgerComponent cid="theo-9" at={-0.04} dy={0.00} animateBy={-1.56} src={BurgerElement.LETTUCE} />
        <BurgerComponent cid="theo-10" at={-0.50} dy={0.00} animateBy={-1.84} src={BurgerElement.BUN_TOP} />
    </Burger>
)

export const VegeDenise = ({ className }) => (
    <Burger className={className}>
        <BurgerComponent cid="vegeDenise-shadow" at={ 0.41} dy={0.34} animateBy={ 0.00} src={BurgerElement.SHADOW_1} shadow />
        <BurgerComponent cid="vegeDenise-0" at={ 0.40} dy={0.34} animateBy={ 1.28} src={BurgerElement.BUN_BOTTOM_1} />
        <BurgerComponent cid="vegeDenise-1" at={ 0.22} dy={0.34} animateBy={ 1.18} src={BurgerElement.PICKLES} />
        <BurgerComponent cid="vegeDenise-2" at={ 0.16} dy={0.34} animateBy={ 0.66} src={BurgerElement.PATTY_5} />
        <BurgerComponent cid="vegeDenise-3" at={ 0.15} dy={0.34} animateBy={ 0.18} src={BurgerElement.CHEESE_1} />
        <BurgerComponent cid="vegeDenise-4" at={ 0.04} dy={0.34} animateBy={-0.18} src={BurgerElement.TOMATO_2} />
        <BurgerComponent cid="vegeDenise-5" at={-0.12} dy={0.34} animateBy={-0.36} src={BurgerElement.PEPPERS} />
        <BurgerComponent cid="vegeDenise-6" at={-0.08} dy={0.34} animateBy={-0.92} src={BurgerElement.LETTUCE} />
        <BurgerComponent cid="vegeDenise-7" at={-0.50} dy={0.34} animateBy={-1.28} src={BurgerElement.BUN_TOP} />
    </Burger>
)
