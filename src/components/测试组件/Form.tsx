import React from 'react';

//接口方式
interface IProps {
    name: string
}
//类型别名
// type IProps = {
//     name: string
//     age?: number
// }
interface IState {
    name: string
    age: number
    [key: string]: number | string
}
class Form extends React.Component<IProps,IState> {
    state = {
        name : 'cr',
        age : 18
    }
    handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        const { name,value } = e.currentTarget
        console.log( name,value)
        this.setState({
            [name]: value
        })
    }
    render (){
        return (
            <div>
                {this.state.name}
                {this.state.age}
                <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
                <input type="text" name="age" value={this.state.age} onChange={this.handleChange}/>
            </div>   
        )
    }
}
// const Form: React.FC<IProps> = (IProps,props) => {
//     //无状态组件参数声明
//     const {
//         love = 'love chenRui'
//     } = props
//     return (
//         <div>
//             { IProps.name }
//             { love}
//         </div>
//     );
// }

export default Form;
