import Header from "../../components/Header"

import { Box } from "@mui/material"

const Settings = () => {
    return (
        <Box m="20px">
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title="SETTINGS" subTitle="Edit your profile settings." />
            </Box>
        </Box>
    )
}

export default Settings