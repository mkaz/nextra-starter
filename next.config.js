import nextra from "nextra";

const withNextra = nextra({
    theme: "./theme/index.jsx",
});

export default withNextra({
    reactStrictMode: true,
    cleanDistDir: true,
});