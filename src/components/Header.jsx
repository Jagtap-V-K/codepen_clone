
import { AppBar, Toolbar, styled } from "@mui/material"

const Container = styled(AppBar)`
    background: #060606;
    position: static;
    border-bottom: 1px solid #2f2f2f;
    height: 60px;
`;

const Header = () => {
    const logo = '';
    return (
        <Container>
            <Toolbar>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2KkL53Qxaf2trDnZRnGJTlDDaeKY9912oyMvRO8ybJTBI1Ou17Psj9aD7Isa-SyiXKC8&usqp=CAU" 
                    alt="logo" style={{ width: 40 }} />
                <h1>&nbsp;&nbsp;&nbsp;Quantum Web Compiler</h1>
            </Toolbar>
        </Container>
    )
}

export default Header