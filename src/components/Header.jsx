
import { AppBar, Toolbar, styled } from "@mui/material"

const Container = styled(AppBar)`
    background: #060606;    //purple
    position: static;
    border-bottom: 1px solid #2f2f2f;
    height: 9vh;
`;

const Header = () => {
    const logo = '';
    return (
        <Container>
            <Toolbar>
                <img src={logo} alt="logo" style={{ width: 40 }} />
                <span></span><h1>Quanta Web Editor</h1>
            </Toolbar>
        </Container>
    )
}

export default Header