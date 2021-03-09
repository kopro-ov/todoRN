import React from 'react';
import Styled from 'styled-components/native';

const Container = Styled.TouchableOpacity``;
const Icon = Styled.Image``;

interface Props {
    iconName: 'plus' | 'minus';
    onPresss?: () => void;
}

const Button = ({ iconName, onPresss } : Props ) => {
    return (
        <Container onPress={onPresss}>
            <Icon 
                source={
                    iconName === 'plus'
                        ? require ('../../Assets/Images/add.png')
                        : require ('../../Assets/Images/remove.png')
                }
            />
        </Container>
    );
};

export default Button;