import { createStyles } from "@mantine/core";

export const usePersonalDetailStyles = createStyles((theme) => ({
    firstColumn: {
        height: '30rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '48%'
    },
    secondColumn: {
        height: '30rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '48%',
        position: 'relative'
    }
}));
