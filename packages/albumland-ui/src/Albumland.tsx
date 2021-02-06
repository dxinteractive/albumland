import React, {useEffect} from 'react';
import {AppWrapper} from './AppWrapper';
import {LoaderPane} from './component/LoaderPane';
import {Text} from './component/Text';
import {Box} from './layout/Layout';

import {useWindowLoaded} from './hooks/useWindowLoaded';
// import {useDendriform, useInput} from 'dendriform';

import { createClient } from '@supabase/supabase-js';
const supabase = createClient('https://gbrhbykyaqpnxvnumvho.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYxMjU3MjY0MiwiZXhwIjoxOTI4MTQ4NjQyfQ.2UidlWcBDwkMfdJZht72skSssfgsukkw9NfdoCSoisM');

export function Albumland(): React.ReactElement {
    const loaded = useWindowLoaded();

    return <AppWrapper>
        <LoaderPane height="100vh" loaded={loaded}>
            <AlbumlandApp />
        </LoaderPane>
    </AppWrapper>;
};

export function AlbumlandApp(): React.ReactElement {
    useEffect(() => {
        (async () => {
            const user = await supabase.auth.user();

            console.log('user', user);

            //  supabase.auth.signOut()

            const { data, error } = await supabase
                .from('albums')
                .select(`*`);

            console.log('data, error', data, error);
        })();
    }, []);

    return <Box>
        <Box p={3}><Text as="h1" textStyle="logo">Albumland</Text></Box>
    </Box>;
}
