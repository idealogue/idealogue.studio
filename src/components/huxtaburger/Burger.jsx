import React, { useState } from 'react'
import cx from 'classnames'
import styled from 'styled-components'
import BurgerComponent, { Parent } from '$hux/BurgerComponent'
import { BurgerElement } from '$hux/Image'
import { BurgerBadge as Badge } from '$hux/Badge'
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
        <BurgerComponent at={ 0.67} dy={0.08} animateBy={ 0.00} src={BurgerElement.SHADOW_1} shadow />
        <BurgerComponent at={ 0.66} dy={0.08} animateBy={ 1.74} src={BurgerElement.BUN_BOTTOM_1} />
        <BurgerComponent at={ 0.48} dy={0.08} animateBy={ 1.56} src={BurgerElement.PICKLES} />
        <BurgerComponent at={ 0.42} dy={0.08} animateBy={ 1.10} src={BurgerElement.PATTY_1} />
        <BurgerComponent at={ 0.38} dy={0.08} animateBy={ 0.74} src={BurgerElement.CHEESE_1} />
        <BurgerComponent at={ 0.32} dy={0.08} animateBy={ 0.46} src={BurgerElement.TOMATO_1} />
        <BurgerComponent at={ 0.30} dy={0.08} animateBy={ 0.08} src={BurgerElement.BACON} />
        <BurgerComponent at={ 0.20} dy={0.08} animateBy={-0.34} src={BurgerElement.BEETROOT} />
        <BurgerComponent at={ 0.06} dy={0.08} animateBy={-0.70} src={BurgerElement.PINEAPPLE} />
        <BurgerComponent at={ 0.00} dy={0.08} animateBy={-1.10} src={BurgerElement.EGG} />
        <BurgerComponent at={-0.08} dy={0.08} animateBy={-1.46} src={BurgerElement.LETTUCE} />
        <BurgerComponent at={-0.50} dy={0.08} animateBy={-1.74} src={BurgerElement.BUN_TOP} />
    </Burger>
)

export const Theo = (props) => (
    <Burger {...props}>
        <BurgerComponent at={ 0.75} dy={0.00} animateBy={ 0.00} src={BurgerElement.SHADOW_1} shadow />
        <BurgerComponent at={ 0.74} dy={0.00} animateBy={ 1.76} src={BurgerElement.BUN_BOTTOM_1} />
        <BurgerComponent at={ 0.56} dy={0.00} animateBy={ 1.66} src={BurgerElement.PICKLES} />
        <BurgerComponent at={ 0.52} dy={0.00} animateBy={ 1.10} src={BurgerElement.PATTY_4} />
        <BurgerComponent at={ 0.48} dy={0.00} animateBy={ 0.74} src={BurgerElement.CHEESE_2} />
        <BurgerComponent at={ 0.44} dy={0.00} animateBy={ 0.40} src={BurgerElement.BACON} />
        <BurgerComponent at={ 0.22} dy={0.00} animateBy={ 0.10} src={BurgerElement.PATTY_3} />
        <BurgerComponent at={ 0.14} dy={0.00} animateBy={-0.36} src={BurgerElement.CHEESE_1} />
        <BurgerComponent at={ 0.06} dy={0.00} animateBy={-0.74} src={BurgerElement.TOMATO_1} />
        <BurgerComponent at={-0.02} dy={0.00} animateBy={-1.10} src={BurgerElement.BACON} />
        <BurgerComponent at={-0.04} dy={0.00} animateBy={-1.56} src={BurgerElement.LETTUCE} />
        <BurgerComponent at={-0.50} dy={0.00} animateBy={-1.84} src={BurgerElement.BUN_TOP} />
    </Burger>
)

export const VegeDenise = (props) => (
    <Burger {...props}>
        <BurgerComponent at={ 0.41} dy={0.34} animateBy={ 0.00} src={BurgerElement.SHADOW_1} shadow />
        <BurgerComponent at={ 0.40} dy={0.34} animateBy={ 1.28} src={BurgerElement.BUN_BOTTOM_1} />
        <BurgerComponent at={ 0.22} dy={0.34} animateBy={ 1.18} src={BurgerElement.PICKLES} />
        <BurgerComponent at={ 0.16} dy={0.34} animateBy={ 0.66} src={BurgerElement.PATTY_5} />
        <BurgerComponent at={ 0.16} dy={0.34} animateBy={ 0.18} src={BurgerElement.CHEESE_1} />
        <BurgerComponent at={ 0.04} dy={0.34} animateBy={-0.18} src={BurgerElement.TOMATO_2} />
        <BurgerComponent at={-0.12} dy={0.34} animateBy={-0.36} src={BurgerElement.PEPPERS} />
        <BurgerComponent at={-0.08} dy={0.34} animateBy={-0.92} src={BurgerElement.LETTUCE} />
        <BurgerComponent at={-0.50} dy={0.34} animateBy={-1.28} src={BurgerElement.BUN_TOP} />
    </Burger>
)
