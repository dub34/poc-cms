import OneColumnLayout from "./OneColumnLayout.tsx";
import MultiColumnLayout from "./MultiColumnLayout.tsx";


const layputsMap = {
    'oneColumn': OneColumnLayout,
    'multiColumn': MultiColumnLayout,
};

const Layout = ({type = ''}) => {
    // @ts-expect-error s222
    const Component = layputsMap[type] || (() => <p>no data</p>);

    return <Component />;
}

export default Layout;