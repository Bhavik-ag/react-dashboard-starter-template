import { useState } from "react"

import {Sidebar as ProSidebar, Menu, MenuItem, useProSidebar, sidebarClasses, menuClasses} from "react-pro-sidebar"

import {Box, IconButton, menuItemClasses, Typography, Divider, useTheme} from "@mui/material"
import {Link} from "react-router-dom"
import { colorTokens } from "../../theme"

import { HomeOutlined, CalendarTodayOutlined, NotesOutlined, SettingsOutlined, MenuOutlined } from "@mui/icons-material"

const Item = ({title, to, icon, selected, setSelected}) => {
    const theme = useTheme();
    const colors = colorTokens(theme.palette.mode);

    return (
        <Link to={to}>
            <MenuItem 
                active={selected === title} 
                style={{ color : colors.grey[100], backgroundColor: "transparent", padding: "10px 0px 10px 0px"}}
                onClick={() => setSelected(title)}
                icon={icon}
                component="div"
            > 
                <Typography>{title}</Typography>
            </MenuItem>
        </Link>
    )
}

const Sidebar = () => {
    const theme = useTheme();
    const colors = colorTokens(theme.palette.mode);

    const { collapseSidebar, collapsed, toggleSidebar } = useProSidebar();

    const [selected, setSelected] = useState("Dashboard");

    return (
        <Box >
            <ProSidebar 
                defaultCollapsed={false}
                rootStyles={{
                    [`.${sidebarClasses.container}`]: {
                        background: `${colors.primary[400]} !important`,
                        height: "100vh",
                    },
                    [`& .${menuClasses.root}`]: {
                        padding: "5px 25px 5px 20px !important",
                    },
                    [`& .${menuClasses.active}`]: {
                        color: "#6870fa !important",
                    },
                    [`.${menuItemClasses.root}:hover`]: {
                        color: "#000000 !important",
                    },
                }}
            >
                <Menu iconShape="square" >
                    <MenuItem
                        onClick={() => collapseSidebar()}
                        icon={collapsed ? <MenuOutlined /> : undefined}
                        style = {{
                            margin: "10px 0 20px 0",
                            color: colors.grey[100],
                            backgroundColor: "transparent",
                            padding: "10px 0px 10px 0px"
                        }}
                    >
                        {!collapsed && (
                            <Box
                                display="flex"
                                justifyContent="space-between"
                                alignItems="center"
                                ml = "15px"
                            >
                                <Typography variant="h3" sx={{color: colors.grey[100]}}>
                                    Dashboard
                                </Typography>
                                <IconButton type="button" onClick={() => toggleSidebar()}>
                                    <MenuOutlined />
                                </IconButton>
                            </Box>
                        )}
                    </MenuItem>

                    <Box>
                        <Item 
                            title="Dashboard"
                            to="/"
                            icon={<HomeOutlined />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        <Divider>
                            {!collapsed && (
                                <Typography 
                                    variant="h6"
                                    color={colors.grey[300]}
                                > 
                                    Tools
                                </Typography>
                            )}
                        </Divider> 
                        
                        <Item 
                            title="Calender"
                            to="/calender"
                            icon={<CalendarTodayOutlined />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item 
                            title="Notes"
                            to="/notes"
                            icon={<NotesOutlined />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        <Divider>
                            {!collapsed && (
                                <Typography 
                                    variant="h6"
                                    color={colors.grey[300]}
                                > 
                                    Settings
                                </Typography>
                            )}
                        </Divider>  
                        
                        <Item 
                            title="Settings"
                            to="/settings"
                            icon={<SettingsOutlined />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                    </Box>
                </Menu>
            </ProSidebar>
        </Box>
    )
}

export default Sidebar