import React from "react";

const style = {
    card: {
        margin: 30,
        background: '#0e475c',
    },
    header: {
        lineHeight: 3.5,
        fontsize: '12px',
        color: 'white',
        padding: '0 20px',
        minHeight: 50,
        background: '#05304a'
    },
    content: {
        padding: 20,
    },
};

function About () {
    return (
        <div style={style.card} id="About-Me">
            <div style = {style.header}>About Me</div>
            <div style={style.content}>
                My name is Yonis Hussein, I do not have any background in the field of Computer Science before entering this Bootcamp. I enjoy the feeling of learning more and expanding my knowledge in coding.
            </div>
        </div>
    );
}

export default About;