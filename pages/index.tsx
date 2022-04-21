import type { NextPage } from 'next'
import {Fragment} from "react";

const Home: NextPage = () => {
    return (
        <Fragment>
            <h1 className={"text-4xl font-bold"}>Hello World!</h1>
            <div className={"w-full bg-red-400 h-12"}>
            </div>
        </Fragment>
    )
}

export default Home
