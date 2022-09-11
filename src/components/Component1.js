import { Fragment, useState, useEffect} from "react"
const style = {
  backgroundColor: 'red',
  fontWeight: 'bold'
}
function Component1 (props) {
  const { name, division } = props
  const [person, setPerson] = useState({
    age: 15,
    address: 'Bien hoa'
  })

  useEffect(() => {
    console.log('useEffect')
    setPerson({
      ...person,
      address: person.address + ' ' + person.age
    })
    
  }, [])

  // const handleSetAge = {
  //   add: () => {
  //     const ageMoreThan40 = age + 1 > 40
  //     if (ageMoreThan40) {
  //       return setAge(age)
  //     } else {
  //       return setAge(age + 1)
  //     }
  //   },
  //   minus: () => setAge(age -1)
  // }

  const add = () => {
    const adddressArr = person.address.split(' ').filter((ele, index) => {
      if(index === 0 || index === 1){
        return ele
      }
    })
    const newAddress = [...adddressArr, person.age + 1].join(' ')
    // [bien, hoa, age]
    return setPerson({
      address: newAddress,
      age: person.age + 1
    })
  }

  const minus = () => {
    
  }
  return (
    <Fragment>
      {/* <button style={style} onClick={() => division(age, setAge)}>%</button> */}
      <button onClick={minus}>-</button>
      {/* <div>{name}</div> */}
      <div>{person.age}</div>
      <div>{person.address}</div>
      <button onClick={add}>+</button>
      {/* <button style={style}>x</button> */}
    </Fragment>
  )
}

// render
export default Component1;
