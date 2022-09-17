import { Fragment, useState } from "react";

function Component1 (props) {
    const { name } = props;
    const [age, setAge] = useState(18)
    const handleSetAge = {
        add: () => setAge(age +1),
        minus: () => setAge(age - 1),
    }
    return (
        <Fragment>
            <button onClick={handleSetAge.add} >+</button>
            <div>{name}</div>
            <div>{age}</div>
            <button onClick={handleSetAge.minus} >-</button>
        </Fragment>
    ) 
}

export default Component1;