import Document, {
    DocumentContext,
    DocumentInitialProps,
    Html,
    Head,
    Main,
    NextScript,
} from "next/document"

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="de">
                <Head>

                    {/* preload fonts to prevent FOUC */}
                    <script
                        src="irgendwas"
                        type="text/plain"
                        data-consent="ga"
                        async
                    />
                    <script
                        src="irgendwas"
                        type="text/plain"
                        data-consent="fb"
                        async
                    />
                    <script
                        src="irgendwas"
                        type="text/plain"
                        data-consent="prismic"
                        async
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
