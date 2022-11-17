/// <reference types="react" />
type Props = {
    closeBanner: any;
    title?: string;
    content?: string;
    services: {
        id: string;
        title: string;
        description: string;
        category: string;
    }[];
};
declare function Banner({ closeBanner, title, content, services }: Props): JSX.Element;
export default Banner;
