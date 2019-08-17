import * as React from 'react'

interface IProps {
    name: string
    age?: number | string
    [key: string]:any
}


const Func:React.FC<IProps> = (props:IProps) => {
    const [name, setName] = React.useState(props.name)
    const [age, setAge] = React.useState(props.age)
    const [count, setCount] = React.useState(0)
    React.useEffect(() => {
        document.title = `You clicked ${count} times`;
    })
    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        const { name,value }:{name: keyof IProps,value: string | number} = e.currentTarget
        console.log(name,value)
        if(name === 'name')
            setName(
                value
            )
        else
            setAge(
                value
            )
    }
    return (
        <React.Fragment>
            {/* <div>{props.age}{name}</div>
            <div>
                <p>You clicked {count} times</p>
                <button onClick={() => setCount(count + 1)}>
                    Click me
                </button>
                <a href={'https://www.baidu.com'}>点击跳转</a>
            </div> */}
            <div>
                {name}
                {age}
                <input type="text" name="name" value={name} onChange={handleChange}/>
                <input type="text" name="age" value={age} onChange={handleChange}/>
            </div>
        </React.Fragment>

    )
}
export default Func