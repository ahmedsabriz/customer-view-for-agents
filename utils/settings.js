export default function settings(installationId, enableOrDisable) {
    return {
        url: `/api/v2/apps/installations/${installationId}.json`,
        type: 'PUT',
        data: JSON.stringify({
            settings: {
                "Enable for ticket custom fields": enableOrDisable
            }
        }),
        dataType: 'json',
        contentType: 'application/json'
    };
};