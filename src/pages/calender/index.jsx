import Header from "../../components/Header"

import { Box } from "@mui/material"

const Calender = () => {
    return (
        <Box m="20px">
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title="CALENDER" subTitle="Manage your mettings, appointments and events" />
            </Box>
        </Box>
    )
}

export default Calender