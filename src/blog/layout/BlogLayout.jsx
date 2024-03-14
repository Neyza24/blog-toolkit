import { Container } from "@mui/material";
import { Footer, Header } from "../components";

export const BlogLayout = ({ children }) => {
    return (
        <>
            <Container maxWidth="lg">
                <Header />
                <main>
                    {children}
                </main>
            </Container>

            <Footer />
        </>
    );
};

/* eslint react/prop-types: 0 */
