export default function updateLabels(client, endUserLabels) {
    client.get('ticketFields').then(
        (response) => {
            for (let i = 0; i < response.ticketFields.length; i++) {
                if (response.ticketFields[i].name.indexOf('custom_field_') !== -1) {
                    var field_id = response.ticketFields[i].name.split('_')[2];
                    client.request(`/api/v2/ticket_fields/${field_id}`).then(
                        (response) => {
                            var identifier = `ticketFields.${i}.label`;
                            var value = response.ticket_field.title;
                            if (endUserLabels) {
                                value = response.ticket_field.title_in_portal;
                            }
                            client.set(identifier, value);
                        }
                    )
                }
            }
        }
    );
}