import { Fragment, useState } from "react";
import ChildComponent from "./ChildComponent";

function Component1 (props) {
    const { name } = props;
    const [age, setAge] = useState(18)
    const handleSetAge = {
        add: () => {
            const ageNotMore25 = age + 1 <= 25
            if(age + 1 <= 25) {
                return setAge(age + 1)
            }
            // expression ? true : false
            // return age + 1 <= 25 ? setAge(age + 1) : null
        },
        minus: () => setAge(age - 1),
    }

    return (
        <Fragment>
            <ChildComponent>
                <div>{name}</div>
                <div>{age}</div>
            </ChildComponent>
        </Fragment>
    ) 
}

export default Component1;