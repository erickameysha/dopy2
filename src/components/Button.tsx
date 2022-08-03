import React from 'react';
type ButtonTypeProps={
    nickName: string,
    callBack: ()=> void
}

const Button = (props: ButtonTypeProps) => {
    const onClickBattonHandler= ()=> {
        props.callBack()
    }
    return (
        <button onClick={onClickBattonHandler}>
            {props.nickName}
        </button>
    );
};

export default Button;