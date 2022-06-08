export default function settings(appId, enableOrDisable) {
    return {
        url: `/api/v2/apps/installations/${appId}.json`,
        type: 'PUT',
        data: JSON.stringify({
            settings: {
                ticketCustomFields: enableOrDisable
            }
        }),
        dataType: 'json',
        contentType: 'application/json'
    };
};