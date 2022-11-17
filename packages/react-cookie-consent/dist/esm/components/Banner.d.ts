/// <reference types="react" />
type Props = {
    title?: string;
    content?: string;
    services: {
        id: string;
        title: string;
        description: string;
        category: string;
    }[];
};
declare function Banner({ title, content, services }: Props): JSX.Element;
export default Banner;
