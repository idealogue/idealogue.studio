import React from 'react'
import Person from '$shared/Person'
import Bullet from '$shared/Bullet'
import Link from '$shared/Link'
import Layout from '$team/Layout'

const Matt = () => (
    <Layout>
        <Person>
            <Person.Head>
                <Person.Name>
                    Matt Innes
                </Person.Name>
                <Person.Role>
                    Designer / Creative Director
                </Person.Role>
            </Person.Head>
            <Person.Body>
                <Person.Desc>
                    Matt has worked as a designer and creative director in Australia and Japan for
                    more than 10 years. His work has&nbsp;been featured in a range of publications
                    on &amp; offline. He&nbsp;holds a degree in Communication Design from Swinburne
                    School of Design, Melbourne. He loves type, simple bikes &amp; custom motorbikes.
                    He is a firm but not wild&#8209;eyed believer in the utility and future of
                    digital&nbsp;currency.
                </Person.Desc>
            </Person.Body>
            <Person.Footer>
                <Link as="a" href="mailto:matt@idealogue.com">
                    Email
                </Link>
                <Bullet />
                <Link as="a" href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    Twitter
                </Link>
            </Person.Footer>
        </Person>
        <Layout.Wedge />
        <div>
            <Person.OtherLink to="/team/saori">
                Saori
            </Person.OtherLink>
        </div>
    </Layout>
)

export default Matt
