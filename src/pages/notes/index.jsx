import Header from "../../components/Header"

import { Box } from "@mui/material"

const Notes = () => {
    return (
        <Box m="20px">
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title="NOTES" subTitle="Write your notes here." />
            </Box>
        </Box>
    )
}

export default Notes