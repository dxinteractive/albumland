import React from 'react';
import {AppWrapper} from './AppWrapper';
import {LoaderPane} from './component/LoaderPane';
import {Text} from './component/Text';
import {Box} from './layout/Layout';

import {useWindowLoaded} from './hooks/useWindowLoaded';
// import {useDendriform, useInput} from 'dendriform';

export function Albumland(): React.ReactElement {
    const loaded = useWindowLoaded();

    return <AppWrapper>
        <LoaderPane height="100vh" loaded={loaded}>
            <AlbumlandApp />
        </LoaderPane>
    </AppWrapper>;
};

export function AlbumlandApp(): React.ReactElement {
    return <Box>
        <Box p={3}><Text as="h1" textStyle="logo">Albumland</Text></Box>
    </Box>;
}
