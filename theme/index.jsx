import React from "react";
import Head from "next/head";

export default function Layout({ children, pageOpts }) {
    const { title } = pageOpts;
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>

            <main>
                <article>
                    {children}
                </article>
            </main>
        </>
    );
}
