import { createStyles } from "@mantine/core";

export const useNameAndProfessionStyle = createStyles((theme) => ({
    Name_And_Profession__container: {
        width: "15rem",
        minheight: '240px',
        maxHeight: 'fitContent',
        marginBottom: '24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyItems: 'cetner',
        padding: '12px'
    }
}))