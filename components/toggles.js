import React, { useState, useEffect } from 'react';
import { Field, Toggle, Label, Message } from '@zendeskgarden/react-forms';
import useZafClient from '../utils/zafClient';
import updateLabels from '../utils/ticketCustomFields';
import settings from '../utils/settings';

export default function Toggles() {

    const client = useZafClient();

    const [ticketCustomFields, setTicketCustomFields] = useState(null);
    const [installationId, setInstallationId] = useState(null);

    useEffect(() => {

        if (client) {
            if (ticketCustomFields === null) {
                client.metadata().then(
                    (metadata) => {
                        setTicketCustomFields(metadata.settings['Enable for ticket custom fields']);
                        client.request(`/api/v2/apps/installations?app_id=${metadata.appId}`).then(
                            (response) => {
                                setInstallationId(response.installations[0].id);
                            }
                        );
                    }
                );
            }

            const toggle = document.getElementById('ticketCustomFields');
            const message = document.getElementById('ticketCustomFieldsMessage');
            if (ticketCustomFields) {
                toggle.setAttribute('checked', ticketCustomFields);
                message.innerHTML('Showing end user labels');
            } else {
                toggle.removeAttribute('checked');
                message.innerHTML('Showing agent labels');
            }

            updateLabels(client, ticketCustomFields);
        }
    }, [client, ticketCustomFields]);

    function ticketCustomFieldsToggleHandler() {
        const toggle = document.getElementById('ticketCustomFields');
        const checked = toggle.hasAttribute('checked');

        client.request(settings(installationId, !checked)).then(
            () => {
                setTicketCustomFields(!checked);
            },
            () => {
                client.invoke('notify', 'Only Admins can change this setting', 'error', { sticky: true });
                client.invoke('hide');
            }
        );
    }

    return (
        <div className="App">
            <Field onClick={() => { ticketCustomFieldsToggleHandler() }} >
                <Toggle id='ticketCustomFields'>
                    <Label>Ticket Custom Fields</Label>
                    <Message id='ticketCustomFieldsMessage'></Message>
                </Toggle>
            </Field>
        </div>
    );
}