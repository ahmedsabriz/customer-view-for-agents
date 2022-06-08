This is a zendesk support app built with Next.js and the Zendesk App Framework.

## Description

Change ticket field labels from agent view to end user view for consistent user experience within agnet workspace in instances with complex conditional fields and multiple variations of the same input level. The functionality is enabled by default after installation. It can be disabled and re-enabled using a toggle in the ticket sidebar by admins only.

### Use Cases

Zendesk instances with complex conditional fields duplicated  and edited to add/remove options based on other field values. For example, 'Payment-B2C' drop-down field contains 'Credit Card' and 'Cash' options while 'Payment-B2B' drop-down field contains 'Credit Card' and 'Bank Transfer' options. One of the fields will be displayed based on the response to another field 'Customer Type' using a conditional ticket form. However, using the app, both fields can display the same end user label 'Payment' to both end user in ticket form and agents in agent workspace, while admins can see the original suffixed label in admin panel.