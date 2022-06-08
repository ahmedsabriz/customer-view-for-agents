import { useEffect, useState } from 'react';

let zafClient = null;

export default function useZafClient() {
    const [client, setClient] = useState(zafClient)

    useEffect(() => {
        if (!client && typeof window.ZAFClient !== 'undefined') {
            zafClient = window.ZAFClient.init();
            setClient(zafClient);
            zafClient.invoke('resize', { width: '100%', height: '50px' });
        }
    }, [client]);

    return client;
}