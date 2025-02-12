import { HeaderContainer } from "./style";
import logoIgnite from '../../assets/logo-ignite.svg'
import { Timer, Scroll } from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";

export function Header() {
    return (
        <HeaderContainer>
            <img src={logoIgnite} alt="" />
            <nav>
                <NavLink to="/" title="Home">
                    <Timer size={24}/>
                </NavLink>                
                <NavLink to="/history" title="Histórico">
                    <Scroll size={24}/>
                </NavLink>
            </nav>
        </HeaderContainer>
    )
}
