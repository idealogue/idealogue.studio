import React from "react"
import { Link } from "gatsby"

const IndexPage = () => (
    <ol>
        <li>
            <Link to="/cobalt">cobalt</Link>
        </li>
        <li>
            <Link to="/golem">golem</Link>
        </li>
        <li>
            <Link to="/hive">hive</Link>
        </li>
        <li>
            <Link to="/huxtaburger">huxtaburger</Link>
        </li>
        <li>
            <Link to="/streamr">streamr</Link>
        </li>
        <li>
            <Link to="/vizor">vizor</Link>
        </li>
    </ol>
)

export default IndexPage
