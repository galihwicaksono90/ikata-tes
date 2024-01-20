import { Container, Group, Text, Stack, Box } from "@mantine/core";
import { useGetFooterQuery } from "generated/graphql";

interface Props {
    message?: string;
}
export const InfoRibbon = ({ message }: Props) => {
    const { data } = useGetFooterQuery(null);

    return (
        <>
            {!!data?.getFooter ? (
                <Box sx={{ background: "#eee", zIndex: 1 }}>
                    <Container size={1128} py="5px">
                        <Text color="dark" align="center">
                            Ingin posting lowongan {message} anda disini? silahkan hubungi
                            admin <b>{data?.getFooter?.emailAddress}</b> atau{" "}
                            <b>{data?.getFooter?.phoneNumber}</b>
                        </Text>
                    </Container>
                </Box>
            ) : null}
        </>
    );
};
