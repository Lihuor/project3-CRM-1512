import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    NavItem,
    Container,
    FormGroup,
    Input,
    Label
} from 'reactstrap';

class AppNavbar extends Component {
    state = {
        isOpen: false
    }
    toggle = () => {
        this.setState({ 
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return(

        <div>
            <Navbar color="dark" dark expand="sm" className="mb-3">
                <Container>
                    <NavbarBrand href="/">
                        Lihuor Pty Ltd.
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <NavItem className="ml-auto" navbar>
                            <FormGroup>
                                <Label className="text-warning" for="exampleSearch">Search</Label>
                                <Input
                                type="search"
                                name="search"
                                id="exampleSearch"
                                placeholder="search placeholder"
                                />
                            </FormGroup>
                        </NavItem>
                    </Collapse>
                </Container>

            </Navbar>

        </div>
        );

    }
}


export default AppNavbar;