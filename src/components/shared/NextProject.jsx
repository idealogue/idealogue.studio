import React from 'react'
import styled from 'styled-components'
import Link from '$shared/Link'
import { useNextProject } from '$shared/Project'

const UnstyledNextProject = ({ className, children }) => {
    const { name, href } = useNextProject()

    return (
        <div className={className}>
            <div>
                <div className="label">
                    Next Project
                </div>
                <div className="inner">
                    <Link to={href}>
                        {name}
                    </Link>
                    <Link nodecor to={href}>
                        <svg viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg">
                            <path
                                fill="currentColor"
                                d="M13 0C5.832 0 0 5.83 0 12.998c0 7.167 5.832 12.998 13 12.998s13-5.83 13-12.998C26 5.934 20.336.169 13.31.004L13 0zm0 1.884c-6.13 0-11.116 4.986-11.116 11.114 0 6.03 4.83 10.955 10.825 11.11l.29.004.292-.004c5.996-.155 10.825-5.08 10.825-11.11C24.116 6.87 19.13 1.884 13 1.884zm1.048 5.705c.213 0 .426.071.6.212l.098.093 4.208 4.591.071.092a.92.92 0 0 1 .153.406l.007.124-.008.114-.015.082-.03.103-.042.1-.04.073-.04.06-.027.036a.942.942 0 0 1-.083.091l-4.185 4.15a.948.948 0 0 1-1.333 0 .929.929 0 0 1-.078-1.233l.078-.088 2.587-2.564H5.975a.94.94 0 0 1-.936-.825l-.006-.109c0-.479.364-.874.832-.928l.11-.006h10.14L13.351 9.15a.929.929 0 0 1-.02-1.235l.083-.085a.947.947 0 0 1 .633-.242z"
                                fillRule="evenodd"
                            />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    )
}

const NextProject = styled(UnstyledNextProject)`
    display: flex;
    font-family: 'Publico Text';
    justify-content: center;
    padding: 5.75rem 0 14.5rem;

    a {
        display: block;
        font-size: 1.25rem;
        font-weight: 700;
    }

    a + a {
        margin-left: 1.5rem;
    }

    .label {
        opacity: 0.5;
        margin-bottom: 0.25rem;
    }

    svg {
        display: block;
        height: 1.5rem;
        width: 1.5rem;
    }

    .inner {
        align-items: center;
        display: flex;
    }
`

export default NextProject
