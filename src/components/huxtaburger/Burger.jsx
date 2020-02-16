import React, { useState } from 'react'
import cx from 'classnames'
import styled from 'styled-components'
import BurgerComponent, { Parent } from '$huxtaburger/BurgerComponent'
import { BurgerElement } from '$huxtaburger/Image'
import { BurgerBadge as Badge } from '$huxtaburger/Badge'
import { SM } from '$utils/css'

const Inner = styled.div`
    height: 50%;
    position: relative;
    top: 25%;
`

const UnstyledBurger = ({ children, className, ...props }) => {
    const [open] = useState(false)

    return (
        <Parent
            {...props}
            className={cx(className, {
                open,
            })}
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
    position: relative;
    top: 42px;
    width: 140px;

    @media (max-width: ${SM - 1}px) {
        &.open {
            z-index: 101;
        }

        &.open ${Badge} {
            opacity: 0;
        }
    }

    @media (min-width: ${SM}px) {
        :hover ${Badge} {
            opacity: 0;
        }
    }
`

export default Burger

export const Bills = (props) => (
    <Burger {...props}>
        <BurgerComponent at={ 0.67} animateBy={ 0.00} src={BurgerElement.SHADOW_1} shadow />
        <BurgerComponent at={ 0.66} animateBy={ 1.74} src={BurgerElement.BUN_BOTTOM_1} />
        <BurgerComponent at={ 0.48} animateBy={ 1.56} src={BurgerElement.PICKLES} />
        <BurgerComponent at={ 0.42} animateBy={ 1.10} src={BurgerElement.PATTY_1} />
        <BurgerComponent at={ 0.38} animateBy={ 0.74} src={BurgerElement.CHEESE_1} />
        <BurgerComponent at={ 0.32} animateBy={ 0.46} src={BurgerElement.TOMATO_1} />
        <BurgerComponent at={ 0.30} animateBy={ 0.08} src={BurgerElement.BACON} />
        <BurgerComponent at={ 0.20} animateBy={-0.34} src={BurgerElement.BEETROOT} />
        <BurgerComponent at={ 0.06} animateBy={-0.70} src={BurgerElement.PINEAPPLE} />
        <BurgerComponent at={ 0.00} animateBy={-1.10} src={BurgerElement.EGG} />
        <BurgerComponent at={-0.08} animateBy={-1.46} src={BurgerElement.LETTUCE} />
        <BurgerComponent at={-0.50} animateBy={-1.74} src={BurgerElement.BUN_TOP} />
    </Burger>
)

export const Theo = (props) => (
    <Burger {...props}>
        <BurgerComponent at={ 0.75} animateBy={ 0.00} src={BurgerElement.SHADOW_1} shadow />
        <BurgerComponent at={ 0.74} animateBy={ 1.76} src={BurgerElement.BUN_BOTTOM_1} />
        <BurgerComponent at={ 0.56} animateBy={ 1.66} src={BurgerElement.PICKLES} />
        <BurgerComponent at={ 0.52} animateBy={ 1.10} src={BurgerElement.PATTY_4} />
        <BurgerComponent at={ 0.48} animateBy={ 0.74} src={BurgerElement.CHEESE_2} />
        <BurgerComponent at={ 0.44} animateBy={ 0.40} src={BurgerElement.BACON} />
        <BurgerComponent at={ 0.22} animateBy={ 0.10} src={BurgerElement.PATTY_3} />
        <BurgerComponent at={ 0.14} animateBy={-0.36} src={BurgerElement.CHEESE_1} />
        <BurgerComponent at={ 0.06} animateBy={-0.74} src={BurgerElement.TOMATO_1} />
        <BurgerComponent at={-0.02} animateBy={-1.10} src={BurgerElement.BACON} />
        <BurgerComponent at={-0.04} animateBy={-1.56} src={BurgerElement.LETTUCE} />
        <BurgerComponent at={-0.50} animateBy={-1.84} src={BurgerElement.BUN_TOP} />
    </Burger>
)

export const VegeDenise = (props) => (
    <Burger {...props}>
        <BurgerComponent at={ 0.41} animateBy={ 0.00} src={BurgerElement.SHADOW_1} shadow />
        <BurgerComponent at={ 0.40} animateBy={ 1.28} src={BurgerElement.BUN_BOTTOM_1} />
        <BurgerComponent at={ 0.22} animateBy={ 1.18} src={BurgerElement.PICKLES} />
        <BurgerComponent at={ 0.16} animateBy={ 0.66} src={BurgerElement.PATTY_5} />
        <BurgerComponent at={ 0.16} animateBy={ 0.18} src={BurgerElement.CHEESE_1} />
        <BurgerComponent at={ 0.04} animateBy={-0.18} src={BurgerElement.TOMATO_2} />
        <BurgerComponent at={-0.12} animateBy={-0.36} src={BurgerElement.PEPPERS} />
        <BurgerComponent at={-0.08} animateBy={-0.92} src={BurgerElement.LETTUCE} />
        <BurgerComponent at={-0.50} animateBy={-1.28} src={BurgerElement.BUN_TOP} />
    </Burger>
)
